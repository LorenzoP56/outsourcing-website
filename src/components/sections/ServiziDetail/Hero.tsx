import { COLORS } from "@/lib/constants";

interface HeroProps {
  title: string;
  description: string;
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <section 
      className="lg:px-32 lg:py-24 px-8 py-16 flex flex-col gap-4 min-h-[50vh] justify-center"
      style={{ backgroundImage: 'url(/images/bgHero.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <h1 
        className="lg:text-[56px] lg:leading-[56px] text-[32px] leading-[32px] font-bold text-left" 
        style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}
      >
        {title}
      </h1>
      
      <p 
        className="text-lg lg:text-xl" 
        style={{ color: COLORS.TEXT_WHITE }}
      >
        {description}
      </p>
    </section>
  );
}

