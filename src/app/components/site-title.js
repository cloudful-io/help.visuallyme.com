'use client'
import React from "react";
import Image from "next/image";
import { useTheme } from "nextra-theme-docs";

export const SiteTitle = () => {
  const { resolvedTheme } = useTheme(); // 'light' | 'dark'

  const titleColor = resolvedTheme === "dark" ? "#4FD1C5" : "#2C7A7B";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Image
        src={"/images/logos/logo.png"}
        alt="Logo"
        width={48}
        height={48}
      />
      <span
        style={{
          color: titleColor,
          fontWeight: "bold",
          lineHeight: "1.6rem",
          fontSize: "1.3125rem",
          fontFamily: "Plus Jakarta Sans, Helvetica, Arial, sans-serif",
        }}
        >
        Visually.Me
      </span>
    </div>
  );
};