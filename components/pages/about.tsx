"use client"

import { motion } from "framer-motion"
import { useUser } from "@/lib/user-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail, Phone, MapPin, Users, Briefcase, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function About() {
  const user = useUser()
  const { name, email, phone, address, profession, profile_image, about } = user

  const stats = [
    { icon: Users, label: "Clients Satisfied", value: "03" },
    { icon: Briefcase, label: "Services Provided", value: "03" },
    { icon: CheckCircle, label: "Projects Completed", value: "03+" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  return (
    <motion.section
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Users className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">About Me</span>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-20">
          {/* Profile Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Profile Image Container */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={profile_image || "/placeholder.svg?height=500&width=400"}
                    alt={name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-slate-600 dark:bg-slate-400 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Available for work</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div className="lg:col-span-3 space-y-8" variants={itemVariants}>
            {/* Story Card */}
            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-slate-700 dark:bg-slate-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200">
                    My Journey
                  </h2>
                </div>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  {about.split("\n").map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                <motion.div className="mt-8">
                  <Button
                    asChild
                    className="bg-slate-700 hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-500 text-white px-8 py-6 text-lg font-semibold rounded-xl"
                  >
                    <a href="/assets/kelash kumar-CV.pdf" download="Kelash-Kumar-CV.pdf">
                      <Download className="mr-3 w-5 h-5" />
                      Download Resume
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div className="mb-20" variants={itemVariants}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">
              Professional Milestones
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Numbers that speak for my dedication and growth
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.03,
                  y: -4,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group"
              >
                <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-300">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-slate-700 dark:bg-slate-600 flex items-center justify-center"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-4xl lg:text-5xl font-bold mb-3 text-slate-800 dark:text-slate-200"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 font-semibold text-lg">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={itemVariants}>
          <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
            <CardContent className="p-8 lg:p-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Mail, label: "Email", value: email },
                  { icon: Phone, label: "Phone", value: phone },
                  { icon: MapPin, label: "Location", value: address },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-300 cursor-pointer"
                    whileHover={{ 
                      scale: 1.02,
                      x: 4,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center group-hover:bg-slate-300 dark:group-hover:bg-slate-600 transition-colors duration-300">
                        <contact.icon className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{contact.label}</h3>
                        <p className="text-slate-600 dark:text-slate-400 break-all">{contact.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}