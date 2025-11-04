import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#130d20]">
      <div className="w-full px-[62px] py-8">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <nav className="flex items-center gap-8">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-nav font-[number:var(--nav-font-weight)] text-[#dcd5e9] text-[length:var(--nav-font-size)] tracking-[var(--nav-letter-spacing)] leading-[var(--nav-line-height)] whitespace-nowrap [font-style:var(--nav-font-style)] hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-start gap-3">
              <Input
                type="email"
                placeholder="you@example.com"
                defaultValue="you@example.com"
                className="w-60 h-auto px-4 py-3 bg-white rounded-lg border border-solid border-[#d9d9d9] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[#1e1e1e] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] [font-style:var(--single-line-body-base-font-style)]"
              />
              <Button className="h-auto px-6 py-3 bg-[#2c2c2c] rounded-lg border border-solid hover:bg-[#3c3c3c] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-neutral-100 text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] [font-style:var(--single-line-body-base-font-style)]">
                Submit
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <img
              className="w-[195px] h-[62px]"
              alt="Union"
              src="/figmaAssets/union.svg"
            />
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#d9d9d9] text-base tracking-[0] leading-4 whitespace-nowrap">
              © 2024 Nexul. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
