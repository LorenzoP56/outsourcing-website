import { getTranslations } from "next-intl/server";
import { generateFAQSchema, jsonLdScript } from "@/lib/jsonld";

const FAQ_KEYS = ["q1", "q2", "q3", "q4"] as const;

export default async function FaqSchema() {
  const t = await getTranslations("FAQ");

  const faqs = FAQ_KEYS.map((key) => ({
    question: t(`questions.${key}.question`),
    answer: t(`questions.${key}.answer`),
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={jsonLdScript(generateFAQSchema(faqs))}
    />
  );
}
