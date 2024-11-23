import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { NavbarLinks, SOCIAL_LINKS, COMPANY_INFO } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 font-Cabinet">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              {COMPANY_INFO.tagline}
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Explores */}
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {NavbarLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-gray-300 text-sm md:text-base hover:text-white transition-colors cursor-pointer"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              {[
                { Icon: Phone, text: COMPANY_INFO.contact.phone, flag: "🇮🇳" },
                { Icon: Phone, text: COMPANY_INFO.contact.phone2, flag: "🇺🇸" },
                { Icon: Mail, text: COMPANY_INFO.contact.email },
                {
                  Icon: MapPin,
                  text:
                    COMPANY_INFO.contact.address +
                    " " +
                    COMPANY_INFO.contact.city,
                },
              ].map(({ Icon, text, flag }) => (
                <li
                  key={text}
                  className="flex items-center text-gray-300 text-sm md:text-base hover:text-white transition-colors"
                >
                  <Icon size={20} className="mr-2 flex-shrink-0" />
                  {flag && <span className="mr-2">{flag}</span>}
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
