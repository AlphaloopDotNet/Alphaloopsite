import {
  Code,
  Laptop,
  LineChart,
  Layers,
  Smartphone,
  Globe,
  Palette,
  Share2,
  Database,
  Target,
  Zap,
  Shield,
  Heart,
  Newspaper,
  Rocket,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Cpu,
} from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const NavbarLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const AboutSectionServices = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Building scalable solutions with cutting-edge technologies",
    color: "#58ace0",
  },
  {
    icon: Laptop,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences",
    color: "#f19e24",
  },
  {
    icon: LineChart,
    title: "Growth Strategy",
    description: "Data-driven approaches to accelerate business growth",
    color: "#58ace0",
  },
  {
    icon: Layers,
    title: "Digital Innovation",
    description: "Implementing next-generation technology solutions",
    color: "#f19e24",
  },
];

export const AboutSectionStats = [
  { number: "75", label: "Completed Projects" },
  { number: "100", label: "Happy Clients" },
  { number: "50", label: "Join Ventures" },
  { number: "200", label: "Cups of Coffee" },
];

export const SOCIAL_LINKS = [
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/company/alphaloopIT",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    url: "https://x.com/AlphaloopIT",
    label: "Twitter",
  },
  {
    icon: FaFacebook,
    url: "https://facebook.com/alphaloopIT",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/alphaloopit/",
    label: "Instagram",
  },
];

export const COMPANY_INFO = {
  name: "AlphaloopIT",
  tagline: "Transforming businesses through innovative technology solutions.",
  contact: {
    phone: "+91 7357953308",
    phone2: "+1 (650) 7411 348",
    email: "contact.us@alphaloop.net",
    address: "80, Laxmi nagar, Sector-8, near Jain travels",
    city: "Udaipur, (Raj.)",
  },
};

export const DEV_CATEGORY = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai", label: "AI-ML" },
];

export const PROJECTS = [
  {
    title: "SaaS",
    category: "web",
    description:
      "A full-stack SaaS platform tailored for digital marketers, offering tools for content generation, SEO optimization, and email marketing in a single, user-friendly interface.",
    image: "/markinzy.png",
    technologies: ["Next.Js", "Typescript", "Postgres"],
    liveUrl: "https://www.markinzy.com",
    featured: true,
  },
  {
    title: "E-commerce",
    category: "web",
    description:
      "A versatile e-commerce platform enabling businesses to showcase products, manage orders, and provide a seamless shopping experience for customers.",
    image: "/myhfpc.png",
    technologies: ["Wordpress", "Elementor"],
    liveUrl: "https://www.myhfpc.com",
    featured: true,
  },
  {
    title: "E-Learning Platform",
    category: "web",
    description:
      "An intuitive e-learning platform with separate user and admin panels, featuring course management, progress tracking, and advanced reporting capabilities.",
    image: "/Elearn.webp",
    technologies: ["Next.Js", "TailwindCss", "Postgres"],
    featured: false,
  },
  {
    title: "Attendance Management System",
    category: "mobile",
    description:
      "A robust attendance management application offering real-time updates, leave tracking, and detailed reporting for efficient team management.",
    image: "/AMS.png",
    technologies: ["ReactNative", "MySQL"],
    featured: false,
  },
  {
    title: "Hotel Management Dashboard",
    category: "web",
    description:
      "A comprehensive hotel management solution with seamless room booking, client management, and an automated invoice generation system.",
    image: "/hotelDash.png",
    technologies: ["Node.js", "MySQL", "AWS", "Ejs"],
    featured: false,
  },
  {
    title: "ATS",
    category: "ai",
    description:
      "A complete Applicant Tracking System powered by machine learning to streamline recruitment processes, optimize candidate selection, and enhance HR productivity.",
    image: "/ATS.png",
    technologies: ["Python", "ML"],
    featured: true,
  },
];

