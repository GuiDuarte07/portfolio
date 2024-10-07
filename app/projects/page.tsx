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

const projects = [
  {
    name: "Campo Minado",
    description:
      "Campo minado é um jogo muito interessante, tanto para jogar quanto para desenvolver, geralmente não enxergamos o uso de recursividade no uso de funções, mas isso tem um papel muito importante para simplificar e facilitar o código que um jogo como esse. Feito apenas com Javascript, HTML e CSS, em 2021.",
    image: "/images/campominado.jfif",
    link: "https://example.com/ecommerce",
  },
  {
    name: "Xadrez",
    description:
      "De forma a colocar em prática o estudo da API Drag and Drop do HTML, desenvolvi esse projeto de um jogo de xadrez que usa o DnD para movimentar as peças. Ele não está completo (apresenta alguns bugs) mas foi um projeto satisfatório para os fins propostos.",
    image: "/images/xadrez.jfif",
    link: "https://github.com/GuiDuarte07/Chess-game_test",
  },
  {
    name: "Jogo dos Números",
    description:
      "Não sei dizer qual o nome desse jogo, chamei de Jogo dos Numeros, foi um projeto muito divertido de se fazer, usando react. Quem já tentou fazer esse tipo de evento de drag ou mousemove no react sabe o quanto é complicado de fazer, então o meu objeto foi fazer funcionar da forma mais simples possível essa movimentação de peça usando conceitos de \"Drag'n'Drop with mouse events\"",
    image: "/images/jogodosnumeros.jfif",
    link: "https://github.com/GuiDuarte07/Jogo-dos-numeros",
  },
  {
    name: "Controle Certo",
    description:
      "Controle Certo é um aplicativo de gerenciamento de despesas e receitas. O objetivo desse site é permitir um controle maior dos gastos do usuário, a fim de melhorar a saúde financeira dele. O diferencial do Controle Certo é sua interface amigável e de fácil compreensão. Nesse site, é possível registrar suas contas, cartões e separar suas receitas e despesas por categorias, sendo possível também ter um controle das faturas dos cartões cadastrados.",
    image: "/images/controlecerto.png",
    link: "https://github.com/GuiDuarte07/controlecerto_frontend",
  },
];

export default function Projects() {
  return (
    <motion.section
      key="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
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
