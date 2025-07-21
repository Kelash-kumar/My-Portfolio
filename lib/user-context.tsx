"use client"

import type React from "react"

import { createContext, useContext } from "react"

const UserContext = createContext<any>(null)

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

export const UserProvider = ({ children, user }: { children: React.ReactNode; user: any }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
