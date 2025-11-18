import React from "react";
import styles from "./styles.module.css";
export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full relative py-20 px-4 bg-[url('/figmaAssets/bg-about.png')] bg-cover bg-center">
      <div className="max-w-[1323px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="tech font-normal text-white text-[64px] tracking-[0] leading-[normal] mb-6">
            Meet the exceptional team at Nexul.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[150px]">
          <img className="object-cover " src="../figmaAssets/eyuel.png"></img>
          <p className="tech font-normal text-white col-span-2 text-2xl">Lead Developer with a Google certification and specialized expertise in Cybersecurity. Renowned for implementing advanced security solutions and fostering technological innovation.</p>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <p className="tech font-normal text-white col-span-2 text-2xl">
          Professional Lead Designer and Operations Specialist with a degree from the esteemed Flux Design Academy,
          delivering innovative solutions and a meticulous attention to detail in every project.
        </p>

        {/* --- IMAGE WRAPPER THAT ALLOWS OVERLAP --- */}
        <div className="relative w-full flex justify-center">

          {/* Jose image */}
          <img
            className="object-cover w-[260px] z-10"
            src="../figmaAssets/jose.png"
          />

          {/* Laptop image overlapping under jose */}
          <img
            className="absolute bottom-[-140px] w-[90%] max-w-[450px] z-20"
            src="../figmaAssets/laptop.png"
          />

        </div>
            </div>

      </div>
    </section>
  );
};
