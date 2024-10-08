import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

const events = ["ads", "csj", "ufersa"];

export default function Timeline() {
  const t = useTranslations("skills.timeline");

  return (
    <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4 my-2">
      {events.map((event) => (
        <div key={event} className="mb-6 ml-4">
          {/* Esfera */}
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />

          <div className="pl-4">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-geist-mono)]">
              {t(`${event}.title`)}{" "}
              <Badge className="mt-2 text-xs">{t(`${event}.type`)}</Badge>
            </h3>
            <span className="text-sm text-gray-500 font-[family-name:var(--font-geist-sans)]">
              {t(`${event}.period`)}
            </span>
            <p className="text-sm darktext-gray-700 text-gray-300 mt-1 font-[family-name:var(--font-geist-sans)]">
              {t(`${event}.description`)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
