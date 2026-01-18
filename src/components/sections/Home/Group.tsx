"use client";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem, fadeInUp } from "@/components/animations";

export default function Group() {
  return (
    <section
      className="min-h-auto xl:min-h-[100vh] flex lg:flex-row flex-col px-6 py-8 lg:px-32 lg:py-16 lg:items-center xl:gap-16 gap-12"
    >
      {/* Immagine mobile - full width */}
      <div className="flex justify-center items-center lg:hidden">
        <Image
          src="/website_images/Home/partner-outsourcing-affidabile-consulenza_mobile.webp"
          alt="Partner Outsourcing Group affianca il cliente nella gestione processi aziendali"
          width={659}
          height={437}
          className="h-auto object-cover object-center rounded-[16px]"
        />
      </div>

      {/* Immagine desktop */}
      <AnimatedSection variants={fadeInUp} className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <Image
          src="/website_images/Home/partner-outsourcing-affidabile-consulenza.jpg"
          alt="Partner Outsourcing Group affianca il cliente nella gestione processi aziendali"
          height={800}
          width={500}
          className="object-cover rounded-[16px]"
        />
      </AnimatedSection>

      {/* Contenuto testuale */}
      <StaggerContainer className="flex flex-col lg:w-1/2 gap-6 lg:gap-8">
        <StaggerItem>
          <h2 className="text-[28px] leading-[36px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
            Outsourcing Group partner affidabile
          </h2>
        </StaggerItem>

        <StaggerItem>
          <p className="text-sm md:text-base" style={{ color: COLORS.TEXT }}>
            Dal 1999 gestiamo <span className="font-bold">attività di Back Office per servizi digitali</span> e collaboriamo con una delle maggiori autorità di certificazione in Europa, operante nei settori strategici del Digital Trust, della Cybersecurity e della Business Innovation.
            <br />
            <br />
            Le nostre attività costituiscono un pilastro essenziale per garantire alla tua azienda <span className="font-bold">efficienza, sicurezza</span> e <span className="font-bold">continuità</span> nei processi digitali. Operando <span className="font-bold">dietro le quinte</span>, offriamo alle aziende un ventaglio di opportunità riducendo:
          </p>
        </StaggerItem>

        <StaggerItem>
          <ul className="list-disc pl-5 text-sm md:text-base space-y-1" style={{ color: COLORS.TEXT }}>
            <li>il <span className="font-bold">sovraccarico operativo</span>, che sottrae tempo e risorse alle attività strategiche;</li>
            <li>gli <span className="font-bold">errori frequenti</span>, spesso causati dall'assenza di procedure chiare e strutturate;</li>
            <li>i <span className="font-bold">tempi lunghi</span>, eliminando rallentamenti operativi e colli di bottiglia;</li>
            <li>i <span className="font-bold">costi elevati del personale</span>, evitando di mantenere risorse dedicate a micro-attività non core;</li>
            <li>la <span className="font-bold">mancanza di presidio strutturato</span>, garantendo controllo continuo e tracciabilità dei flussi;</li>
            <li>la <span className="font-bold">disorganizzazione dei dati</span>, assicurando archiviazione, aggiornamento e verifica puntuali.</li>
          </ul>
        </StaggerItem>

        <StaggerItem>
          <p className="text-sm md:text-base" style={{ color: COLORS.TEXT }}>
            Un team di professionisti qualificati potrà assicurarti <span className="font-bold">qualità, precisione</span> e <span className="font-bold">conformità normativa</span> in ogni attività gestita.
          </p>
        </StaggerItem>
      </StaggerContainer>

    </section>
  );
}
