import React from "react";
import { Button } from "@/components/ui/button";

export const MissionStatementSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e]">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[600px] pointer-events-none">
            <img
              className="absolute top-0 left-0 w-[45%] h-full object-contain"
              alt="Left iphone"
              src="/figmaAssets/left-iphone.png"
            />
            <img
              className="absolute top-0 right-0 w-[45%] h-full object-contain"
              alt="Right iphone"
              src="/figmaAssets/right-iphone.png"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl mx-auto text-center">
            <div className="font-page-top font-[number:var(--page-top-font-weight)] text-white text-[length:var(--page-top-font-size)] tracking-[var(--page-top-letter-spacing)] leading-[var(--page-top-line-height)] [font-style:var(--page-top-font-style)]">
              Mission
            </div>

            <h2 className="[font-family:'Technor_Variable-Regular',Helvetica] font-normal text-white text-5xl md:text-6xl tracking-[0] leading-[normal]">
              We bridge the digital divide
            </h2>

            <p className="font-body-text font-[number:var(--body-text-font-weight)] text-white text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] max-w-3xl">
              Our mission is to empower African businesses with modern,
              high-impact websites that compete on a global stage. We transform
              digital potential into real-world success.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <img
                className="w-[60px] h-[60px]"
                alt="Logo icon"
                src="/figmaAssets/logoicon-1.svg"
              />
              <div className="[font-family:'Unbounded',Helvetica] font-medium text-transparent text-6xl tracking-[-1.50px] leading-[60px] bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                exul
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <Button className="bg-[#2c2c2c] text-neutral-100 hover:bg-[#3c3c3c] rounded-lg border border-solid border-neutral-700 h-auto px-3 py-3">
                <span className="font-small-text font-[number:var(--small-text-font-weight)] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                  Learn More
                </span>
              </Button>

              <button className="font-small-text font-[number:var(--small-text-font-weight)] text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)] hover:underline">
                Contact us &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
