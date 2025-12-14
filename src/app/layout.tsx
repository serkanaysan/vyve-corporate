import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Onest } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "./providers/toaster";
import IntlProvider from "./providers/intl";

const onest = Onest({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vyve City | Şehri Keşfetmenin Yeni Yolu",
    template: "%s | AIStarterKit OSS Demo",
  },
  description: "Vyve City, şehir keşfini yeniden tanımlayan yenilikçi bir platformdur. Kullanıcıların şehir içindeki en iyi mekanları, etkinlikleri ve deneyimleri keşfetmelerine olanak tanır. İster yerel bir saklı cevheri arıyor olun, ister yeni bir maceraya atılmak isteyin, Vyve City size rehberlik eder ve şehir yaşamını zenginleştirir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-gray-50 dark:bg-dark-secondary min-h-screen flex flex-col ${onest.className}`}
      >
        <ThemeProvider disableTransitionOnChange>
          {/* ToasterProvider must render before the children components */}
          {/* https://github.com/emilkowalski/sonner/issues/168#issuecomment-1773734618 */}
          <ToasterProvider />

          <IntlProvider>
            <div className="isolate flex flex-col flex-1">{children}</div>
          </IntlProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
