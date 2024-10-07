"use client"

import { motion } from 'framer-motion'

const skills = [
  "React", "Next.js", "Node.js", "Express", "PostgreSQL",
  "TypeScript", "Docker", "AWS", "Angular", "TailwindCSS"
]

export default function Skills() {
  return (
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
  )
}