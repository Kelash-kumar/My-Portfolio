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
  Sparkles,
  CheckCircle,
  Star,
  TrendingUp,
  Layers
} from "lucide-react"
import Image from "next/image"

export default function Services() {
  const user = useUser()
  const { services: userServices, skills } = user

  // Additional modern services to complement user's existing ones
  const additionalServices = [
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs built with modern frameworks, ensuring scalability and performance for your applications.",
      icon: Database,
      gradient: "from-green-500 to-emerald-600",
      features: ["RESTful APIs", "GraphQL", "Real-time Data", "Authentication"]
    },
    {
      title: "Cloud Solutions",
      description: "Deploy and manage applications on cloud platforms with automated CI/CD pipelines and monitoring systems.",
      icon: Shield,
      gradient: "from-purple-500 to-violet-600", 
      features: ["AWS/Azure", "Docker", "CI/CD", "Monitoring"]
    },
    {
      title: "Performance Optimization",
      description: "Speed up your applications with advanced optimization techniques, caching strategies, and performance monitoring.",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-600",
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
      gradient: "from-blue-500 to-purple-600",
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
        ['react', 'vue', 'angular', 'html', 'css', 'javascript', 'typescript', 'tailwind'].some(tech => 
          skill.name.toLowerCase().includes(tech)
        )
      ),
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      skills: skills.filter(skill => 
        ['node', 'python', 'php', 'java', 'express', 'django', 'laravel'].some(tech => 
          skill.name.toLowerCase().includes(tech)
        )
      ),
      icon: Database,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Others",
      skills: skills.filter(skill => 
        !['react', 'vue', 'angular', 'html', 'css', 'javascript', 'typescript', 'tailwind', 'node', 'python', 'php', 'java', 'express', 'django', 'laravel'].some(tech => 
          skill.name.toLowerCase().includes(tech)
        )
      ),
      icon: Layers,
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <motion.section
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Professional Services</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            What I{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Offer
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital solutions crafted with modern technologies and best practices
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div className="mb-24" variants={itemVariants}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group h-full"
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 h-full overflow-hidden relative">
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Service Icon */}
                    <motion.div
                      className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Service Image (if available) */}
                    {service.image && (
                      <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>
                    )}

                    {/* Service Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      {service.features && (
                        <div className="space-y-3 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg"
                        variant="default"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                  
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div className="mb-20" variants={itemVariants}>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-600 dark:text-green-400">Technical Expertise</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              My Skills & Technologies
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                        {category.title}
                      </h3>
                      <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div 
                          key={skillIndex} 
                          variants={itemVariants} 
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="group"
                        >
                          <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden relative">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-lg">
                                  {skill.name}
                                </h4>
                                <motion.div
                                  className="flex items-center gap-1"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    {skill.percentage}%
                                  </span>
                                </motion.div>
                              </div>

                              <div className="space-y-2">
                                <Progress
                                  value={Number.parseInt(skill.percentage)}
                                  className="h-3 rounded-full"
                                  style={{
                                    "--progress-background": skill.color || "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                                  } as React.CSSProperties}
                                />
                                
                                {/* Skill Level Badge */}
                                <div className="flex justify-end">
                                  <Badge 
                                    variant="secondary" 
                                    className={`text-xs ${
                                      Number.parseInt(skill.percentage) >= 90 ? 'bg-green-500/20 text-green-600' :
                                      Number.parseInt(skill.percentage) >= 70 ? 'bg-blue-500/20 text-blue-600' :
                                      'bg-orange-500/20 text-orange-600'
                                    }`}
                                  >
                                    {Number.parseInt(skill.percentage) >= 90 ? 'Expert' :
                                     Number.parseInt(skill.percentage) >= 70 ? 'Advanced' : 'Intermediate'}
                                  </Badge>
                                </div>
                              </div>
                            </CardContent>
                            
                            {/* Progress Background Animation */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                            </div>
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
          className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-white/20 rounded-3xl p-12"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-6"
          >
            <Users className="w-16 h-16 mx-auto text-blue-500" />
          </motion.div>
          
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h3>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with cutting-edge technology and creative solutions.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
            >
              Get In Touch
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </motion.div>
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