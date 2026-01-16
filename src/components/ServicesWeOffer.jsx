import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  FileText, 
  UserCheck, 
  ClipboardCheck, 
  CircleDollarSign, // Fixed name
  ShieldAlert, 
  CreditCard, 
  Headset,
  ChevronRight
} from 'lucide-react';

const ServicesWeOffer = () => {
  const services = [
    { title: "Medical Coding Services", icon: <Stethoscope size={28} />, link: "#" },
    { title: "Medical Billing Services", icon: <FileText size={28} />, link: "#" },
    { title: "Insurance Verification", icon: <UserCheck size={28} />, link: "#" },
    { title: "Prior Authorization", icon: <ClipboardCheck size={28} />, link: "#" },
    { title: "Account Receivable", icon: <CircleDollarSign size={28} />, link: "#" }, // Fixed here
    { title: "Denial Management", icon: <ShieldAlert size={28} />, link: "#" },
    { title: "Payment Posting", icon: <CreditCard size={28} />, link: "#" },
    { title: "Patient Help Desk", icon: <Headset size={28} />, link: "#" },
  ];

  return (
    <section className="py-24 bg-white text-[#0A0F1E] font-['Poppins'] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-[#38B0E3]" />
            <span className="text-[#38B0E3] font-bold tracking-[0.2em] text-xs uppercase">Our Expertise</span>
            <div className="h-[1px] w-12 bg-[#38B0E3]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#1D2B80] mb-8 leading-tight"
          >
            Medical Billing Services <span className="text-[#14B8A6]">We Offer</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            SET CLAIMS delivers integrated and customizable revenue cycle management services to help healthcare organizations manage patients effectively. We handle your revenue cycle so you can focus on delivering optimal healthcare.
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-2xl hover:shadow-[#38B0E3]/10 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Decorative background circle on hover */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#38B0E3]/5 rounded-full group-hover:scale-[3] transition-transform duration-700 pointer-events-none" />

              <div className="relative z-10 text-[#14B8A6] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-[#1D2B80] mb-4 leading-snug group-hover:text-[#38B0E3] transition-colors">
                  {service.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 group-hover:text-[#1D2B80] transition-colors uppercase">
                  Explore <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-10 rounded-[40px] bg-gradient-to-r from-[#1D2B80] to-[#14B8A6] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
        >
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">Ready to optimize your revenue cycle?</h4>
            <p className="text-gray-400 font-light">Join 500+ practices using SET CLAIMS for faster payouts.</p>
          </div>
          <button className="bg-[#38B0E3] hover:bg-white hover:text-[#1D2B80] px-10 py-4 rounded-full font-bold transition-all whitespace-nowrap">
            <a href="#contact-form">Schedule a Demo</a>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesWeOffer;