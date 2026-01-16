import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, BarChart, Headset } from 'lucide-react';

const ProgressBar = ({ label, percentage, icon, delay }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <div className="text-[#38B0E3]">{icon}</div>
          <span className="text-sm font-semibold tracking-wider text-gray-300 uppercase">{label}</span>
        </div>
        <span className="text-xl font-black text-[#38B0E3]">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#1D2B80] to-[#38B0E3] shadow-[0_0_15px_rgba(56,176,227,0.4)] rounded-full"
        />
      </div>
    </div>
  );
};

const LoadPercent = () => {
  return (
    <section className="py-24 bg-[#0A0F1E] text-white font-['Poppins'] relative overflow-hidden">
      {/* Background Glow to maintain the high-tech theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#38B0E3]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-8">
              Get paid <span className="text-[#14B8A6]">faster</span> with <br /> 
              unmatched revenue <span className="italic font-light">accuracy.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Our quality medical billing services in New Jersey and across the USA ensure that your practice doesn't just survive—it thrives. We turn operational efficiency into actual financial growth.
            </p>
            
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-[#38B0E3]/20 flex items-center justify-center text-[#38B0E3]">
                <Zap fill="currentColor" size={24} className='text-[#14B8A6]' />
              </div>
              <div>
                <p className="font-bold text-white">Accelerated Revenue Cycle</p>
                <p className="text-sm text-gray-500">Average 30% increase in collections within 90 days.</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PROGRESS BARS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-8 md:p-12 rounded-[32px] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <ProgressBar 
              label="Medical Coding Accuracy" 
              percentage={99} 
              icon={<Target size={20} />} 
              delay={0.2}
            />
            <ProgressBar 
              label="Denial & Rejection Resolution" 
              percentage={99} 
              icon={<BarChart size={20} />} 
              delay={0.4}
            />
            <ProgressBar 
              label="Aging A/R Recovery" 
              percentage={95} 
              icon={<Zap size={20} />} 
              delay={0.6}
            />
            <ProgressBar 
              label="24/7 Priority Support" 
              percentage={100} 
              icon={<Headset size={20} />} 
              delay={0.8}
            />
            
            {/* Small decorative label */}
            <div className="absolute -top-4 -right-4 bg-[#14B8A6] text-white text-[10px] font-black px-4 py-2 rounded-lg rotate-12 shadow-lg tracking-tighter">
              AUDITED PERFORMANCE
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LoadPercent;