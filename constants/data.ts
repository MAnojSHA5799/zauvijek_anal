import { NavItem } from "@/types";

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard/overview",
    icon: "dashboard",
    isActive: false,
    shortcut: ["d", "d"],
    items: [], // Empty array as there are no child items for Dashboard
  },
  {
    title: "Pattern Making",
    url: "/dashboard/pattern-making",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Mold Preparation",
    url: "/dashboard/mold-preparation",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Assembly of Mold & Gating",
    url: "/dashboard/negligible-mold",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Metal Melting",
    url: "/dashboard/metal-melting",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Tapping",
    url: "/dashboard/Tapping",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },

  {
    title: "Purification",
    url: "/dashboard/Purification",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Pouring",
    url: "/dashboard/Pouring",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Rough Casting",
    url: "/dashboard/Rough-Casting",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Cooling",
    url: "/dashboard/Cooling",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Scrap",
    url: "/dashboard/Scrap",
    icon: "trash", // Changed from "user" to "trash"
    shortcut: ["p", "p"],
    isActive: false,
    items: [],
  },
  {
    title: "Solidification",
    url: "/dashboard/Solidification",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Risers",
    url: "/dashboard/Risers",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Shakeout",
    url: "/dashboard/Shakeout",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: " Shot Blasting",
    url: "/dashboard/shot-blasting",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Trimming",
    url: "/dashboard/trimming",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Heat Process",
    url: "/dashboard/heat-process",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Vibration",
    url: "/dashboard/Vibration",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Net Zero",
    url: "/dashboard/Net-Zero",
    icon: "user",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Fishbone Analysis",
    url: "/dashboard/fishbone",
    icon: "dashboard",
    isActive: false,
    shortcut: ["d", "d"],
    items: [], // Empty array as there are no child items for Dashboard
  },
  {
    title: "FEMA Analysis",
    url: "/dashboard/FMEA-Analysis",
    icon: "dashboard",
    isActive: false,
    shortcut: ["d", "d"],
    items: [], // Empty array as there are no child items for Dashboard
  },
  {
    title: "Pareto Analytics",
    url: "/dashboard/Pareto-analytics",
    icon: "dashboard",
    isActive: false,
    shortcut: ["d", "d"],
    items: [], // Empty array as there are no child items for Dashboard
  },
  {
    title: "Data Analytics",
    url: "/dashboard/data-analytices",
    icon: "dashboard",
    isActive: false,
    shortcut: ["d", "d"],
    items: [], // Empty array as there are no child items for Dashboard
  },

  {
    title: "Sand Analytics",
    url: "/dashboard/green-sand", // Placeholder as there is no direct link for the parent
    icon: "billing",
    isActive: true,

    items: [
      {
        title: "Green Sand",
        url: "/dashboard/green-sand",
        icon: "dashboard",
        isActive: true,
        shortcut: ["d", "d"],
        items: [], // Empty array as there are no child items for Dashboard
      },
      {
        title: "Data Storage",
        url: "/dashboard/data-management",
        icon: "dashboard",
        isActive: true,
        shortcut: ["d", "d"],
        items: [], // Empty array as there are no child items for Dashboard
      },
      // {
      //   title: "Process Changes",
      //   url: "/dashboard/process-changes",
      //   icon: "userPen",
      //   shortcut: ["m", "m"],
      // },
      // {
      //   title: "System Changes",
      //   shortcut: ["l", "l"],
      //   url: "/dashboard/system-changes",
      //   icon: "login",
      // },
    ],
  },

  // {
  //   title: "Data Management",
  //   url: "/dashboard/data-analytices", // Placeholder as there is no direct link for the parent
  //   icon: "billing",
  //   isActive: true,

  //   items: [
  //     {
  //       title: "Data Storage",
  //       url: "/dashboard/data-management",
  //       icon: "dashboard",
  //       isActive: false,
  //       shortcut: ["d", "d"],
  //       items: [], // Empty array as there are no child items for Dashboard
  //     },
  //     {
  //       title: "Process Changes",
  //       url: "/dashboard/process-changes",
  //       icon: "userPen",
  //       shortcut: ["m", "m"],
  //     },
  //     {
  //       title: "System Changes",
  //       shortcut: ["l", "l"],
  //       url: "/dashboard/system-changes",
  //       icon: "login",
  //     },
  //   ],
  // },
  // {
  //     title: "Account",
  //     url: "#", // Placeholder as there is no direct link for the parent
  //     icon: "billing",
  //     isActive: true,

  //     items: [

  //       {
  //         title: "Profile",
  //         url: "/dashboard/profile",
  //         icon: "userPen",
  //         shortcut: ["m", "m"],
  //       },
  //       {
  //         title: "Login",
  //         shortcut: ["l", "l"],
  //         url: "/",
  //         icon: "login",
  //       },
  //     ],
  //   },

  // {
  //   title: "Kanban",
  //   url: "/dashboard/kanban",
  //   icon: "kanban",
  //   shortcut: ["k", "k"],
  //   isActive: false,
  //   items: [], // No child items
  // },
];

export interface SaleUser {
  id: number;
  name: string;
  email: string;
  amount: string;
  image: string;
  initials: string;
}

export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    image: "https://api.slingacademy.com/public/sample-users/1.png",
    initials: "OM",
  },
  {
    id: 2,
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    image: "https://api.slingacademy.com/public/sample-users/2.png",
    initials: "JL",
  },
  {
    id: 3,
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    image: "https://api.slingacademy.com/public/sample-users/3.png",
    initials: "IN",
  },
  {
    id: 4,
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    image: "https://api.slingacademy.com/public/sample-users/4.png",
    initials: "WK",
  },
  {
    id: 5,
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    image: "https://api.slingacademy.com/public/sample-users/5.png",
    initials: "SD",
  },
];
