"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAVIGATION_LINKS } from "../../lib/constants";
import { COLORS } from "../../lib/constants";
import Button from "../ui/Button";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
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

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled:", !isMenuOpen);
  };
  return (
    <header className="absolute top-0 left-0 w-full z-50 h-[10vh] bg-white lg:bg-transparent">
      <div className="mx-auto px-6 lg:px-32 py-8 flex items-center justify-between h-full">

        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {/* TODO: Add Logo_MR_lettermark_bianco.webp to public/images */}
            <div className="mr-2 w-[48px] h-[38px] md:w-[64px] md:h-[51px] rounded flex items-center justify-center text-white font-bold" style={{ backgroundColor: COLORS.PRIMARY }}>
              MR
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-end gap-8">
          <nav className="flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link, index) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={`${link.name}-${index}`}
                  href={link.href}
                  className="font-medium uppercase text-base pb-1 relative group"
                  style={{ color: COLORS.TEXT }}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ backgroundColor: COLORS.PRIMARY }}
                  />
                </Link>
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
          style={{ backgroundColor: 'transparent' }}
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
                return (
                  <Link
                    key={`${link.name}-${index}`}
                    href={link.href}
                    className="font-medium uppercase text-base pb-1 relative group"
                    style={{ color: COLORS.TEXT }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      style={{ backgroundColor: COLORS.PRIMARY }}
                    />
                  </Link>
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