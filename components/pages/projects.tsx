"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useUser } from "@/lib/user-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react"
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
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700"
          >
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Featured Work</span>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-16" variants={itemVariants}>
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-slate-700 hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-500 text-white border-0"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600"
                } rounded-full`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
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
                <Card className="group relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-300 rounded-2xl">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <div className="relative w-full h-56 lg:h-64">
                      <Image
                        src={project.image || "/placeholder.svg?height=300&width=400"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-900/40" />
                    </div>

                    {/* Floating Action Button */}
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
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-colors duration-300"
                        onClick={() => setSelectedProject(project)}
                      >
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </Button>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-white/20 backdrop-blur-sm text-white border border-white/20 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-7">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {project.desc}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors duration-300"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
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

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-slate-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl"
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
                  className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Project Image */}
                <div className="relative w-full h-80 lg:h-96 overflow-hidden rounded-t-2xl">
                  <Image
                    src={selectedProject.image || "/placeholder.svg?height=400&width=800"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>

                {/* Modal Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                        {selectedProject.title}
                      </h2>
                      <Badge 
                        variant="secondary" 
                        className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-2"
                      >
                        {selectedProject.category}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8">
                    {selectedProject.desc}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-slate-700 hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300">
                      <ExternalLink className="mr-3 w-5 h-5" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
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