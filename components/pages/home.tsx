"use client"

import { motion } from "framer-motion"
import { useUser } from "@/lib/user-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const HandWave = () => {
  return (
    <motion.span
      className="inline-block text-4xl"
      animate={{ rotate: [0, 20, 0, -20, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
    >
      👋
    </motion.span>
  )
}

export default function Home() {
  const user = useUser()
  const { name, profession, profile_image, social } = user

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-6 lg:px-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div className="space-y-8" variants={itemVariants}>
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div className="flex items-center space-x-2 text-lg text-gray-600 dark:text-gray-300">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span>Welcome to my portfolio</span>
            </motion.div>

            <motion.h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi <HandWave /> I'm <span className="gradient-text">{name}</span>
            </motion.h1>

            <motion.h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
              {profession}
            </motion.h2>

            <motion.p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Passionate about creating amazing web experiences with modern technologies. I specialize in building
              scalable applications using the MERN stack.
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex items-center space-x-4" variants={itemVariants}>
            {social.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icons}
              </motion.a>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Link href="/contact">
                Hire Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="glass-card border-white/20 hover:bg-white/10 group bg-transparent"
            >
              <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div className="relative flex justify-center lg:justify-end" variants={itemVariants}>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Floating background elements */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20 blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <motion.div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card p-2 floating-animation">
              <Image
                src={profile_image || "/placeholder.svg?height=400&width=400"}
                alt={name}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full"
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
