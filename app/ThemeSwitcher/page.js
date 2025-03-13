// components/ThemeSwitcher.tsx

"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Chip } from "@heroui/react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // فقط بعد از لود شدن کامپوننت، تغییر تم را اعمال می‌کنیم
    setMounted(true);
  }, []);

  if (!mounted) return null;  // تا زمانی که کامپوننت لود نشه، چیزی نشون نده

  return (
    <Chip onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer" variant="dot">
      {theme === "dark" ? "☀️" : "🌙"}
    </Chip>
  );
}
