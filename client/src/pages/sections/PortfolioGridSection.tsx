import React from "react";
import { Card, CardContent } from "@/components/ui/card";


const portfolioProjects = [
  {
    image: "/figmaAssets/image.png",
    title: "Digital Banking Platform",
    description: "A comprehensive fintech solution modernizing financial services for Ethiopian entrepreneurs and small businesses.",
    tags: ["Web Design", "Fintech", "Responsive"],
  },
  {
    image: "/figmaAssets/image-2.png",
    title: "Restaurant Platform",
    description: "An elegant showcase for South Africa's culinary excellence, featuring online ordering and reservation systems.",
    tags: ["Branding", "UI/UX", "E-commerce"],
  },
  {
    image: "/figmaAssets/image-1.png",
    title: "Agricultural Tech Platform",
    description: "Empowering smallholder farmers with digital insights, market data, and agricultural best practices.",
    tags: ["Tech", "Innovation", "Agriculture"],
  },
  {
    image: "/figmaAssets/image-3.png",
    title: "E-Learning Hub",
    description: "Educational platform connecting students across Africa with quality learning resources and interactive courses.",
    tags: ["Education", "Platform", "Mobile-First"],
  },
  {
    image: "/figmaAssets/image-4.png",
    title: "Healthcare Directory",
    description: "Comprehensive healthcare provider directory helping patients find and book appointments with medical professionals.",
    tags: ["Healthcare", "Directory", "Booking"],
  },
  {
    image: "/figmaAssets/image-5.png",
    title: "Real Estate Marketplace",
    description: "Modern property listing platform connecting buyers, sellers, and renters across major African cities.",
    tags: ["Real Estate", "Marketplace", "Search"],
  },
  {
    image: "/figmaAssets/container.png",
    title: "Fashion E-commerce",
    description: "Vibrant online store showcasing African fashion designers and connecting them with global customers.",
    tags: ["Fashion", "E-commerce", "International"],
  },
  {
    image: "/figmaAssets/button.png",
    title: "Logistics Platform",
    description: "Streamlined logistics and delivery management system optimizing supply chains for African businesses.",
    tags: ["Logistics", "B2B", "Automation"],
  },
];

export const PortfolioGridSection = (): JSX.Element => {
  return (
    <section className="w-full relative py-20 px-4" id="portfolio">
      <div className="max-w-[1323px] mx-auto">
        <div className="text-center mb-16">
          <div className="font-page-top font-[number:var(--page-top-font-weight)] text-white text-[length:var(--page-top-font-size)] tracking-[var(--page-top-letter-spacing)] leading-[var(--page-top-line-height)] [font-style:var(--page-top-font-style)] mb-10">
            Portfolio
          </div>
          <h2 className="[font-family:'Technor_Variable-Regular',Helvetica] font-normal text-[64px] text-white tracking-[0] leading-[normal] mb-6">
            Featured Projects
          </h2>
          <p className="font-body-text font-[number:var(--body-text-font-weight)] text-[length:var(--body-text-font-size)] text-center text-white tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] max-w-[806px] mx-auto">
            Explore our diverse portfolio of successful projects across industries, showcasing how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-black rounded-[32px] border-0 overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-0">
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={project.title}
                    src={project.image}
                  />
                </div>
                <div className="p-6">
                  <h3 className="[font-family:'Technor_Variable-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] mb-3">
                    {project.title}
                  </h3>
                  <p className="font-nav font-[number:var(--nav-font-weight)] text-white text-[length:var(--nav-font-size)] tracking-[var(--nav-letter-spacing)] leading-[var(--nav-line-height)] [font-style:var(--nav-font-style)] mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="font-small-text font-[number:var(--small-text-font-weight)] text-neutral-400 text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)] px-2 py-1 bg-neutral-900 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
