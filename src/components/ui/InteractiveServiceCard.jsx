// src/components/ui/InteractiveServiceCard.jsx

import { motion } from "framer-motion";
import { useState } from "react";

export default function InteractiveServiceCard({ service, index, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(service)}
      className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl cursor-pointer"
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        z: 50
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Animated Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0`}
        animate={{
          opacity: isHovered ? 0.1 : 0
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Glowing Border */}
      <motion.div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient}`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 0.5 : 0
        }}
        style={{
          padding: "2px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude"
        }}
      />

      <div className="relative z-10 p-8 h-full">
        {/* Floating Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} text-white`}
          animate={{
            y: isHovered ? -10 : 0,
            rotateY: isHovered ? 15 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <service.Icon size={28} />
        </motion.div>

        {/* Content */}
        <motion.div
          animate={{
            y: isHovered ? -5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
            {service.shortDesc}
          </p>

          {/* Interactive Features */}
          <div className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                  x: isHovered ? 0 : -10
                }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 text-sm text-gray-400"
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                  animate={{
                    scale: isHovered ? [1, 1.3, 1] : 1,
                    opacity: isHovered ? [1, 0.5, 1] : 0.7
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: isHovered ? Infinity : 0 
                  }}
                />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Price Tag */}
          <motion.div
            className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-bold text-sm`}
            animate={{
              scale: isHovered ? 1.05 : 1,
              boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.3)" : "0 0px 0px rgba(0,0,0,0)"
            }}
            transition={{ duration: 0.3 }}
          >
            {service.price}
          </motion.div>
        </div>

        {/* Hover Particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                initial={{
                  x: Math.random() * 300,
                  y: Math.random() * 400,
                  opacity: 0
                }}
                animate={{
                  x: Math.random() * 300,
                  y: Math.random() * 400,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random()
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
