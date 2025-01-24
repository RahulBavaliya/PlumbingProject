"use client";

import { useCustomization } from "@/lib/hooks/useCustomization";
import { useEffect } from "react";

export function CustomizationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, fontSize, primaryColor } = useCustomization();

  useEffect(() => {
    // Apply theme
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}px`;

    // Apply primary color
    const hsl = hexToHSL(primaryColor);
    document.documentElement.style.setProperty('--primary', `${hsl.h} ${hsl.s}% ${hsl.l}%`);
  }, [theme, fontSize, primaryColor]);

  return <>{children}</>;
}

// Helper function to convert hex color to HSL
function hexToHSL(hex: string): { h: number; s: number; l: number } {
  // Remove the # if present
  hex = hex.replace(/^#/, '');

  // Parse the hex values
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h *= 60;
  }

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}