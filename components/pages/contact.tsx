"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useUser } from "@/lib/user-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const user = useUser()
  const { email, phone, address } = user

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
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: email,
    },
    {
      icon: Phone,
      title: "Phone",
      value: phone,
    },
    {
      icon: MapPin,
      title: "Location",
      value: address,
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
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-slate-800 dark:text-slate-200">
            Get In <span className="text-slate-600 dark:text-slate-400">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Let's discuss your ideas and bring them to life together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">Let's Discuss Your Ideas!</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Feel free to reach out for any inquiries, collaborations, or just to say hello. I'm always excited to
                work on new projects and meet fellow developers.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div
                    className="w-12 h-12 rounded-full bg-slate-700 dark:bg-slate-600 flex items-center justify-center"
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">{info.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input 
                        placeholder="Your Full Name" 
                        className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-slate-400 dark:focus:border-slate-500" 
                        required 
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email Address"
                        className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-slate-400 dark:focus:border-slate-500"
                        required
                      />
                    </div>
                  </div>

                  <Input
                    placeholder="Subject of Your Message"
                    className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-slate-400 dark:focus:border-slate-500"
                    required
                  />

                  <Textarea
                    placeholder="Tell me more about your project or idea..."
                    rows={6}
                    className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-slate-400 dark:focus:border-slate-500 resize-none"
                    required
                  />

                  <Button
                    type="submit"
                    className="w-full bg-slate-700 hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-500 text-white transition-colors duration-300 group"
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
