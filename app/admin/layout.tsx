"use client"

import { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Sun, Moon, Users, Settings, ShieldAlert, LogOut, BarChart2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const { theme, setTheme } = useTheme()

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex h-screen bg-background">
        {/* Sidebar */}
        <aside className={`bg-card w-64 ${isSidebarOpen ? '' : 'hidden'}`}>
          <nav className="mt-5 px-2">
            <Link href="/admin" className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-foreground hover:text-primary hover:bg-accent">
              <ShieldAlert className="mr-4 h-6 w-6" />
              Dashboard
            </Link>
            <Link href="/admin/users" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-foreground hover:text-primary hover:bg-accent">
              <Users className="mr-4 h-6 w-6" />
              Users
            </Link>
            <Link href="/admin/analytics" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-foreground hover:text-primary hover:bg-accent">
              <BarChart2 className="mr-4 h-6 w-6" />
              Marketplace Analytics
            </Link>
            <Link href="/admin/settings" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-foreground hover:text-primary hover:bg-accent">
              <Settings className="mr-4 h-6 w-6" />
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-card shadow-sm z-10">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-foreground">Admin Panel</h1>
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="mr-4"
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button variant="ghost" size="icon">
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
            <div className="container mx-auto px-6 py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}