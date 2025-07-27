"use client";
import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t bg-white pt-20 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-12 flex flex-wrap items-center gap-6 border-t py-6 flex-col md:flex-row md:justify-center">
          <div className="flex justify-center">
            <span className="self-center text-muted-foreground text-sm">
              © {new Date().getFullYear()} All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
