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
    <motion.div className="space-y-6 md:space-y-8 w-full overflow-hidden" variants={itemVariants}>
      {/* Section Header */}
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
        <motion.div 
          className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-700 dark:bg-slate-600 flex items-center justify-center flex-shrink-0"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <SectionIcon className="w-5 h-5 md:w-7 md:h-7 text-white" />
        </motion.div>
        <div className="min-w-0">
          <h2 className="text-xl md:text-3xl font-black text-slate-800 dark:text-slate-200 truncate">
            {title}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
            {data.length} {data.length === 1 ? 'item' : 'items'}
          </p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Timeline line */}
        <div className="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 rounded-full" />

        <div className="space-y-6 md:space-y-10">
          {data.map((item: any, index: number) => (
            <motion.div
              key={index}
              className="relative flex items-start gap-3 md:gap-6"
              variants={itemVariants}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-700 dark:bg-slate-600 flex items-center justify-center border-2 md:border-4 border-white dark:border-slate-900 flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="text-white text-sm md:text-xl font-bold">
                  {item.icon || (index + 1)}
                </div>
              </motion.div>

              {/* Content Card */}
              <Card className="flex-1 min-w-0 group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-300 rounded-xl md:rounded-2xl overflow-hidden">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-xl font-bold text-slate-800 dark:text-slate-200 mb-1 md:mb-2 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-300 break-words">
                        {item.title}
                      </h3>
                      {item.company && (
                        <p className="text-slate-600 dark:text-slate-400 font-semibold text-xs md:text-sm flex items-center gap-1 md:gap-2">
                          <Briefcase className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                          <span className="break-words">{item.company}</span>
                        </p>
                      )}
                      {item.location && (
                        <p className="text-slate-500 dark:text-slate-500 text-xs md:text-sm flex items-center gap-1 md:gap-2 mt-1">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                          <span className="break-words">{item.location}</span>
                        </p>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2">
                      <Badge 
                        variant="secondary" 
                        className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-full px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-2 whitespace-nowrap"
                      >
                        <Calendar className="w-3 h-3" />
                        {item.year}
                      </Badge>
                      
                      {item.status && (
                        <Badge className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full px-2 md:px-3 py-1">
                          {item.status}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs md:text-sm mb-3 md:mb-4 break-words">
                      {item.desc}
                    </p>
                    
                    {/* Skills/Technologies */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
                        {item.technologies.map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="px-2 md:px-3 py-0.5 md:py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
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
      className="min-h-screen py-8 md:py-14 px-2 sm:px-4 lg:px-8 overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto w-full overflow-hidden">
        {/* Header */}
        <motion.div className="text-center mb-6 md:mb-10" variants={itemVariants}>
          <motion.div 
            className="inline-flex items-center gap-2 md:gap-3 mb-6 md:mb-8 px-3 md:px-5 py-2 md:py-3 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700"
          >
            <Award className="w-4 h-4 md:w-5 md:h-5 text-slate-600 dark:text-slate-400" />
            <span className="text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400">Professional Journey</span>
          </motion.div>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
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
          className="mt-12 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8"
          variants={itemVariants}
        >
          {stats?.map((stat: { label: string; value: string }, index: number) => (
            <motion.div
              key={index}
              className="text-center p-3 md:p-6 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-700"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="text-2xl md:text-4xl font-black text-slate-700 dark:text-slate-300 mb-1 md:mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-slate-600 dark:text-slate-400 font-medium text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}