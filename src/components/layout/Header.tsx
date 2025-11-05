"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAVIGATION_LINKS } from "../../lib/constants";
import { COLORS } from "../../lib/constants";
import Button from "../ui/Button";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled:", !isMenuOpen);
  };
  return (
    <header className="absolute top-0 left-0 w-full z-50 h-[10vh]">
      <div className="mx-auto lg:px-32 py-8 flex items-center justify-between h-full">

        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {/* TODO: Add Logo_MR_lettermark_bianco.webp to public/images */}
            <div className="mr-2 w-[48px] h-[38px] md:w-[64px] md:h-[51px] bg-white/20 rounded flex items-center justify-center text-white font-bold">
              MR
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-end gap-8">
          <nav className="flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link, index) => (
              <Link
                key={`${link.name}-${index}`}
                href={link.href}
                className="font-medium uppercase text-base"
                style={{ color: COLORS.TEXT }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Button href="/Contatti">
            Contattaci
          </Button>
        </div>

      </div>
    </header>
  );
} 