"use client";
import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import NumberTicker from "./ui/number-ticker";
import { AboutSectionServices, AboutSectionStats } from "@/lib/constants";

const AboutSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-100 to-white   overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-400 transform rotate-12 translate-x-20" />
        <div className="absolute top-1/4 left-0 w-1/3 h-full bg-orange-400 transform -rotate-12 -translate-x-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 relative">
        <div className="text-center mb-20">
          <h1 className="text-xl font-bold mb-6 bg-gradient-to-r from-bluee to-orange-500 text-transparent bg-clip-text">
            Transforming Ideas
          </h1>
          <h2 className="text-4xl font-light text-gray-600 mb-8">
            Into Digital Reality
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl  mb-6 text-transparent bg-clip-text bg-gradient-to-r from-bluee to-orange-500 ">
                Who We Are
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                AlphaloopIT is a forward-thinking digital agency that combines
                creativity with technical excellence to deliver exceptional
                results.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Our team of passionate experts works collaboratively to
                transform your vision into powerful digital solutions that drive
                real business growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {AboutSectionStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text">
                    <NumberTicker value={parseInt(stat.number)} />
                    <span>+</span>
                  </div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {AboutSectionServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <div className="flex items-center space-x-6 relative">
                      <div
                        className="p-4 rounded-xl transform group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: service.color }}
                      >
                        <div className="text-white">
                          <ServiceIcon className="w-6 h-6" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3
                          className="text-xl font-bold mb-2"
                          style={{ color: service.color }}
                        >
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>

                      <ChevronRight className="w-6 h-6 text-gray-400 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
