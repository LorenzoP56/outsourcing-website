import { COLORS } from "@/lib/constants";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <section className="lg:px-32 lg:py-32 px-8 py-16 flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
      <h1
        className="lg:text-[72px] lg:leading-[72px] text-[48px] leading-[48px] font-bold"
        style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_TITLE }}
      >
        404
      </h1>
      <h2
        className="lg:text-[32px] lg:leading-[32px] text-[24px] leading-[24px] font-bold"
        style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_TITLE }}
      >
        {t('title')}
      </h2>
      <p className="text-base max-w-md" style={{ color: COLORS.TEXT }}>
        {t('description')}
      </p>
      <Link
        href="/"
        className="mt-4 px-8 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-90"
        style={{ background: COLORS.PRIMARY }}
      >
        {t('backToHome')}
      </Link>
    </section>
  );
}
