import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "layoutDashboard",
    isActive: false,
    shortcut: ["d", "d"],
    items: [],
  },
  {
    title: "E-commerce",
    url: "#",
    icon: "shoppingBag",
    isActive: true,
    items: [
      {
        title: "Products",
        url: "/product/list",
        icon: "listOrderedIcon",
        shortcut: ["p", "p"],
      },
      {
        title: "Products Inventory",
        url: "/product/inventory",
        icon: "warehouse",
        shortcut: ["p", "p"],
      },
      {
        title: "Products Low Stock",
        url: "/product/low-stock",
        icon: "box",
        shortcut: ["p", "p"],
      },
      {
        title: "Categories",
        shortcut: ["c", "c"],
        url: "/category-list",
        icon: "listOrderedIcon",
      },
      {
        title: "Orders",
        shortcut: ["o", "o"],
        url: "/order-list",
        icon: "dock",
      },
    ],
  },
  {
    title: "Services",
    url: "#",
    icon: "settings",
    isActive: true,
    items: [
      {
        title: "Appointments",
        url: "/appointment-list",
        icon: "calendar",
        shortcut: ["a", "p"],
      },
      {
        title: "Blogs",
        url: "/blog-list",
        icon: "paperclip",
        shortcut: ["b", "b"],
      },
    ],
  },
  {
    title: "Accounts",
    url: "#",
    icon: "users",
    isActive: true,
    items: [
      {
        title: "User Accounts",
        url: "/user-accounts",
        icon: "userPenIcon",
        shortcut: ["u", "a"],
      },
    ],
  },
  // {
  //   title: "Me",
  //   url: "#",
  //   icon: "userCircle",
  //   isActive: true,
  //   items: [
  //     {
  //       title: "Profile",
  //       url: "/dashboard/profile",
  //       icon: "userPenIcon",
  //       shortcut: ["m", "m"],
  //     },
  //     {
  //       title: "Login",
  //       shortcut: ["l", "l"],
  //       url: "/",
  //       icon: "logOutIcon",
  //     },
  //   ],
  // },
];
