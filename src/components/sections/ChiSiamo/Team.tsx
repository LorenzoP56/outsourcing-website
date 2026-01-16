"use client";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import { AnimatedSection, fadeInLeft, fadeInRight } from "@/components/animations";

export default function Team() {
  return (
    <section
      className="lg:px-32 lg:py-16 flex lg:flex-row flex-col gap-16 px-8 py-16 items-center justify-center"
    >
      <AnimatedSection variants={fadeInLeft} className="flex lg:flex-1 w-full justify-center items-center relative">
        <div className="relative w-full aspect-square max-w-lg">
          <Image
            src="/website_images/ChiSiamo/team-outsourcing-group-professionisti.jpg"
            alt="Competenza tecnologica e innovazione nei processi digitali - Outsourcing Group"
            fill
            className="object-cover h-[80vh] w-auto aspect-[5/7] flex w-[40%] rounded-[16px]"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection variants={fadeInRight} className="flex flex-col flex-1 h-full justify-center gap-8">
        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          Insieme, trasformiamo ogni servizio in risultato
        </h2>
        <p className="text-base" style={{ color: COLORS.TEXT }}>

          Affidare in outsourcing processi e dati sensibili richiede fiducia. Per questo, il nostro team lavora con <span className="font-bold">trasparenza, metodo</span> e un <span className="font-bold">approccio collaborativo continuo</span> con ogni cliente.
          <br />
          <br />
          Da oltre vent'anni operiamo nel <span className="font-bold">digital trust</span>, unendo competenze tecniche e attenzione alle persone. Ogni membro del team viene informato direttamente sulle procedure e sui flussi operativi del cliente, acquisendo una conoscenza approfondita delle sue modalità di lavoro e delle pratiche specifiche da gestire.
          Questo ci consente di operare come una <span className="font-bold">vera estensione del tuo reparto interno</span>, garantendo precisione, coerenza e continuità nel tempo.
          <br />
          <br />
          Crediamo nella collaborazione come leva di crescita reciproca: ogni progetto diventa un'occasione per migliorare insieme ai nostri clienti, condividendo conoscenze e soluzioni.
        </p>
      </AnimatedSection>

    </section>
  );
}
