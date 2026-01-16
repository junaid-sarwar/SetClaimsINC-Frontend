import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, TrendingUp, Sparkles } from 'lucide-react';
import AboutImage from '../assets/images/our-story.png';

const AboutSetClaims = () => {
  const stats = [
    { label: "Years Experience", value: "20+", icon: <Award className="text-[#14B8A6]" /> },
    { label: "Happy Clients", value: "500+", icon: <Users className="text-[#38B0E3]" /> },
    { label: "Revenue Growth", value: "30%", icon: <TrendingUp className="text-[#14B8A6]" /> },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] text-[#0A0F1E] font-['Poppins'] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge updated to Flyer Teal */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20">
              {/* <Sparkles size={14} className="text-[#14B8A6]" /> */}
              <span className="text-[#14B8A6] text-xs font-bold tracking-widest uppercase italic">Our Story</span>
            </div>
            
            {/* Heading updated with Teal highlight */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D2B80] mb-8 leading-tight">
              About <span className="text-[#14B8A6]">SET CLAIMS</span> <br /> SOLUTIONS INC
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              SET CLAIMS SOLUTIONS INC is a premier medical billing company committed to providing integrated and customizable revenue cycle management services to healthcare providers across the USA.
            </p>
            
            <p className="text-gray-500 mb-10 leading-relaxed font-light">
              With a combined experience of more than 20 years in the medical billing industry, we focus on your practice's financial health so you can focus on patient health. We help healthcare organizations attain operational efficiency and channelize resources into delivering optimal care.
            </p>

            {/* KEY POINTS - Hover effects updated to Teal */}
            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100 group hover:border-[#14B8A6]/40 hover:shadow-md transition-all">
                  <div className="mb-3 transition-transform group-hover:scale-110">{stat.icon}</div>
                  <div className="text-2xl font-black text-[#1D2B80]">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Frame updated to Teal opacity */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#14B8A6]/20 rounded-[40px] hidden md:block" />
            
            {/* Main Image Container */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10 border-8 border-white bg-white">
              <img 
                src={AboutImage} 
                alt="Medical Professional working" 
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay Badge - Teal/Blue Identity */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#38B0E3] flex items-center justify-center text-white shrink-0 shadow-lg">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1D2B80]">Integrated RCM Systems</p>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-tighter">Optimizing financial outcomes daily.</p>
                </div>
              </div>
            </div>

            {/* Floating Accents fixed to Flyer Gradient */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#14B8A6] to-[#38B0E3] rounded-full blur-3xl opacity-20 -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSetClaims;