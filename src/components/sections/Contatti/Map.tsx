"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/animations";
import { Link } from "@/i18n/navigation";
import { COLORS } from "@/lib/constants";

const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.9571506607203!2d11.897360576447717!3d45.410203637039594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ec52a198cc7a9%3A0x14f90fde47b05a88!2sOutsourcing%20Group%20SRL!5e0!3m2!1sit!2sit!4v1762881942627!5m2!1sit!2sit";

export default function Map() {
  const t = useTranslations("Contatti");
  const [consented, setConsented] = useState(false);

  return (
    <AnimatedSection>
      {consented ? (
        <iframe
          src={MAP_SRC}
          title={t("map.altText")}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          className="w-full flex flex-col items-center justify-center gap-4 text-center p-8"
          style={{ height: "450px", backgroundColor: "#f3f4f6", borderRadius: "8px" }}
        >
          <p className="text-sm max-w-md" style={{ color: COLORS.TEXT }}>
            {t("map.consentNotice")}{" "}
            <Link href="/cookie-policy" className="underline" target="_blank" rel="noopener noreferrer">
              {t("map.cookiePolicyLink")}
            </Link>
            .
          </p>
          <button
            type="button"
            onClick={() => setConsented(true)}
            className="px-6 py-3 text-base font-bold rounded-[16px]"
            style={{ background: COLORS.PRIMARY, color: COLORS.TEXT_WHITE, fontFamily: "var(--font-jost)" }}
          >
            {t("map.loadButton")}
          </button>
        </div>
      )}
    </AnimatedSection>
  );
}
