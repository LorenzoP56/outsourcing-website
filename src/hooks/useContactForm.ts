"use client";

import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  azienda: string;
  message: string;
  privacy: boolean;
  website: string; // honeypot field
}

interface ErrorMessages {
  MISSING_FIELDS: string;
  INVALID_EMAIL: string;
  PRIVACY_REQUIRED: string;
  INPUT_TOO_LONG: string;
  RATE_LIMITED: string;
  SEND_ERROR: string;
  SERVER_ERROR: string;
  NETWORK_ERROR: string;
}

interface UseContactFormReturn {
  formData: FormData;
  loading: boolean;
  success: boolean;
  error: string | null;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export function useContactForm(errorMessages: ErrorMessages): UseContactFormReturn {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    azienda: "",
    message: "",
    privacy: false,
    website: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox"
      ? target.checked
      : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        const code = data.errorCode as keyof ErrorMessages | undefined;
        setError(code && errorMessages[code] ? errorMessages[code] : errorMessages.SERVER_ERROR);
        return;
      }

      setSuccess(true);
      setFormData({ name: "", email: "", azienda: "", message: "", privacy: false, website: "" });
    } catch {
      setError(errorMessages.NETWORK_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return { formData, loading, success, error, handleChange, handleSubmit };
}
