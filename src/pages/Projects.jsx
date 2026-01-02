// src/pages/Projects.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaArrowRight,
  FaEye,
  FaGithub,
  FaRocket,
  FaStar,
  FaUsers
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ScrollToTop from "../components/common/ScrollToTop";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "Modern Shopping Experience",
    description: "Full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
    category: "Web App",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    year: "2025",
    status: "Live",
    gradient: "from-blue-500 to-purple-500",
    featured: true,
    metrics: {
      users: "25K+",
      revenue: "$500K+",
      rating: "4.8/5"
    },
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    subtitle: "Health & Wellness Companion",
    description: "Mobile app for fitness tracking with AI-powered workout recommendations and progress analytics.",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "TensorFlow"],
    year: "2024",
    status: "Live",
    gradient: "from-green-500 to-teal-500",
    metrics: {
      downloads: "50K+",
      rating: "4.9/5",
      retention: "85%"
    },
  },
  {
    id: 3,
    title: "Task Management Tool",
    subtitle: "Team Productivity Suite",
    description: "Collaborative task management platform with real-time updates, team chat, and project analytics.",
    category: "Web App",
    technologies: ["Vue.js", "Laravel", "PostgreSQL"],
    year: "2024",
    status: "Live",
    gradient: "from-purple-500 to-pink-500",
    metrics: {
      teams: "1K+",
      tasks: "100K+",
      satisfaction: "96%"
    },
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    subtitle: "Intelligent Customer Support",
    description: "AI-powered chat assistant for customer support with natural language processing and learning capabilities.",
    category: "AI Platform",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    year: "2025",
    status: "Beta",
    gradient: "from-yellow-500 to-orange-500",
    trending: true,
    metrics: {
      queries: "1M+",
      accuracy: "94%",
      response_time: "0.5s"
    },

  },
  {
    id: 5,
    title: "Real Estate Portal",
    subtitle: "Property Discovery Platform",
    description: "Comprehensive real estate platform with virtual tours, mortgage calculator, and agent matching.",
    category: "Web App",
    technologies: ["Next.js", "MongoDB", "Mapbox", "Stripe"],
    year: "2024",
    status: "Live",
    gradient: "from-indigo-500 to-blue-500",
    metrics: {
      properties: "10K+",
      users: "15K+",
      sales: "$2M+"
    },

  },
  {
    id: 6,
    title: "Social Media Dashboard",
    subtitle: "Multi-Platform Management",
    description: "Unified dashboard for managing multiple social media accounts with analytics and scheduling features.",
    category: "SaaS",
    technologies: ["React", "Node.js", "Redis", "Chart.js"],
    year: "2023",
    status: "Live",
    gradient: "from-pink-500 to-rose-500",
    metrics: {
      accounts: "5K+",
      posts: "50K+",
      engagement: "+200%"
    },
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "Web App", label: "Web Apps" },
  { id: "Mobile App", label: "Mobile Apps" },
  { id: "AI Platform", label: "AI/ML" },
  { id: "SaaS", label: "SaaS" }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div>
      <Header />
      <main className="pt-20">
        {/* Hero Section WITH BACKGROUND IMAGE - GOLDEN THEME */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://img.freepik.com/premium-photo/laptop-dinner-table_53876-12622.jpg?semt=ais_hybrid&w=740&q=80" 
              alt="Projects Hero Background"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay with golden tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-neutral-900/80 to-yellow-900/40"></div>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-yellow-400/20 backdrop-blur-sm border-2 border-yellow-400/50">
                <HiSparkles className="text-yellow-400" />
                <span className="text-sm text-yellow-400 font-medium">Our Portfolio</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Projects</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
                Discover our portfolio of innovative digital solutions that have transformed businesses and delighted users worldwide.
              </p>

              {/* UPDATED BUTTON - GOLDEN THEME, WATCH DEMO REMOVED */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black font-bold rounded-2xl hover:bg-yellow-500 hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  View Projects
                  <FaArrowRight />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter - GOLDEN THEME */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-yellow-400 text-black shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-medium">
                      {project.title}
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.featured && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                          <FaStar size={10} />
                          FEATURED
                        </div>
                      )}
                      {project.trending && (
                        <div className="px-2 py-1 bg-pink-500 text-white text-xs font-bold rounded-full">
                          TRENDING
                        </div>
                      )}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <FaEye className="text-white text-2xl" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-3">{project.subtitle}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                        <div key={key} className="text-center p-2 bg-gray-50 rounded-lg">
                          <div className="text-sm font-bold text-gray-800">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Project Impact</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real numbers that showcase the success of our digital solutions
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: "Projects Completed", value: "50+", icon: FaRocket },
                { label: "Happy Clients", value: "10+", icon: FaUsers },
                { label: "Total Users", value: "100K+", icon: FaEye },
                { label: "Success Rate", value: "98%", icon: FaStar }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-neutral-900">Ready to </span>
                <span className="text-yellow-400">Start Your Project?</span>
              </h2>
              
              <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-600">
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
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-yellow-400 text-yellow-500 font-bold rounded-2xl hover:bg-yellow-400 hover:text-black transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  View Services
                  <FaArrowRight />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Simple Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-lg text-blue-600">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <div className={`h-48 rounded-2xl bg-gradient-to-br ${selectedProject.gradient} opacity-20 mb-4`}></div>
                <p className="text-gray-600 leading-relaxed mb-4">{selectedProject.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gray-50 rounded-xl">
                      <div className="text-xl font-bold">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>


              </div>
            </motion.div>
          </motion.div>
        )}
      </main> 
      <Footer />
      <ScrollToTop />
    </div>
  );
}
