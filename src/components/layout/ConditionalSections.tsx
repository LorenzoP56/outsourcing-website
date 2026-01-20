'use client';

import { usePathname } from 'next/navigation';
import DomandeFrequenti from './DomandeFrequenti';
import Affidati from './Affidati';
import Map from '@/components/sections/Contatti/Map';
import AffidatiServizi from './AffidatiServizi';

export default function ConditionalSections() {
  const pathname = usePathname();
  
  if (pathname === '/') {
    return null;
  } else if (pathname === '/contatti') {
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

