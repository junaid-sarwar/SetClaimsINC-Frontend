import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Activity, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 md:pt-48 pb-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge using Flyer Teal */}
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
            <span className="text-[#14B8A6] text-[10px] md:text-xs font-bold tracking-widest uppercase">The Gold Standard in RCM</span>
          </div>
          
          {/* Heading with Flyer Gradient (Teal to Blue) */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] md:leading-[0.95] mb-6 md:mb-8">
            We focus on <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#14B8A6] to-[#38B0E3]">the Claims.</span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-xl max-w-lg mb-8 md:mb-10 leading-relaxed font-light">
            End-to-end medical billing solutions that turn your "pending" claims into immediate practice revenue. Elite tech. Personal touch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            {/* Primary Button using Flyer Gradient */}
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#14B8A6] to-[#38B0E3] hover:opacity-90 px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg shadow-xl shadow-[#14B8A6]/20 transition-all flex justify-center items-center gap-3 group">
              Request Free Audit <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex -space-x-3 items-center ml-2 sm:ml-0">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0A0F1E] bg-gray-800 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user avatar" />
                </div>
              ))}
              <span className="pl-5 text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">500+ Providers</span>
            </div>
          </div>
        </motion.div>

        {/* Right Dashboard Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-[500px] lg:max-w-none mx-auto"
        >
          <div className="relative z-10 p-5 md:p-8 rounded-[24px] md:rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              {/* Activity icon in Teal */}
              <Activity className="text-[#14B8A6] w-4 h-4" />
            </div>
            
            <div className="space-y-6">
              <div className="h-24 md:h-32 flex items-end justify-between gap-2 md:gap-3">
                {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: 0.2 + (i*0.05), duration: 1 }}
                    viewport={{ once: true }}
                    key={i} 
                    /* Chart Bars using Flyer Gradient */
                    className="w-full bg-gradient-to-t from-[#14B8A6]/20 to-[#38B0E3] rounded-t-sm md:rounded-t-lg shadow-[0_0_15px_rgba(20,184,166,0.3)]" 
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/5 font-['Poppins']">
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">Clean Claim</p>
                  <p className="text-xl md:text-2xl font-bold">99.2%</p>
                </div>
                <div className="bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/5 font-['Poppins']">
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">Revenue Boost</p>
                  {/* Highlight text in Teal */}
                  <p className="text-xl md:text-2xl font-bold text-[#14B8A6]">+32%</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative background blur fixed to Flyer colors */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#14B8A6]/5 rounded-full blur-[80px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;