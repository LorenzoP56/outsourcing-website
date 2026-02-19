"use client";

import { COLORS } from "@/lib/constants";

export default function RootError({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="lg:px-32 lg:py-24 px-8 py-16 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="flex flex-col items-center gap-6 max-w-lg">
        <h1
          className="text-[80px] leading-[1] lg:text-[120px] font-bold select-none"
          style={{
            fontFamily: "var(--font-jost)",
            background: COLORS.PRIMARY,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          500
        </h1>
        <h2
          className="text-[24px] leading-[30px] lg:text-[32px] lg:leading-[38px] font-bold"
          style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT_TITLE }}
        >
          Something went wrong
        </h2>
        <p className="text-base lg:text-lg" style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT }}>
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="mt-2 inline-flex items-center justify-center px-8 py-4 rounded-[16px] text-[18px] leading-[18px] font-bold text-white min-w-[240px]"
          style={{ background: COLORS.PRIMARY, fontFamily: "var(--font-jost)" }}
        >
          Try again
        </button>
      </div>
    </section>
  );
}
