import { BookText, Clapperboard, Film, Home, Popcorn } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Início",
    url: "/",
    icon: Home,
  },
  {
    title: "Sobre",
    url: "/sobre",
    icon: BookText,
  },
  {
    title: "Filmes",
    url: "#",
    icon: Film,
  },
  {
    title: "Próximos Lançamentos",
    url: "#",
    icon: Clapperboard,
  },
  {
    title: "Produtos",
    url: "#",
    icon: Popcorn,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <img src="logoTrabalho.png" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
