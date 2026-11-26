'use client'

import { Progress } from "@/components/ui/progress"
import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenuButton, SidebarMenuItem,} from "@/components/ui/sidebar"
import { UserDetailContext } from "@/context/UserDetailContext"
import { UserButton } from "@clerk/nextjs"
import { AppWindow, Blocks, Bot, Layers, Play, Settings, User2 } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useContext } from "react"

export function AppSidebar() {

  const path = usePathname()
  const {userDetails, setUserdetails} = useContext(UserDetailContext);
  const router = useRouter();
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row gap-2.5 p-4 items-center">
        <img src='/logo.svg' alt="logo" width={25} height={25} />
      <h2 className="font-semibold text-lg text-slate-700">Pilot AI</h2>
      </SidebarHeader>
      <SidebarContent>
          <SidebarGroup className="flex gap-1">
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>

            <SidebarMenuButton  onClick={()=> router.push('/dashboard')}
            className={`h-12 gap-3 hover:bg-slate-100 ${path == ('/dashboard')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-blue-100 items-center justify-center rounded-lg">
                  <AppWindow className="h-4.5 w-4.5 text-blue-900"/>
                  </div>
                <span>Dashboard</span>
            </SidebarMenuButton>

             <SidebarMenuButton  onClick={()=> router.push('/dashboard/agents')}
             className={`h-12 gap-3 hover:bg-slate-100 ${path == ('/dashboard/agents')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-red-100 items-center justify-center rounded-lg">
                  <Bot className="h-4.5 w-4.5 text-red-900"/>
                  </div>
                <span>Agents</span>
            </SidebarMenuButton>

             <SidebarMenuButton  onClick={()=> router.push('/dashboard/runs')}
             className={`h-12 gap-3 hover:bg-slate-100 ${path == ('/dashboard/runs')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-purple-100 items-center justify-center rounded-lg">
                  <Play className="h-4.5 w-4.5 text-purple-900"/>
                  </div>
                <span>Runs</span>
            </SidebarMenuButton>

             <SidebarMenuButton  onClick={()=> router.push('/dashboard/integrations')}
             className={`h-12 gap-3 hover:bg-slate-100 ${path == ('/dashboard/integrations')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-green-100 items-center justify-center rounded-lg">
                  <Blocks className="h-4.5 w-4.5 text-green-900"/>
                  </div>
                <span>Integrations</span>
            </SidebarMenuButton>

             <SidebarMenuButton  onClick={()=> router.push('/dashboard/templates')}
             className={`h-12 gap-3 hover:bg-slate-100 ${path == ('/dashboard/templates')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-orange-100 items-center justify-center rounded-lg">
                  <Layers className="h-4.5 w-4.5 text-orange-900"/>
                  </div>
                <span>Templates</span>
            </SidebarMenuButton>

          </SidebarGroup>
        <SidebarGroup> 
          <SidebarGroupLabel>Users</SidebarGroupLabel>
            <SidebarMenuButton  onClick={()=> router.push('/dashboard/settings')}
            className={`h-12 gap-3 hover:bg-slate-100 ${path == ('/dashboard/settings')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-gray-100 items-center justify-center rounded-lg">
                  <Settings className="h-4.5 w-4.5 text-gray-900"/>
                  </div>
                <span>Settings</span>
            </SidebarMenuButton>

            <SidebarMenuButton  onClick={()=> router.push('/dashboard/profile')}
            className={`h-12 gap-3 hover:bg-slate-100 ${path == ('/dashboard/profile')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-yellow-100 items-center justify-center rounded-lg">
                  <User2 className="h-4.5 w-4.5 text-yellow-900"/>
                  </div>
                <span>Profile</span>
            </SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 border rounded-lg ">
          <h2 className="flex justify-between pb-2">Agents <span>{userDetails?.agentCredits}/5</span></h2>
          <h2 className="flex justify-between pb-2">Credits <span>{userDetails?.usageCredits}</span></h2>
          <Progress value={66}/>
        </div>

        <div className="flex items-center p-2 mt-2 gap-2.5">
          <UserButton/>
          <span>{userDetails?.name}</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}