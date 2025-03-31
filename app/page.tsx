"use client"

import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

// Component Showcases
import { ButtonShowcase } from "@/components/showcases/button"
import { InputShowcase } from "@/components/showcases/input"
import { SelectShowcase } from "@/components/showcases/select"
import { CheckboxShowcase } from "@/components/showcases/checkbox"
import { RadioShowcase } from "@/components/showcases/radio"
import { SwitchShowcase } from "@/components/showcases/switch"
import { CardShowcase } from "@/components/showcases/card"
import { BadgeShowcase } from "@/components/showcases/badge"
import { AlertShowcase } from "@/components/showcases/alert"
import { AvatarShowcase } from "@/components/showcases/avatar"
import { AccordionShowcase } from "@/components/showcases/accordion"
import { DropdownShowcase } from "@/components/showcases/dropdown"
import { ProgressShowcase } from "@/components/showcases/progress"
import { SeparatorShowcase } from "@/components/showcases/separator"
import { SliderShowcase } from "@/components/showcases/slider"
import { TabsShowcase } from "@/components/showcases/tabs"
import { TextareaShowcase } from "@/components/showcases/textarea"
import { ToggleShowcase } from "@/components/showcases/toggle"
import { TooltipShowcase } from "@/components/showcases/tooltip"
import { LabelShowcase } from "@/components/showcases/label"

// Application Components
import { LoginFormShowcase } from "@/components/applications/login"
import { SignupFormShowcase } from "@/components/applications/signup"
import { UserProfileShowcase } from "@/components/applications/user-profile"
import { DashboardShowcase } from "@/components/applications/dashboard"
import { DataTableShowcase } from "@/components/applications/data-table"
import { NotificationShowcase } from "@/components/applications/notification"
import { SettingsShowcase } from "@/components/applications/settings"

export default function ComponentShowcase() {
  const [activeComponent, setActiveComponent] = useState("button")
  const [activeCategory, setActiveCategory] = useState("shadcn")

  return (
    <SidebarProvider>
      <ComponentSidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <SidebarInset className="bg-white/20 backdrop-blur-sm">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border bg-card">
          <div className="flex items-center px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    {activeCategory === "shadcn" ? "Shadcn/ui Components" : "Applications"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{getComponentName(activeComponent)}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 w-full bg-transparent">
          <div className="w-full rounded-xl shadow-md p-6 border border-border bg-card">
            <ComponentDisplay componentId={activeComponent} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function ComponentSidebar({
  activeComponent,
  setActiveComponent,
  activeCategory,
  setActiveCategory,
}: {
  activeComponent: string
  setActiveComponent: (id: string) => void
  activeCategory: string
  setActiveCategory: (id: string) => void
}) {
  const shadcnComponents = [
    { id: "accordion", name: "Accordion" },
    { id: "alert", name: "Alert" },
    { id: "avatar", name: "Avatar" },
    { id: "badge", name: "Badge" },
    { id: "button", name: "Button" },
    { id: "card", name: "Card" },
    { id: "checkbox", name: "Checkbox" },
    { id: "dropdown", name: "Dropdown Menu" },
    { id: "input", name: "Input" },
    { id: "label", name: "Label" },
    { id: "progress", name: "Progress" },
    { id: "radio", name: "Radio Group" },
    { id: "select", name: "Select" },
    { id: "separator", name: "Separator" },
    { id: "slider", name: "Slider" },
    { id: "switch", name: "Switch" },
    { id: "tabs", name: "Tabs" },
    { id: "textarea", name: "Textarea" },
    { id: "toggle", name: "Toggle" },
    { id: "tooltip", name: "Tooltip" },
  ]

  const appComponents = [
    { id: "login-form", name: "Login Form" },
    { id: "signup-form", name: "Signup Form" },
    { id: "user-profile", name: "User Profile" },
    { id: "dashboard", name: "Dashboard" },
    { id: "data-table", name: "Data Table" },
    { id: "notification", name: "Notification" },
    { id: "settings", name: "Settings" },
  ]

  const handleComponentClick = (category: string, id: string) => {
    setActiveCategory(category)
    setActiveComponent(id)
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Component Showcase</span>
                <span className="">Ghibli Theme</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-65px)]">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    className="font-medium"
                    isActive={activeCategory === "shadcn"}
                    onClick={() => setActiveCategory("shadcn")}
                  >
                    Shadcn/ui Components
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {shadcnComponents.map((component) => (
                      <SidebarMenuSubItem key={component.id}>
                        <SidebarMenuSubButton
                          isActive={activeComponent === component.id && activeCategory === "shadcn"}
                          onClick={() => handleComponentClick("shadcn", component.id)}
                        >
                          {component.name}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    className="font-medium"
                    isActive={activeCategory === "app"}
                    onClick={() => setActiveCategory("app")}
                  >
                    Applications
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {appComponents.map((component) => (
                      <SidebarMenuSubItem key={component.id}>
                        <SidebarMenuSubButton
                          isActive={activeComponent === component.id && activeCategory === "app"}
                          onClick={() => handleComponentClick("app", component.id)}
                        >
                          {component.name}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

function getComponentName(componentId: string): string {
  const componentMap: Record<string, string> = {
    // shadcn components
    accordion: "Accordion",
    alert: "Alert",
    avatar: "Avatar",
    badge: "Badge",
    button: "Button",
    card: "Card",
    checkbox: "Checkbox",
    dropdown: "Dropdown Menu",
    input: "Input",
    label: "Label",
    progress: "Progress",
    radio: "Radio Group",
    select: "Select",
    separator: "Separator",
    slider: "Slider",
    switch: "Switch",
    tabs: "Tabs",
    textarea: "Textarea",
    toggle: "Toggle",
    tooltip: "Tooltip",

    // application components
    "login-form": "Login Form",
    "signup-form": "Signup Form",
    "user-profile": "User Profile",
    dashboard: "Dashboard",
    "data-table": "Data Table",
    notification: "Notification",
    settings: "Settings",
  }

  return componentMap[componentId] || componentId
}

function ComponentDisplay({ componentId }: { componentId: string }) {
  switch (componentId) {
    // shadcn components
    case "button":
      return <ButtonShowcase />
    case "input":
      return <InputShowcase />
    case "select":
      return <SelectShowcase />
    case "checkbox":
      return <CheckboxShowcase />
    case "radio":
      return <RadioShowcase />
    case "switch":
      return <SwitchShowcase />
    case "card":
      return <CardShowcase />
    case "badge":
      return <BadgeShowcase />
    case "alert":
      return <AlertShowcase />
    case "avatar":
      return <AvatarShowcase />
    case "accordion":
      return <AccordionShowcase />
    case "dropdown":
      return <DropdownShowcase />
    case "progress":
      return <ProgressShowcase />
    case "separator":
      return <SeparatorShowcase />
    case "slider":
      return <SliderShowcase />
    case "tabs":
      return <TabsShowcase />
    case "textarea":
      return <TextareaShowcase />
    case "toggle":
      return <ToggleShowcase />
    case "tooltip":
      return <TooltipShowcase />
    case "label":
      return <LabelShowcase />

    // application components
    case "login-form":
      return <LoginFormShowcase />
    case "signup-form":
      return <SignupFormShowcase />
    case "user-profile":
      return <UserProfileShowcase />
    case "dashboard":
      return <DashboardShowcase />
    case "data-table":
      return <DataTableShowcase />
    case "notification":
      return <NotificationShowcase />
    case "settings":
      return <SettingsShowcase />

    default:
      return <div>Select a component from the sidebar</div>
  }
}

