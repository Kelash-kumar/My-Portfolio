import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { UserProvider } from "@/lib/user-context"
import { userData } from "@/lib/user-data"
import Sidebar from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kelash Kumar - MERN Stack Developer",
  description: "Portfolio of Kelash Kumar, a passionate MERN Stack Developer from Pakistan",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <UserProvider user={userData}>
            <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
              <Sidebar />
              <main className="flex-1 ml-20 lg:ml-24 transition-all duration-300">
                <div className="min-h-screen">{children}</div>
              </main>
            </div>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
