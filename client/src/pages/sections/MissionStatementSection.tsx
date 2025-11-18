import React from "react";
import { Button } from "@/components/ui/button";
import styles from "./styles.module.css";
export const MissionStatementSection = (): JSX.Element => {
  const scrollToContact = (): void => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-12 md:py-24 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center">
          {/* Background Images - Responsive */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] pointer-events-none overflow-hidden">
            <img
            className="absolute top-0 left-0 w-[40%] sm:w-[45%] md:w-[60%] h-full object-contain scale-110"
            alt="Left iPhone"
            src="/Nexul/figmaAssets/left-iphone.png"
          />
          <img
            className="absolute top-0 right-0 w-[40%] sm:w-[45%] md:w-[60%] h-full object-contain scale-110"
            alt="Right iPhone"
            src="/Nexul/figmaAssets/right-iphone.png">
            </img>

          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 max-w-4xl mx-auto text-center">
            {/* Mission Label */}
            <div className="tech font-page-top font-[number:var(--page-top-font-weight)] text-white text-[length:var(--page-top-font-size)] tracking-[var(--page-top-letter-spacing)] leading-[var(--page-top-line-height)] [font-style:var(--page-top-font-style)]">
              Mission
            </div>

            {/* Main Heading */}
            <h2 className="tech font-normal text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-normal leading-tight">
              We bridge the digital divide
            </h2>

            {/* Description */}
            <p className="sup font-body-text text-base sm:text-lg text-white drop-shadow-lg tracking-[var(--body-text-letter-spacing)] leading-relaxed max-w-2xl mt-4 md:mt-6">
              Our mission is to empower African businesses with modern,
              high-impact websites that compete on a global stage. We transform
              digital potential into real-world success.
            </p>

            {/* Logo Section - Centered and Responsive */}
            <div className="flex items-center justify-center mt-6 md:mt-8">
              <img
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                alt="Nexul logo icon"
                src="/Nexul/figmaAssets/logoicon-1.svg"
              />
              <div className="font-medium text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                exul
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 md:mt-8">
              <Button 
                onClick={scrollToContact}
                className="bg-[#2c2c2c] text-neutral-100 hover:bg-[#3c3c3c] rounded-lg border border-neutral-700 h-auto px-6 py-3 min-w-[140px] transition-colors duration-200"
              >
                <span className="font-small-text text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)]">
                  Learn More
                </span>
              </Button>

              <button 
                onClick={scrollToContact}
                className="font-small-text text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] hover:underline transition-all duration-200 px-4 py-2"
              >
                Contact us &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};