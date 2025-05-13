"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    id: 1,
    degree: "B.Tech in Information and Communication Technology",
    institution: "Marwadi University, Rajkot",
    duration: "July 2023 to July 2027",
    details: ["1st semester SPI: 9.13", "2nd semester SPI: 8.33", "3rd semester SPI: 9.05", "Current CGPA & CPI: 8.83"],
  },
  {
    id: 2,
    degree: "12th Class",
    institution: "Gujarat Secondary and Higher Secondary Education Board",
    duration: "March 2022 to March 2023",
    details: ["Percentile Rank: 92.81", "Percentage: 75.38%"],
  },
  {
    id: 3,
    degree: "10th Class",
    institution: "Gujarat Secondary and Higher Secondary Education Board",
    duration: "March 2020 to May 2021",
    details: ["Percentile Rank: 99.83", "Percentage: 96.83%"],
  },
]

export default function Education() {
  return (
    <section id="education" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-indigo-400 sm:text-4xl">Education</h2>
          <div className="mx-auto h-1 w-20 bg-indigo-600"></div>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
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
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <p className="text-gray-300">{item.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-400">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{item.duration}</span>
                    </div>
                  </div>
                  <div className="mt-4 pl-10">
                    <ul className="list-disc space-y-1 pl-5 text-gray-300">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
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
