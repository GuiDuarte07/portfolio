"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Menu, X, ExternalLink, SquareTerminal } from 'lucide-react'
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const skills = [
    "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL",
    "TypeScript", "Python", "Docker", "AWS", "GraphQL", "TailwindCSS"
  ]

  const projects = [
    {
      name: "E-commerce Platform",
      description: "Full-stack online store with real-time inventory management and secure payment processing.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com/ecommerce"
    },
    {
      name: "Task Management App",
      description: "Collaborative project management tool with real-time updates, task assignment, and progress tracking.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com/taskmanager"
    },
    {
      name: "AI-powered Chatbot",
      description: "Natural language processing bot for customer support, integrated with knowledge base and ticket system.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com/aichatbot"
    },
    {
      name: "Data Visualization Dashboard",
      description: "Interactive charts and graphs for big data analysis, with customizable views and real-time data updates.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://example.com/dataviz"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-slate-900 text-white">
      <header className="fixed w-full z-10 bg-black bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold flex items-center gap-2"
          >
            <SquareTerminal />Guilherme Duarte
          </motion.div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          <motion.div
            className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {['home', 'skills', 'projects', 'contact'].map((section) => (
              <Button
                key={section}
                variant="ghost"
                className="capitalize"
                onClick={() => {
                  setActiveSection(section)
                  setMenuOpen(false)
                }}
              >
                {section}
              </Button>
            ))}
          </motion.div>
        </nav>
      </header>

      <main className="container mx-auto px-6 pt-24">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.section
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen flex flex-col justify-center"
            >
              <h1 className="text-6xl font-bold mb-4">Hello, I'm Guilherme Duarte</h1>
              <p className="text-2xl mb-8">Full-Stack Developer & Creative Problem Solver</p>
              <div className="flex space-x-4">
                <Button variant="outline"><Github className="mr-2" /> GitHub</Button>
                <Button variant="outline"><Linkedin className="mr-2" /> LinkedIn</Button>
              </div>
            </motion.section>
          )}

          {activeSection === 'skills' && (
            <motion.section
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen flex flex-col justify-center"
            >
              <h2 className="text-4xl font-bold mb-8">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white bg-opacity-10 rounded-lg p-4 text-center hover:bg-opacity-20 transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === 'projects' && (
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
                        <CardDescription className="mt-2">{project.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === 'contact' && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen flex flex-col justify-center"
            >
              <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
              <form className="space-y-4 max-w-md">
                <Input type="text" placeholder="Your Name" className="bg-white bg-opacity-10 border-none" />
                <Input type="email" placeholder="Your Email" className="bg-white bg-opacity-10 border-none" />
                <Textarea placeholder="Your Message" className="bg-white bg-opacity-10 border-none" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

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
  )
}