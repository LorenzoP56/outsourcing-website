import { COLORS } from "@/lib/constants";
import Image from "next/image";

export default function Team() {
  return (
    <section 
      className="lg:px-32 lg:py-16 flex lg:flex-row flex-col gap-16 px-8 py-16 items-center justify-center"
    >
      <div className="flex lg:flex-1 w-full justify-center items-center relative">
        <div className="relative w-full aspect-square max-w-lg">
          <Image 
            src="/images/ChiSiamo/team.png" 
            alt="Group" 
            fill
            className="object-contain" 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 h-full justify-center gap-8">
        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          Un team che cresce
          <br />
          insieme ai clienti
        </h2>
        <p className="text-base" style={{ color: COLORS.TEXT }}>

          Affidare in outsourcing processi e dati sensibili richiede fiducia. Per questo, il nostro team lavora con trasparenza, metodo e un approccio collaborativo continuo con ogni cliente.
          <br />
          <br />
          Da oltre vent’anni operiamo nel <span className="font-bold">digital trust</span>, unendo competenze tecniche e attenzione alle persone.Ogni membro del team viene <span className="font-bold">formato direttamente sulle procedure e sui flussi operativi del cliente</span>, acquisendo una conoscenza approfondita delle sue modalità di lavoro e delle pratiche specifiche da gestire. Questo ci consente di operare come una vera <span className="font-bold">estensione del reparto interno</span>, garantendo precisione, coerenza e continuità nel tempo.
          <br />
          <br />
          Crediamo nella collaborazione come leva di crescita reciproca: ogni progetto diventa un'occasione per migliorare insieme ai nostri clienti, condividendo conoscenze e soluzioni.

        </p>
      </div>

    </section>
  );
} 