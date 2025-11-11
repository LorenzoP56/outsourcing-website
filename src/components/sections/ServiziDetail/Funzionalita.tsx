import { COLORS } from "@/lib/constants";
import Image from "next/image";

interface FunctionalityItem {
  icon: string;
  title: string;
  description: string;
}

interface FunzionalitaProps {
  functionality: FunctionalityItem[];
}

export default function Funzionalita({ functionality }: FunzionalitaProps) {
  return (
    <section className="lg:px-32 lg:py-16 px-8 py-16 bg-white">
      <div className="flex flex-col gap-12">

        <h2 
          className="lg:text-[48px] lg:leading-[56px] text-[32px] leading-[40px] font-bold text-center" 
          style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
        >
          Funzionalità
        </h2>
        
        <p className="text-center text-base lg:text-lg mx-auto" style={{ color: COLORS.TEXT }}>
          Lorem ipsum tortor enim placerat in facilisis mattis ultrices congue risus mattis eu varius sollicitudin.
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 mt-8">
          {functionality.map((item, index) => (
            <div 
              key={index} 
              className={`flex lg:flex-col ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-4 text-left lg:text-center`}
            >
              <div className="lg:w-[160px] lg:h-[160px] w-[100px] h-[100px] flex flex-shrink-0 items-center justify-center">
                {/* Icon placeholder - replace with actual icon */}
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Image src={item.icon} alt={item.title} width={100} height={100} className="object-contain lg:w-[60px] w-[35px] h-auto" />
                </div>
              </div>
              <div>
                <h3 
                  className="text-xl font-semibold" 
                  style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_TITLE }}
                >
                  {item.title}
                </h3>
                
                <p className="text-sm" style={{ color: COLORS.TEXT }}>
                  {item.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

