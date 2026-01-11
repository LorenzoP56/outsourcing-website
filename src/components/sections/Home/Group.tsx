import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Group() {
  return (
    <section 
      className="min-h-[100vh] lg:px-32 lg:py-16 flex lg:flex-row flex-col gap-16 p-8 items-center justify-center"
    >
      <Image 
        src="/images/Home/mobile/A - Home - Partner Affidabile 1.webp" 
        alt="Group" 
        height={500}
        width={400}
        className="object-cover h-[80vh] w-auto aspect-[5/7] lg:block hidden flex w-[40%] rounded-[16px]" 
      />

      <div className="flex flex-col flex-1 h-full justify-center gap-8">

        <div className="w-full overflow-hidden rounded-[16px] lg:hidden block">
          <Image src="/images/Home/mobile/A - Home - Partner Affidabile 1.webp" alt="Hero" width={500} height={500} className="w-full h-auto object-cover object-center scale-125" />
        </div>

        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[40px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          Outsourcing Group partner affidabile
        </h2>

        <p className="text-md" style={{ color: COLORS.TEXT }}>
        Dal 1999 gestiamo <span className="font-bold">attività di Back Office per servizi digitali</span> e collaboriamo con una delle maggiori autorità di certificazione in Europa, operante nei settori strategici del Digital Trust, della Cybersecurity e della Business Innovation.
        <br />
        <br />
        Le nostre attività costituiscono un pilastro essenziale per garantire alla tua azienda <span className="font-bold">efficienza, sicurezza</span> e <span className="font-bold">continuità</span> nei processi digitali. Operando <span className="font-bold">dietro le quinte</span>, offriamo alle aziende un ventaglio di opportunità riducendo:
        </p>

        <ul className="list-disc pl-5">
          <li>il <span className="font-bold">sovraccarico operativo</span>, che sottrae tempo e risorse alle attività strategiche;</li>
          <li>la <span className="font-bold">errori frequenti</span>, spesso causati dall’assenza di procedure chiare e strutturate;</li>
          <li>i <span className="font-bold">tempi lunghi</span>, eliminando rallentamenti operativi e colli di bottiglia;</li>
          <li>i <span className="font-bold">costi elevati del personale</span>, evitando di mantenere risorse dedicate a micro-attività non core;</li>
          <li>la <span className="font-bold">mancanza di presidio strutturato</span>, garantendo controllo continuo e tracciabilità dei flussi;</li>
          <li>la <span className="font-bold">disorganizzazione dei dati</span>, assicurando archiviazione, aggiornamento e verifica puntuali.</li>
        </ul>

        <p className="text-md" style={{ color: COLORS.TEXT }}>
          Un team di professionisti qualificati potrà assicurarti <span className="font-bold">qualità, precisione</span> e <span className="font-bold">conformità normativa</span> in ogni attività gestita.
        </p>
      </div>

    </section>
  );
} 