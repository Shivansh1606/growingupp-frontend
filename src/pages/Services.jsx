// src/pages/Services.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    FaArrowRight,
    FaChartBar,
    FaCheck,
    FaClock,
    FaCloud,
    FaCode,
    FaDatabase,
    FaGlobe,
    FaLightbulb,
    FaMobileAlt,
    FaPalette,
    FaPlay,
    FaRocket,
    FaStar,
    FaUsers
} from "react-icons/fa";
import { HiBadgeCheck, HiSparkles } from "react-icons/hi";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ScrollToTop from "../components/common/ScrollToTop";

const services = [
  {
    id: 1,
    Icon: FaGlobe,
    title: "Web Development",
    shortDesc: "Modern, blazing-fast web applications",
    fullDesc: "We create stunning, responsive websites and web applications using cutting-edge technologies like React, Next.js, and Node.js. From simple landing pages to complex web platforms, we ensure optimal performance, security, and user experience.",
    features: [
      "React/Next.js Development",
      "E-commerce Solutions", 
      "Progressive Web Apps",
      "API Integration",
      "SEO Optimization",
      "Performance Optimization"
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
    duration: "4-8 weeks",
    rating: 4.9,
    reviews: 45,
    gradient: "from-blue-500 to-cyan-500",
    popular: true,
    category: "development"
  },
  {
    id: 2,
    Icon: FaMobileAlt,
    title: "Mobile App Development",
    shortDesc: "Native & cross-platform mobile apps",
    fullDesc: "Build powerful mobile applications for iOS and Android using React Native and Flutter. We ensure seamless performance across all devices with native-like user experience and smooth animations.",
    features: [
      "iOS & Android Apps",
      "React Native/Flutter",
      "App Store Deployment",
      "Push Notifications", 
      "Offline Functionality",
      "In-App Purchases"
    ],
    technologies: ["React Native", "Flutter", "Firebase", "Redux"],
    duration: "6-12 weeks",
    rating: 4.8,
    reviews: 32,
    gradient: "from-purple-500 to-pink-500",
    category: "development"
  },
  {
    id: 3,
    Icon: FaPalette,
    title: "UI/UX Design",
    shortDesc: "Beautiful, conversion-focused designs",
    fullDesc: "Create stunning user interfaces and experiences that not only look amazing but also drive conversions and user engagement. Our designs are research-backed and user-centered.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping", 
      "Design Systems",
      "Usability Testing",
      "Brand Identity Design",
      "Responsive Design"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
    duration: "3-6 weeks",
    rating: 5.0,
    reviews: 28,
    gradient: "from-pink-500 to-rose-500",
    category: "design"
  },
  {
    id: 4,
    Icon: FaCloud,
    title: "Cloud & DevOps",
    shortDesc: "Scalable cloud infrastructure solutions",
    fullDesc: "Deploy and manage your applications on modern cloud platforms with automated CI/CD pipelines, monitoring, and auto-scaling solutions for maximum reliability and performance.",
    features: [
      "AWS/GCP/Azure Setup",
      "CI/CD Pipeline Creation",
      "Container Orchestration",
      "Monitoring & Analytics",
      "Auto-scaling Solutions",
      "Security Implementation"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    duration: "2-4 weeks",
    rating: 4.7,
    reviews: 22,
    gradient: "from-green-500 to-teal-500",
    category: "infrastructure"
  },
  {
    id: 5,
    Icon: FaCode,
    title: "Custom Software Development",
    shortDesc: "Tailored enterprise solutions",
    fullDesc: "Build custom software solutions, APIs, and integrations specifically designed for your business needs and workflows. From CRM systems to inventory management platforms.",
    features: [
      "Custom API Development",
      "System Integration",
      "Database Design & Optimization",
      "Enterprise Solutions",
      "Legacy System Modernization",
      "Third-party Integrations"
    ],
    technologies: ["Python", "Java", "PostgreSQL", "Redis", "GraphQL"],
    duration: "8-16 weeks",
    rating: 4.9,
    reviews: 18,
    gradient: "from-indigo-500 to-purple-500",
    category: "development"
  },
  {
    id: 6,
    Icon: FaDatabase,
    title: "Data Analytics & BI",
    shortDesc: "Smart insights and business intelligence",
    fullDesc: "Transform your data into actionable insights with custom dashboards, reporting tools, and automated analytics solutions that help drive business decisions.",
    features: [
      "Custom Analytics Dashboards",
      "Data Visualization",
      "Business Intelligence Setup",
      "Automated Reporting",
      "Real-time Data Processing",
      "AI/ML Integration"
    ],
    technologies: ["Python", "Tableau", "Power BI", "Apache Spark", "TensorFlow"],
    duration: "6-10 weeks",
    rating: 4.6,
    reviews: 15,
    gradient: "from-yellow-500 to-orange-500",
    category: "analytics"
  }
];

const categories = [
  { id: "all", label: "All Services", icon: FaRocket },
  { id: "development", label: "Development", icon: FaCode },
  { id: "design", label: "Design", icon: FaPalette },
  { id: "infrastructure", label: "Infrastructure", icon: FaCloud },
  { id: "analytics", label: "Analytics", icon: FaChartBar }
];

const processSteps = [
  { 
    step: "01", 
    title: "Discovery & Planning", 
    desc: "Understanding your requirements, goals, and project scope",
    icon: FaLightbulb,
    details: ["Requirement Analysis", "Technical Consultation", "Project Roadmap"]
  },
  { 
    step: "02", 
    title: "Design & Prototyping", 
    desc: "Creating wireframes, mockups, and interactive prototypes",
    icon: FaPalette,
    details: ["UI/UX Design", "Prototype Development", "Design Review"]
  },
  { 
    step: "03", 
    title: "Development & Testing", 
    desc: "Building the solution with clean code and rigorous testing",
    icon: FaCode,
    details: ["Agile Development", "Quality Assurance", "Performance Testing"]
  },
  { 
    step: "04", 
    title: "Deployment & Launch", 
    desc: "Going live with ongoing support and maintenance",
    icon: FaRocket,
    details: ["Production Deployment", "Launch Support", "Performance Monitoring"]
  }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  useEffect(() => {
    // Reset selected service when category changes
    setSelectedService(null);
  }, [activeCategory]);

  return (
    <div className="bg-gray-50">
      <Header />
      <main className="pt-20">
{/* Modern Hero Section WITH BACKGROUND IMAGE - GOLDEN THEME */}
<section className="relative py-24 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img 
      src="https://img.freepik.com/premium-photo/service-concept-person-hand-holding-service-icon-virtual-screen_1296497-175.jpg" 
      alt="Hero Background"
      className="w-full h-full object-cover"
    />
    {/* Dark overlay with GOLDEN tint instead of purple */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-neutral-900/80 to-yellow-900/40"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center text-white max-w-4xl mx-auto"
    >
      <motion.div 
        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-yellow-400/20 backdrop-blur-sm border-2 border-yellow-400/50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <HiSparkles className="text-yellow-400" />
        <span className="text-sm font-medium text-yellow-400">Premium Services</span>
      </motion.div>
      
      <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
        Transform Your Business with Our
        <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
          Digital Solutions
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto">
        From web development to AI-powered analytics, we deliver comprehensive 
        technology solutions that drive real business growth and success.
      </p>

      {/* UPDATED BUTTONS - GOLDEN & GRAY THEME */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <motion.a
          href="#services"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black font-bold rounded-2xl hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Services
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.a>

      </div>
    </motion.div>
  </div>
</section>

        {/* Category Filter - UPDATED WITH YELLOW BACKGROUND & BLACK TEXT */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-yellow-400 text-black shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon size={16} />
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid - PRICE REMOVED */}
        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    onClick={() => setSelectedService(service)}
                    className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                    whileHover={{ y: -8 }}
                  >
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                          <FaStar size={10} />
                          POPULAR
                        </div>
                      </div>
                    )}

                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 p-8">
                      {/* Service Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <service.Icon size={28} />
                      </div>

                      {/* Service Info */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.shortDesc}</p>
                      </div>

                      {/* Rating & Reviews */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              size={14} 
                              className={i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-300'} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>

                      {/* Key Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <FaCheck className="text-green-500 text-xs flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-sm text-blue-600 font-medium">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>

                      {/* Duration Only (Price Removed) */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <FaClock size={12} />
                          <span>{service.duration}</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                          hoveredService === service.id
                            ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        whileHover={{ scale: 1.02 }}
                      >
                        View Details
                        <FaArrowRight size={14} />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Service Detail Modal - PRICE REMOVED */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${selectedService.gradient} text-white`}>
                      <selectedService.Icon size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">{selectedService.title}</h2>
                      <p className="text-gray-600">{selectedService.shortDesc}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Service Overview</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{selectedService.fullDesc}</p>
                    
                    <h4 className="text-lg font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <HiBadgeCheck className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                      <h4 className="text-lg font-semibold mb-4">Project Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Timeline:</span>
                          <span className="font-medium">{selectedService.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Client Rating:</span>
                          <div className="flex items-center gap-1">
                            <span className="font-medium">{selectedService.rating}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <FaStar 
                                  key={i} 
                                  size={12} 
                                  className={i < Math.floor(selectedService.rating) ? 'text-yellow-400' : 'text-gray-300'} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">({selectedService.reviews})</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href="/contact"
                        className={`flex-1 py-3 px-6 rounded-xl font-semibold text-center bg-gradient-to-r ${selectedService.gradient} text-white hover:shadow-lg transition-all duration-300`}
                        whileHover={{ scale: 1.02 }}
                      >
                        Get Started
                      </motion.a>

                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

{/* Process Section - GOLDEN ICONS */}
<section className="py-24 bg-gray-50">
  <div className="container mx-auto px-6">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        A proven methodology that ensures successful project delivery every time
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {processSteps.map((step, index) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl font-black text-gray-200">{step.step}</div>
              {/* UPDATED: Purple to Golden */}
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
                <step.icon size={20} />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{step.desc}</p>
            <ul className="space-y-1">
              {step.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* CTA Section - WHITE BACKGROUND WITH GOLDEN & GRAY THEME */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-neutral-900">Ready to </span>
                <span className="text-yellow-400">Transform Your Business?</span>
              </h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-600">
                Get a free consultation and detailed project estimate. Let's discuss how we can help you achieve your digital goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black font-bold rounded-2xl hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <FaUsers />
                  Get Free Consultation
                </motion.a>
                <motion.a
                  href="/projects"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-yellow-400 text-yellow-500 font-bold rounded-2xl hover:bg-yellow-400 hover:text-black transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  View Portfolio
                  <FaArrowRight />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
