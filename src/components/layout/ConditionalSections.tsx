'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const DomandeFrequenti = dynamic(() => import('./DomandeFrequenti'));
const Affidati = dynamic(() => import('./Affidati'));
const Map = dynamic(() => import('@/components/sections/Contatti/Map'));
const AffidatiServizi = dynamic(() => import('./AffidatiServizi'));

export default function ConditionalSections() {
  const pathname = usePathname();
  
  if (pathname === '/it' || pathname === '/en') {
    return null;
  } else if (pathname.includes('/contatti')) {
    return (
      <>
        <DomandeFrequenti />
        <Map />
      </>
    );
  } else if (pathname.includes('/servizi/')) {
    return (
      <>
        <AffidatiServizi />
        <DomandeFrequenti />
      </>
    );
  } else if (pathname.includes('/servizi')) {
    return (
      <>
        <Affidati />
        <DomandeFrequenti />
      </>
    );
  } else if (pathname.includes('/chi-siamo')) {
    return (
      <>
        <Affidati />
      </>
    );
  } else if (pathname.includes('/blog')) {
    return (
      <>
        <Affidati />
        <DomandeFrequenti />
      </>
    );
  } else if (pathname.includes('/esternalizzazione')) {
    return (
      <>
        <Affidati />
        <DomandeFrequenti />
      </>
    );
  } else if (pathname.includes('/privacy-policy') || pathname.includes('/cookie-policy')) {
    return (
      <>
        <DomandeFrequenti />
      </>
    );
  } else {
    return (
      <>
        <AffidatiServizi />
        <DomandeFrequenti />
      </>
    );
  }


}

