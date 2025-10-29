'use client'

import type { User } from '@prisma/client'
import { createContext, useContext } from 'react'

const UserContext = createContext<User | null>(null)

export function UserProvider({ user, children }: { user: User | null; children: React.ReactNode }) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export function useCurrentUser() {
  return useContext(UserContext)
}
