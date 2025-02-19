'use client'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, LogOut, ChevronDown, ChevronLeft, ChevronRight, Menu } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import logo from '@/images/logo.jpg';
import profile from '@/images/profile.webp';
import adv1 from '@/images/adv1.jpeg';
import adv2 from '@/images/adv2.jpeg';
import adv3 from '@/images/adv3.jpeg';

const navItems = [
  { name: 'Training', icon: '🏋️' },
  { name: 'Fitness', icon: '💪' },
  { name: 'Injury', icon: '🩹' },
  { name: 'Nutrient', icon: '🥗' },
]

const ads = [
  { id: 1, image: adv1, alt: 'adv 1' , link: 'https://www.easports.com'},
  { id: 2, image: adv2, alt: 'adv 2' , link: 'https://www.espn.com'},
  { id: 3, image: adv3, alt: 'adv 3' , link: 'https://www.easports.com'},
]

export default function Main() {
  const [currentAd, setCurrentAd] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate('/');
  };

  const handleClick = () => {
    navigate('/playerdetails');
  };

  const handleResume = () => {
    navigate('/resume');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const nextAd = () => {
    setCurrentAd((prev) => (prev + 1) % ads.length)
  }

  const prevAd = () => {
    setCurrentAd((prev) => (prev - 1 + ads.length) % ads.length)
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-100">
        {isSidebarOpen && (
          <Sidebar className="w-64 flex flex-col bg-blue-50">
            <SidebarHeader className="p-4 flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-10" />
              <span className="text-xl font-bold"></span>
            </SidebarHeader>
            <SidebarContent className="flex-1">
            
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton>
                      <span className="mr-2">{item.icon}</span>
                      {item.name}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="p-4 mt-auto">
              <Button variant="outline" className="w-full" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </SidebarFooter>
          </Sidebar>
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Button classname={`${!isSidebarOpen ? 'ml-0' : ''}`} variant="outline" size="icon" onClick={toggleSidebar}>
                  <Menu className="h-6 w-6" />
                </Button>
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <img src={profile} alt="Profile" className="mr-2 h-4 w-4 rounded-full" /> Profile <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleClick}>Edit Profile</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleResume}>View Profile</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative w-full">
                <a href={ads[currentAd].link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={ads[currentAd].image}
                    alt={ads[currentAd].alt}
                    className="w-full h-auto object-cover"
                  />
                </a>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 left-4 transform -translate-y-1/2"
                    onClick={prevAd}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2"
                    onClick={nextAd}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {/* Add more dashboard content here */}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}


