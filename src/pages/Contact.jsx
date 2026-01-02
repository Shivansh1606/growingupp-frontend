// src/pages/Contact.jsx
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, 
  FaTwitter, FaTelegram, FaRocket, FaPaperPlane, FaCheckCircle,
  FaClock, FaUsers, FaHeadset, FaGlobe, FaStar, FaArrowRight,
  FaCalendarAlt, FaCommentDots
} from "react-icons/fa";
import { 
  HiSparkles, HiLightningBolt, HiChat, HiMail, HiPhone,
  HiLocationMarker, HiClock, HiCheckCircle
} from "react-icons/hi";
import ScrollToTop from "../components/common/ScrollToTop";
const contactMethods = [
  {
    icon: FaPhone,
    title: "Phone Support",
    subtitle: "Talk to our experts",
    details: "+91 98765 43210",
    description: "Available Mon-Fri, 9 AM - 6 PM IST",
    action: "Call Now",
    href: "tel:+919876543210",
    gradient: "from-green-500 to-emerald-600",
    available: true
  },
  {
    icon: FaEnvelope,
    title: "Email Support",
    subtitle: "Send us a message",
    details: "hello@growingupp.com",
    description: "We'll respond within 24 hours",
    action: "Send Email",
    href: "mailto:hello@growingupp.com",
    gradient: "from-blue-500 to-cyan-600",
    available: true
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp Chat",
    subtitle: "Quick messaging",
    details: "+91 7078496801",
    description: "Fast replies, media sharing",
    action: "Chat on WhatsApp",
    href: "https://wa.me/917078496801",
    gradient: "from-green-500 to-green-600",
    available: true
  },
];

const workingHours = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
  { day: "Sunday", time: "Closed" }
];

const faqs = [
  {
    question: "How long does it take to develop a website?",
    answer: "Typically 4-8 weeks depending on complexity. We provide detailed timelines during consultation."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes! We provide comprehensive support packages including updates, security, and performance optimization."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We work with React, Node.js, Python, mobile apps, cloud platforms, and cutting-edge AI/ML technologies."
  },
  {
    question: "Can you help with existing projects?",
    answer: "Absolutely! We can audit, optimize, or completely redesign your existing digital solutions."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStartup Inc",
    text: "GrowingUpp transformed our vision into reality. Outstanding work and communication!",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Rajesh Patel",
    company: "E-commerce Solutions",
    text: "Professional team, delivered on time and exceeded our expectations completely.",
    rating: 5,
    avatar: "RP"
  },
  {
    name: "Maria Garcia",
    company: "Digital Agency",
    text: "The mobile app they built for us increased our user engagement by 200%.",
    rating: 5,
    avatar: "MG"
  }
];

export default function Contact() {
  const [selectedMethod, setSelectedMethod] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const watchedFields = watch();

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const getProgressWidth = () => {
    const fields = ['name', 'email', 'subject', 'message'];
    const filledFields = fields.filter(field => watchedFields[field]?.length > 0);
    return (filledFields.length / fields.length) * 100;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section - NO IMAGE, NO PARTICLES */}
        
        {/* Contact Methods Grid - UPDATED WITH CENTERED LAYOUT */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Choose your preferred way to connect with us. We're here to help!
      </p>
    </motion.div>

    {/* UPDATED: Added max-w-6xl and mx-auto for better centering */}
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {contactMethods.map((method, index) => (
        <motion.div
          key={method.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          onMouseEnter={() => setSelectedMethod(index)}
          className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
          
          {/* Status Indicator */}
          {method.available && (
            <div className="absolute top-4 right-4 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Available</span>
            </div>
          )}

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${method.gradient} text-white group-hover:scale-110 transition-transform duration-300`}
              animate={{
                y: selectedMethod === index ? -5 : 0,
                rotate: selectedMethod === index ? 5 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <method.icon size={28} />
            </motion.div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
              {method.title}
            </h3>
            <p className="text-sm text-purple-600 font-medium mb-2">{method.subtitle}</p>
            <p className="text-gray-800 font-medium mb-2">{method.details}</p>
            <p className="text-gray-600 text-sm mb-6">{method.description}</p>

            {/* Action Button */}
            <motion.a
              href={method.href}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r ${method.gradient} text-white hover:shadow-lg transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {method.action}
              <FaArrowRight size={12} />
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* Interactive Contact Form */}
        <section id="contact-form" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4">Send us a message</h3>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Form Completion</span>
                      <span>{Math.round(getProgressWidth())}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${getProgressWidth()}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <input
                            {...register("name", { required: "Name is required" })}
                            placeholder="Your Name *"
                            className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          />
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm mt-2"
                            >
                              {errors.name.message}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <input
                            {...register("email", { 
                              required: "Email is required",
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address"
                              }
                            })}
                            placeholder="Your Email *"
                            className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          />
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm mt-2"
                            >
                              {errors.email.message}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <input
                            {...register("phone")}
                            placeholder="Phone Number (Optional)"
                            className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <select
                            {...register("service", { required: "Please select a service" })}
                            className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          >
                            <option value="">Select Service *</option>
                            <option value="web-development">Web Development</option>
                            <option value="mobile-app">Mobile App Development</option>
                            <option value="ui-ux-design">UI/UX Design</option>
                            <option value="cloud-devops">Cloud & DevOps</option>
                            <option value="ai-ml">AI/ML Solutions</option>
                            <option value="consulting">Consulting</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.service && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm mt-2"
                            >
                              {errors.service.message}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div>
                        <input
                          {...register("subject", { required: "Subject is required" })}
                          placeholder="Subject *"
                          className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                        {errors.subject && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-2"
                          >
                            {errors.subject.message}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <textarea
                          {...register("message", { required: "Message is required" })}
                          placeholder="Tell us about your project... *"
                          rows="5"
                          className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                        />
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-2"
                          >
                            {errors.message.message}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            {...register("newsletter")}
                            className="w-5 h-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <span className="text-sm text-gray-600">
                            Subscribe to our newsletter for updates and insights
                          </span>
                        </label>
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaPaperPlane />
                        Send Message
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
                      >
                        <FaCheckCircle className="text-3xl text-green-600" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <motion.button
                        onClick={() => setFormSubmitted(false)}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.05 }}
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Contact Info & Features */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Contact Info Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                        <HiPhone size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Phone</p>
                        <p className="text-gray-600">+91 7078496801</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white">
                        <HiMail size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-gray-600">hello@growingupp.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white">
                        <HiLocationMarker size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Address</p>
                        <p className="text-gray-600">Sector 62, Noida<br />Uttar Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Quick Stats */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold mb-6">Why Choose Us?</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-purple-600 mb-2">24hrs</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-purple-600 mb-2">98%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-purple-600 mb-2">10+</div>
                      <div className="text-sm text-gray-600">Projects Done</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-purple-600 mb-2">1+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions about our services and process
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-4"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 focus:outline-none"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-purple-600 text-xl font-bold"
                      >
                        +
                      </motion.div>
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - WHITE BACKGROUND WITH GOLDEN/GRAY THEME */}
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
                Don't wait any longer. Let's discuss your project and create something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black font-bold rounded-2xl hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <FaRocket />
                  Get Free Consultation
                </motion.a>
                <motion.a
                  href="https://wa.me/919876543210"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-yellow-400 text-yellow-600 font-bold rounded-2xl hover:bg-yellow-400 hover:text-black transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <FaWhatsapp />
                  WhatsApp Chat
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
