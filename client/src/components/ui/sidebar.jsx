'use client'

import React, { createContext, useContext, useState } from 'react'
import { cn } from '@/lib/utils'

const SidebarContext = createContext()

export function SidebarProvider({ children }) {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <SidebarContext.Provider value={{ collapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function Sidebar({ children, className }) {
  const { collapsed } = useContext(SidebarContext)

  return (
    <aside
      className={cn(
        'h-full bg-white shadow-md transition-all duration-300',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      {children}
    </aside>
  )
}

export function SidebarHeader({ children, className }) {
  return <div className={cn('p-4 border-b', className)}>{children}</div>
}

export function SidebarContent({ children, className }) {
  return <div className={cn('flex-1 overflow-y-auto', className)}>{children}</div>
}

export function SidebarFooter({ children, className }) {
  return <div className={cn('p-4 border-t', className)}>{children}</div>
}

export function SidebarMenu({ children, className }) {
  return <nav className={cn('mt-4', className)}>{children}</nav>
}

export function SidebarMenuItem({ children, className }) {
  return <div className={cn('px-4 py-2', className)}>{children}</div>
}

export function SidebarMenuButton({ children, className }) {
  return (
    <button className={cn('w-full flex items-center p-2 rounded-lg hover:bg-gray-100', className)}>
      {children}
    </button>
  )
}

export function SidebarTrigger({ className }) {
  const { toggleSidebar } = useContext(SidebarContext)

  return (
    <button
      onClick={toggleSidebar}
      className={cn('p-2 rounded-lg hover:bg-gray-200 transition', className)}
    >
      ☰
    </button>
  )
}
