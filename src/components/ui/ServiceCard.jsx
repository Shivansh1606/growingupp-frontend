// src/components/ui/ServiceCard.jsx
import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function ServiceCard({ Icon, title, description, index, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden bg-blue- border-2 border-yellow-400/30 rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:border-yellow-400`}
      style={{
        boxShadow: featured 
          ? '0 25px 50px -12px rgba(59, 130, 246, 0.25)' 
          : '0 4px 20px -4px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Background Gradient for non-featured cards */}
      {!featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      )}
      
      {/* Floating Orb Effect */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="relative z-10">
        {/* Icon */}
        <motion.div 
          className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl ${
            featured 
              ? 'bg-white/20 backdrop-blur-sm text-white' 
              : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white group-hover:scale-110'
          } transition-all duration-300`}
          whileHover={{ rotate: 5 }}
        >
          <Icon size={28} />
        </motion.div>

        {/* Content */}
        <h3 className={`text-2xl font-bold mb-4 ${featured ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h3>
        
        <p className={`leading-relaxed mb-6 ${
          featured ? 'text-white/90' : 'text-gray-600'
        }`}>
          {description}
        </p>

        {/* CTA */}
        <motion.div 
          className={`flex items-center gap-2 font-semibold ${
            featured ? 'text-white' : 'text-blue-600'
          }`}
          whileHover={{ x: 4 }}
        >
          <span>Learn More</span>
          <HiArrowTopRightOnSquare className="text-lg" />
        </motion.div>

        {/* Border Glow Effect */}
        <div className={`absolute inset-0 rounded-3xl ${
          featured 
            ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600'
        } opacity-0 group-hover:opacity-20 -z-10 blur transition-all duration-500`}></div>
      </div>
    </motion.div>
  );
}
