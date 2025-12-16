"use client";

import { COLORS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <footer ref={sectionRef} className="py-16" style={{ backgroundColor: '#2B2D2F', color: COLORS.TEXT }}>
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
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
            <p className="text-md text-center lg:text-left" style={{ color: COLORS.TEXT_WHITE }}>
              <span className="font-bold uppercase">OutSourcing Group srl</span> <br />
              Piazza G. Zanellato 13 - 35131 (PD)<br />
              P. IVA 03475900282 <br />
              info@osgdigitaleconomy.com
            </p>
          </div>

          {/* Pagine */}
          <div className={`transition-all duration-1000 ease-out delay-300 gap-4 flex flex-col text-center lg:text-left mx-auto ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-white font-bold text-xl">
              Pagine
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/chi-siamo"
                className="text-base transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                Chi siamo
              </Link>
              <Link
                href="/servizi"
                className="text-base transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                Servizi
              </Link>
              <Link
                href="/esternalizzare"
                className="text-base transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                Perché esternalizzare
              </Link>
              <Link
                href="/blog"
                className="text-base transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                Blog
              </Link>
              <Link
                href="/contatti"
                className="text-base transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                Contatti
              </Link>
            </nav>
          </div>

          {/* Servizi */}
          <div className={`transition-all duration-1000 ease-out delay-300 gap-4 flex flex-col text-center lg:text-left mx-auto ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-white font-bold text-xl">
              Servizi
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/chi-siamo"
                className="text-base transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                Digital Back Office
              </Link>
              <Link
                href="/servizi"
                className="text-base transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                Contact Center
              </Link>
              <Link
                href="/esternalizzare"
                className="text-base transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                Gestione Amministrativa Digitale
              </Link>
              <Link
                href="/blog"
                className="text-base transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                Assistenza dedicata agli utenti
              </Link>
              <Link
                href="/contatti"
                className="text-base transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                Data management
              </Link>
              <Link
                href="/contatti"
                className="text-base transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                Training Azendali
              </Link>
            </nav>
          </div>

          {/* Disponibilità */}
          <div className={`transition-all duration-1000 ease-out delay-300 gap-4 flex flex-col text-center lg:text-left mx-auto ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-white font-bold text-xl">
              Disponibilità
            </h3>
            <nav className="flex flex-col gap-2">
              <div>
                <h3 className="text-white font-bold text-xl">
                  Lunedì - Venerdì
                </h3>
                <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
                  09:00 - 19:00
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">
                  Sabato e Domenica
                </h3>
                <p className="text-md" style={{ color: COLORS.TEXT_WHITE }}>
                  supporto attivabile su necessità operative o progetti dedicati
                </p>
              </div>
            </nav>
          </div>

          {/* Social Media */}
          <div className={`transition-all duration-1000 ease-out delay-300 gap-4 flex flex-col text-center lg:text-left mx-auto ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl transition-colors duration-300 hover:text-[#1877F2]"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl transition-colors duration-300 hover:text-[#000000]"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl transition-colors duration-300 hover:text-[#0A66C2]"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
            <nav className="flex flex-col gap-4">
              <Link
                href="/privacy-policy"
                className="text-md transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="text-md transition-colors duration-300"
                style={{ color: COLORS.TEXT_WHITE }}
              >
                Cookie Policy
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
              &copy; Copyright 2025 - Outsourcing Group srl - Tutti i diritti riservati
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 