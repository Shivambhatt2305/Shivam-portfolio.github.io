"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/button"
import { Code, Calendar, ExternalLink } from "lucide-react"

const projectsData = [
  {
    id: 1,
    title: "BlendBazzar - An E-commerce Website",
    date: "January 2025",
    description:
      'Developed "BlendBazzar" - an e-commerce platform specializing in fashion and accessories across all gender categories. The website features a comprehensive collection of clothes, shoes, and watches with an intuitive user interface for seamless shopping experience. Implemented secure payment integration, robust product filtering, and responsive design to enhance user engagement and streamline the purchasing process.',
    technologies: ["HTML", "CSS", "SQL", "Python", "Javascript"],
    category: "web",
  },
  {
    id: 2,
    title: "Life-Link: Decentralized Organ Donation and Allocation system",
    date: "September 2024 to November 2024",
    description:
      "The project, developed as part of the IEEE SSH Codethon 2024 Hackathon, involves organizing the transportation of organs between different hospitals to ensure safe and timely delivery. It also includes the collection of organs from patients who wish to donate them, ensuring proper coordination and logistics throughout the process. The solution leverages innovative technology to optimize the logistics and track the organs in real-time for safe delivery.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "SQL"],
    category: "web",
  },
  {
    id: 3,
    title: "Lexpert",
    date: "December 2024 to present",
    description:
      "This will help people for who finding the best lawyers and judges in their cities or states with great achievements and easy to meet on online platforms with best conversations and overall experience of users. With it user can easily communicate with lawyers and judges and lawyers can efficiently interrogate the users.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "SQL"],
    category: "web",
  },
  {
    id: 4,
    title: "Automatic Floor Cleaning Robot",
    date: "August 2023 to December 2023",
    description:
      "In my Semester 1 project, I developed a floor cleaning robot as part of our Fundamentals Skill of Sensor Interfacing (FSSI) project under the guidance of Prof. Vijay Dubey. The robot was constructed using ultrasonic sensors, motors, a water pump, a mop, and an Arduino Uno, demonstrating our ability to integrate various hardware components effectively. This project aimed to create an efficient and automated cleaning solution. For the next stage, we plan to incorporate a LiDAR sensor to enhance the robot's navigation and obstacle detection capabilities, further improving its overall functionality and performance.",
    technologies: ["Arduino", "Ultrasonic Sensors", "Water Pump", "Motors"],
    category: "hardware",
  },
  {
    id: 5,
    title: "LogiTrack",
    date: "December 2024 to January 2025",
    description:
      "Designed and implemented a route optimization tool for courier transfers as part of the FedEx Hackathon 2025. The system integrates multiple transportation modes, including road, rail, sea, and air, utilizing advanced algorithms to analyze factors such as distance, cost, and delivery time. This solution enhances logistics efficiency, optimizes route selection, and streamlines supply chain operations, leading to reduced delivery costs and improved overall performance.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "React.js", "Python", "TomTom API", "OSRM API"],
    category: "web",
  },
  {
    id: 6,
    title: "AuthentiQ",
    date: "October 2024 to November 2024",
    description:
      "Developed a system to detect and filter fake reviews, enhancing credibility in online feedback. The platform analyzes text patterns using sentiment analysis to assign accurate star ratings while excluding fake reviews from overall calculations. It features automated email alerts for critical reviews, prompting timely action, and a user friendly interface. Built with Python, Text Analysis, SQLite, and Email Automation, the system is scalable across industries, ensuring transparent and reliable review management for improved business trustworthiness.",
    technologies: ["Python", "HTML", "CSS", "Javascript"],
    category: "ai",
  },
  {
    id: 7,
    title: "Career-Crafters: A Student Counseling Web",
    date: "August 2024 to October 2024",
    description:
      'I developed an educational guidance website as part of the Smart India Hackathon 2024 hackathon, featuring dual functionality: a manual exploration mode for browsing colleges, courses, and scholarships, and "Your Buddy" - an AI chatbot that provides personalized recommendations based on student profiles. This system helps users navigate Indian higher education options, emerging job markets, and scholarship opportunities, making education planning more accessible and informed.',
    technologies: ["HTML", "CSS", "Javascript", "ML", "Python"],
    category: "ai",
  },
  {
    id: 8,
    title: "Smart Helmet",
    date: "October 2024 to present",
    description:
      "I completed an internship project on a Smart Helmet designed for underground mining workers, which I am still actively involved in. The primary objective was to develop a system that sends real-time data to a database for analysis, enabling efficient decision-making and fast information transfer to the workers. The Smart Helmet is equipped with sensors that continuously monitor the miner's signs as well as environmental parameters, facilitating real-time analysis and enhanced safety. This project showcases my ongoing contribution to improving worker safety through innovative technology.",
    technologies: [
      "Temperature Sensor",
      "Humidity Sensor",
      "Light Sensor",
      "Vibration Sensor",
      "Gas Sensor",
      "Accelerometer",
    ],
    category: "hardware",
  },
  {
    id: 9,
    title: "Transbuddy",
    date: "August 2024 to November 2024",
    description:
      "Developed a smart college transportation system using Python and OpenCV for demand-based bus allocation, featuring facial recognition for student verification and automated bus assignments from CSV data. System optimizes routes based on capacity and demand, with planned GPS tracking and predictive analytics capabilities.",
    technologies: ["Python", "HTML", "CSS", "Javascript", "TomTom Map API", "Raspberry Pi-4", "Camera Module"],
    category: "ai",
  },
  {
    id: 10,
    title: "MediCare",
    date: "January 2025 to Present",
    description:
      "Developed an AI-based medical assistance system designed to improve healthcare efficiency by offering two main functionalities: prescription assistance and emergency response. The system allows users to input their symptoms through an interactive questionnaire, which is analyzed by AI to suggest a preliminary diagnosis and prescription, which is then reviewed by a specialist doctor for validation. The emergency response feature enables users to trigger immediate medical assistance with a single click, automatically sharing their location with the nearest medical team and dispatching an ambulance. Real-time tracking of the ambulance's arrival is provided, ensuring timely and accurate medical intervention. The system bridges the gap between AI-driven diagnosis and human expertise, ensuring reliable healthcare support.",
    technologies: ["HTML", "CSS", "Javascript", "PHP", "Python", "Node.js", "React.js", "API"],
    category: "ai",
  },
  {
    id: 11,
    title: "Speech to Text Converter",
    date: "August 2024",
    description:
      "Developed a real-time speech-to subtitle system with multi-language translation capabilities, featuring automatic transcript generation and export functionality. The system bridges communication gaps by providing instant translations and accessibility options for diverse student needs in educational environments.",
    technologies: ["Python", "API"],
    category: "ai",
  },
  {
    id: 12,
    title: "Face Recognition",
    date: "September 2024",
    description:
      "Developed a face recognition system using Python libraries, enabling accurate identity verification and secure access control. The system efficiently detects and matches faces for authentication and monitoring.",
    technologies: ["Python"],
    category: "ai",
  },
  {
    id: 13,
    title: "PackPal",
    date: "Not specified",
    description:
      "PackPal is an innovative solution designed to streamline group packing and event logistics. It serves as a modular platform tailored for various roles Owners, Admins, and Users making it ideal for managing logistics for college trips, destination weddings, corporate retreats, and more. With features like collaborative checklists, real-time packing updates, live tracking, and a bin-packing algorithm, PackPal eliminates confusion, enhances accountability, and optimizes space and transport. Built using React.js, Python, and MySQL, with integrations like Stripe, TomTom, and Razorpay, PackPal ensures clarity, coordination, and control at every step of the journey.",
    technologies: ["React.js", "Python", "TomTom API", "AQICN API"],
    category: "web",
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all" ? projectsData : projectsData.filter((project) => project.category === filter)

  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-indigo-400 sm:text-4xl">Projects</h2>
          <div className="mx-auto h-1 w-20 bg-indigo-600"></div>
        </motion.div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-5 bg-gray-800">
            <TabsTrigger value="all" onClick={() => setFilter("all")} className="data-[state=active]:bg-indigo-600">
              All
            </TabsTrigger>
            <TabsTrigger value="web" onClick={() => setFilter("web")} className="data-[state=active]:bg-indigo-600">
              Web
            </TabsTrigger>
            <TabsTrigger value="ai" onClick={() => setFilter("ai")} className="data-[state=active]:bg-indigo-600">
              AI/ML
            </TabsTrigger>
            <TabsTrigger
              value="hardware"
              onClick={() => setFilter("hardware")}
              className="data-[state=active]:bg-indigo-600"
            >
              Hardware
            </TabsTrigger>
            <TabsTrigger value="other" onClick={() => setFilter("other")} className="data-[state=active]:bg-indigo-600">
              Other
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden bg-gray-800 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-900/20">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-full bg-indigo-600/20 p-2">
                      <Code className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-indigo-400">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>

                  <p className="mb-4 text-sm text-gray-300 line-clamp-4">{project.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-indigo-600/50 text-indigo-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <button className="flex items-center gap-1 text-sm text-indigo-400 transition-colors hover:text-indigo-300">
                      <span>View Details</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
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
