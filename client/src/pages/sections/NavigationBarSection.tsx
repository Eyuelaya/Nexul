import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const navItems = [
  { label: "Home", left: "left-[344px]", href: "/" },
  { label: "Services", left: "left-[511px]", href: "/#services" },
  { label: "Portfolio", left: "left-[713px]", href: "/#portfolio" },
  { label: "About", left: "left-[916px]", href: "/about" },
];

export const NavigationBarSection = (): JSX.Element => {
  return (
    <nav className="relative w-full h-[91px]">
      <div className="absolute top-[31px] left-[247px] w-[1081px] h-14 bg-[#5d5d5b] rounded-[31px] backdrop-blur-[6.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.3px)_brightness(100%)] opacity-[0.49]" />

      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <span
            className={`${item.left} w-auto absolute top-[47px] [font-family:'Supreme_Variable-Regular',Helvetica] font-normal text-[#fcfbff] text-xl text-center tracking-[0] leading-[normal] cursor-pointer hover:opacity-80 transition-opacity`}
          >
            {item.label}
          </span>
        </Link>
      ))}

      <div className="flex w-60 h-[60px] items-center gap-4 absolute top-[29px] left-[999px] rounded-[54px]">
        <Button
          variant="ghost"
          className="flex items-center justify-center gap-2 p-3 flex-1 rounded-[65px] overflow-hidden h-auto bg-transparent hover:bg-white/10"
        >
          <span className="font-body-text font-[number:var(--body-text-font-weight)] text-[#303030] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
            Get Started
          </span>
        </Button>

        <Button className="flex items-center justify-center gap-2 p-3 flex-1 bg-[#2c2c2c] rounded-[18px] overflow-hidden backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] h-auto hover:bg-[#3c3c3c]">
          <span className="font-small-text font-[number:var(--small-text-font-weight)] text-neutral-100 text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
            Get a quote
          </span>
        </Button>
      </div>

      <img
        className="absolute top-0 left-0.5 w-[200px] h-[69px]"
        alt="Union"
        src="/figmaAssets/union-1.svg"
      />

      <div className="absolute top-[31px] left-[calc(50.00%_-_668px)] w-[164px] h-[60px]">
        <img
          className="absolute top-0 left-0 w-[60px] h-[60px]"
          alt="Logo icon"
          src="/figmaAssets/logoicon.svg"
        />

        <div className="absolute -top-0.5 left-[60px] w-[136px] h-[60px] flex">
          <div className="mt-[6.7px] w-[142px] h-[60px] [font-family:'Unbounded',Helvetica] font-medium text-transparent text-6xl tracking-[-1.50px] leading-[60px] whitespace-nowrap">
            exul
          </div>
        </div>
      </div>
    </nav>
  );
};
