import { COLORS, SERVICES } from "@/lib/constants";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Servizi() {
  return (
    <section className="lg:px-32 lg:py-16 px-8 py-16 lg:gap-32 gap-16 flex flex-col">
      {SERVICES.map((service, index) => (
        <div 
          key={service.slug} 
          className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}
        >
          <Image 
            src={service.imageDesktop} 
            alt={service.title} 
            width={500} 
            height={500} 
            className="lg:w-[70%] w-full h-auto lg:block hidden" 
          />
          <Image 
            src={service.imageMobile} 
            alt={service.title} 
            width={500} 
            height={500} 
            className="lg:hidden block w-full h-auto" 
          />
          
          <div className="flex flex-col flex-1 gap-8 lg:w-[30%] w-full justify-center items-center">
            <div className="flex flex-col gap-4">
              <h3 
                className="lg:text-[40px] lg:leading-[40px] text-[20px] leading-[20px] font-bold" 
                style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
              >
                {service.title}
              </h3>
              <p className="text-base" style={{ color: COLORS.TEXT }}>
                {service.shortDescription}
              </p>
            </div>

            <Button href={`/servizi/${service.slug}`} className="lg:self-start self-center">
              Scopri di più
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}