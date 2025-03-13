"use client";

import { ThemeProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <HeroUIProvider>{children}</HeroUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
