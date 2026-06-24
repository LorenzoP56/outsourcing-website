"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

// Regolamento IMQ (Reg. Marks rev. 16) e IQNet Brand Guidelines 2022:
// - il marchio IQNet va posto alla destra del marchio IMQ Certified
// - dimensioni IQNet mai superiori al marchio IMQ, minimo digitale 85px
// - proporzioni dei marchi non alterabili, spaziatura tra i marchi 1/4x-1/2x
export default function LogoBadges({ size = "md" }: { size?: "md" | "lg" }) {
  const t = useTranslations("Certificazioni");
  const imqClass = size === "lg" ? "h-[170px] w-auto" : "h-[140px] w-auto";
  const iqnetClass = size === "lg" ? "h-[120px] w-auto" : "h-[100px] w-auto";

  return (
    <div className="flex flex-row items-center justify-center gap-8 flex-wrap">
      <Image
        src="/website_images/Certificazioni/imq-sgq-iso-9001-certificazione-qualita.svg"
        alt={t("logos.imqAlt")}
        width={170}
        height={201}
        className={imqClass}
      />
      <Image
        src="/website_images/Certificazioni/iqnet-recognized-certification.png"
        alt={t("logos.iqnetAlt")}
        width={202}
        height={202}
        className={iqnetClass}
      />
    </div>
  );
}
