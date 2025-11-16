import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MissionStatementSection } from "./sections/MissionStatementSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { PricingSection } from "./sections/PricingSection";
import { SuccessStoriesSection } from "./sections/SuccessStoriesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
const whyChooseCards = [
  {
    image: "/figmaAssets/image-3.png",
    label: "Speed",
    title: "Fast delivery",
    description: "Launch your site in days, not months. We move fast.",
    link: "Learn more >",
  },
  {
    image: "/figmaAssets/image-4.png",
    label: "Value",
    title: "Affordable pricing",
    description: "Enterprise quality websites without enterprise-level costs.",
    link: "Explore Pricing >",
  },
];

const portfolioProjects = [
  {
    image: "/figmaAssets/image.png",
    title: "Digital Banking Platform",
    description: "Modernizing financial services for Ethiopian entrepreneurs.",
    tags: ["Wed Design ", "Search Engine Optimization ", "Responsive ", "Finetech"],
    link: "Explore Case >",
  },
  {
    image: "/figmaAssets/image-2.png",
    title: "Restaurant Platform",
    description: "Showcasing South Africa's Culinary Delights to the World",
    tags: ["Branding", "UI/UX", "E-commerce"],
    link: "Explore Case >",
  },
  {
    image: "/figmaAssets/image-1.png",
    title: "Agricultural tech platform",
    description: "Empowering smallholder farmers with digital insights.",
    tags: ["Tech", "Innovation", "Agriculture"],
    link: "Explore Case >",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$129",
    period: "/project",
    description:
      "Perfect for small businesses and startups looking to establish their online presence.",
    features: [
      "1 - 3 page",
      "Responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "2 rounds of revisions",
      "3 months of support & hosting",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$199",
    period: "/project",
    description:
      "Ideal for growing businesses that need advanced features and custom functionality.",
    features: [
      "up to 10 pages",
      "Custom design & animations",
      "Advanced SEO & analytics",
      "CMS integration",
      "4 rounds of revisions",
      "6 months of support & hosting",
      "Performance optimization",
      "1 year of Domain name",
    ],
    buttonText: "Get Started",
    buttonVariant: "default" as const,
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "Comprehensive solutions for large organizations with complex requirements.",
    features: [
      "Unlimited pages",
      "Full custom development",
      "API integrations",
      "Advanced security features",
      "Dedicated project manager",
      "Unlimited revisions",
      "1 year of priority support",
      "Scalable architecture",
      "Custom training sessions",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    highlighted: false,
  },
];

export const Home = (): JSX.Element => {
  return (
    <div className="mx-auto w-full min-h-screen overflow-x-hidden bg-[linear-gradient(182deg,#08080C_15%,#544870_38%,#100F12_69%,#130D20_100%)]">
      <NavigationBarSection />

      <HeroSection />

      <section className="w-full relative py-16 px-4">
        <div className="max-w-[1321px] mx-auto">
          <div className="text-center mb-16">
            <div className="font-page-top font-[number:var(--page-top-font-weight)] [font-family:'Technor-bold',Helvetica] text-white text-[length:var(--page-top-font-size)] tracking-[var(--page-top-letter-spacing)] leading-[var(--page-top-line-height)] [font-style:var(--page-top-font-style)] mb-5">
              Accelerate
            </div>
            <h2 className="[font-family:'Technor-Regular',Helvetica] font-normal text-white text-5xl text-center tracking-[0] leading-[normal] mb-6">
              Why Choose Nexul?
            </h2>
            <p className="sup font-body-text font-[number:var(--body-text-font-weight)] text-[length:var(--body-text-font-size)] text-center text-white tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] max-w-[872px] mx-auto">
              We deliver digital solutions that transform businesses quickly and
              effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {whyChooseCards.map((card, index) => (
              <Card
                key={index}
                className="bg-black rounded-[28px] border-0 overflow-hidden"
              >
                <CardContent className="p-0">
                  <img
                    className="w-full h-[163px] object-cover"
                    alt={card.title}
                    src={card.image}
                  />
                  <div className="p-6">
                    <div className="font-small-text font-[number:var(--small-text-font-weight)] text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)] mb-4">
                      {card.label}
                    </div>
                    <h3 className="font-subhead font-[number:var(--subhead-font-weight)] text-white text-[length:var(--subhead-font-size)] tracking-[var(--subhead-letter-spacing)] leading-[var(--subhead-line-height)] [font-style:var(--subhead-font-style)] mb-4">
                      {card.title}
                    </h3>
                    <p className="font-nav font-[number:var(--nav-font-weight)] text-white text-[length:var(--nav-font-size)] tracking-[var(--nav-letter-spacing)] leading-[var(--nav-line-height)] [font-style:var(--nav-font-style)] mb-6">
                      {card.description}
                    </p>
                    <div className="font-small-text font-[number:var(--small-text-font-weight)] text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)] cursor-pointer">
                      {card.link}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-transparent rounded-[28px] border-0 overflow-hidden col-span-2">
              <CardContent className="p-0 relative h-full flex flex-row">
                {/* Text Content Section - Left Side */}
                <div className="flex-1 bg-black flex flex-col justify-end p-6">
                  <div className="font-small-text font-[number:var(--small-text-font-weight)] text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)] mb-4">
                    Impact
                  </div>
                  <h3 className="font-subhead font-[number:var(--subhead-font-weight)] text-white text-[length:var(--subhead-font-size)] tracking-[var(--subhead-letter-spacing)] leading-[var(--subhead-line-height)] [font-style:var(--subhead-font-style)] mb-4 max-w-[288px]">
                    Conversion-focused design
                  </h3>
                  <p className="font-nav font-[number:var(--nav-font-weight)] text-white text-[length:var(--nav-font-size)] tracking-[var(--nav-letter-spacing)] leading-[var(--nav-line-height)] [font-style:var(--nav-font-style)] mb-6 max-w-[220px]">
                    Websites engineered to drive sales, trust, and business growth.
                  </p>
                  <div className="font-small-text font-[number:var(--small-text-font-weight)] text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)] cursor-pointer">
                    See our approach &gt;
                  </div>
                </div>

                {/* Image Section - Right Side */}
                <div className="flex-1 relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Conversion focused design"
                    src="/figmaAssets/image-5.png"
                  />
                </div>
              </CardContent>
            </Card>
           </div>
        </div>
      </section>

      <MissionStatementSection />

      <section className="w-full relative py-16 px-4">
        <div className="max-w-[1323px] mx-auto">
          <div className="text-center mb-16">
            <div className="tech font-page-top font-[number:var(--page-top-font-weight)] text-white text-[length:var(--page-top-font-size)] tracking-[var(--page-top-letter-spacing)] leading-[var(--page-top-line-height)] [font-style:var(--page-top-font-style)]">
              Portfolio
            </div>
            <h2 className="[font-family:'Technor-Regular',Helvetica] font-normal text-[64px] text-white tracking-[0] leading-[normal] mb-6">
              Our digital success stories
            </h2>
            <p className="sup font-[number:var(--body-text-font-weight)] text-[length:var(--body-text-font-size)] text-center text-white tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] max-w-[806px] mx-auto">
              Transforming African businesses through powerful web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {portfolioProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-black rounded-[32px] border-0 overflow-hidden"
              >
                <CardContent className="p-0">
                  <img
                    className="w-full h-[221px] object-cover"
                    alt={project.title}
                    src={project.image}
                  />
                  <div className="p-6">
                    <h3 className="[font-family:'Technor-Regular',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-[normal] mb-4">
                      {project.title}
                    </h3>
                    <p className="sup font-body-text font-[number:var(--body-text-font-weight)] text-white text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="tech font-small-text font-[number:var(--small-text-font-weight)] text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="font-small-text text-xs font-[number:var(--small-text-font-weight)] text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)] cursor-pointer">
                      {project.link}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/about#portfolio">
            <Button 
            className="bg-[#2c2c2c] text-neutral-100 rounded-lg border border-solid h-auto px-3 py-3 hover:bg-[#3c3c3c]">
              <span className="font-small-text font-[number:var(--small-text-font-weight)] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                View All
              </span>
            </Button>
            </a>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="w-full relative py-16 px-4">
        <div className="max-w-[1119px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`bg-neutral-950 rounded-[14px] border-[0.8px] ${
                  tier.highlighted
                    ? "border-[#f9f9f9] shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] relative"
                    : "border-neutral-800"
                } overflow-visible`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f9f9f9] rounded-lg border-[0.8px] border-transparent px-2 py-0.5">
                    <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-neutral-900 text-xs tracking-[0] leading-4 whitespace-nowrap">
                      {tier.badge}
                    </span>
                  </div>
                )}
                <CardContent className="p-8 flex flex-col gap-12">
                  <div className="flex flex-col gap-2">
                    <h3 className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#f9f9f9] text-lg tracking-[0] leading-[27px]">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#f9f9f9] text-4xl tracking-[0] leading-10">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="[font-family:'Arial-Regular',Helvetica] text-[#a0a0a0] text-base leading-6 font-normal tracking-[0]">
                          {tier.period}
                        </span>
                      )}
                    </div>
                    <p className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#a0a0a0] text-base tracking-[0] leading-6">
                      {tier.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex gap-3">
                        <img
                          className="w-5 h-5 mt-0.5"
                          alt="Icon"
                          src={
                            tier.highlighted
                              ? "/figmaAssets/icon-2.svg"
                              : "/figmaAssets/icon-1.svg"
                          }
                        />
                        <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#f9f9f9] text-base tracking-[0] leading-6">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant={tier.buttonVariant}
                    className={`w-full h-auto px-4 py-2 rounded-lg ${
                      tier.highlighted
                        ? "bg-[#f9f9f9] text-neutral-900 hover:bg-[#e9e9e9]"
                        : "bg-[#2626264c] text-[#f9f9f9] border-[0.8px] border-neutral-800 hover:bg-[#3636364c]"
                    }`}
                  >
                    <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-sm tracking-[0] leading-5">
                      {tier.buttonText}
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#a0a0a0] text-base text-center tracking-[0] leading-6">
              All prices are starting estimates. Final cost may vary based on
              project complexity.
            </p>
            <p className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#a0a0a0] text-base text-center tracking-[0] leading-6">
              Contact us for a detailed quote tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full relative py-16 px-4" id="contact-section">
        <div className="max-w-[1448px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="tech font-medium  text-white text-[64px] text-center tracking-[0] leading-[normal] mb-6">
              Ready to grow your business online?
            </h2>
            <p className="sup font-body-text font-[number:var(--body-text-font-weight)] text-[length:var(--body-text-font-size)] text-white text-center tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] max-w-[808px] mx-auto mb-12">
              Let's discuss how we can create a website that drives results and
              expands your market reach.
            </p>
            <p className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#90a1b8] text-base text-center tracking-[0] leading-6 max-w-[672px] mx-auto">
              Get a custom quote for your web development project. Fill out the
              form below and our team will provide you with a detailed cost
              estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
            <div className="relative">
              <img
                className="w-full h-auto object-cover rounded-lg"
                alt="Image copy"
                src="/figmaAssets/image-0004-copy-1.png"
              />
            </div>

            <Card id="contact" className="bg-neutral-950 rounded-[14px] border-[0.8px] border-neutral-800 shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#f9f9f9] text-base tracking-[0] leading-4 mb-2">
                    Request a Quote
                  </h3>
                  <p className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#a0a0a0] text-base tracking-[0] leading-6">
                    Tell us about your project and we'll get back to you with a
                    tailored estimate
                  </p>
                </div>

                <div className="space-y-6">
                  <PricingSection />
                  <SuccessStoriesSection />

                  <div className="space-y-4 pt-6">
                    <Button className="w-full bg-[#f9f9f9] text-neutral-900 rounded-lg h-auto py-2 hover:bg-[#e9e9e9]">
                      <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-sm tracking-[0] leading-5">
                        Get Your Free Quote
                      </span>
                    </Button>
                    <p className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#90a1b8] text-sm text-center tracking-[0] leading-5">
                      We'll review your request and respond within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
              
            </Card>
            
          </div>
          <div className="mt-12">
            <p className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#90a1b8] text-base text-center tracking-[0] leading-6">
              Have questions? Email us at{" "}
              <span className="text-white">hello@nexul.com</span>
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
