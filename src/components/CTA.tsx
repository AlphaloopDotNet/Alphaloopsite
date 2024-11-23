"use client";
import React from "react";
import { ArrowRight, Send } from "lucide-react";
import Link from "next/link";

const CallToActionSection = () => {
  const colors = {
    yellow: "#f19e24",
    blue: "#58ace0",
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-gray-50 rounded-3xl border m-4 md:m-8">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl bg-blue-500 transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 rounded-full blur-3xl bg-yellow-500 transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-blue-700">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <p className="text-base md:text-xl text-gray-700 mb-8 md:mb-10 px-4 md:px-0">
            Let ALPHALOOP IT lead the way. Contact us today for a tailored
            solution that fits your business goals.
          </p>

          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 px-4 md:px-0">
            <Link href={"/contact#contact-form"}>
              <button
                className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 flex items-center justify-center text-white font-semibold rounded-full 
            transform transition-all hover:scale-105 space-x-2"
                style={{
                  backgroundColor: colors.yellow,
                  boxShadow: `0 10px 15px -3px ${colors.yellow}40`,
                }}
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href={"/contact#contact-form"}>
              <button
                className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 flex items-center justify-center text-white font-semibold rounded-full 
            transform transition-all hover:scale-105 space-x-2"
                style={{
                  backgroundColor: colors.blue,
                  boxShadow: `0 10px 15px -3px ${colors.blue}40`,
                }}
              >
                <span>Schedule Consultation</span>
                <Send className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
