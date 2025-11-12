import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "/about#about" },
  { label: "Contact", href: "/home#contact" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#130d20] text-[#dcd5e9]">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-col gap-10">
          {/* Top Row: Nav + Email */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center lg:justify-start gap-6">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-nav text-[#dcd5e9] hover:text-white transition-colors text-base md:text-lg"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Email Subscription */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              <Input
                type="email"
                placeholder="you@example.com"
                className="flex-1 min-w-0 sm:w-60 px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] text-[#1e1e1e] placeholder:text-gray-500 focus:ring-2 focus:ring-[#7266FE] focus:outline-none"
                required
              />
              <Button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#2c2c2c] hover:bg-[#3c3c3c] text-neutral-100 rounded-lg"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Bottom Row: Logo + Rights */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <img
              className="w-40 h-auto"
              alt="Union"
              src="/figmaAssets/union.svg"
            />
            <p className="text-sm sm:text-base text-[#d9d9d9] text-center sm:text-right">
              © 2024 Nexul. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
