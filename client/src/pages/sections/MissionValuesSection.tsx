import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    title: "Excellence",
    description: "We deliver nothing but the highest quality in every project we undertake.",
    icon: "/figmaAssets/icon-26.svg",
  },
  {
    title: "Innovation",
    description: "We stay ahead of digital trends to bring cutting-edge solutions to our clients.",
    icon: "/figmaAssets/icon-31.svg",
  },
  {
    title: "Partnership",
    description: "We work alongside our clients as trusted partners, not just service providers.",
    icon: "/figmaAssets/icon-32.svg",
  },
  {
    title: "Impact",
    description: "We measure our success by the real business results we create for our clients.",
    icon: "/figmaAssets/icon-20.svg",
  },
];

export const MissionValuesSection = (): JSX.Element => {
  return (
    <section className="w-full relative py-20 px-4 bg-neutral-950/50 bg-[url('/figmaAssets/bg-about.png')] bg-cover bg-center">
      <div className="max-w-[1323px] mx-auto">
        <div className="text-center mb-16">
          <div className="font-page-top font-[number:var(--page-top-font-weight)] text-white text-[length:var(--page-top-font-size)] tracking-[var(--page-top-letter-spacing)] leading-[var(--page-top-line-height)] [font-style:var(--page-top-font-style)] mb-10">
            Mission
          </div>
          <h2 className="[font-family:'Technor_Variable-Regular',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal] mb-6">
            Our Mission & Values
          </h2>
          <p className="font-body-text font-[number:var(--body-text-font-weight)] text-[length:var(--body-text-font-size)] text-white tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] max-w-[872px] mx-auto mb-12">
            Our mission is to democratize access to world-class web development services across Africa. We believe that every business deserves the opportunity to thrive online, and we're committed to making that a reality through affordable, high-quality digital solutions that drive real growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-black rounded-[28px] border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-colors"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-neutral-900">
                  <img
                    className="w-8 h-8"
                    alt={value.title}
                    src={value.icon}
                  />
                </div>
                <h3 className="font-subhead font-[number:var(--subhead-font-weight)] text-white text-[length:var(--subhead-font-size)] tracking-[var(--subhead-letter-spacing)] leading-[var(--subhead-line-height)] [font-style:var(--subhead-font-style)] mb-4">
                  {value.title}
                </h3>
                <p className="font-nav font-[number:var(--nav-font-weight)] text-white text-[length:var(--nav-font-size)] tracking-[var(--nav-letter-spacing)] leading-[var(--nav-line-height)] [font-style:var(--nav-font-style)]">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
