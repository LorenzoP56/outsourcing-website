"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { NAVIGATION_LINKS, SERVICES } from "../../lib/constants";
import { COLORS } from "../../lib/constants";
import Button from "../ui/Button";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Blocca lo scroll quando il menu è aperto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup quando il componente viene smontato
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Chiudi il dropdown quando si clicca fuori
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
    console.log("Menu toggled:", !isMenuOpen);
  };
  return (
    <header className="absolute top-0 left-0 w-full z-50 h-[10vh] py-8 bg-white lg:bg-transparent">
      <div className="mx-auto px-6 lg:px-32 py-8 flex items-center justify-between h-full">

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
        <div className="hidden lg:flex items-center justify-end gap-8">
          <nav className="flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link, index) => {
  const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
  if (link.name !== "Servizi") {
    return (
      <Link
        key={`${link.name}-${index}`}
        href={link.href}
        className="font-medium uppercase text-base pb-1 relative group inline-flex items-center gap-1"
        style={{ color: COLORS.TEXT }}
      >
        {link.name}
        <span
          className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
            isActive ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
          style={{ backgroundImage: COLORS.PRIMARY }}
        />
      </Link>
    );
  }

  // Wrapper che include il link e il dropdown separati
  return (
    <div key="Servizi-dropdown" className="relative inline-flex items-center gap-1" data-services-dropdown>
      <Link
        href={link.href}
        className="font-medium uppercase text-base pb-1 relative group inline-flex items-center"
        style={{ color: COLORS.TEXT }}
      >
        {link.name}
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
      >
        <ChevronDown size={18} strokeWidth={2} color={COLORS.TEXT} />
      </button>
      {isServicesOpen && (
        <div
          className="absolute left-0 top-full mt-4 w-64 rounded-lg bg-white shadow-lg ring-1 ring-black/5 z-50"
        >
          <ul className="py-3">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servizi/${service.slug}`}
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsServicesOpen(false)}
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
})}
          </nav>
          <Button href="/contatti">
            Contattaci
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <Button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50 relative !p-0 !min-w-0"
          style={{ background: 'transparent' }}
          aria-label="Toggle menu"
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
            className={`lg:hidden fixed top-[10vh] left-0 w-full bg-white shadow-lg transition-all duration-300 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <nav className="flex flex-col items-center py-8 space-y-6">
              {NAVIGATION_LINKS.map((link, index) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                if (link.name !== "Servizi") {
                  return (
                    <Link
                      key={`${link.name}-${index}`}
                      href={link.href}
                      className="font-medium uppercase text-base pb-1 relative group inline-flex items-center gap-1"
                      style={{ color: COLORS.TEXT }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                        style={{ backgroundImage: COLORS.PRIMARY }}
                      />
                    </Link>
                  );
                }
                // Wrapper per Servizi con link e dropdown separati
                return (
                  <div key="Servizi-mobile" className="flex flex-col items-center gap-2" data-services-dropdown>
                    <div className="inline-flex items-center gap-1">
                      <Link
                        href={link.href}
                        className="font-medium uppercase text-base pb-1 relative group inline-flex items-center"
                        style={{ color: COLORS.TEXT }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
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
                      >
                        <ChevronDown size={18} strokeWidth={2} color={COLORS.TEXT} />
                      </button>
                    </div>
                    {isServicesOpen && (
                      <div className="w-full max-w-xs rounded-lg bg-white shadow-lg ring-1 ring-black/5 mt-2">
                        <ul className="py-3">
                          {SERVICES.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/servizi/${service.slug}`}
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                onClick={() => {
                                  setIsServicesOpen(false);
                                  setIsMenuOpen(false);
                                }}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4">
                <Button href="/contatti" onClick={() => setIsMenuOpen(false)}>
                  Contattaci
                </Button>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
} 