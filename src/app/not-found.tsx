import { COLORS } from "@/lib/constants";

export default function RootNotFound() {
  return (
    <section className="lg:px-32 lg:py-24 px-8 py-16 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="flex flex-col items-center gap-6 max-w-lg">
        <h1
          className="text-[120px] leading-[1] lg:text-[180px] font-bold select-none"
          style={{
            fontFamily: "var(--font-jost)",
            background: COLORS.PRIMARY,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>
        <h2
          className="text-[24px] leading-[30px] lg:text-[32px] lg:leading-[38px] font-bold"
          style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT_TITLE }}
        >
          Page Not Found
        </h2>
        <p className="text-base lg:text-lg" style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-2 inline-flex items-center justify-center px-8 py-4 rounded-[16px] text-[18px] leading-[18px] font-bold text-white min-w-[240px]"
          style={{ background: COLORS.PRIMARY, fontFamily: "var(--font-jost)" }}
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
