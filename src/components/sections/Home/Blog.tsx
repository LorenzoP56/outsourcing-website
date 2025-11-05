'use client'

import { COLORS } from "@/lib/constants";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";


export default function Blog() {
  return (
    <section 
      className="lg:px-32 lg:py-16 flex flex-col gap-8"
      style={{
        backgroundImage: 'url(/images/Home/bgBlog.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h2 className="text-[40px] leading-[40px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
        Leggi i nostri ultimi articoli
      </h2>
      <p className="text-md text-center" style={{ color: COLORS.TEXT_WHITE }}>
        Aggiornamenti e consigli pratici per migliorare la gestione digitale nella tua organizzazione.
      </p>

      <div className="flex flex-row gap-8">

        <div className="flex flex-col gap-4 flex-1 bg-white" style={{ borderRadius: '16px' }}>
          <Image src="/images/Home/blog/1.png" alt="Blog 1" width={500} height={500} className="w-full h-auto" />
          <div className="flex flex-col gap-2 px-8 py-4">
            <h4 style={{ color: COLORS.TEXT , fontSize: '10px'}}>
              BACKOFFICE COMMERCIALE
            </h4>
            <h3 className="text-[20px] leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Ottimizzazione dei processi di backoffice per aumentare l'efficienza
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              Strategie innovative per digitalizzare e automatizzare le attività…
            </p>
            <h4 style={{ color: COLORS.TEXT , fontSize: '10px'}}>
              3 ottobre 2025
            </h4>
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1 bg-white" style={{ borderRadius: '16px' }}>
          <Image src="/images/Home/blog/2.png" alt="Blog 1" width={500} height={500} className="w-full h-auto" />
          <div className="flex flex-col gap-2 px-8 py-4">
            <h4 style={{ color: COLORS.TEXT , fontSize: '10px'}}>
              CUSTOMER CARE
            </h4>
            <h3 className="text-[20px] leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              Customer care multicanale: soddisfare le esigenze dei clienti moderni
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              Come costruire un servizio clienti efficace attraverso tutti i canali…
            </p>
            <h4 style={{ color: COLORS.TEXT , fontSize: '10px'}}>
              30 settembre 2025
            </h4>
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1 bg-white" style={{ borderRadius: '16px' }}>
          <Image src="/images/Home/blog/3.png" alt="Blog 1" width={500} height={500} className="w-full h-auto" />
          <div className="flex flex-col gap-2 px-8 py-4">
            <h4 style={{ color: COLORS.TEXT , fontSize: '10px'}}>
              CONFORMITÀ NORMATIVA
            </h4>
            <h3 className="text-[20px] leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              GDPR e protezione dei dati: come garantire la conformità aziendale
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              Le migliori pratiche per gestire la privacy dei dati e rispettare...
            </p>
            <h4 style={{ color: COLORS.TEXT , fontSize: '10px'}}>
              5 ottobre 2025
            </h4>
          </div>
        </div>

      </div>

      <Button href="/blog" className="w-fit mx-auto" style={{ backgroundColor: COLORS.TEXT_WHITE, color: COLORS.TEXT }}>
        Leggi altri articoli
      </Button>

    </section>
  );
}