"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building,
  Globe,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";
import Link from "next/link";

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  primary: string;
  secondary: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormStatus {
  submitted: boolean;
  error: boolean;
}

interface CustomAlertProps {
  message: string;
  type: "success" | "error";
}

interface FAQItemProps {
  question: string;
  answer: string;
}

const contactInfos: ContactInfo[] = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "+91 7357953308",
    secondary: "+1 (650) 7411 348",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "contact@alphaloopIT.com",
    secondary: "support@alphaloopIT.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "80, Laxmi nagar, Sector-8, near Jain travels",
    secondary: "Udaipur, (Raj.)",
  },
  {
    icon: Clock,
    title: "Working Hours",
    primary: "Mon-Fri: 10:00 AM - 6:00 PM",
    secondary: "Weekend: Closed",
  },
];

const faqs: FAQ[] = [
  {
    question: "What services does AlphaloopIT provide?",
    answer:
      "We offer a comprehensive range of IT services including software development, cloud solutions, cybersecurity, IT consulting, and digital transformation services. Our team specializes in creating custom solutions tailored to your business needs.",
  },
  {
    question: "How quickly can I expect a response to my inquiry?",
    answer:
      "We strive to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our support line directly.",
  },
  {
    question: "Do you offer support outside of business hours?",
    answer:
      "Yes, we provide 24/7 emergency support for critical issues to our enterprise clients. Regular support is available during our standard business hours.",
  },
];

const CustomAlert: React.FC<CustomAlertProps> = ({ message, type }) => (
  <div
    className={`p-4 rounded-lg ${
      type === "success"
        ? "bg-green-50 border border-green-200 text-green-800"
        : "bg-red-50 border border-red-200 text-red-800"
    } transition-all duration-300 animate-fade-in`}
  >
    {message}
  </div>
);

const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    error: false,
  });
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({ submitted: true, error: false });
    // Reset form
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-8 py-4 bg-bluee text-white rounded-lg font-semibold hover:bg-[#4089b3] transition-colors duration-300 flex items-center justify-center gap-2"
      >
        Send Message
        <Send className="w-5 h-5" />
      </button>
      {formStatus.submitted && (
        <CustomAlert
          type="success"
          message="Thank you for your message! We'll get back to you soon."
        />
      )}
    </form>
  );
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-bluee" />
        ) : (
          <Plus className="w-5 h-5 text-bluee" />
        )}
      </button>
      <div
        className={`mt-4 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-blue-100 via-blue-200 to-orange-200 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-transparent to-orange-200/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative inline-block">
              Contact Us
              <MessageSquare
                size={40}
                className="absolute -right-12 -top-3 text-blue-950 animate-bounce"
                aria-hidden="true"
              />
            </h1>
            <p className="text-xl md:text-2xl max-w-5xl mx-auto mb-8 leading-relaxed">
              Let's Start a Conversation
            </p>
          </div>
        </div>
      </header>

      {/* Contact Information Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfos.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-bluee/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-bluee" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-2">{item.primary}</p>
              <p className="text-gray-500 text-sm">{item.secondary}</p>
            </div>
          ))}
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 lg:py-20">
        {/* Contact Form Section */}
        <section className="mb-24" id="contact-form">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Building className="w-5 h-5 text-bluee" />
                    <span>AlphaloopIT</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Globe className="w-5 h-5 text-bluee" />
                    <Link href={"https://www.alphaloop.net"}>
                      <span>www.alphaloopIT.com</span>
                    </Link>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Call to Action Section */}
      <section className="grid lg:grid-cols-2 min-h-[70vh]">
        <div className="bg-bluee p-8 lg:p-16 flex items-center">
          <div className="max-w-lg">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Let's Start
              <span className="block mt-2">Something Great</span>
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Whether you have a question about our services, pricing, or just
              want to say hello, we'd love to hear from you.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-bluee rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.956874359203!2d73.70661027458944!3d24.556152357368273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967ef7b68666d51%3A0x6ce1bb24d2deebde!2sALPHALOOP%20IT%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1732355420026!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
