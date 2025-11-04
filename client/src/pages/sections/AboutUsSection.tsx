import React from "react";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full relative py-20 px-4">
      <div className="max-w-[1323px] mx-auto">
        <div className="text-center mb-16">
          <div className="font-page-top font-[number:var(--page-top-font-weight)] text-white text-[length:var(--page-top-font-size)] tracking-[var(--page-top-letter-spacing)] leading-[var(--page-top-line-height)] [font-style:var(--page-top-font-style)] mb-10">
            About
          </div>
          <h2 className="[font-family:'Technor_Variable-Regular',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal] mb-6">
            Who We Are
          </h2>
        </div>

        <div className="max-w-[872px] mx-auto space-y-6">
          <p className="font-body-text font-[number:var(--body-text-font-weight)] text-[length:var(--body-text-font-size)] text-white tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
            Nexul is a digital agency dedicated to empowering African businesses through innovative web solutions. Founded with a vision to bridge the digital divide, we specialize in creating high-quality, conversion-focused websites that help businesses expand their reach and maximize their online potential.
          </p>
          <p className="font-body-text font-[number:var(--body-text-font-weight)] text-[length:var(--body-text-font-size)] text-white tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
            Our team of experienced designers and developers combines technical expertise with a deep understanding of the African market. We believe that every business, regardless of size, deserves a powerful digital presence that drives growth and builds lasting customer relationships.
          </p>
          <p className="font-body-text font-[number:var(--body-text-font-weight)] text-[length:var(--body-text-font-size)] text-white tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
            We've helped dozens of businesses across the continent transform their digital presence, from startups taking their first steps online to established enterprises looking to modernize their web platforms. Our approach is collaborative, transparent, and focused on delivering measurable results that matter to your business.
          </p>
        </div>
      </div>
    </section>
  );
};
