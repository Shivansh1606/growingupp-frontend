// src/components/sections/Hero.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const dynamicTexts = ["Grow Faster", "Web Solutions", "Mobile Apps", "Cloud Ready", "AI Powered"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-gray-100"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Centered Text Content */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-yellow-400/20 border-2 border-yellow-400/50 text-yellow-400 text-sm font-semibold">
            Ready to Grow With Us
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            We Help You{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentText}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="text-yellow-400 inline-block"
              >
                {dynamicTexts[currentText]}
              </motion.span>
            </AnimatePresence>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Imagine your business getting tons of new customers. We build powerful digital products that help your business grow faster.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-xl bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-500 shadow-xl transition-all duration-300">
              Start Your Project
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-yellow-400 text-yellow-400 font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
