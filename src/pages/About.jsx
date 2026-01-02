// src/pages/About.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaAward,
  FaCertificate,
  FaChartBar,
  FaCheckCircle,
  FaCloud,
  FaCode,
  FaGem,
  FaGithub,
  FaGlobe,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaLinkedin,
  FaMedal,
  FaPalette,
  FaRegStar,
  FaRocket,
  FaShieldAlt,
  FaThumbsUp,
  FaTrophy,
  FaTwitter,
  FaUsers
} from "react-icons/fa";
import {
  HiCog,
  HiSparkles,
  HiTrendingUp
} from "react-icons/hi";
import ScrollToTop from "../components/common/ScrollToTop";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

// Enhanced Stats
const stats = [
  { icon: FaUsers, number: "10+", label: "Happy Clients", description: "Satisfied customers worldwide" },
  { icon: FaRocket, number: "50+", label: "Projects Delivered", description: "Successfully completed projects" },
  { icon: FaAward, number: "1+", label: "Years Experience", description: "Of industry expertise" },
  { icon: FaTrophy, number: "2+", label: "Awards Won", description: "Recognition for excellence" }
];

// Enhanced Values with more comprehensive descriptions
const values = [
  {
    icon: FaLightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex problems and stay ahead of the curve. Our team continuously explores new frameworks, tools, and methodologies to deliver next-generation solutions.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: FaTrophy,
    title: "Excellence Always", 
    description: "Every project is delivered with the highest standards of code quality, design, and user experience without compromise. We believe in perfectionism and attention to detail that sets us apart from the competition.",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: FaHandshake,
    title: "Partnership Driven",
    description: "We build long-term relationships with our clients, becoming their trusted technology partner for growth. Our collaborative approach ensures that we understand your business inside out and deliver solutions that truly matter.",
    gradient: "from-green-500 to-teal-600"
  },
  {
    icon: FaHeart,
    title: "People Focused",
    description: "Our team's well-being and client satisfaction are at the heart of everything we do and every decision we make. We believe that happy teams create exceptional products, and satisfied clients become our biggest advocates.",
    gradient: "from-pink-500 to-red-500"
  }
];

// Enhanced Team with more members
const team = [
  {
    name: "Nishant Prajapati",
    role: "CEO & Founder", 
    bio: "Visionary leader with 5+ years in building scalable solutions for startups and enterprises. Expert in business strategy, product development, and team leadership.",
    skills: ["Strategy", "Leadership", "Product Vision", "Business Development"],
    social: { linkedin: "#", twitter: "#" },
    gradient: "from-blue-500 to-purple-600",
    achievements: ["Expertise", "Backend Expert", "Team Leader"]
  },
  {
    name: "Bharat Yadav",
    role: "CTO & Co-Founder",
    bio: "Technical mastermind expert in cloud architecture and scalable systems. Leads our technical vision and innovation initiatives with cutting-edge solutions.",
    skills: ["Cloud Architecture", "DevOps", "Team Management", "System Design"],
    social: { linkedin: "#", github: "#" },
    gradient: "from-purple-500 to-pink-600",
    achievements: ["AWS Certified", "Docker Expert", "Open Source Contributor"]
  },
  {
    name: "Shivang Mishra",
    role: "Lead Full-Stack Developer",
    bio: "Full-stack wizard with expertise in React, Node.js, and modern development practices. Passionate about clean code, performance optimization, and scalable architectures.",
    skills: ["React", "Node.js", "System Design", "MongoDB"],
    social: { linkedin: "#", github: "#" },
    gradient: "from-green-500 to-blue-500",
    achievements: ["React Specialist", "Performance Expert", "Code Reviewer"]
  },
  {
    name: "Rahul Tiwari",
    role: "Senior UI/UX Designer", 
    bio: "Creative genius creating beautiful and intuitive user experiences that drive engagement and conversions. Master of user psychology and design thinking.",
    skills: ["UI Design", "UX Research", "Prototyping", "Design Systems"],
    social: { linkedin: "#", twitter: "#" },
    gradient: "from-pink-500 to-purple-500",
    achievements: ["Adobe Certified", "Design Awards", "UX Specialist"]
  },
  {
    name: "Arjun Kumar",
    role: "DevOps Engineer",
    bio: "Infrastructure expert ensuring smooth deployments and optimal performance. Specializes in cloud platforms, automation, and security implementations.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    social: { linkedin: "#", github: "#" },
    gradient: "from-orange-500 to-red-500",
    achievements: ["Cloud Expert", "Security Specialist", "Automation Guru"]
  },
  {
    name: "Priya Sharma",
    role: "Senior Frontend Developer",
    bio: "Frontend specialist crafting pixel-perfect, responsive interfaces. Expert in modern JavaScript frameworks and performance optimization techniques.",
    skills: ["React", "Vue.js", "TypeScript", "CSS"],
    social: { linkedin: "#", github: "#" },
    gradient: "from-cyan-500 to-blue-500",
    achievements: ["Frontend Expert", "Performance Guru", "Component Library Creator"]
  }
];

