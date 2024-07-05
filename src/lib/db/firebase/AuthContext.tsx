'use client'

import type { User } from 'firebase/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import type { FC, ReactNode } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { app } from './index'

const auth = getAuth(app)

interface AuthContextType {
  user: User | null
}

export const AuthContext = createContext<AuthContextType>({ user: null })

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
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
