import localFont from "next/font/local";
import "./globals.css";
import { Github, Linkedin, Mail } from "lucide-react";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: 'Portfolio - Guilherme Duarte',
  description: 'Esse é meu portfolio web.',
  icons: {
    icon: "../favicon.svg"
  }
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen bg-gradient-to-br dark:from-gray-700 dark:to-slate-900 dark:text-white from-white to-slate-200 text-black">
            <Header></Header>

            <Main>{children}</Main>

            <footer className="container mx-auto px-6 py-4 mt-12">
              <div className="flex justify-center space-x-4">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/GuiDuarte07" className="hover:text-purple-300 transition-colors">
                  <Github />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/guilduarte07/" className="hover:text-purple-300 transition-colors">
                  <Linkedin />
                </a>
                <a rel="noopener noreferrer" href="mailto:guilhduart.abr@gmail.com" className="hover:text-purple-300 transition-colors">
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
