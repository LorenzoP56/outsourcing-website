import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Group() {
  return (
    <section 
      className="min-h-[100vh] lg:px-32 lg:py-16 flex lg:flex-row flex-col gap-16 p-8 items-center justify-center"
    >
      <div className="flex flex-1 justify-center items-center relative lg:block hidden">
        <div className="relative w-full aspect-square">
          <Image 
            src="/images/Home/desktop/group.png" 
            alt="Group" 
            fill
            className="object-contain" 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 h-full justify-center gap-8">
        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[40px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
          Outsourcing Group:
          <br />
          partner affidabile per le imprese
        </h2>
        <p className="text-md" style={{ color: COLORS.TEXT }}>
          Dal 1999 Outsourcing Group è specializzata nella gestione di <span className="font-bold">attività di back office per servizi digitali</span> e collabora con una delle maggiori autorità di certificazione in Europa, operante nei settori strategici del Digital Trust, della Cybersecurity e della Business Innovation.
          <br />
          <br />
          Le nostre operazioni non sono rivolte direttamente al cliente finale, ma costituiscono un pilastro essenziale per garantire efficienza, sicurezza e continuità dei processi digitali. 
          Operiamo <span className="font-bold">dietro le quinte</span>, offrendo alle aziende un supporto costante che consente di concentrarsi sul proprio core business.
          <br />
          <br />
          Un team di professionisti qualificati assicura qualità, precisione e conformità normativa in ogni attività gestita.
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-6 gap-4">
          <Button href="/contatti">
            Contattaci
          </Button>
          <Button 
            href="/chi-siamo"
            style={{ backgroundColor: 'white', color: COLORS.TEXT, border: '2px solid #E5E7EB' }}
          >
            Scopri di più
          </Button>
        </div>
      </div>

      <Image src="/images/Home/mobile/group.png" alt="Group" width={500} height={500} className="w-full h-auto lg:hidden block" />
    </section>
  );
} 