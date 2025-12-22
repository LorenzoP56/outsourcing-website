import { COLORS } from "@/lib/constants";
import Image from "next/image";

interface DetailedContent {
  title: string;
  imageDesktop: string;
  imageMobile: string;
  paragraphs: string[];
}

interface ServiceContentProps {

  detailedContent: DetailedContent;
}

export default function ServiceContent({ detailedContent }: ServiceContentProps) {
  return (
    <section className="lg:px-32 lg:py-16 px-8 py-16 bg-white">
      <div className="flex lg:flex-row flex-col gap-12 items-center">
        <div className="lg:w-1/2 w-full">
          <Image 
            src={detailedContent.imageDesktop} 
            alt={detailedContent.title} 
            width={600} 
            height={500} 
            className="hidden lg:block w-full h-auto rounded-lg"
          />
          <Image 
            src={detailedContent.imageMobile} 
            alt={detailedContent.title} 
            width={600} 
            height={500} 
            className="block lg:hidden w-full h-auto rounded-lg"
          />
        </div>
        
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <h2 
            className="lg:text-[40px] lg:leading-[48px] text-[28px] leading-[36px] font-bold" 
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}
          >
            {detailedContent.title}
          </h2>
          
          <div className="flex flex-col gap-4">
            {detailedContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed"
                style={{ color: COLORS.TEXT,fontFamily: 'var(--font-asap)' }}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

