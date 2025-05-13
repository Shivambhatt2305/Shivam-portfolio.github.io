"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0a0118] to-[#0f0736] py-20">
      <div className="container mx-auto px-4">
        <div className="flex min-h-[80vh] flex-col items-center justify-center md:flex-row md:justify-between md:gap-8">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 max-w-xl md:mb-0"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-2 text-lg text-purple-300"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-3 text-6xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Shivam Bhatt
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 text-2xl font-medium text-gray-300"
            >
              Software Developer & ICT Student
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8 text-gray-300"
            >
              A passionate and driven ICT student with a strong interest in AI, machine learning, and software
              development. Enthusiastic about building innovative tech solutions and actively participating in
              hackathons.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-10 flex flex-wrap gap-4"
            >
              <Link href="#projects">
                <Button className="bg-purple-600 hover:bg-purple-700">View Projects</Button>
              </Link>
              <Button variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-800">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-5"
            >
              <Link href="https://github.com/Shivambhatt2305" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full p-0 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <Github size={20} />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/shivam-bhatt-413bb1286/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full p-0 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <Linkedin size={20} />
                </Button>
              </Link>
              <Link href="mailto:shisa3023@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full p-0 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <Mail size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-gray-700 bg-gray-100 md:h-[400px] md:w-[400px]">
              <img
                src="https://i.ibb.co/YT40CYqf/shivam.jpg?height=400&width=400"
                alt="Shivam Bhatt"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
