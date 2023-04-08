"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import 'react-toastify/dist/ReactToastify.css';

export function Providers({ children }) {
// theme is dark or light


  return (
    <ThemeProvider attribute="class" enableSystem="false" defaultTheme="dark">
      
      {children}
    </ThemeProvider>
  );
}
