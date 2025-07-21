"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useUser } from "@/lib/user-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, X, ArrowUpRight, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const user = useUser()
  const { projects } = user
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const categories = ["All", "Nodejs", "Creative", "Design", "Reactjs"]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.section
      className="min-h-screen py-24 px-4 lg:px-8 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/20 dark:border-blue-800/20"
            variants={floatingVariants}
            animate="animate"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Featured Work</span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent leading-tight">
            Creative
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Crafting digital experiences with cutting-edge technology and innovative design solutions
          </p>
        </motion.div>

        {/* Modern Category Filter */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-16" variants={itemVariants}>
          {categories.map((category, index) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`relative overflow-hidden px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white shadow-lg shadow-blue-500/25 border-0"
                    : "bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm border-gray-200/20 dark:border-gray-800/20 hover:bg-white/20 dark:hover:bg-gray-800/30 hover:border-blue-300/30"
                } rounded-full`}
              >
                <span className="relative z-10">{category}</span>
                {selectedCategory === category && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
                    layoutId="categoryIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10" 
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 60 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -60 }}
                whileHover={{ y: -8 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  layout: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="group relative overflow-hidden bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-0 shadow-xl shadow-gray-200/20 dark:shadow-gray-900/20 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 rounded-3xl">
                  {/* Project Image with Gradient Overlay */}
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <div className="relative w-full h-56 lg:h-64">
                      <Image
                        src={project.image || "/placeholder.svg?height=300&width=400"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>

                    {/* Floating Action Buttons */}
                    <motion.div 
                      className="absolute top-4 right-4 flex gap-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredProject === index ? 1 : 0,
                        scale: hoveredProject === index ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button 
                        size="sm" 
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 hover:bg-white/30 transition-all duration-300"
                        onClick={() => setSelectedProject(project)}
                      >
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </Button>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Enhanced Card Content */}
                  <CardContent className="p-7">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
                      {project.desc}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="flex-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-600 dark:text-blue-400 border border-blue-200/20 dark:border-blue-800/20 rounded-xl transition-all duration-300"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="w-10 h-10 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-gray-200/20 dark:border-gray-800/20 shadow-2xl"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Project Image */}
                <div className="relative w-full h-80 lg:h-96 overflow-hidden rounded-t-3xl">
                  <Image
                    src={selectedProject.image || "/placeholder.svg?height=400&width=800"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Modal Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                        {selectedProject.title}
                      </h2>
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 dark:text-blue-400 border border-blue-200/20 dark:border-blue-800/20 rounded-full px-4 py-2"
                      >
                        {selectedProject.category}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8">
                    {selectedProject.desc}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg shadow-blue-500/25 transition-all duration-300">
                      <ExternalLink className="mr-3 w-5 h-5" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/20 hover:bg-white/70 dark:hover:bg-gray-800/70 font-semibold py-3 px-6 rounded-2xl transition-all duration-300"
                    >
                      <Github className="mr-3 w-5 h-5" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}