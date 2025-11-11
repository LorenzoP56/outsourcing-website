'use client';

import { usePathname } from 'next/navigation';
import DomandeFrequenti from './DomandeFrequenti';
import Affidati from './Affidati';
import Map from '@/components/sections/Contatti/Map';

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
  } else {
    return (
      <>
        <Affidati />
        <DomandeFrequenti />
      </>
    );
  }


}

