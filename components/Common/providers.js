"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function Providers({ children }) {
// theme is dark or light

  return (
    <ThemeProvider attribute="class" enableSystem="false" defaultTheme="dark">
      <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            // if theme is dark, then toast theme is dark and else light
            theme="dark"
          />
      {children}
    </ThemeProvider>
  );
}
