import { useState } from "react";
import cookieCutter from 'cookie-cutter';
import { supabase } from "@/components/supabase";
const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
const profileData = [
  {
    id: 4,
    icon:"CgProfile",
    title: "Profile Name",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Dashboard",
        path: "/dashboard",
        newTab: false,
      },
      {
        id: 42,
        title: "Profile",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Settings",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Logout",
        func: async ()  => {
          const { error } = await supabase.auth.signOut();
          window.location.reload();
          console.log("logout" , error);
        },
        path: "",
        newTab: false,
      }
    ],
  },
];
export  {menuData, profileData};
