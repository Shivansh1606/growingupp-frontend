// src/components/sections/ServicesSection.jsx
import { motion } from "framer-motion";
import {
    FaCloud,
    FaCode,
    FaDatabase,
    FaMobileAlt,
    FaPalette,
    FaRocket,
    FaShieldAlt
} from "react-icons/fa";
import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    Icon: FaRocket,
    title: "Web Development",
    description: "Modern, blazing-fast web applications built with React, Next.js, and cutting-edge technologies that deliver exceptional user experiences.",
    featured: true
  },
  {
    Icon: FaMobileAlt,
    title: "Mobile Apps",
    description: "Native iOS & Android apps with React Native and Flutter for seamless cross-platform experiences."
  },
  {
    Icon: FaCloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure on AWS, GCP, and Azure with DevOps automation and CI/CD pipelines."
  },
  {
    Icon: FaPalette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that convert visitors into customers with modern aesthetics."
  },
  {
    Icon: FaCode,
    title: "Custom Software",
    description: "Tailored enterprise solutions, APIs, and system integrations built for your specific needs."
  },
  {
    Icon: FaDatabase,
    title: "Data & Analytics",
    description: "Smart data solutions with real-time analytics, business intelligence, and automated insights."
  },
  {
    Icon: FaShieldAlt,
    title: "Security & Testing",
    description: "Comprehensive security audits, automated testing, and quality assurance for bulletproof applications."
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block px-4 py-2 mb-6 text-blue-600 bg-blue-100 rounded-full text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Our Services
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform your ideas into 
            powerful, scalable applications that drive real business results.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={service.featured ? 'lg:col-span-2 lg:row-span-2' : ''}
            >
              <ServiceCard {...service} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:shadow-glow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
