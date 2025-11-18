import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const navItems = [
  { label: "Home", left: "left-[444px]", href: "/" },
  { label: "Services", left: "left-[611px]", href: "/#services" },
  { label: "Portfolio", left: "left-[813px]", href: "/#portfolio" },
  { label: "About", left: "left-[1021px]", href: "/about" },
];

export const NavigationBarSection = (): JSX.Element => {
  const [showLogo, setShowLogo] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      // fade out after leaving hero (after 50px scroll)
      if (window.scrollY > 50) {
        setShowLogo(false);
      } else {
        setShowLogo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className=" w-full h-[91px] sticky top-0 left-0 z-50 bg-transparent ">
      <div className="absolute top-[39px] left-[317px] w-[1081px] h-14 bg-[#5d5d5b] rounded-[31px] backdrop-blur-[6.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.3px)_brightness(100%)] opacity-[0.49]" />

      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <span
            className={`${item.left} w-auto absolute top-[57px] [font-family:'Supreme-Variable',Helvetica] font-normal text-[#fcfbff] text-xl text-center tracking-[0] leading-[normal] cursor-pointer hover:opacity-80 transition-opacity`}
          >
            {item.label}
          </span>
        </Link>
      ))}

      <div className="flex h-[60px] items-center gap-4 absolute top-[41px] right-[140px] rounded-[54px]">
        <Button
          className="
            flex items-center justify-end gap-2 px-6 py-3
            bg-[#2c2c2c] hover:bg-[#3c3c3c]
            rounded-[18px]
            h-auto
            transition
          "
        >
          <span className="text-neutral-100 text-[16px] [font-family:'Technor-bold']">
            Get a quote
          </span>
        </Button>
      </div>

      {/* ------------------- LOGO WITH FADE EFFECT ------------------- */}
      <img
        className={`absolute top-5 left-[76px] w-[200px] h-[69px] transition-all duration-500 ${
          showLogo ? "opacity-100" : "opacity-0"
        }`}
        alt="Union"
        src="/figmaAssets/union-1.svg"
      />

      <a href="#H">
        <div
          className={`
            absolute top-[51px] left-[76px] w-[164px] h-[60px] transition-all duration-500
            ${showLogo ? "opacity-100" : "opacity-0"}
          `}
        >
          <img
            className="absolute top-0 left-0 w-[60px] h-[60px]"
            alt="Logo icon"
            src="/Nexul/figmaAssets/logoicon.svg" 
          />

          <div className="absolute -top-0.5 left-[60px] w-[136px] h-[60px] flex">
            <div className="text-[#7266FE] mt-[6.7px] w-[130px] h-[48px] [font-family:'Unbounded',Helvetica]  text-6xl tracking-[-1.50px] leading-[60px] whitespace-nowrap">
              exul
            </div>
          </div>
        </div>
      </a>
      {/* -------------------------------------------------------------- */}
    </nav>
  );
};