"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICESECTION } from "@/lib/constants";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const ActiveServiceDetails = () => {
    const service = SERVICESECTION[activeService];
    const ServiceIcon = service.icon;

    return (
      <div className="rounded-2xl bg-white shadow-2xl overflow-hidden ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 0.15,
            scale: 1,
            rotate: 360,
          }}
          transition={{
            duration: 7,
            type: "spring",
            stiffness: 50,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-0 right-4 md:right-0 w-24 h-24  md:w-60 md:h-60 rounded-full bg-yelloww z-0"
        />{" "}
        <div
          className={`p-8 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} text-white `}
        >
          <div className="flex items-center space-x-6">
            <div className="p-4 rounded-xl bg-white/20">
              <ServiceIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">{service.title}</h3>
              <p className="text-white/80 mt-2">{service.description}</p>
            </div>
          </div>
        </div>
        <div className="p-8">
          <h4 className="text-2xl font-semibold mb-6 text-gray-800">
            Key Features
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 text-gray-700"
              >
                <Check
                  className="w-5 h-5 text-green-500"
                  style={{ color: service.color }}
                />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
          <button
            className={`mt-8 w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90`}
            style={{ backgroundColor: service.color }}
          >
            Explore Service
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden border-b">
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-[length:20px_20px] opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundPosition: "-1px -1px",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-bluee to-orange-500">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive Digital Solutions Tailored to Your Business Needs
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-20 h-1.5 bg-bluee rounded-full" />
            <div className="w-20 h-1.5 bg-yelloww rounded-full" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {SERVICESECTION.map((service, index) => {
              const ServiceIcon = service.icon;
              const isActive = activeService === index;

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`cursor-pointer transition-all duration-300 transform 
                  ${isActive ? "scale-105" : ""}`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div
                    className={`p-6 rounded-xl bg-white shadow-lg transition-all duration-300 
                    ${isActive ? "shadow-2xl border-l-4" : "hover:shadow-xl"}
                    border-transparent`}
                    style={{
                      borderLeftColor: isActive ? service.color : "transparent",
                    }}
                  >
                    <div className="flex items-center space-x-6">
                      <div
                        className="p-4 rounded-xl"
                        style={{ backgroundColor: service.color }}
                      >
                        <ServiceIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-xl font-bold mb-1"
                          style={{ color: service.color }}
                        >
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <ActiveServiceDetails />
          </motion.div>
        </div>

        <div className="md:hidden mt-8">
          <ActiveServiceDetails />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
