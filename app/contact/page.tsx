"use client"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <motion.section
      key="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold mb-8">{t('title')}</h2>
      <form className="space-y-4 max-w-md">
        <Input type="text" placeholder="Your Name" className="bg-white bg-opacity-10 border-none" />
        <Input type="email" placeholder="Your Email" className="bg-white bg-opacity-10 border-none" />
        <Textarea placeholder="Your Message" className="bg-white bg-opacity-10 border-none" />
        <Button type="submit" className="w-full">{t('submit')}</Button>
      </form>
    </motion.section>
  )
}