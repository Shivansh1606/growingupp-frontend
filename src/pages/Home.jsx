// src/pages/Home.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaAward,
  FaBullseye,
  FaChartBar,
  FaCheckCircle,
  FaClock,
  FaCloud,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGamepad,
  FaGlobe,
  FaHandshake,
  FaHome,
  FaHospital,
  FaIndustry,
  FaInfinity,
  FaLightbulb,
  FaLock,
  FaMobileAlt,
  FaPhone,
  FaPlane,
  FaQuoteLeft,
  FaRobot,
  FaRocket,
  FaStar,
  FaTools,
  FaTrophy,
  FaUsers
} from "react-icons/fa";
import {
  HiAcademicCap,
  HiBadgeCheck,
  HiChartBar,
  HiCog,
  HiDatabase,
  HiDesktopComputer,
  HiLightningBolt,
  HiShoppingBag,
  HiSparkles,
  HiTrendingUp
} from "react-icons/hi";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import ScrollToTop from "../components/common/ScrollToTop";

// Modern Services Data - ICONS REMOVED
const services = [
  {
    title: "Web & Mobile App Development",
    description: "Custom web and mobile applications tailored to your business needs",
    features: ["React/Next.js", "Mobile Apps", "PWA", "E-commerce"],
    gradient: "from-blue-500 to-cyan-500",
    bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    imageUrl: "https://5.imimg.com/data5/RQ/ZU/WK/SELLER-38338941/web-and-app-development-services-500x500.jpg"
  },
  {
    title: "Enterprise Software Modernization", 
    description: "Transform legacy systems into cutting-edge digital solutions",
    features: ["System Migration", "API Development", "Cloud Integration", "Automation"],
    gradient: "from-purple-500 to-pink-500",
    bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    imageUrl: "https://www.rishabhsoft.com/wp-content/uploads/2023/04/Banner-Image-Enterprise-App-Modernization.jpg"
  },
  {
    title: "Data Analytics & BI",
    description: "Extract valuable insights from your data for informed decisions",
    features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Dashboards"],
    gradient: "from-green-500 to-teal-500",
    bgImage: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    imageUrl: "https://globalcybersecuritynetwork.com/wp-content/uploads/2025/06/Best-bi-platforms-of-2025-blog-image.jpg"
  },
  {
    title: "AI & Emerging Tech",
    description: "Stay ahead with artificial intelligence and emerging technologies",
    features: ["Machine Learning", "AI Solutions", "Automation", "Chatbots"],
    gradient: "from-orange-500 to-yellow-500",
    bgImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTqrC5wSIiIVDd5PdBFvKEr5Bbvr8VpJ_u02t0SAc1xdL-45UK"
  },
  {
    title: "Cloud & DevOps",
    description: "Optimize infrastructure with cloud computing and DevOps practices",
    features: ["AWS/Azure", "CI/CD", "Docker", "Kubernetes"],
    gradient: "from-blue-600 to-indigo-600",
    bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hevGY-dhE2oPb0RB9f-Tnp6TVIiXceTPsA&s"
  },
  {
    title: "Cybersecurity & QA",
    description: "Protect your digital assets and ensure software quality",
    features: ["Security Audits", "Quality Testing", "Compliance", "Risk Assessment"],
    gradient: "from-red-500 to-pink-500",
    bgImage: "linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)",
    imageUrl: "https://www.puredome.com/hs-fs/hubfs/Feature%20image-%20The%20Crucial%20Role%20of%20Cyber%20Security%20Quality%20Assurance%20(1).png?width=1728&height=834&name=Feature%20image-%20The%20Crucial%20Role%20of%20Cyber%20Security%20Quality%20Assurance%20(1).png"
  }
];
// Company Stats
const stats = [
  { number: "50+", label: "Projects Completed", icon: FaRocket },
  { number: "10+", label: "Happy Clients", icon: FaUsers },
  { number: "1+", label: "Years Experience", icon: FaAward },
  { number: "98%", label: "Success Rate", icon: FaTrophy }
];

// Client Testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    role: "CTO",
    text: "GrowingUpp transformed our vision into reality with their exceptional development skills. The team delivered beyond our expectations!",
    rating: 5,
    avatar: "SJ",
    project: "E-commerce Platform"
  },
  {
    name: "Rajesh Patel",
    company: "StartupHub",
    role: "Founder & CEO",
    text: "Working with GrowingUpp has been a game-changer for our business. They increased our user engagement by over 300%!",
    rating: 5,
    avatar: "RP",
    project: "Mobile App Development"
  },
  {
    name: "Maria Garcia",
    company: "Digital Solutions Ltd",
    role: "Product Manager",
    text: "Professional, reliable, and innovative. GrowingUpp helped us scale our platform to serve 100K+ users seamlessly.",
    rating: 5,
    avatar: "MG",
    project: "Cloud Infrastructure"
  },
  {
    name: "David Kim",
    company: "FinTech Innovations",
    role: "Head of Technology",
    text: "The custom software solution they built for us streamlined our operations and saved us 40% in operational costs.",
    rating: 5,
    avatar: "DK",
    project: "Custom Software"
  }
];

