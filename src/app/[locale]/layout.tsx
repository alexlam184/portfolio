import "@/app/globals.css";
import React from "react";
import { notFound } from "next/navigation";
import { createTranslator, NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { Providers } from "@/app/providers";
import { Analytics } from "@vercel/analytics/react";
type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = (await import(`@/messages/${locale}.json`)).default;

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages });

  return {
    title: `Alex Lam - ${t("LocaleLayout.title")}`,
    description: "building shit with dream",
    icons: [
      { rel: "icon", url: "/icon.png" },
      { rel: "apple", url: "/icon.png" },
    ],
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html className="h-full" lang={locale}>
      <body
        className="flex h-full flex-col"
        // suppressHydrationWarning={true}
      >
        {/**NextIntlClientProvider for client component */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            {children}
            <Analytics />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
