"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type IntlContextValue = {
  locale: string;
  setLocale: (l: string) => void;
  t: (key: string, fallback?: string) => string;
};

const IntlContext = createContext<IntlContextValue | undefined>(undefined);

function flattenMessages(obj: any, prefix = ""): Record<string, string> {
  return Object.keys(obj).reduce((acc, k) => {
    const val = obj[k];
    const pref = prefix ? `${prefix}.${k}` : k;
    if (typeof val === "string") acc[pref] = val;
    else Object.assign(acc, flattenMessages(val, pref));
    return acc;
  }, {} as Record<string, string>);
}

export function IntlProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<string>(() => {
    // default to 'en' on the server
    if (typeof window === "undefined") return "en";

    // prefer saved locale
    const saved = localStorage.getItem("locale");
    if (saved) return saved;

    // use browser language if it's supported (en or tr), otherwise default to en
    const nav = navigator.language?.split("-")[0];
    return nav === "tr" ? "tr" : "en";
  });

  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const res = await fetch(`/locales/${locale}.json`);
        const json = await res.json();
        if (!mounted) return;
        setMessages(flattenMessages(json));
      } catch (e) {
        console.error("Failed to load locale", locale, e);
        setMessages({});
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, [locale]);

  const setLocale = (l: string) => {
    setLocaleState(l);
    try {
      localStorage.setItem("locale", l);
    } catch {}
  };

  const t = (key: string, fallback = "") => {
    if (!messages) return fallback || key;
    return messages[key] ?? fallback ?? key;
  };

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, messages]);

  return <IntlContext.Provider value={value}>{children}</IntlContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(IntlContext);
  if (!ctx) throw new Error("useI18n must be used within IntlProvider");
  return ctx;
}

export function LocaleSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <label className="inline-flex items-center gap-2">
      <span className="sr-only">Select language</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        className={
          "h-12 rounded-full border border-gray-300 px-4 text-left text-sm text-gray-800 shadow-theme-xs appearance-none " +
          "placeholder:text-sm placeholder:text-gray-400 disabled:opacity-70 " +
          "focus:border-primary-300 focus:outline-0 focus:ring-3 focus:ring-primary-300/20 " +
          "dark:border-gray-700 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-primary-500"
        }
      >
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
      </select>
    </label>
  );
}

export default IntlProvider;
