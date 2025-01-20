import { SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

export interface ContentWrapperProps {
  children: ReactNode;
  topBar?: ReactNode;
}

function ContentWrapper({ children, topBar }: ContentWrapperProps) {
  return (
    <div className="content-wrapper">
      <div className="flex p-2 bg-slate-50 space-x-2 items-center">
        <SidebarTrigger />
        <Separator orientation="vertical" className="h-4" />
        {topBar}
      </div>
      {children}
    </div>
  );
}

export default ContentWrapper;
