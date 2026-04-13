import en from "@/messages/en.json";
import ta from "@/messages/ta.json";
import zh from "@/messages/zh.json";
import ar from "@/messages/ar.json";

export const locales = ["en", "ta", "zh", "ar"] as const;
export type Locale = (typeof locales)[number];

export const messages = { en, ta, zh, ar } as const;
export type Messages = typeof en;

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ta: "தமிழ்",
  zh: "中文",
  ar: "العربية",
};

export function getMessages(locale: Locale): Messages {
  return messages[locale] as Messages;
}
