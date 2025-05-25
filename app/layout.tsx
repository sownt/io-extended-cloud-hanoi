import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BrowserProvider } from "@/components/BrowserProvider";
import localFont from "next/font/local";
import AppCheckProvider from "@/components/AppCheckProvider";
import { Toaster } from "@/components/ui/sonner";

const googleSans = localFont({
  src: [
    {
      path: "../public/fonts/GoogleSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GoogleSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/GoogleSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/GoogleSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/GoogleSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/GoogleSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-google-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ""),
  title: "Google Cloud Next Extended Hanoi 2025",
  description: "By GDG Cloud Hanoi",
  keywords: ["AI", "Cloud", "GDG", "Hanoi", "Google"],
  openGraph: {
    title: "Google Cloud Next Extended Hanoi 2025",
    description: "By GDG Cloud Hanoi",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    siteName: "Google Cloud Next Extended Hanoi 2025",
    type: "website",
    locale: "vi_VN",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${googleSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <BrowserProvider>
              <AppCheckProvider>
                <div className="bg-white dark:bg-zinc-900">
                  {children}
                  <Toaster />
                </div>
              </AppCheckProvider>
            </BrowserProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
