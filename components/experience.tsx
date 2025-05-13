"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experienceData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Lexpert",
    duration: "Dec 2024 - Present",
    responsibilities: [
      "Co-founded and contributed to the development of Lexpert, a modern legal tech platform offering innovative solutions for legal professionals and clients.",
      "Designed and implemented scalable software systems, ensuring seamless user experience and functionality.",
      "Collaborated with a multidisciplinary team to drive platform growth and feature development.",
      "Played a key role in strategizing the platform's technical roadmap and business expansion.",
    ],
  },
  {
    id: 2,
    title: "Internship Project Leader | Hardware and Software Engineer",
    company: "Smart Helmet for Mining Workers",
    duration: "Oct 2024 to April 2025",
    responsibilities: [
      "Led the development of a smart helmet designed to enhance the safety and efficiency of mining workers.",
      "Conducted in-depth research to identify and implement innovative safety features tailored to the mining industry.",
      "Managed both hardware and software aspects of the project, including sensor integration, data processing, and real-time monitoring systems.",
      "Oversaw the end-to-end implementation of the project, ensuring technical accuracy and practical applicability.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-indigo-400 sm:text-4xl">Work Experience</h2>
          <div className="mx-auto h-1 w-20 bg-indigo-600"></div>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-l-4 border-indigo-600 bg-gray-800 text-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-indigo-600 p-2">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-300">{item.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-400">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{item.duration}</span>
                    </div>
                  </div>
                  <div className="mt-4 pl-10">
                    <ul className="list-disc space-y-2 pl-5 text-gray-300">
                      {item.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
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
