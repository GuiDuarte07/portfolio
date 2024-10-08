"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

const projects = [
  {
    key: "campoMinado",
    image: "/images/campominado.jfif",
    link: "https://github.com/GuiDuarte07/Minesweeper",
  },
  {
    key: "xadrez",
    image: "/images/xadrez.jfif",
    link: "https://github.com/GuiDuarte07/Chess-game_test",
  },
  {
    key: "jogoDosNumeros",
    image: "/images/jogodosnumeros.jfif",
    link: "https://github.com/GuiDuarte07/Jogo-dos-numeros",
  },
  {
    key: "controleCerto",
    image: "/images/controlecerto.png",
    link: "https://github.com/GuiDuarte07/controlecerto_frontend",
  },
];

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <motion.section
      key="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold mb-8">{t("title")}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.key}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={t(`${project.key}.name`)} // Usando a tradução para o nome do projeto
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>{t(`${project.key}.name`)}</CardTitle>
                <CardDescription className="mt-2">
                  {t(`${project.key}.description`)}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('view-project')} <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
