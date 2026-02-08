"use client";

import { COLORS } from "@/lib/constants";
import {Link} from "@/i18n/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {useTranslations} from "next-intl";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations("Footer");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} className="py-16" style={{ backgroundColor: '#010310', color: COLORS.TEXT }}>
      <div className="container mx-auto px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-6">
          {/* Logo and Description */}
          <div className={`lg:col-span-1 transition-all duration-1000 ease-out gap-2 flex flex-col ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <Link href="/" className="inline-block mb-4">
              <div className="h-16 flex items-center">
                <Image
                  src="/images/logoOrizzontale.svg"
                  alt="Outsourcing Group"
                  width={220}
                  height={48}
                  className="w-[250px] h-auto object-cover"
                  priority
                />
              </div>
            </Link>
            <p className="text-md text-left" style={{ color: COLORS.TEXT_WHITE }}>
              <span className="font-bold uppercase">{t("company.name")}</span> <br />
              {t("company.address")}<br />
              {t("company.vatId")} <br />
              {t("company.phone")} <br />
              {t("company.email")}
            </p>
          </div>

          {/* Pagine */}
          <div className={`transition-all duration-1000 ease-out delay-300 gap-4 flex flex-col text-left ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-white font-bold text-xl">
              {t("sections.pages")}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/chi-siamo" className="text-base transition-colors duration-300" style={{ color: COLORS.TEXT_WHITE }}>
                {t("links.chiSiamo")}
              </Link>
              <Link href="/servizi" className="text-base transition-colors duration-300" style={{ color: COLORS.TEXT_WHITE }}>
                {t("links.servizi")}
              </Link>
              <Link href="/esternalizzazione" className="text-base transition-colors duration-300" style={{ color: COLORS.TEXT_WHITE }}>
                {t("links.esternalizzazione")}
              </Link>
              <Link href="/blog" className="text-base transition-colors duration-300" style={{ color: COLORS.TEXT_WHITE }}>
                {t("links.blog")}
              </Link>
              <Link href="/contatti" className="text-base transition-colors duration-300" style={{ color: COLORS.TEXT_WHITE }}>
                {t("links.contatti")}
              </Link>
            </nav>
          </div>

          {/* Servizi */}
          <div className={`transition-all duration-1000 ease-out delay-300 gap-4 flex flex-col text-left ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-white font-bold text-xl">
              {t("sections.services")}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/servizi/outsourcing-back-office-digitale" className="text-base transition-colors duration-300" style={{ color: COLORS.TEXT_WHITE }}>
                {t("serviceLinks.backOffice")}
              </Link>
              <Link href="/servizi/contact-center" className="text-base transition-colors duration-300" style={{ color: COLORS.TEXT_WHITE }}>
                {t("serviceLinks.contactCenter")}
              </Link>
              <Link href="/servizi/gestione-anagrafiche-clienti-outsourcing" className="text-base transition-colors duration-300" style={{ color: COLORS.TEXT_WHITE }}>
                {t("serviceLinks.datiCliente")}
              </Link>
              <Link href="/servizi/assistenza-dedicata" className="text-base transition-colors duration-300" style={{ color: COLORS.TEXT_WHITE }}>
                {t("serviceLinks.assistenza")}
              </Link>
              <Link href="/servizi/data-management" className="text-base transition-colors duration-300" style={{ color: COLORS.TEXT_WHITE }}>
                {t("serviceLinks.dataManagement")}
              </Link>
              <Link href="/servizi/training-aziendali" className="text-base transition-colors duration-300" style={{ color: COLORS.TEXT_WHITE }}>
                {t("serviceLinks.training")}
              </Link>
            </nav>
          </div>

          {/* Disponibilità */}
          <div className={`transition-all duration-1000 ease-out delay-300 gap-4 flex flex-col text-left ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-white font-bold text-xl">
              {t("sections.availability")}
            </h3>
            <div className="flex flex-col gap-2">
              <div>
                <h4 className="text-white font-bold text-lg">
                  {t("schedule.weekdays")}
                </h4>
                <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
                  {t("schedule.weekdaysHours")}
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">
                  {t("schedule.weekend")}
                </h4>
                <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
                  {t("schedule.weekendNote")}
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className={`transition-all duration-1000 ease-out delay-300 gap-4 flex flex-col text-left ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex gap-4" role="group" aria-label="Social media links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl transition-colors duration-300 hover:text-[#1877F2]"
                style={{ color: COLORS.TEXT_WHITE }}
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl transition-colors duration-300 hover:text-[#000000]"
                style={{ color: COLORS.TEXT_WHITE }}
                aria-label="X (Twitter)"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl transition-colors duration-300 hover:text-[#0A66C2]"
                style={{ color: COLORS.TEXT_WHITE }}
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <nav aria-label="Legal links" className="flex flex-col gap-4">
              <Link
                href="/privacy-policy"
                className="text-md transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                {t("legal.privacyPolicy")}
              </Link>
              <Link
                href="/cookie-policy"
                className="text-md transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                {t("legal.cookiePolicy")}
              </Link>
            </nav>
          </div>

        </div>

        {/* Divider */}
        <div className="pt-8">
          {/* Copyright */}
          <div className={`text-center transition-all duration-1000 ease-out delay-600 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-sm" style={{ color: COLORS.TEXT_WHITE }}>
              &copy; {t("copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
