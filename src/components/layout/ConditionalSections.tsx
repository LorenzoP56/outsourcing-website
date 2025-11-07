'use client';

import { usePathname } from 'next/navigation';
import DomandeFrequenti from './DomandeFrequenti';
import Affidati from './Affidati';

export default function ConditionalSections() {
  const pathname = usePathname();
  
  // Mostra le sezioni solo se NON siamo nella home page
  if (pathname === '/') {
    return null;
  }

  return (
    <>
      <Affidati />
      <DomandeFrequenti />
    </>
  );
}

