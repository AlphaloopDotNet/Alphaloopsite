"use client";
import React, { useState } from "react";
import { Rocket } from "lucide-react";
import { BLOG_SECTIONS } from "@/lib/constants";

const BlogLandingPage = () => {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  // Updated color scheme to match your brand colors
  const brandColors = {
    yellow: {
      primary: "#f19e24",
      gradient: "from-[#f19e24] via-[#fdb347] to-[#f19e24]",
    },
    blue: {
      primary: "#58ace0",
      gradient: "from-[#58ace0] via-[#7bc0ea] to-[#58ace0]",
    },
    mixed: {
      gradient: "from-[#58ace0] via-[#7bc0ea] to-[#f19e24]",
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#58ace0]/30 via-[#58ace0]/20 to-[#f19e24]/30" />
        <div className="relative px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative inline-block">
              Blog
              <Rocket
                size={40}
                className="absolute -right-12 -top-3 text-blue-950 animate-bounce"
                aria-hidden="true"
              />
            </h1>
            <p className="text-xl md:text-2xl max-w-5xl mx-auto mb-8 leading-relaxed text-gray-700">
              Explore the future of technology and creativity, and stay ahead in
              the digital world.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {BLOG_SECTIONS.map((section, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl shadow-lg overflow-hidden
                transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105
                bg-white backdrop-blur-lg bg-opacity-80"
              onMouseEnter={() => setHoveredSection(index)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-5`}
              />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div
                    className={`p-4 rounded-2xl mr-4 transform transition-transform 
                      group-hover:rotate-12 bg-gradient-to-br ${section.gradient}`}
                  >
                    <section.icon size={32} className="text-white" />
                  </div>
                  <h2
                    className={`text-2xl font-bold bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                  >
                    {section.title}
                  </h2>
                </div>
                <p
                  className={`text-gray-700 transition-all duration-500 ease-in-out
                    ${
                      hoveredSection === index
                        ? "opacity-100 max-h-96 mt-4"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                >
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="text-center p-12 rounded-3xl bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 shadow-xl">
          <h2
            className={`text-4xl font-bold mb-6 bg-gradient-to-r ${brandColors.mixed.gradient} bg-clip-text text-transparent`}
          >
            Why Follow Our Blog?
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 mb-8">
            Whether you're a business owner, tech enthusiast, or digital
            marketer, our blog is packed with valuable insights tailored for
            you. From expert analysis to practical tips, we're here to empower
            your digital journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              className={`px-10 py-4 rounded-full text-white text-lg font-bold 
                shadow-xl transform hover:scale-105 transition-all duration-300
                bg-gradient-to-r ${brandColors.mixed.gradient} hover:opacity-90`}
            >
              Coming Soon
            </button>
            {/* <button
              className="px-10 py-4 rounded-full text-gray-700 text-lg font-bold 
                border-2 border-gray-300 bg-white hover:bg-gray-50 
                transition-all duration-300 shadow-lg"
            >
              Subscribe
            </button> */}
          </div>
        </section>

        <section className="text-center mt-16">
          <h3
            className={`text-3xl font-bold bg-gradient-to-r ${brandColors.mixed.gradient} bg-clip-text text-transparent mb-4`}
          >
            Explore. Learn. Grow.
          </h3>
          <p className="text-xl text-gray-700">
            Let's unlock the power of technology and marketing together. Browse
            our articles and stay inspired with AlphaloopIT.
          </p>
        </section>
      </div>
    </div>
  );
};

export default BlogLandingPage;
