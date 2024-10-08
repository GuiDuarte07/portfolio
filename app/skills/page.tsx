"use client";

import { motion } from "framer-motion";
import {
  ReactOriginal,
  NextjsOriginal,
  NodejsOriginal,
  DockerPlain,
  ExpressOriginalWordmark,
  PostgresqlOriginal,
  TypescriptOriginal,
  JavascriptOriginal,
  AngularOriginal,
  AmazonwebservicesOriginalWordmark,
  TailwindcssOriginal,
  DotnetcorePlain,
  RabbitmqOriginal
} from "devicons-react";
import { useTranslations } from "next-intl";
import Timeline from "@/components/timeline/Timeline";

const skills: { name: string, icon: JSX.Element }[] = [
  { name: "JavaScript", icon: <JavascriptOriginal size={24}></JavascriptOriginal> },
  { name: "TypeScript", icon: <TypescriptOriginal size={24}></TypescriptOriginal> },
  { name: "React", icon: <ReactOriginal size={24}></ReactOriginal> },
  { name: "Next.js", icon: <NextjsOriginal size={24}></NextjsOriginal> },
  { name: "Node.js", icon: <NodejsOriginal size={24}></NodejsOriginal> },
  { name: "TailwindCSS", icon: <TailwindcssOriginal size={24}></TailwindcssOriginal> },
  { name: "Express", icon: <ExpressOriginalWordmark size={24}></ExpressOriginalWordmark> },
  { name: "Angular", icon: <AngularOriginal size={24}></AngularOriginal> },
  { name: ".Net", icon: <DotnetcorePlain size={24}></DotnetcorePlain> },
  { name: "PostgreSQL", icon: <PostgresqlOriginal size={24}></PostgresqlOriginal> },
  { name: "Docker", icon: <DockerPlain size={24}></DockerPlain> },
  { name: "Rabbitmq", icon: <RabbitmqOriginal size={24}></RabbitmqOriginal> },
  { name: "AWS", icon: <AmazonwebservicesOriginalWordmark size={24}></AmazonwebservicesOriginalWordmark> },
];

export default function Skills() {

  const t = useTranslations("skills");

  return (
    <motion.section
      key="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-mono)]">{t('title')}</h2>

      {/* Skills */}
      <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white bg-opacity-10 rounded-lg p-1 text-center hover:bg-opacity-20 transition-all flex gap-2 items-center justify-center font-[family-name:var(--font-geist-mono)]"
          >
            {skill.icon}<span className="text-xs">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      {/* TimeLine */}
      {/* <h2 className="mt-10 text-4xl font-bold mb-8 font-[family-name:var(--font-geist-mono)]">{t('timeline.title')}</h2>

      <Timeline></Timeline> */}
    </motion.section>
  );
}
