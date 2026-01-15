"use client";

import { AnimatedSection } from "@/components/animations";

export default function Map() {
  return (
    <AnimatedSection>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.9571506607203!2d11.897360576447717!3d45.410203637039594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ec52a198cc7a9%3A0x14f90fde47b05a88!2sOutsourcing%20Group%20SRL!5e0!3m2!1sit!2sit!4v1762881942627!5m2!1sit!2sit" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </AnimatedSection>
  );
}