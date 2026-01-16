import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  FileBadge, 
  Stethoscope, 
  MonitorDot, 
  Eye, 
  Headset,
  Sparkles
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Billing Teams",
      desc: "We assign a dedicated team of medical billing experts tailored to your specialty. You get direct access to answer every query.",
      icon: <Users size={32} />
    },
    {
      title: "Certified Medical Coders",
      desc: "Our team of certified coders ensures every claim is accurate and optimized for the most effective revenue outcomes.",
      icon: <FileBadge size={32} />
    },
    {
      title: "Elite Credentialing",
      desc: "We provide quality provider credentialing at the most cost-effective rates in the market compared to our competitors.",
      icon: <Stethoscope size={32} />
    },
    {
      title: "Software Flexibility",
      desc: "Whether you use a specific software or deal with traditional paperwork, we can seamlessly integrate with any system in the market.",
      icon: <MonitorDot size={32} />
    },
    {
      title: "Total Transparency",
      desc: "Track every transaction and claim status in real-time. We provide custom reports to keep you in control of your financial health.",
      icon: <Eye size={32} />
    },
    {
      title: "24/7 Priority Support",
      desc: "Our priority is the satisfaction of both providers and patients. Our dedicated support team handles all queries with precision.",
      icon: <Headset size={32} />
    }
  ];

  return (
    <section className="py-24 bg-[#0A0F1E] text-white font-['Poppins'] relative overflow-hidden">
      
      {/* FLYER GRADIENT OVERLAYS - Matching the teal/blue waves from the flyer */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#14B8A6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[0%] left-[-5%] w-[400px] h-[400px] bg-[#38B0E3]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Wave SVG (Like the flyer) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500 L1000,1000 L0,1000 Z" fill="#14B8A6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-[#14B8A6] font-bold tracking-[0.3em] text-xs uppercase mb-4"
            >
              {/* <Sparkles size={16} /> */}
               The Set Claims Advantage
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95]"
            >
              Pioneering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#38B0E3]">Future of RCM.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-sm text-sm leading-relaxed border-l-2 border-[#14B8A6] pl-6"
          >
            We are healthcare innovators, problem solvers, and partners in your success, dedicated to transforming the way claims are processed.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[40px] bg-white/[0.03] border border-white/5 hover:border-[#14B8A6]/40 hover:bg-[#14B8A6]/5 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle light effect in corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#14B8A6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#14B8A6] to-[#38B0E3] flex items-center justify-center text-white mb-8 group-hover:scale-110 shadow-lg shadow-[#14B8A6]/20 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#14B8A6] transition-colors leading-tight uppercase tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Trust Signal - Updated for Flyer metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex flex-wrap justify-center gap-10 md:gap-20 py-10 border-t border-white/5"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-[#14B8A6] italic tracking-tighter">5-STAR</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Rated Service</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-[#38B0E3] italic tracking-tighter">24HRS</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Response Time</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white italic tracking-tighter">100%</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">HIPAA Compliant</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;