// src/components/sections/ReadyToGrow.jsx
export default function ReadyToGrow() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-white">Ready to </span>
            <span className="text-yellow-400">Grow Your Business?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Imagine your business getting tons of new customers. We've helped many 
            businesses scale. Let us help yours grow too!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/hero-image.jpg" 
              alt="Business Growth" 
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-yellow-400/20"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-black font-bold">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Scale Faster</h3>
              <p className="text-gray-400">Modern web & mobile solutions</p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-xl hover:bg-yellow-500 shadow-xl">
                Start Project
              </button>
              <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-xl hover:bg-yellow-400 hover:text-black">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
