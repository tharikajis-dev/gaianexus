"use client";

import { useEffect, useState } from "react";
import { type Locale, locales } from "@/app/i18n/translations";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("gaia-locale") as Locale | null;
    if (saved && locales.includes(saved)) setLocale(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("gaia-locale", locale);
  }, [locale]);

  return [locale, setLocale] as const;
}
