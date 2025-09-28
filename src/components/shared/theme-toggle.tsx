"use client";

import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/assets/icons";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeToggle = React.useCallback(
    (e?: React.MouseEvent) => {
      const newMode = resolvedTheme === "dark" ? "light" : "dark";
      const root = document.documentElement;

      if (!document.startViewTransition) {
        setTheme(newMode);
        return;
      }

      // Set coordinates from the click event
      if (e) {
        root.style.setProperty("--x", `${e.clientX}px`);
        root.style.setProperty("--y", `${e.clientY}px`);
      }

      document.startViewTransition(() => {
        setTheme(newMode);
      });
    },
    [resolvedTheme, setTheme]
  );

  return (
    <Button
      variant="secondary"
      size="icon"
      className="group/toggle size-8"
      onClick={handleThemeToggle}
    >
      {resolvedTheme === "dark" ? (
        <Icons.sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Icons.moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
