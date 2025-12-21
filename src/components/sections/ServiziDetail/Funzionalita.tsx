import { COLORS } from "@/lib/constants";
import Image from "next/image";

interface FunctionalityItem {
  icon: string;
  description: string;
}

interface FunzionalitaProps {
  functionalityTitle: string;
  functionalitySubtitle: string;
  functionality: FunctionalityItem[];
}

export default function Funzionalita({ functionalityTitle, functionalitySubtitle, functionality }: FunzionalitaProps) {
  return (
    <section className="lg:px-32 lg:py-16 px-8 py-16 bg-white">
      <div className="flex flex-col gap-12">

        <h2 
          className="lg:text-[48px] lg:leading-[56px] text-[32px] leading-[40px] font-bold text-center" 
          style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
        >
          {functionalityTitle}
        </h2>
        
        <p className="text-center text-base lg:text-lg mx-auto" style={{ color: COLORS.TEXT }}>
          {functionalitySubtitle}
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-8">
          {functionality.map((item, index) => (
            <div 
              key={index} 
              className="flex shadow-lg lg:px-8 lg:py-4 px-4 py-2 gap-4 items-center"
              style={{ borderRadius: 16 }}
            >
              <Image src={item.icon} alt={""} width={100} height={100} className="object-contain lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]" />
              <p className="flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

