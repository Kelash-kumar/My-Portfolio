"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useUser } from "@/lib/user-context"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Palette, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Layers
} from "lucide-react"
import Image from "next/image"

export default function Services() {
  const user = useUser()
  const { services: userServices, skills } = user

  // Additional services
  const additionalServices = [
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs built with modern frameworks, ensuring scalability and performance for your applications.",
      icon: Database,
      features: ["RESTful APIs", "GraphQL", "Real-time Data", "Authentication"]
    },
    {
      title: "Cloud Solutions",
      description: "Deploy and manage applications on cloud platforms with automated CI/CD pipelines and monitoring systems.",
      icon: Shield,
      features: ["AWS/Azure", "Docker", "CI/CD", "Monitoring"]
    },
    {
      title: "Performance Optimization",
      description: "Speed up your applications with advanced optimization techniques, caching strategies, and performance monitoring.",
      icon: Zap,
      features: ["Speed Optimization", "SEO", "Analytics", "Monitoring"]
    }
  ]

  // Combine user services with additional ones
  const allServices = [
    ...userServices.map(service => ({
      ...service,
      icon: service.title.toLowerCase().includes('web') ? Globe : 
            service.title.toLowerCase().includes('mobile') ? Smartphone :
            service.title.toLowerCase().includes('ui') || service.title.toLowerCase().includes('design') ? Palette : Code2,
      features: ["Custom Development", "Responsive Design", "Modern Stack", "Best Practices"]
    })),
    ...additionalServices
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
    hidden: { opacity: 0, y: 50 },
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: skills.filter(skill => 
        ['react', 'html', 'css', 'javascript', 'typescript', 'tailwind'].some(tech => 
          skill.name.toLowerCase().includes(tech)
        )
      ),
      icon: Code2
    },
    {
      title: "Backend",
      skills: skills.filter(skill => 
        ['node', 'express'].some(tech => 
          skill.name.toLowerCase().includes(tech)
        )
      ),
      icon: Database
    },
    {
      title: "Tools & Others",
      skills: skills.filter(skill => 
        !['react', 'vue', 'angular', 'html', 'css', 'javascript', 'typescript', 'tailwind', 'node', 'python', 'php', 'java', 'express', 'django', 'laravel'].some(tech => 
          skill.name.toLowerCase().includes(tech)
        )
      ),
      icon: Layers
    }
  ]

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
            <Code2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Professional Services</span>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div className="mb-24" variants={itemVariants}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -4,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group h-full"
              >
                <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-300 h-full">
                  <CardContent className="p-8 h-full flex flex-col">

                    {/* Service Image (if available) */}
                    {service.image && (
                      <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Service Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      {service.features && (
                        <div className="space-y-3 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-slate-500 dark:text-slate-500 flex-shrink-0" />
                              <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div className="mb-20" variants={itemVariants}>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Technical Expertise</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800 dark:text-slate-200">
              My Skills & Technologies
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
            </p>
          </div>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="space-y-6"
              >
                {category.skills.length > 0 && (
                  <>
                    <div className="flex items-center gap-4 mb-8">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-slate-700 dark:bg-slate-600 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                        {category.title}
                      </h3>
                      <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div 
                          key={skillIndex} 
                          variants={itemVariants} 
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="group"
                        >
                          <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-300">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-lg">
                                  {skill.name}
                                </h4>
                                <motion.div
                                  className="flex items-center gap-1"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <Star className="w-4 h-4 fill-slate-400 text-slate-400" />
                                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                    {skill.percentage}%
                                  </span>
                                </motion.div>
                              </div>

                              <div className="space-y-2">
                                <Progress
                                  value={Number.parseInt(skill.percentage)}
                                  className="h-3 rounded-full"
                                  style={{
                                    "--progress-background": "#475569",
                                  } as React.CSSProperties}
                                />
                                
                                {/* Skill Level Badge */}
                                <div className="flex justify-end">
                                  <Badge 
                                    variant="secondary" 
                                    className={`text-xs ${
                                      Number.parseInt(skill.percentage) >= 90 ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300' :
                                      Number.parseInt(skill.percentage) >= 70 ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400' :
                                      'bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-500'
                                    }`}
                                  >
                                    {Number.parseInt(skill.percentage) >= 90 ? 'Expert' :
                                     Number.parseInt(skill.percentage) >= 70 ? 'Advanced' : 'Intermediate'}
                                  </Badge>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-12"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-6"
          >
            <Users className="w-16 h-16 mx-auto text-slate-600 dark:text-slate-400" />
          </motion.div>
          
          <h3 className="text-3xl font-bold mb-4 text-slate-800 dark:text-slate-200">
            Ready to Start Your Project?
          </h3>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with cutting-edge technology and creative solutions.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-slate-700 hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-500 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-colors duration-300"
            >
              Get In Touch
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}