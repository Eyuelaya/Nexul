import React from "react";
import { Button } from "@/components/ui/button";
import styles from "./styles.module.css";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[799px]">
      {/* full-cover background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/Nexul/figmaAssets/bg-video-2---made-with-clipchamp-1.png"
      >
        <source src="/Nexul/figmaAssets/bg-hero1.mp4" type="video/mp4" />
        {/* optional webm fallback with matching base name */}
        <source src="/Nexul/figmaAssets/bg-hero.webm" type="video/webm" />

        {/* Fallback image shown if the browser doesn't support video or sources are missing. */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Bg video made with"
          src="/Nexul/figmaAssets/bg-video-2---made-with-clipchamp-1.png"
        />
      </video>

      <div className="relative flex flex-col items-center justify-center h-full px-4">
        <h1 className="tech font-medium absolute top-[323px] w-full max-w-[665px] font-h1  text-white text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] ">
          Build your digital presence. Expand your impact.
        </h1>

        <p className="sup absolute top-[506px] w-full max-w-[891px] text-[22px] [font-family:'Supreme_Variable-Regular',Helvetica] font-normal text-white text-center tracking-[0] leading-[normal]">
          Affordable, high-converting websites crafted for African businesses
          ready to grow. We turn digital dreams into powerful online realities.
        </p>

        <div className="absolute top-[622px] flex items-center justify-center gap-4 w-full max-w-[309px]">
          <Button
            variant="ghost"
             onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-1 h-auto items-center justify-center gap-2 p-3 bg-[#303030] rounded-lg overflow-hidden hover:bg-white/10"
          >
            <span className="font-body-text font-[number:var(--body-text-font-weight)] text-white text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
              Get Started
            </span>
          </Button>

          <Button
            variant="ghost"
             onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-1 h-auto items-center justify-center gap-2 p-3 bg-[#303030] rounded-lg overflow-hidden hover:bg-white/10"
          >
            <span className="font-body-text font-[number:var(--small-text-font-weight)] text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
              View our work
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
