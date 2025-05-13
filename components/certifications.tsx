"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar, Trophy } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const certificationsData = [
  {
    id: 1,
    title: "A7 SMART HOME AUTOMATION SESSION CERTIFICATE",
    organization: "IEEE SB SJCET, Palai",
    description:
      "The A7 Smart Home Automation session is about creating intelligent home systems using automation technologies to enhance convenience, security, and energy efficiency.",
  },
  {
    id: 2,
    title: "IEEE NETSIP 2024",
    organization: "IEEE",
    description:
      "Participated in IEEE NETSIP 2024, focused on networking, signal processing, and communication technologies.",
  },
  {
    id: 3,
    title: "Google AI/ML Workshop",
    organization: "Google Developer Student Club (GDSC) Patan",
    description:
      "Participated in the Google AI/ML Workshop organized by the Google Developer Student Club (GDSC) Patan, gaining hands-on experience with artificial intelligence and machine learning techniques.",
  },
  {
    id: 4,
    title: "FedEx SMART Hackathon",
    organization: "IIT Madras",
    description:
      "Participated in the FedEx SMART Hackathon organized by IIT Madras, showcasing innovative problem-solving and technical skills.",
  },
  {
    id: 5,
    title: "Smart India Hackathon - 2024",
    organization: "Smart India Hackathon",
    description: "Participated in Smart India Hackathon 2024 with Winning the 1st round (internal round).",
  },
  {
    id: 6,
    title: "IIT GUWAHATI CAMPUS IMMERSION PROGRAM 2024",
    organization: "IIT Guwahati",
    description:
      "Participated in the IIT Guwahati Campus Immersion Program 2024, gaining exposure to cutting-edge technologies and research in various engineering disciplines.",
  },
]

const hackathonsData = [
  {
    id: 1,
    title: "IEEE SSH CODETHONE-2024",
    achievement: "First runner-up position in the first phase",
    description:
      "We Participated in IEEE SSH Codethon 2024, a hackathon focused on solving real-world technical challenges, securing the first runner-up position in the first phase by delivering innovative solutions.",
  },
  {
    id: 2,
    title: "Smart India Hackathon - 2024",
    achievement: "Won the 1st round (internal round)",
    description: "Participated in Smart India Hackathon 2024 with Winning the 1st round (internal round).",
  },
  {
    id: 3,
    title: "FedEx SMART Hackathon",
    achievement: "Participation",
    description:
      "Participated in the FedEx SMART Hackathon organized by IIT Madras, showcasing innovative problem-solving and technical skills.",
  },
  {
    id: 4,
    title: "TIC TECH TOE 2025",
    achievement: "Participation",
    description: "I participated in the TIC TECH TOE 2025 Hackathon, organized by IEEE SB DAIICT.",
  },
]

const activitiesData = [
  {
    id: 1,
    title: "Robowar-2024",
    description:
      "Organized and contributed as a volunteer and creator for Robowar 2024 during the college fest, designing robotic weapon-loaded mini cars for the competition.",
  },
  {
    id: 2,
    title: "Byte Hunt IOT Trail",
    description:
      "Volunteered in the Byte Hunt IoT Trail organized by the Circuitology Club during the college fest, contributing to event management and execution.",
  },
  {
    id: 3,
    title: "Marwadi University AIM-2025",
    description: "Volunteering in MU AIM Organized by Marwadi University.",
  },
  {
    id: 4,
    title: "IEEE NETSIP-2024",
    description:
      "Participated in IEEE NETSIP 2024, focusing on advancements in networking, signal processing, and communication technologies.",
  },
  {
    id: 5,
    title: "Robofest 4.0 -2023",
    description: "Participated in RoboFest 4.0 (2023), demonstrating skills in robotics and automation.",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-indigo-400 sm:text-4xl">Certifications & Activities</h2>
          <div className="mx-auto h-1 w-20 bg-indigo-600"></div>
        </motion.div>

        <Tabs defaultValue="certifications" className="w-full">
          <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3 bg-gray-800">
            <TabsTrigger value="certifications" className="data-[state=active]:bg-indigo-600">
              Certifications
            </TabsTrigger>
            <TabsTrigger value="hackathons" className="data-[state=active]:bg-indigo-600">
              Hackathons
            </TabsTrigger>
            <TabsTrigger value="activities" className="data-[state=active]:bg-indigo-600">
              Activities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="certifications" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden bg-gray-800 text-white shadow-xl">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-full bg-indigo-600/20 p-2">
                          <Award className="h-5 w-5 text-indigo-400" />
                        </div>
                        <h3 className="text-lg font-semibold">{cert.title}</h3>
                      </div>
                      <p className="mb-3 text-sm font-medium text-indigo-400">{cert.organization}</p>
                      <p className="text-sm text-gray-300">{cert.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hackathons" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {hackathonsData.map((hack, index) => (
                <motion.div
                  key={hack.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden bg-gray-800 text-white shadow-xl">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-full bg-indigo-600/20 p-2">
                          <Trophy className="h-5 w-5 text-indigo-400" />
                        </div>
                        <h3 className="text-lg font-semibold">{hack.title}</h3>
                      </div>
                      <p className="mb-3 text-sm font-medium text-indigo-400">{hack.achievement}</p>
                      <p className="text-sm text-gray-300">{hack.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activities" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activitiesData.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden bg-gray-800 text-white shadow-xl">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-full bg-indigo-600/20 p-2">
                          <Calendar className="h-5 w-5 text-indigo-400" />
                        </div>
                        <h3 className="text-lg font-semibold">{activity.title}</h3>
                      </div>
                      <p className="text-sm text-gray-300">{activity.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
