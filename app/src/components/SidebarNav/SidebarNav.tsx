import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
} from "../ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { useContext } from "react";
import { SessionProviderContext } from "@/Providers/SessionProvider/SessionProviderContext";
import { menu } from "@/Consts/menu";
import { LuChevronDown, LuChevronUp, LuLogOut, LuUser } from "react-icons/lu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { useNavigate } from "react-router-dom";

function SidebarNav() {
  const sessionContext = useContext(SessionProviderContext);
  const navigate = useNavigate();
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        {menu.map((group) => (
          <Collapsible
            key={group.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  {group.title}
                  <LuChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem
                      key={item.title}
                      className="flex align-middle"
                    >
                      <SidebarMenuButton onClick={() => navigate(item.href)}>
                        <item.icon className="mr-2" />
                        {item.title}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex">
                  <LuChevronUp className="mr-2" />
                  {sessionContext?.session?.user.email}
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem className="flex">
                  <LuUser className="mr-2" />
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    sessionContext?.logout();
                  }}
                  className="flex"
                >
                  <LuLogOut className="mr-2" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default SidebarNav;
