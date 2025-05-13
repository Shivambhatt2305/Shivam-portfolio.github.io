"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, Phone, MapPin, Languages, Code } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-indigo-400 sm:text-4xl">About Me</h2>
          <div className="mx-auto h-1 w-20 bg-indigo-600"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden bg-gray-800 text-white shadow-xl">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-indigo-400">Personal Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <User className="h-5 w-5 text-indigo-400" />
                    <span>Shivam Bhatt</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-indigo-400" />
                    <span>shisa3023@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-indigo-400" />
                    <span>7016981083</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-indigo-400" />
                    <span>"RAMKRISHNA" 1-NAVAL NAGAR STREET MAVDI MAIN ROAD RAJKOT-360004</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Languages className="h-5 w-5 text-indigo-400" />
                    <span>English, Gujarati, Hindi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code className="h-5 w-5 shrink-0 text-indigo-400" />
                    <span>HTML, CSS, Javascript, Python, Java, SQL, Multisim, C, C++, PHP</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden bg-gray-800 text-white shadow-xl">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-indigo-400">Bio</h3>
                <p className="mb-4 leading-relaxed">
                  A passionate and driven ICT student currently in Semester 4, with a strong interest in AI, machine
                  learning, and software development.
                </p>
                <p className="mb-4 leading-relaxed">
                  Enthusiastic about building innovative tech solutions and actively participating in hackathons and
                  technical competitions.
                </p>
                <p className="leading-relaxed">
                  Demonstrates strong problem-solving and project management skills, with a continuous drive to learn
                  and explore emerging technologies to enhance efficiency and deliver impactful solutions in the tech
                  industry.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
