"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-indigo-400 sm:text-4xl">Get In Touch</h2>
          <div className="mx-auto h-1 w-20 bg-indigo-600"></div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden bg-gray-800 text-white shadow-xl">
              <CardContent className="p-6">
                <h3 className="mb-6 text-2xl font-semibold text-indigo-400">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-indigo-600/20 p-3">
                      <Mail className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium">Email</h4>
                      <p className="text-gray-300">shisa3023@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-indigo-600/20 p-3">
                      <Phone className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium">Phone</h4>
                      <p className="text-gray-300">7016981083</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-indigo-600/20 p-3">
                      <MapPin className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium">Address</h4>
                      <p className="text-gray-300">"RAMKRISHNA" 1-NAVAL NAGAR STREET MAVDI MAIN ROAD RAJKOT-360004</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="mb-4 font-medium">Connect with me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/shivam-bhatt-413bb1286"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-indigo-600/20 p-3 transition-colors hover:bg-indigo-600/40"
                    >
                      <svg
                        className="h-5 w-5 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/Shivambhatt2305"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-indigo-600/20 p-3 transition-colors hover:bg-indigo-600/40"
                    >
                      <svg
                        className="h-5 w-5 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                  </div>
                </div>
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
                <h3 className="mb-6 text-2xl font-semibold text-indigo-400">Send a Message</h3>

                {isSubmitted ? (
                  <div className="flex h-[300px] flex-col items-center justify-center rounded-lg bg-indigo-600/10 p-6 text-center">
                    <div className="mb-4 rounded-full bg-indigo-600/20 p-3">
                      <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-xl font-medium">Message Sent!</h4>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your Name"
                          required
                          className="border-gray-700 bg-gray-700 text-white placeholder:text-gray-400 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your Email"
                          required
                          className="border-gray-700 bg-gray-700 text-white placeholder:text-gray-400 focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subject"
                        required
                        className="border-gray-700 bg-gray-700 text-white placeholder:text-gray-400 focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="border-gray-700 bg-gray-700 text-white placeholder:text-gray-400 focus:border-indigo-500"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
