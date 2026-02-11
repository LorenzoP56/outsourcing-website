"use client";

import {Link, usePathname, useRouter} from "@/i18n/navigation";
import Image from "next/image";
import { useState, useEffect, useTransition } from "react";
import { ChevronDown } from "lucide-react";
import { SERVICES } from "../../lib/constants";
import { COLORS } from "../../lib/constants";
import Button from "../ui/Button";
import {useTranslations, useLocale} from "next-intl";
import {routing} from "@/i18n/routing";

const NAV_LINKS = [
  { key: "chiSiamo", href: "/chi-siamo" },
  { key: "servizi", href: "/servizi" },
  { key: "esternalizzazione", href: "/esternalizzazione" },
  { key: "blog", href: "/blog" },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Header");
  const tServizi = useTranslations("Servizi");

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isServicesOpen && !target.closest('[data-services-dropdown]')) {
        setIsServicesOpen(false);
      }
    };
    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const renderNavLink = (link: typeof NAV_LINKS[number], index: number, onClickExtra?: () => void) => {
    const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
    const linkName = t(`nav.${link.key}`);

    if (link.key !== "servizi") {
      return (
        <Link
          key={`${link.key}-${index}`}
          href={link.href}
          className="font-medium uppercase text-base pb-1 relative group inline-flex items-center gap-1"
          style={{ color: COLORS.TEXT }}
          onClick={onClickExtra}
        >
          {linkName}
          <span
            className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
              isActive ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
            style={{ backgroundImage: COLORS.PRIMARY }}
          />
        </Link>
      );
    }

    return (
      <div key="Servizi-dropdown" className={`${onClickExtra ? 'flex flex-col items-center gap-2' : 'relative inline-flex items-center gap-1'}`} data-services-dropdown>
        <div className="inline-flex items-center gap-1">
          <Link
            href={link.href}
            className="font-medium uppercase text-base pb-1 relative group inline-flex items-center"
            style={{ color: COLORS.TEXT }}
            onClick={onClickExtra}
          >
            {linkName}
            <span
              className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
              style={{ backgroundImage: COLORS.PRIMARY }}
            />
          </Link>
          <button
            type="button"
            className="bg-transparent border-0 outline-none cursor-pointer p-0 flex items-center"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsServicesOpen((open) => !open);
            }}
            aria-haspopup="menu"
            aria-expanded={isServicesOpen}
            aria-label={t("aria.showServicesSubmenu")}
          >
            <ChevronDown size={18} strokeWidth={2} color={COLORS.TEXT} />
          </button>
        </div>
        {isServicesOpen && (
          <div className={onClickExtra ? "w-full max-w-xs rounded-lg bg-white shadow-lg ring-1 ring-black/5 mt-2" : "absolute left-0 top-full mt-4 w-64 rounded-lg bg-white shadow-lg ring-1 ring-black/5 z-50"}>
            <ul className="py-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servizi/${service.slug}`}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    onClick={() => {
                      setIsServicesOpen(false);
                      if (onClickExtra) onClickExtra();
                    }}
                  >
                    {tServizi(`details.${service.slug}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="mx-auto px-4 md:px-8 lg:px-24 py-4 lg:py-6 flex items-center justify-between">

        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="w-full h-[80px] flex items-center justify-center">
              <Image
                src="/images/logo.svg"
                alt="Outsourcing Group"
                width={100}
                height={100}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center justify-end gap-8">
          <nav className="flex items-center space-x-8">
            {NAV_LINKS.map((link, index) => renderNavLink(link, index))}
          </nav>
          <div className="flex items-center rounded-full border overflow-hidden" style={{ borderColor: COLORS.TEXT, opacity: isPending ? 0.5 : 1 }}>
            {routing.locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                disabled={isPending}
                className="px-3 py-1.5 text-xs font-bold uppercase transition-colors"
                style={{
                  background: locale === l ? COLORS.PRIMARY : 'transparent',
                  color: locale === l ? COLORS.TEXT_WHITE : COLORS.TEXT,
                }}
              >
                {l}
              </button>
            ))}
          </div>
          <Button href="/contatti">
            {t("cta")}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <Button
          onClick={toggleMenu}
          className="xl:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50 relative !p-0 !min-w-0"
          style={{ background: 'transparent' }}
          aria-label={t("aria.toggleMenu")}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
            style={{ backgroundColor: COLORS.SECONDARY }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
            style={{ backgroundColor: COLORS.SECONDARY }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
            style={{ backgroundColor: COLORS.SECONDARY }}
          />
        </Button>

        {/* Mobile Menu */}
        {isMounted && (
          <div
            className={`xl:hidden fixed top-[88px] left-0 w-full h-[calc(100vh-88px)] bg-white shadow-lg transition-all duration-300 overflow-y-auto ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <nav className="flex flex-col items-center py-8 space-y-6">
              {NAV_LINKS.map((link, index) => renderNavLink(link, index, () => setIsMenuOpen(false)))}
              <div className="flex items-center rounded-full border overflow-hidden" style={{ borderColor: COLORS.TEXT, opacity: isPending ? 0.5 : 1 }}>
                {routing.locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      switchLocale(l);
                      setIsMenuOpen(false);
                    }}
                    disabled={isPending}
                    className="px-4 py-2 text-sm font-bold uppercase transition-colors"
                    style={{
                      background: locale === l ? COLORS.PRIMARY : 'transparent',
                      color: locale === l ? COLORS.TEXT_WHITE : COLORS.TEXT,
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <div className="pt-4">
                <Button href="/contatti" onClick={() => setIsMenuOpen(false)}>
                  {t("cta")}
                </Button>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
