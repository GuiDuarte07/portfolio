import localFont from "next/font/local";
import "./globals.css";
import { Github, Linkedin, Mail } from "lucide-react";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen bg-gradient-to-br from-gray-700 to-slate-900 text-white">
            <Header></Header>

            <Main>{children}</Main>

            <footer className="container mx-auto px-6 py-4 mt-12">
              <div className="flex justify-center space-x-4">
                <a href="#" className="hover:text-purple-300 transition-colors">
                  <Github />
                </a>
                <a href="#" className="hover:text-purple-300 transition-colors">
                  <Linkedin />
                </a>
                <a href="#" className="hover:text-purple-300 transition-colors">
                  <Mail />
                </a>
              </div>
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
