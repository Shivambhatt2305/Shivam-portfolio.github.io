"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "C", level: 75 },
      { name: "C++", level: 70 },
      { name: "PHP", level: 65 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 65 },
      { name: "TailwindCSS", level: 80 },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "SQL", level: 75 },
      { name: "API Integration", level: 80 },
      { name: "Arduino", level: 70 },
      { name: "Raspberry Pi", level: 65 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-indigo-400 sm:text-4xl">Technical Skills</h2>
          <div className="mx-auto h-1 w-20 bg-indigo-600"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden bg-gray-800 text-white shadow-xl">
                <CardContent className="p-6">
                  <h3 className="mb-6 text-xl font-semibold text-indigo-400">{category.category}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="mb-1 flex justify-between">
                          <span>{skill.name}</span>
                          <span className="text-indigo-400">{skill.level}%</span>
                        </div>
                        <Progress
                          value={skill.level}
                          className="h-2 bg-gray-700"
                          indicatorClassName="bg-gradient-to-r from-indigo-600 to-violet-600"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
