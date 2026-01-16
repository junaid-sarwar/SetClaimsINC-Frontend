import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartPulse, Activity, Smile, UserRound, Baby, 
  Brain, Bone, Syringe, Eye, Microscope, 
  Stethoscope, Building2, Plus, ChevronDown, Sparkles 
} from 'lucide-react';

const Specialties = () => {
  // Full list of specialties based on your reference
  const allSpecialties = [
    { name: "Cardiology", icon: <HeartPulse /> },
    { name: "Chiropractic", icon: <Activity /> },
    { name: "Dental Billing", icon: <Smile /> },
    { name: "Dermatology", icon: <UserRound /> },
    { name: "Gynecology", icon: <Activity /> },
    { name: "Anesthesia", icon: <Syringe /> },
    { name: "Pediatrics", icon: <Baby /> },
    { name: "Radiology", icon: <Microscope /> },
    { name: "Neurology", icon: <Brain /> },
    { name: "Orthopedic", icon: <Bone /> },
    { name: "Physical Therapy", icon: <Activity /> },
    { name: "Internal Medicine", icon: <Stethoscope /> },
    { name: "Ophthalmology", icon: <Eye /> },
    { name: "Gastroenterology", icon: <Activity /> },
    { name: "Nephrology", icon: <Activity /> },
    { name: "Podiatry", icon: <Bone /> },
    { name: "Urology", icon: <Activity /> },
    { name: "Physician Billing", icon: <UserRound /> },
    { name: "Hospital Billing", icon: <Building2 /> },
    { name: "Urgent Care", icon: <Plus /> },
    { name: "Allergy & Immunology", icon: <Stethoscope /> },
    { name: "Mental Health", icon: <Brain /> },
    { name: "Pain Management", icon: <Activity /> },
  ];

  // State to manage how many items are shown
  const [visibleCount, setVisibleCount] = useState(8);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, allSpecialties.length));
  };

  return (
    <section className="py-24 bg-white text-[#0A0F1E] font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#14B8A6] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-4"
          >
            {/* <Sparkles size={14} /> */}
             Diverse Expertise
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D2B80] mb-6 tracking-tighter uppercase">
            Specialties <span className="text-[#14B8A6]">We Deal</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            SET CLAIMS SOLUTIONS INC provides elite Revenue Cycle Management Services for all major medical specialties. Select your field to see how we optimize your specific billing workflow.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {allSpecialties.slice(0, visibleCount).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
                whileHover={{ y: -8 }}
                className="p-6 md:p-8 rounded-[32px] border border-gray-100 bg-[#F8FAFC] hover:bg-white hover:border-[#14B8A6]/30 hover:shadow-2xl hover:shadow-[#14B8A6]/10 transition-all duration-300 group cursor-pointer text-left relative overflow-hidden"
              >
                {/* Subtle Gradient background on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#14B8A6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#14B8A6] mb-5 group-hover:bg-gradient-to-br group-hover:from-[#14B8A6] group-hover:to-[#38B0E3] group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                
                <h3 className="text-sm md:text-base font-bold text-[#1D2B80] group-hover:text-[#14B8A6] transition-colors leading-tight uppercase tracking-tight">
                  {item.name}
                </h3>
                <p className="text-[9px] text-gray-400 mt-2 font-bold tracking-[0.2em] uppercase">Specialized RCM</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {visibleCount < allSpecialties.length && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={showMore}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#1D2B80] text-white rounded-[20px] font-black text-xs tracking-[0.2em] hover:bg-gradient-to-r hover:from-[#14B8A6] hover:to-[#38B0E3] transition-all shadow-xl shadow-[#1D2B80]/20 uppercase"
          >
            Show All Specialties <ChevronDown size={18} />
          </motion.button>
        )}

      </div>
    </section>
  );
};

export default Specialties;