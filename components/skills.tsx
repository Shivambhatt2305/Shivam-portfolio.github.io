"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "HTML"},
      { name: "CSS"},
      { name: "JavaScript" },
      { name: "Python" },
      { name: "Java"},
      { name: "C" },
      { name: "C++" },
      { name: "PHP" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React.js" },
      { name: "Node.js"},
      { name: "Express.js" },
      { name: "TailwindCSS" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub"},
      { name: "SQL"},
      { name: "API Integration"},
      { name: "Arduino" },
      { name: "Raspberry Pi" },
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
                          <span className="text-indigo-400">{skill.level}</span>
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
