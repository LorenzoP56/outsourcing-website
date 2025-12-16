import { COLORS, SERVICES } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Servizi() {
  return (
    <section 
      className="min-h-[100vh] lg:px-32 lg:py-16 flex flex-col gap-8 p-8"
    >
      <h2 className="text-[40px] leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
        I nostri servizi
      </h2>

      <p className="text-md text-center" style={{ color: COLORS.TEXT }}>
        Scopri come possiamo aiutare la tua azienda con servizi su misura.
      </p>

      <div className="flex lg:flex-row flex-col gap-8 justify-between items-start">
        <Link href={`/servizi/${SERVICES[0].slug}`} className="flex flex-col flex-1 lg:gap-8 gap-4 cursor-pointer lg:shadow-none shadow-lg" style={{ borderRadius: '16px' }}>
          <Image 
            src="/images/Home/desktop/servizi/1.webp" 
            alt="Servizio 1" 
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex flex-col lg:gap-4 gap-0 lg:p-0 px-4 pb-4"> 
            <h3 className="lg:text-[32px] lg:leading-[32px] text-[20px] leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              {SERVICES[0].name}
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              {SERVICES[0].serviceDescription}
            </p>
          </div>
        </Link>

        <Link href={`/servizi/${SERVICES[1].slug}`} className="flex flex-col flex-1 lg:gap-8 gap-4 cursor-pointer lg:shadow-none shadow-lg" style={{ borderRadius: '16px' }}>
          <Image 
            src="/images/Home/desktop/servizi/2.webp" 
            alt="Servizio 1" 
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex flex-col lg:gap-4 gap-0 lg:p-0 px-4 pb-4"> 
            <h3 className="lg:text-[32px] lg:leading-[32px] text-[20px] leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              {SERVICES[1].name}
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              {SERVICES[1].serviceDescription}
            </p>
          </div>
        </Link>

        <Link href={`/servizi/${SERVICES[2].slug}`} className="flex flex-col flex-1 lg:gap-8 gap-4 cursor-pointer lg:shadow-none shadow-lg" style={{ borderRadius: '16px' }}>
          <Image 
            src="/images/Home/desktop/servizi/3.webp" 
            alt="Servizio 1" 
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex flex-col lg:gap-4 gap-0 lg:p-0 px-4 pb-4"> 
            <h3 className="lg:text-[32px] lg:leading-[32px] text-[20px] leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              {SERVICES[2].name}
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              {SERVICES[2].serviceDescription}
            </p>
          </div>
        </Link>
      </div>

      <div className="flex lg:flex-row flex-col gap-8 justify-center items-start">
        <Link href={`/servizi/${SERVICES[3].slug}`} className="flex flex-col gap-8 lg:w-[calc((100%-4rem)/3)] w-full cursor-pointer lg:shadow-none shadow-lg" style={{ borderRadius: '16px' }}>
          <Image 
            src="/images/Home/desktop/servizi/4.webp" 
            alt="Servizio 1" 
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex flex-col lg:gap-4 gap-0 lg:p-0 px-4 pb-4"> 
            <h3 className="lg:text-[32px] lg:leading-[32px] text-[20px] leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              {SERVICES[3].name}
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              {SERVICES[3].serviceDescription}
            </p>
          </div>
        </Link>

        <Link href={`/servizi/${SERVICES[4].slug}`} className="flex flex-col gap-8 lg:w-[calc((100%-4rem)/3)] w-full cursor-pointer lg:shadow-none shadow-lg" style={{ borderRadius: '16px' }}>
          <Image 
            src="/images/Home/desktop/servizi/5.webp" 
            alt="Servizio 1" 
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex flex-col lg:gap-4 gap-0 lg:p-0 px-4 pb-4"> 
            <h3 className="lg:text-[32px] lg:leading-[32px] text-[20px] leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              {SERVICES[4].name}
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              {SERVICES[4].serviceDescription}
            </p>
          </div>
        </Link>

        <Link href={`/servizi/${SERVICES[5].slug}`} className="flex flex-col gap-8 lg:w-[calc((100%-4rem)/3)] w-full cursor-pointer lg:shadow-none shadow-lg" style={{ borderRadius: '16px' }}>
          <Image 
            src="/images/Home/desktop/servizi/6.webp" 
            alt="Servizio 1" 
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="flex flex-col lg:gap-4 gap-0 lg:p-0 px-4 pb-4"> 
            <h3 className="lg:text-[32px] lg:leading-[32px] text-[20px] leading-[20px] font-bold" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
              {SERVICES[5].name}
            </h3>
            <p className="text-md" style={{ color: COLORS.TEXT }}>
              {SERVICES[5].serviceDescription}
            </p>
          </div>
        </Link>
      </div>
      
    </section>
  );
} 