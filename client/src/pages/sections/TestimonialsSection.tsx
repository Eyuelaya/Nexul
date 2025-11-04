import React from "react";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col items-center gap-3 py-6">
      <h1 className="font-h1 font-[number:var(--h1-font-weight)] text-neutral-950 text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
        Nexul Pricing
      </h1>

      <p className="max-w-[672px] [font-family:'Arial-Regular',Helvetica] font-normal text-[#a0a0a0] text-base text-center tracking-[0] leading-6 px-4">
        Choose the perfect plan for your web development needs. All plans
        include modern design, clean code, and mobile responsiveness.
      </p>
    </section>
  );
};
