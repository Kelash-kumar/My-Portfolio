"use client"

import { motion } from "framer-motion"
import { useUser } from "@/lib/user-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, MapPin, Users, Briefcase, CheckCircle, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export default function About() {
  const user = useUser()
  const { name, email, phone, address, profession, profile_image, about } = user

  const stats = [
    { icon: Users, label: "Clients Satisfied", value: "10+", color: "from-blue-500 to-blue-600" },
    { icon: Briefcase, label: "Services Provided", value: "03", color: "from-purple-500 to-purple-600" },
    { icon: CheckCircle, label: "Projects Completed", value: "20+", color: "from-green-500 to-green-600" },
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.section
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">About Me</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Know More About{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {name?.split(' ')[0] || 'Me'}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences with creativity and precision
          </p>
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
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-1">
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm">
                  <Image
                    src={profile_image || "/placeholder.svg?height=500&width=400"}
                    alt={name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl"
                variants={floatingVariants}
                animate="animate"
              >
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 text-sm font-semibold">
                  {profession}
                </Badge>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for work</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div className="lg:col-span-3 space-y-8" variants={itemVariants}>
            {/* Story Card */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    My Journey
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
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

                <motion.div
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Download className="mr-3 w-5 h-5" />
                    Download Resume
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div className="mb-20" variants={itemVariants}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Milestones
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Numbers that speak for my dedication and growth
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden relative">
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 font-semibold text-lg">{stat.label}</p>
                  </CardContent>
                  
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={itemVariants}>
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl overflow-hidden relative">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Ready to start a conversation? Reach out through any of these channels
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Mail, label: "Email", value: email, color: "text-blue-500", bg: "from-blue-500/10 to-blue-600/20" },
                  { icon: Phone, label: "Phone", value: phone, color: "text-green-500", bg: "from-green-500/10 to-green-600/20" },
                  { icon: MapPin, label: "Location", value: address, color: "text-red-500", bg: "from-red-500/10 to-red-600/20" },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className={`group p-6 rounded-2xl bg-gradient-to-br ${contact.bg} border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer`}
                    whileHover={{ 
                      scale: 1.03,
                      x: 5,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className={`w-6 h-6 ${contact.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{contact.label}</h3>
                        <p className="text-gray-600 dark:text-gray-300 break-all">{contact.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
          </Card>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </motion.section>
  )
}