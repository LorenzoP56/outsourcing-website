import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Group() {
  return (
    <section 
      className="min-h-[100vh] lg:px-32 lg:py-16 flex lg:flex-row flex-col gap-16 p-8 items-center justify-center"
    >
      <div className="flex flex-1 justify-center items-center relative lg:block hidden">
        <div className="relative h-full aspect-square">
          <Image 
            src="/images/Home/desktop/group.webp" 
            alt="Group" 
            fill
            className="object-contain" 
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 h-full justify-center gap-8">

        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[40px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          Outsourcing Group partner affidabile
        </h2>

        <p className="text-md" style={{ color: COLORS.TEXT }}>
        Dal 1999 gestiamo <span className="font-bold">attività di Back Office per servizi digitali</span> e collaboriamo con una delle maggiori autorità di certificazione in Europa, operante nei settori strategici del Digital Trust, della Cybersecurity e della Business Innovation.
        <br />
        <br />
        Le nostre attività costituiscono un pilastro essenziale per garantire alla tua azienda <span className="font-bold">efficienza, sicurezza</span> e <span className="font-bold">continuità</span> dei processi digitali. Operando <span className="font-bold">dietro le quinte</span>, offriamo alle aziende un supporto costante riducendo <span className="font-bold">tempi e costi</span>, garantendo <span className="font-bold">continuità operativa</span> e <span className="font-bold">qualità del servizio</span>.
        </p>

        <ul className="list-disc pl-5">
          <li><span className="font-bold">sovraccarico operativo</span>: ruba il tempo alle attività aziendali strategiche;</li>
          <li><span className="font-bold">errori frequenti</span>: quando mancano procedure chiare, le informazioni si perdono o vengono gestite male;</li>
          <li><span className="font-bold">tempi lunghi</span>: la gestione delle pratiche interne rallenta il business e crea colli di bottiglia;</li>
          <li><span className="font-bold">costi elevati del personale</span>: mantenere un team interno per ogni micro-attività non è sostenibile;</li>
          <li><span className="font-bold">mancanza di presidio strutturato</span>: nessuno controlla i flussi e l’azienda perde efficienza;</li>
          <li><span className="font-bold">disorganizzazione dei dati</span>: archiviazione, aggiornamento e verifica spesso non vengono fatti correttamente.</li>
        </ul>

        <p className="text-md" style={{ color: COLORS.TEXT }}>
          Un team di professionisti qualificati potrà assicurarti qualità, precisione e conformità normativa in ogni attività gestita.
        </p>
      </div>

    </section>
  );
} 