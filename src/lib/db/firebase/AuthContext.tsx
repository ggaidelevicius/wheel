'use client'

import type { User } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import type { ReactNode } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '.'

interface AuthContextType {
  user: User | null
}

export const AuthContext = createContext<AuthContextType>({ user: null })

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
