"use client"
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion'
import { Menu, X, SquareTerminal } from 'lucide-react'
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations('NavBar');


  const setSection = (section: string) => {
    setMenuOpen(false);
    router.push(section)
  }

  

  return (
    <header className="fixed w-full z-10 dark:bg-black bg-gray-400 bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-2xl font-semibold flex items-center gap-2 font-[family-name:var(--font-geist-mono)]"
          >
            <SquareTerminal />Guilherme Duarte
          </motion.div>
          <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeSwitcher />
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <X /> : <Menu />}
                </Button>
              </div>
            </div>
          <motion.div
            className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto dark:bg-black bg-slate-100 md:bg-transparent`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {['home', 'skills', 'projects', 'contact'].map((section) => (
              <Button
                key={section}
                variant="ghost"
                className="capitalize font-[family-name:var(--font-geist-mono)]"
                onClick={() => setSection(section)}
              >
                {t(section)}
              </Button>
            ))}
          </motion.div>
        </nav>
      </header>
  )
}