// Enhanced Timeline with more milestones
const timeline = [
  { 
    year: "2024", 
    title: "Company Founded", 
    description: "Started with a vision to transform digital experiences and help businesses grow through technology",
    icon: FaRocket
  },
  { 
    year: "2024", 
    title: "First Major Clients", 
    description: "Successfully onboarded 10+ clients and delivered our first enterprise-level projects",
    icon: FaUsers
  },
  { 
    year: "2024", 
    title: "Team Expansion", 
    description: "Grew from 2 co-founders to a diverse team of 15+ talented developers, designers, and specialists",
    icon: FaGem
  },
  { 
    year: "2025", 
    title: "20+ Projects Milestone", 
    description: "Successfully completed 50+ projects across various industries with 98% client satisfaction rate",
    icon: FaTrophy
  },
  { 
    year: "2025", 
    title: "Industry Recognition", 
    description: "Won multiple awards for innovative solutions and recognized as a leading digital agency",
    icon: FaMedal
  },
  { 
    year: "2025", 
    title: "National Expansion", 
    description: "Expanded operations nationwide, serving clients across India with 24/7 support",
    icon: FaGlobe
  }
];

// Company Achievements
const achievements = [
  {
    icon: FaCertificate,
    title: "ISO 9001 Certified",
    description: "Quality management system certification"
  },
  {
    icon: FaShieldAlt,
    title: "Security Compliant",
    description: "SOC 2 Type II and GDPR compliant"
  },
  {
    icon: FaRegStar,
    title: "5-Star Rated",
    description: "Average client rating across all platforms"
  },
  {
    icon: FaThumbsUp,
    title: "98% Success Rate",
    description: "Project completion and client satisfaction rate"
  }
];

// Core Competencies
const competencies = [
  {
    category: "Development",
    icon: FaCode,
    skills: ["React/Next.js", "Node.js", "Python", "Mobile Apps"],
    projects: "60+",
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Design",
    icon: FaPalette,
    skills: ["UI/UX Design", "Branding", "Prototyping", "User Research"],
    projects: "40+",
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Cloud & DevOps",
    icon: FaCloud,
    skills: ["AWS", "Azure", "Docker", "CI/CD"],
    projects: "30+",
    color: "from-green-500 to-teal-500"
  },
  {
    category: "Data & Analytics",
    icon: FaChartBar,
    skills: ["Data Analysis", "BI", "Machine Learning", "Dashboards"],
    projects: "25+",
    color: "from-orange-500 to-red-500"
  }
];

export default function About() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredCompetency, setHoveredCompetency] = useState(null);

  return (
    <div className="page-container bg-gray-50 overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section WITH BACKGROUND IMAGE - NO PARTICLES */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://www.shutterstock.com/image-photo/about-us-details-contact-data-600nw-384705802.jpg" 
              alt="About Hero Background"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay with golden tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-neutral-900/80 to-yellow-900/40"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
                <span className="text-sm text-yellow-400 font-medium">About GrowingUpp</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                We are <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Digital Craftsmen</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto">
                A passionate team of developers, designers, and strategists committed to 
                building exceptional digital experiences that drive real business results and transform industries.
              </p>

              {/* UPDATED BUTTON - GOLDEN THEME, WATCH VIDEO REMOVED */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="#story"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('story').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black font-bold rounded-2xl hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Story
                  <FaRocket />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section - Centered */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                <HiTrendingUp />
                Our Impact
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Numbers That Speak</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence is reflected in the measurable impact we've created for businesses worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white group-hover:scale-110 transition-transform duration-300">
                      <stat.icon size={28} />
                    </div>
                    <div className="text-4xl font-black text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey - Centered */}
        <section id="story" className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Founded in 2024, <strong className="text-gray-900">GrowingUpp</strong> started with a simple but powerful mission: 
                to help businesses leverage technology for growth and success in the digital age.
              </p>
            </motion.div>

            {/* Enhanced Story Content */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-600 leading-relaxed">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <p>
                    What began as a small team of passionate developers has evolved into a comprehensive 
                    digital agency that combines technical expertise with creative innovation and strategic thinking.
                  </p>
                  
                  <p>
                    We believe that great software is not just about clean code—it's about understanding 
                    business needs, user behavior, and market dynamics. This holistic approach has helped us 
                    deliver successful projects for startups, SMEs, and enterprise clients.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <p>
                    Today, we continue to push boundaries, adopt new technologies, and create solutions 
                    that drive real business value for our clients across multiple industries and countries.
                  </p>

                  <p>
                    Our commitment to excellence, innovation, and client success has made us a trusted 
                    technology partner for businesses looking to transform their digital presence.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Timeline - Centered */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-12 text-center">Our Milestones</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4 p-6 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded">{item.year}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values - Centered */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                These core principles guide every decision we make and every project we deliver, 
                ensuring consistency, quality, and excellence in everything we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                  className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                <HiCog />
                Core Competencies
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise Areas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep specialization across multiple technology domains, backed by years of experience and proven results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {competencies.map((comp, index) => (
                <motion.div
                  key={comp.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCompetency(index)}
                  onMouseLeave={() => setHoveredCompetency(null)}
                  className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-2xl bg-gradient-to-r ${comp.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <comp.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{comp.category}</h3>
                  <p className="text-sm text-gray-600 mb-4">{comp.projects} Projects Completed</p>
                  <div className="space-y-2">
                    {comp.skills.map((skill) => (
                      <span key={skill} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mr-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Achievements */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Achievements & Certifications</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Recognition and certifications that validate our commitment to excellence and industry standards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
