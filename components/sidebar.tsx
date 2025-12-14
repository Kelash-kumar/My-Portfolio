"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, FolderOpen, GraduationCap, Mail, Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useUser } from "@/lib/user-context"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Resume", href: "/resume", icon: GraduationCap },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Contact", href: "/contact", icon: Mail },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const user = useUser()
  const { name } = user

  useEffect(() => {
    setMounted(true)
  }, [])

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  if (!mounted) return null

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Desktop Sidebar */}
      <motion.aside
        className="fixed left-0 top-0 z-40 h-screen w-20 lg:w-24 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 hidden lg:flex flex-col items-center py-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.div className="mb-8" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="block">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-slate-700 dark:bg-slate-600 flex items-center justify-center text-white font-bold text-xl">
              {name?.charAt(0) || "K"}
            </div>
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col items-center space-y-4">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.href}>
                  <motion.div
                    className={`relative p-3 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? "bg-slate-700 dark:bg-slate-600 text-white"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-6 h-6" />

                    {/* Tooltip */}
                    <motion.div
                      className="absolute left-full ml-4 px-3 py-2 bg-slate-800 dark:bg-slate-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                    >
                      {item.name}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 dark:bg-slate-700 rotate-45" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </nav>

        {/* Theme Toggle */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </motion.div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className="fixed left-0 top-0 z-40 h-screen w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 lg:hidden"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full p-6">
                {/* Logo */}
                <motion.div className="mb-8 flex items-center space-x-3" variants={itemVariants}>
                  <div className="w-10 h-10 rounded-full bg-slate-700 dark:bg-slate-600 flex items-center justify-center text-white font-bold">
                    {name?.charAt(0) || "K"}
                  </div>
                  <span className="text-xl font-bold text-slate-800 dark:text-slate-200">{name}</span>
                </motion.div>

                {/* Navigation */}
                <nav className="flex-1 space-y-2">
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href
                    return (
                      <motion.div key={item.name} variants={itemVariants} custom={index}>
                        <Link href={item.href} onClick={() => setIsOpen(false)}>
                          <motion.div
                            className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                              isActive
                                ? "bg-slate-700 dark:bg-slate-600 text-white"
                                : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                            }`}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.name}</span>
                          </motion.div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Theme Toggle */}
                <motion.div variants={itemVariants}>
                  <Button
                    variant="ghost"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="w-full justify-start space-x-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    <span>Toggle Theme</span>
                  </Button>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
