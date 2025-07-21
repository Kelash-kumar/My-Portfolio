"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kelash.raisal@gmail.com",
      color: "text-blue-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 3491100042",
      color: "text-green-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jamshoro, Sindh, Pakistan",
      color: "text-red-500",
    },
  ]

  return (
    <motion.section
      className="min-h-screen py-20 px-6 lg:px-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss your ideas and bring them to life together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h2 className="text-2xl font-bold mb-6 gradient-text">Let's Discuss Your Ideas!</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Feel free to reach out for any inquiries, collaborations, or just to say hello. I'm always excited to
                work on new projects and meet fellow developers.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl glass-card border-white/20 hover:shadow-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                  variants={itemVariants}
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center ${info.color}`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">{info.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Your Full Name" className="glass-card border-white/20 bg-white/5" required />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email Address"
                        className="glass-card border-white/20 bg-white/5"
                        required
                      />
                    </div>
                  </div>

                  <Input
                    placeholder="Subject of Your Message"
                    className="glass-card border-white/20 bg-white/5"
                    required
                  />

                  <Textarea
                    placeholder="Tell me more about your project or idea..."
                    rows={6}
                    className="glass-card border-white/20 bg-white/5 resize-none"
                    required
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                    size="lg"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2 w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
