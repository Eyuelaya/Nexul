import React from "react";
import { Button } from "@/components/ui/button";

export const MissionStatementSection = (): JSX.Element => {
  return (

    <section className="relative w-full py-24 flex items-center justify-center h-screen">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[600px] pointer-events-none">
              <img
                className="absolute top-0 left-0 w-[50%] h-full object-contain
                  -rotate-[14deg] scale-[1.15] translate-x-[-30px] translate-y-[10px]"
                alt="Left iPhone"
                src="/figmaAssets/left-iphone.png"
              />
              <img
                className="absolute top-0 right-0 w-[50%] h-full object-contain
                          rotate-[-12deg] scale-[1.15] skew-y-[3deg] translate-x-[80px] translate-y-[10px]"
                alt="Right iPhone"
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
            <p className="font-body-text text-[16px] font-[number:var(--body-text-font-weight)] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] max-w-3xl">
              Our mission is to empower African businesses with modern,
              high-impact websites that compete on a global stage. We transform
              digital potential into real-world success.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <img
                className="w-[60px] h-[60px] absolute right-[450px] pb-9px"
                alt="Logo icon"
                src="/figmaAssets/logoicon-1.svg"
              />
              <div className="font-medium absolute right-[334px] text-transparent text-6xl tracking-[-1.50px] leading-[60px] bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                exul
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <Button 
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#2c2c2c] text-neutral-100 hover:bg-[#3c3c3c] rounded-lg border border-solid border-neutral-700 h-auto px-3 py-3">
                <span className="font-small-text font-[number:var(--small-text-font-weight)] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                  Learn More
                </span>
              </Button>

              <button 
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-small-text font-[number:var(--small-text-font-weight)] text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)] hover:underline">
                Contact us &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
