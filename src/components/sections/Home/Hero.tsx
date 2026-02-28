import { COLORS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { getTranslations } from 'next-intl/server';

export default async function Hero() {
  const t = await getTranslations('Home');

  return (
    <section
      className="min-h-[70vh] xl:min-h-[90vh] md:pl-16 lg:pl-32 lg:pr-0 lg:py-16 p-8 hero-bg flex items-center"
    >
      <div className="flex flex-col lg:w-[50vw] w-full h-full justify-center gap-8">
        <div className="flex flex-col gap-4">
          <h1
            className="text-[32px] leading-[40px] min-[500px]:text-[40px] min-[500px]:leading-[48px] lg:text-[56px] lg:leading-[64px] font-bold hero-anim"
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_TITLE }}
          >
            {t('hero.title')}
          </h1>
          <p
            className="text-base hero-anim"
            style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT, animationDelay: '0.15s' }}
          >
            {t.rich('hero.description', {
              bold: (chunks) => <span className="font-bold">{chunks}</span>
            })}
            <br />
            <br />
            {t.rich('hero.description2', {
              bold: (chunks) => <span className="font-bold">{chunks}</span>
            })}
          </p>
        </div>

        <div className="flex gap-6 lg:flex-row flex-col">
          <div
            className="hero-anim transition-transform hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97]"
            style={{ animationDelay: '0.3s' }}
          >
            <Button href="#form" className="lg:min-w-[300px]">
              {t('hero.ctaContact')}
            </Button>
          </div>
          <div
            className="hero-anim transition-transform hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97]"
            style={{ animationDelay: '0.4s' }}
          >
            <Button
              href="/servizi"
              className="lg:min-w-[300px]"
              style={{ background: 'white', color: COLORS.TEXT, border: '2px solid #E5E7EB' }}
            >
              {t('hero.ctaServices')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
