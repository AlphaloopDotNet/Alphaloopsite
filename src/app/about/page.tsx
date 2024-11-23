import React from "react";
import { Rocket, ArrowRight, CheckCircle } from "lucide-react";
import { whyChooseUsAboutPage, servicesAboutPage } from "@/lib/constants";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 ">
      {/* Full-width header section */}
      <header className="relative bg-gradient-to-br  from-bluee/30 via-blue-200 to-orange-200 overflow-hidden">
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 bg-gradient-to-br from-bluee/20 via-transparent to-yelloww/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl  font-bold mb-6 relative inline-block">
              About Us
              <Rocket
                size={40}
                className="absolute -right-12 -top-3 text-blue-950 animate-bounce"
                aria-hidden="true"
              />
            </h1>
            <p className="text-xl md:text-2xl max-w-5xl mx-auto mb-8 leading-relaxed">
              Transforming Visions into Digital Reality
            </p>
          </div>
        </div>
      </header>

      {/* Container for all other sections */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20 ">
        {/* Introduction Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose AlphaloopIT?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine innovation with expertise to deliver exceptional
              results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsAboutPage.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`h-2 ${item.color} transition-all duration-300 group-hover:h-3`}
                ></div>
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-[#58ace0]" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* servicesNew Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {servicesAboutPage.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <service.icon className="w-16 h-16 text-[#58ace0] mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-center mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-yelloww" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#58ace0]/10 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-[#58ace0]">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Empowering businesses through innovative digital solutions
                  that drive sustainable growth and success.
                </p>
                <ul className="space-y-4">
                  {[
                    "Innovation First",
                    "Client Success",
                    "Quality Delivery",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <ArrowRight className="w-5 h-5 text-[#58ace0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f19e24]/10 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-[#f19e24]">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  To be the global leader in digital transformation, setting new
                  standards in technological excellence and innovation.
                </p>
                <ul className="space-y-4">
                  {[
                    "Global Impact",
                    "Tech Leadership",
                    "Sustainable Growth",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <ArrowRight className="w-5 h-5 text-[#f19e24]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="text-white">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-b from-bluee/90 to-yelloww/60">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            </div>
            <div className="relative px-8 py-16 md:py-24 text-center ">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
                Join leading businesses that trust AlphaloopIT for their digital
                transformation journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-bluee rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Schedule Free Consultation
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-bluee transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
