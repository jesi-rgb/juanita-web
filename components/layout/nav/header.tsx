"use client";

import React from "react";
import Link from "next/link";

const navigationIcons = [
  {
    icon: "🏠",
    href: "/",
    label: "Home",
  },
  {
    icon: "📖",
    href: "/posts",
    label: "Blog",
  },
  {
    icon: "📷",
    href: "/photography",
    label: "Photography",
  },
  {
    icon: "🖼️",
    href: "/gallery",
    label: "Gallery",
  },
  {
    icon: "👤",
    href: "/about",
    label: "About",
  },
];

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="flex justify-center gap-8 pt-8">
        {navigationIcons.map((item, index) => (
          <Link key={index} href={item.href} title={item.label}>
            <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-white/50 transition-colors bg-transparent">
              <span className="text-2xl">{item.icon}</span>
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};
