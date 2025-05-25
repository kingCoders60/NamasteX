"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative bg-opacity-20 backdrop-blur rounded-full border-none p-3 transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      {/* Sun Icon (Light Mode) */}
      <SunIcon className="h-5 w-5 text-yellow-400 transition-all dark:opacity-0 dark:scale-0 animate-spin" />
      
      {/* Moon Icon (Dark Mode) */}
      <MoonIcon className="absolute h-5 w-5 text-gray-300 transition-all opacity-0 scale-0 dark:opacity-100 dark:scale-100 animate-pulse" />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
