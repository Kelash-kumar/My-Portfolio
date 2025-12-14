"use client"

import { motion } from "framer-motion"
import { useUser } from "@/lib/user-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
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
            <motion.h1 className="text-5xl lg:text-7xl font-semibold leading-tight text-slate-800 dark:text-slate-100">
              Hi <HandWave /> I'm <span className="text-slate-600 dark:text-slate-300">{name}</span>
            </motion.h1>

            <motion.h2 className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 font-medium">
              {profession}
            </motion.h2>

            <motion.p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
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
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300 text-slate-600 dark:text-slate-300"
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
              className="bg-slate-700 hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-500 text-white transition-colors duration-300 group"
            >
              <Link href="/contact">
                Hire Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 group"
            >
              <a href="/assets/kelash kumar-CV.pdf" download="Kelash-Kumar-CV.pdf">
                <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div className="relative flex justify-center lg:justify-end" variants={itemVariants}>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-1">
              <Image
                src={profile_image || "/placeholder.svg?height=400&width=400"}
                alt={name}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
