"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { IoMoonSharp } from "react-icons/io5";
import { GoSun } from "react-icons/go";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected
      size="md"
      color="secondary"
      startContent={<GoSun />}
      endContent={<IoMoonSharp />}
      onChange={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
    ></Switch>
  );
}
