import React from "react";
import { Bell } from "lucide-react"; // 📢 Notification Icon
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { UserNav } from "./user-nav";
import ThemeToggle from "./ThemeToggle/theme-toggle";
import { Breadcrumbs } from "../breadcrumbs";
import SearchInput from "../search-input";

export default function Header({ token }: { token: string }) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumbs />
      </div>

      <div className="flex items-center gap-4 px-4">
        <div className="hidden md:flex">
          <SearchInput />
        </div>

        {/* 🔔 Notification Icon */}
        <div className="relative cursor-pointer">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            3
          </span>
        </div>

        <UserNav token={token} />
        <ThemeToggle />
      </div>
    </header>
  );
}

