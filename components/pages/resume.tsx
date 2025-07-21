"use client"

import { motion } from "framer-motion"
import { useUser } from "@/lib/user-context"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Calendar, Sparkles, Briefcase, GraduationCap, Award, TrendingUp } from "lucide-react"

export default function Resume() {
  const user = useUser()
  const { resumeData } = user

  const experienceData = resumeData.filter((item) => item.type === "experience")
  const educationData = resumeData.filter((item) => item.type === "education")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const TimelineSection = ({ 
    title, 
    data, 
    color, 
    icon: SectionIcon, 
    accent 
  }: { 
    title: string; 
    data: any[]; 
    color: string; 
    icon: any;
    accent: string;
  }) => (
    <motion.div className="space-y-8" variants={itemVariants}>
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-10">
        <motion.div 
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg shadow-${accent}-500/25`}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <SectionIcon className="w-7 h-7 text-white" />
        </motion.div>
        <div>
          <h2 className="text-3xl font-black bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {data.length} {data.length === 1 ? 'item' : 'items'}
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Enhanced Timeline line with gradient */}
        <div className="absolute left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-600 rounded-full" />
        <div className={`absolute left-7 top-6 w-1 h-32 bg-gradient-to-b ${color} rounded-full opacity-60`} />

        <div className="space-y-10">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex items-start space-x-8"
              variants={itemVariants}
              whileHover={{ x: 8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Enhanced Timeline dot */}
              <motion.div
                className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-xl shadow-${accent}-500/30 border-4 border-white/20 backdrop-blur-sm`}
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="text-white text-xl font-bold">
                  {item.icon || (index + 1)}
                </div>
                
                {/* Pulse effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-30`}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Enhanced Content Card */}
              <Card className="flex-1 group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-xl shadow-gray-200/20 dark:shadow-gray-900/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 rounded-3xl">
                <CardContent className="p-8">
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      {item.company && (
                        <p className="text-gray-600 dark:text-gray-300 font-semibold text-sm flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {item.company}
                        </p>
                      )}
                      {item.location && (
                        <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <Badge 
                        variant="secondary" 
                        className={`bg-gradient-to-r from-${accent}-500/10 to-${accent}-600/10 text-${accent}-600 dark:text-${accent}-400 border border-${accent}-200/20 dark:border-${accent}-800/20 rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2`}
                      >
                        <Calendar className="w-3 h-3" />
                        {item.year}
                      </Badge>
                      
                      {item.status && (
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs rounded-full px-3 py-1">
                          {item.status}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm mb-4">
                      {item.desc}
                    </p>
                    
                    {/* Skills/Technologies */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Decorative gradient overlay */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${color} opacity-5 rounded-bl-3xl`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  return (
    <motion.section
      className="min-h-screen py-24 px-4 lg:px-8 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/40 dark:from-blue-950/20 dark:via-gray-900 dark:to-purple-950/20" />
      <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.div 
            className="inline-flex items-center gap-3 mb-8 px-5 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/20 dark:border-blue-800/20"
            variants={floatingVariants}
            animate="animate"
          >
            <Award className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Professional Journey</span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
              Career
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Timeline
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-10">
            Discover my professional journey through education, experience, and continuous growth in technology
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg shadow-blue-500/25 transition-all duration-300">
              <Download className="mr-3 w-5 h-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/20 hover:bg-white/70 dark:hover:bg-gray-800/70 font-semibold px-8 py-3 rounded-2xl transition-all duration-300"
            >
              <TrendingUp className="mr-3 w-5 h-5" />
              View Analytics
            </Button>
          </div>
        </motion.div>

        {/* Enhanced Timeline Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <TimelineSection 
            title="Professional Experience" 
            data={experienceData} 
            color="from-blue-600 to-purple-600" 
            icon={Briefcase}
            accent="blue"
          />
          <TimelineSection 
            title="Education & Learning" 
            data={educationData} 
            color="from-emerald-500 to-teal-600" 
            icon={GraduationCap}
            accent="emerald"
          />
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={itemVariants}
        >
          {[
            { label: "Years Experience", value: "5+", color: "from-blue-500 to-purple-500" },
            { label: "Projects Completed", value: "50+", color: "from-purple-500 to-pink-500" },
            { label: "Technologies", value: "20+", color: "from-emerald-500 to-teal-500" },
            { label: "Certifications", value: "10+", color: "from-orange-500 to-red-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-800/20 shadow-xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                variants={floatingVariants}
                animate="animate"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}