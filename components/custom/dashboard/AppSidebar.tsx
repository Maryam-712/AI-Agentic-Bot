'use client'

import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenuButton, SidebarMenuItem,} from "@/components/ui/sidebar"
import { AppWindow, Blocks, Bot, Layers, Play, Settings, User2 } from "lucide-react"
import { usePathname } from "next/navigation"

export function AppSidebar() {

  const path = usePathname()
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row gap-2.5 p-4 items-center">
        <img src='/logo.svg' alt="logo" width={30} height={30} />
      <h2 className="font-semibold text-lg text-slate-700">Pilot AI</h2>
      </SidebarHeader>
      <SidebarContent>
          <SidebarGroup className="flex gap-1">
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>

            <SidebarMenuButton className={`h-12 gap-3 hover:bg-slate-100 ${path.includes('/dashboard')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-blue-100 items-center justify-center rounded-lg">
                  <AppWindow className="h-4.5 w-4.5 text-blue-900"/>
                  </div>
                <span>Dashboard</span>
            </SidebarMenuButton>

             <SidebarMenuButton className={`h-12 gap-3 hover:bg-slate-100 ${path.includes('/dashboard/agents')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-red-100 items-center justify-center rounded-lg">
                  <Bot className="h-4.5 w-4.5 text-red-900"/>
                  </div>
                <span>Agents</span>
            </SidebarMenuButton>

             <SidebarMenuButton className={`h-12 gap-3 hover:bg-slate-100 ${path.includes('/dashboard/runs')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-purple-100 items-center justify-center rounded-lg">
                  <Play className="h-4.5 w-4.5 text-purple-900"/>
                  </div>
                <span>Runs</span>
            </SidebarMenuButton>

             <SidebarMenuButton className={`h-12 gap-3 hover:bg-slate-100 ${path.includes('/dashboard/integrations')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-green-100 items-center justify-center rounded-lg">
                  <Blocks className="h-4.5 w-4.5 text-green-900"/>
                  </div>
                <span>Integrations</span>
            </SidebarMenuButton>

             <SidebarMenuButton className={`h-12 gap-3 hover:bg-slate-100 ${path.includes('/dashboard/templates')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-orange-100 items-center justify-center rounded-lg">
                  <Layers className="h-4.5 w-4.5 text-orange-900"/>
                  </div>
                <span>Templates</span>
            </SidebarMenuButton>

          </SidebarGroup>
        <SidebarGroup> 
          <SidebarGroupLabel>Users</SidebarGroupLabel>
            <SidebarMenuButton className={`h-12 gap-3 hover:bg-slate-100 ${path.includes('/dashboard/templates')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-gray-100 items-center justify-center rounded-lg">
                  <Settings className="h-4.5 w-4.5 text-gray-900"/>
                  </div>
                <span>Settings</span>
            </SidebarMenuButton>

            <SidebarMenuButton className={`h-12 gap-3 hover:bg-slate-100 ${path.includes('/dashboard/templates')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-yellow-100 items-center justify-center rounded-lg">
                  <User2 className="h-4.5 w-4.5 text-yellow-900"/>
                  </div>
                <span>Profile</span>
            </SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 border rounded-lg">
          <h2 className="flex justify-between">Agents <span>3/5</span></h2>
          <h2 className="flex justify-between">Credits <span>100</span></h2>
          
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}