// Our Values - Enhanced
const values = [
  {
    icon: HiBadgeCheck,
    title: "Quality Excellence",
    description: "We maintain the highest standards in every project, ensuring exceptional results that exceed expectations and deliver real business value."
  },
  {
    icon: FaLightbulb,
    title: "Innovation First", 
    description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges and stay ahead of the curve."
  },
  {
    icon: FaHandshake,
    title: "Client Partnership",
    description: "We build long-term relationships with our clients, becoming their trusted technology partner for sustainable growth."
  },
  {
    icon: FaClock,
    title: "Timely Delivery",
    description: "We respect deadlines and deliver projects on time without compromising on quality or functionality, every single time."
  }
];

// Process Steps
const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your vision and requirements through detailed consultation and strategic planning.",
    icon: HiLightningBolt
  },
  {
    step: "02", 
    title: "Design & Prototype",
    description: "Creating wireframes, mockups, and interactive prototypes to visualize your solution.",
    icon: HiDesktopComputer
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Building your solution with clean code, rigorous testing, and quality assurance.",
    icon: FaCode
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Deploying your solution and providing ongoing maintenance and support services.",
    icon: FaRocket
  }
];

// Technologies We Use
const technologies = [
  {
    category: "Frontend",
    icon: HiDesktopComputer,
    techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Backend", 
    icon: FaDatabase,
    techs: ["Node.js", "Python", "Java", "PHP", ".NET"],
    color: "from-green-500 to-teal-500"
  },
  {
    category: "Mobile",
    icon: FaMobileAlt,
    techs: ["React Native", "Flutter", "iOS", "Android", "Ionic"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Cloud & DevOps",
    icon: FaCloud,
    techs: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    color: "from-orange-500 to-red-500"
  }
];

// Enhanced Industries We Serve
const industries = [
  { 
    name: "E-commerce & Retail", 
    icon: HiShoppingBag, 
    projects: "12+",
    description: "Online stores, marketplaces, inventory systems",
    color: "from-blue-500 to-cyan-500",
    bgPattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
  },
  { 
    name: "Healthcare & Medical", 
    icon: FaHospital, 
    projects: "8+",
    description: "Patient management, telemedicine, health apps",
    color: "from-green-500 to-emerald-500",
    bgPattern: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-30.036-7.071l5.657 5.657 14.142-14.142 1.414 1.414-15.556 15.556-7.071-7.071 1.414-1.414z'/%3E%3C/g%3E%3C/svg%3E"
  },
  { 
    name: "FinTech & Banking", 
    icon: FaChartBar, 
    projects: "6+",
    description: "Payment systems, crypto, digital banking",
    color: "from-purple-500 to-indigo-500",
    bgPattern: "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='10 0 20 10 10 20 0 10'/%3E%3C/g%3E%3C/svg%3E"
  },
  { 
    name: "Education & Learning", 
    icon: HiAcademicCap, 
    projects: "7+",
    description: "LMS, online courses, educational apps",
    color: "from-yellow-500 to-orange-500",
    bgPattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
  },
  { 
    name: "Real Estate", 
    icon: FaHome, 
    projects: "5+",
    description: "Property portals, CRM, virtual tours",
    color: "from-teal-500 to-green-500",
    bgPattern: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Crect width='40' height='40' rx='20'/%3E%3C/g%3E%3C/svg%3E"
  },
  { 
    name: "Manufacturing", 
    icon: FaIndustry, 
    projects: "5+",
    description: "IoT systems, automation, supply chain",
    color: "from-red-500 to-pink-500",
    bgPattern: "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect width='10' height='10'/%3E%3Crect x='10' y='10' width='10' height='10'/%3E%3C/g%3E%3C/svg%3E"
  },
  { 
    name: "Entertainment", 
    icon: FaGamepad, 
    projects: "8+",
    description: "Gaming apps, streaming, social media",
    color: "from-pink-500 to-rose-500",
    bgPattern: "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M16 0l4 8 8-4-4 8 4 8-8-4-4 8-4-8-8 4 4-8-4-8 8 4z'/%3E%3C/g%3E%3C/svg%3E"
  },
  { 
    name: "Travel & Tourism", 
    icon: FaPlane, 
    projects: "4+",
    description: "Booking systems, travel apps, tours",
    color: "from-indigo-500 to-purple-500",
    bgPattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 10l10 20H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Interactive Hero Section */}
        <Hero />

        {/* Company Introduction - Centered Layout */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-6xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                <HiSparkles />
                About GrowingUpp
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Unlock Your Business's True Potential
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We craft solutions that are as unique as your business, helping you stand out in the digital crowd. 
                Our team of seasoned experts delivers software that's not just functional but also beautiful and user-friendly.
              </p>
            </motion.div>

            {/* Enhanced Stats Grid - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Your Vision, Our Expertise - Centered Layout */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Your Vision, Our Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Every project at GrowingUpp starts with understanding your vision. We blend your ideas 
                with our technical expertise to create a seamless development process that transforms concepts into powerful digital solutions.
              </p>
            </motion.div>

            {/* Enhanced Content Grid - Centered */}
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Left - Key Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="grid gap-6">
                  <motion.div 
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <FaBullseye size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Strategic Planning</h3>
                      <p className="text-gray-600">We start with in-depth analysis of your business goals and market requirements.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <FaTools size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Expert Development</h3>
                      <p className="text-gray-600">Our skilled developers use cutting-edge technologies to build robust solutions.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <FaInfinity size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Ongoing Support</h3>
                      <p className="text-gray-600">We provide continuous support and maintenance to ensure optimal performance.</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right - Technologies We Use */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Technologies We Master</h3>
                  <p className="text-gray-600">Cutting-edge tools and frameworks for modern solutions</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.category}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredTech(index)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${tech.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <tech.icon size={20} />
                      </div>
                      <h4 className="text-lg font-bold mb-3">{tech.category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {tech.techs.slice(0, 3).map((item) => (
                          <span key={item} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                        {tech.techs.length > 3 && (
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                            +{tech.techs.length - 3}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* UPDATED Modern Services Section - NO ICONS IN DATA */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                <HiCog />
                Our Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Comprehensive Digital Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From web development to AI solutions, we offer end-to-end services to transform your business digitally.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Image Section */}
                  <div className="h-48 relative flex items-center justify-center text-white overflow-hidden">
                    {/* Background Image */}
                    {service.imageUrl ? (
                      <img 
                        src={service.imageUrl} 
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div 
                        style={{ background: service.bgImage }} 
                        className="absolute inset-0"
                      />
                    )}
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>

                  {/* Content Section */}
                  <div className="bg-white p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-yellow-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <span 
                          key={feature} 
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-md text-xs font-medium">
                          +{service.features.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose GrowingUpp - Centered Layout */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Why Choose GrowingUpp?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We're passionate about what we do, and we pour that passion into every project we take on. 
                Whether you're a small business just starting out or a big brand looking to level up, we've got your back.
              </p>
            </motion.div>

            {/* Values Grid - Centered */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white group-hover:scale-110 transition-transform duration-300">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Industries We Serve - Modern Interactive Cards */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                <HiTrendingUp />
                Industries We Serve
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Expertise Across Sectors</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From startups to enterprises, we've delivered successful solutions across diverse industries with proven results and satisfied clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndustry(index)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: `url("${industry.bgPattern}")` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 p-8 text-center">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${industry.color} text-white group-hover:scale-110 transition-transform duration-300`}
                      animate={{
                        rotate: hoveredIndustry === index ? 5 : 0,
                        y: hoveredIndustry === index ? -5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <industry.icon size={28} />
                    </motion.div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{industry.description}</p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`} />
                        <span className="text-gray-700 font-medium">{industry.projects} Projects</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Seamless Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From concept to execution, we ensure you're part of the journey, every step of the way.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow group">
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          <step.icon size={20} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-blue-200 flex items-center justify-center text-xs font-bold text-blue-600">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-blue-300 to-purple-300"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium">
                <FaQuoteLeft />
                Client Success Stories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients who've experienced amazing results.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="text-2xl text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-xl text-gray-800">{testimonials[currentTestimonial].name}</div>
                    <div className="text-purple-600 font-medium">{testimonials[currentTestimonial].role}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-sm font-medium text-gray-700">
                  <FaCheckCircle className="text-green-500" />
                  Project: {testimonials[currentTestimonial].project}
                </div>
              </motion.div>

              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentTestimonial === index 
                        ? 'bg-purple-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UPDATED Final CTA Section - WHITE BACKGROUND WITH IMAGE URL + GOLDEN THEME */}
        <section 
          className="py-24 bg-white relative overflow-hidden mb-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                Ready to <span className="text-yellow-400">Transform Your Business?</span>
              </h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-200">
                Let's create something amazing together. Get in touch and turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black font-bold rounded-2xl hover:bg-yellow-500 hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Start Your Project
                  <FaRocket />
                </motion.a>
                <motion.a
                  href="/services"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-2xl hover:bg-yellow-400 hover:text-black transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  View Services
                  <FaArrowRight />
                </motion.a>
              </div>

              <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
                <div className="flex items-center gap-3 text-white">
                  <FaPhone className="text-2xl text-yellow-400" />
                  <div className="text-left">
                    <div className="text-sm text-gray-300">Call Us</div>
                    <div className="font-semibold">+91-98765-43210</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <FaEnvelope className="text-2xl text-yellow-400" />
                  <div className="text-left">
                    <div className="text-sm text-gray-300">Email Us</div>
                    <div className="font-semibold">hello@growingupp.com</div>
                  </div>
                </div>
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
