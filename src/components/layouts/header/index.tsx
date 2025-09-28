import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import SearchKbarInput from "@/components/shared/kbar/search-kbar-input";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { UserNavbar } from "@/components/shared/user-navbar";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const Header = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumbs />
      </div>

      <div className="flex items-center gap-3 px-4">
        <div className="hidden md:flex">
          <SearchKbarInput />
        </div>
        <UserNavbar />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
