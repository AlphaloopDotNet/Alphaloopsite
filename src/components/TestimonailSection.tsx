"use client";
import React from "react";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-orange-50">
      <div className=" max-w-7xl mx-auto px-4 ">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className="flex items-start mb-6">
                <Quote className="text-blue-600 w-10 h-10 mr-4" />
                <p className="text-gray-700 italic text-lg">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex justify-between items-center mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 text-xl">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>

                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
