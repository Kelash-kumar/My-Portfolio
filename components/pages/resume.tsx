"use client"

import { motion } from "framer-motion"
import { useUser } from "@/lib/user-context"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Briefcase, GraduationCap, Award } from "lucide-react"

export default function Resume() {
  const user = useUser()
  const { resumeData, stats } = user

  const experienceData = resumeData.filter((item: any) => item.type === "experience")
  const educationData = resumeData.filter((item: any) => item.type === "education")

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
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  const TimelineSection = ({ 
    title, 
    data, 
    icon: SectionIcon 
  }: { 
    title: string; 
    data: any[]; 
    icon: any;
  }) => (
    <motion.div className="space-y-8" variants={itemVariants}>
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-10">
        <motion.div 
          className="w-14 h-14 rounded-2xl bg-slate-700 dark:bg-slate-600 flex items-center justify-center"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <SectionIcon className="w-7 h-7 text-white" />
        </motion.div>
        <div>
          <h2 className="text-3xl font-black text-slate-800 dark:text-slate-200">
            {title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            {data.length} {data.length === 1 ? 'item' : 'items'}
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 rounded-full" />

        <div className="space-y-10">
          {data.map((item: any, index: number) => (
            <motion.div
              key={index}
              className="relative flex items-start space-x-8"
              variants={itemVariants}
              whileHover={{ x: 8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="relative z-10 w-14 h-14 rounded-2xl bg-slate-700 dark:bg-slate-600 flex items-center justify-center border-4 border-white dark:border-slate-900"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="text-white text-xl font-bold">
                  {item.icon || (index + 1)}
                </div>
              </motion.div>

              {/* Content Card */}
              <Card className="flex-1 group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-300 rounded-2xl">
                <CardContent className="p-8">
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      {item.company && (
                        <p className="text-slate-600 dark:text-slate-400 font-semibold text-sm flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {item.company}
                        </p>
                      )}
                      {item.location && (
                        <p className="text-slate-500 dark:text-slate-500 text-sm flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <Badge 
                        variant="secondary" 
                        className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2"
                      >
                        <Calendar className="w-3 h-3" />
                        {item.year}
                      </Badge>
                      
                      {item.status && (
                        <Badge className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full px-3 py-1">
                          {item.status}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                      {item.desc}
                    </p>
                    
                    {/* Skills/Technologies */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.technologies.map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
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
      className="min-h-screen py-24 px-4 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.div 
            className="inline-flex items-center gap-3 mb-8 px-5 py-3 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700"
          >
            <Award className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Professional Journey</span>
          </motion.div>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <TimelineSection 
            title="Professional Experience" 
            data={experienceData} 
            icon={Briefcase}
          />
          <TimelineSection 
            title="Education & Learning" 
            data={educationData} 
            icon={GraduationCap}
          />
        </div>

        {/* Stats Section - Now Dynamic */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={itemVariants}
        >
          {stats?.map((stat: { label: string; value: string }, index: number) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="text-4xl font-black text-slate-700 dark:text-slate-300 mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}