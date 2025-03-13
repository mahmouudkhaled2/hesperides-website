import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

import Providers from "../_store/Providers";

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const t = await getTranslations({ locale });
  return {
    title: t("meta-title"),
    description: t("meta-description"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LayoutProps) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="bg-[#f8f8f8]">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
