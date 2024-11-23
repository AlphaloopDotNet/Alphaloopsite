"use client";
import React, { useState } from "react";
import {
  Globe,
  Layout,
  Cloud,
  ShoppingCart,
  Rocket,
  Star,
  Zap,
} from "lucide-react";

// Define types for props
interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  category: string;
  description: string;
  features: string[];
}

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

// Reusable ServiceCard Component
const ServiceCard: React.FC<Service> = ({
  icon: Icon,
  title,
  category,
  description,
  features,
}) => (
  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-xl bg-[#58ace0]/10 group-hover:bg-[#58ace0]/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-bluee" />
        </div>
        <div className="ml-4">
          <span className="text-sm font-medium text-[#f19e24]">{category}</span>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {features.map((feature, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-[#58ace0]/10 text-[#58ace0] rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Reusable FeatureCard Component
const FeatureCard: React.FC<Feature> = ({ icon: Icon, title, description }) => (
  <div className="bg-gradient-to-tr from-bluee/10 via-gray-100 to-bluee/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
    <Icon className="w-12 h-12 text-bluee mb-4 mx-auto" />
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-800">{description}</p>
  </div>
);

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      icon: Rocket,
      title: "Mobile Development",
      category: "Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android Apps", "React Native", "Flutter", "PWAs"],
    },
    {
      icon: Globe,
      title: "Web Solutions",
      category: "Development",
      description:
        "Scalable web applications with modern frameworks and cutting-edge technologies.",
      features: ["React/Next.js", "Node.js", "Vue.js", "Full Stack"],
    },
    {
      icon: Layout,
      title: "UX/UI Design",
      category: "Design",
      description:
        "User-centric interfaces that blend aesthetics with functionality.",
      features: [
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "User Testing",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      category: "Infrastructure",
      description:
        "Robust cloud solutions for scalable and secure applications.",
      features: ["AWS", "Azure", "Google Cloud", "DevOps"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      category: "Solutions",
      description:
        "Complete e-commerce solutions with seamless payment integration.",
      features: [
        "Custom Platforms",
        "Shopify",
        "WooCommerce",
        "Payment Systems",
      ],
    },
    {
      icon: Star,
      title: "Digital Strategy",
      category: "Marketing",
      description: "Data-driven strategies to maximize your digital presence.",
      features: [
        "Market Analysis",
        "Growth Strategy",
        "Analytics",
        "Optimization",
      ],
    },
  ];

  const features: Feature[] = [
    {
      icon: Star,
      title: "Expert Team",
      description: "Skilled professionals with deep industry expertise.",
    },
    {
      icon: Zap,
      title: "Agile Approach",
      description: "Flexible and iterative development process.",
    },
    {
      icon: Cloud,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance and maintenance.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = [
    "All",
    "Development",
    "Design",
    "Infrastructure",
    "Solutions",
    "Marketing",
  ];

  return (
    <div className="min-h-screen bg-orange-50/20">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br  from-bluee/30 via-blue-200 to-orange-200 overflow-hidden">
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 bg-gradient-to-br from-bluee/20 via-transparent to-yelloww/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl  font-bold mb-6 relative inline-block">
              Services
              <Rocket
                size={40}
                className="absolute -right-12 -top-3 text-blue-950 animate-bounce"
                aria-hidden="true"
              />
            </h1>
            <p className="text-xl md:text-2xl max-w-5xl mx-auto mb-8 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-16 border shadow-blue-50">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                  ${
                    activeCategory === category
                      ? "bg-[#58ace0] text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-orange-100"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services
            .filter(
              (service) =>
                activeCategory === "All" || service.category === activeCategory
            )
            .map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24  ">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
