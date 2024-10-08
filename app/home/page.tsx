"use client"
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

import { Button } from "@/components/ui/button"
import Head from 'next/head'
import Link from 'next/link'
import { useTranslations } from 'next-intl'



export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
    <Head>
      <title>Portfolio: Guiherme Duarte</title>
    </Head>
    <motion.section
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center"
    >
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="text-2xl mb-8">{t('sub-title')}</p>
      <div className="flex space-x-4">
        <Button asChild variant="secondary">
          <Link href='https://github.com/GuiDuarte07' target='__blank'> <Github className="mr-2"  /> GitHub </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href='https://www.linkedin.com/in/guilduarte07/' target='__blank'> <Linkedin className="mr-2"  /> LinkedIn </Link>
        </Button>
      </div>
    </motion.section>
    </>
  )
}