export const SERVICESECTION = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Innovative mobile solutions that transform digital experiences",
    color: "#3b82f6",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-400",
    features: [
      "Native Android & iOS Apps",
      "Cross-Platform Development",
      "Performance Optimization",
      "Mobile UX/UI Design",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Crafting scalable, responsive web solutions",
    color: "#10b981",
    gradientFrom: "from-green-500",
    gradientTo: "to-teal-400",
    features: [
      "Full-Stack Web Applications",
      "Responsive Design",
      "E-commerce Platforms",
      "Progressive Web Apps",
    ],
  },
  {
    icon: Palette,
    title: "Design & Branding",
    description: "Creating compelling visual identities and experiences",
    color: "#6366f1",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-purple-400",
    features: [
      "Brand Strategy",
      "Visual Identity Design",
      "UI/UX Design",
      "Creative Consulting",
    ],
  },
  {
    icon: Share2,
    title: "Digital Marketing",
    description: "Strategic digital growth and brand amplification",
    color: "#f97316",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-400",
    features: [
      "SEO & SEM Optimization",
      "Social Media Strategy",
      "Content Marketing",
      "Conversion Rate Optimization",
    ],
  },
  {
    icon: Database,
    title: "Enterprise Solutions",
    description: "Tailored software for complex business challenges",
    color: "#ef4444",
    gradientFrom: "from-red-500",
    gradientTo: "to-pink-500",
    features: [
      "Custom Enterprise Software",
      "Cloud Integration",
      "System Architecture",
      "Scalable Infrastructure",
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "AlphaloopIT helped us scale our business with a beautiful website and effective digital marketing strategies. Highly recommended!",
    author: "Shubhash Dixit",
    role: "Head & Chairman",
    company: "RK-Sansthan (.gov)",
    rating: 5,
  },
  {
    quote:
      "The team's expertise in digital solutions transformed our online presence. We saw immediate results in customer engagement.",
    author: "Gopal Manawat",
    role: "Founder",
    company: "7rays Hotel",
    rating: 5,
  },
  {
    quote:
      "Professional, responsive, and incredibly skilled. They delivered exactly what we needed and more.",
    author: "Anil Jogiraj",
    role: "Founder & CEO",
    company: "Wedding Stellars",
    rating: 5,
  },
];

export const servicesAboutPage = [
  {
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "End-to-end digital solutions that revolutionize your business operations",
    features: ["Process Automation", "Cloud Migration", "Digital Strategy"],
  },
  {
    icon: Code,
    title: "Custom Development",
    description:
      "Tailored software solutions built with cutting-edge technologies",
    features: ["Web Applications", "Mobile Apps", "API Integration"],
  },
  {
    icon: Rocket,
    title: "Digital Marketing",
    description:
      "Driving your online presence with strategic, data-driven campaigns.",
    features: ["Process Automation", "Cloud Migration", "Digital Strategy"],
  },
];

export const whyChooseUsAboutPage = [
  {
    icon: Zap,
    title: "Agile Development",
    description:
      "Rapid iterations with continuous feedback and improvement cycles",
    color: "bg-blue-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols and data protection measures",
    color: "bg-indigo-500",
  },
  {
    icon: Target,
    title: "Industry Expertise",
    description: "Specialized knowledge across multiple business domains",
    color: "bg-purple-500",
  },
  {
    icon: Heart,
    title: "Dedicated Support",
    description: "24/7 client support with personalized assistance",
    color: "bg-pink-500",
  },
];

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

export const BLOG_SECTIONS = [
  {
    icon: TrendingUp,
    title: "Tech Trends",
    description:
      "Stay updated with the latest trends in mobile and web development, cloud computing, and emerging technologies.",
    gradient: brandColors.yellow.gradient,
  },
  {
    icon: Rocket,
    title: "Digital Marketing Strategies",
    description:
      "Learn how to boost your brand's online presence with actionable tips and industry secrets.",
    gradient: brandColors.blue.gradient,
  },
  {
    icon: Lightbulb,
    title: "Design Inspiration",
    description:
      "Explore creative ideas and design solutions that bring brands to life.",
    gradient: brandColors.mixed.gradient,
  },
  {
    icon: BookOpen,
    title: "Case Studies",
    description:
      "Discover how we've helped businesses succeed with our cutting-edge IT and marketing solutions.",
    gradient: brandColors.yellow.gradient,
  },
  {
    icon: Globe,
    title: "How-To Guides",
    description:
      "Step-by-step tutorials to tackle common tech and marketing challenges.",
    gradient: brandColors.blue.gradient,
  },
  {
    icon: Newspaper,
    title: "Company News",
    description:
      "Get a peek into AlphaloopIT's journey, achievements, and upcoming projects.",
    gradient: brandColors.mixed.gradient,
  },
];
