import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Cardiologist, NJ Medical Group",
      text: "Switching to SET CLAIMS was the best decision for our practice. Our clean claim rate jumped to 99% in just two months. The AI technology is truly a game changer.",
      rating: 5
    },
    {
      name: "Marcus Thorne",
      role: "Practice Manager, Advanced Orthopedics",
      text: "The 24-hour response time isn't just a marketing slogan—it's reality. Their team is proactive, transparent, and has significantly reduced our A/R days.",
      rating: 5
    },
    {
      name: "Dr. Robert Chen",
      role: "Director, City Health Hospital",
      text: "Elite credentialing and software flexibility. They integrated with our custom EMR seamlessly. I can finally focus on patient care knowing our revenue is secured.",
      rating: 5
    }
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white text-[#1D2B80] font-['Poppins'] relative overflow-hidden">
      
      {/* Subtle Medical Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#14B8A6]/5 -skew-x-12 transform translate-x-20 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#38B0E3]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header - Navy & Teal focus */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 mb-6"
          >
            <Star size={14} className="text-[#14B8A6]" fill="currentColor" />
            <span className="text-[#14B8A6] text-xs font-bold tracking-[0.2em] uppercase">Trusted Healthcare Partners</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#1D2B80]">
            What Our <span className="text-[#14B8A6]">Clients Say.</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#14B8A6] to-[#38B0E3] mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative p-8 md:p-16 rounded-[40px] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(20,184,166,0.1)]"
            >
              {/* Decorative Quote Icon - Very subtle for light mode */}
              <Quote className="absolute top-8 right-8 text-[#14B8A6]/10 w-24 h-24 -z-10" />

              <div className="flex gap-1 mb-8">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-[#38B0E3]" fill="currentColor" />
                ))}
              </div>

              <p className="text-xl md:text-3xl font-medium leading-relaxed text-[#1D2B80] mb-12 italic">
                "{testimonials[index].text}"
              </p>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-t border-gray-100 pt-8">
                <div className="flex items-center gap-4">
                  {/* Initials Circle with Flyer Gradient */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#14B8A6] to-[#38B0E3] flex items-center justify-center font-bold text-2xl text-white shadow-lg shadow-[#14B8A6]/20">
                    {testimonials[index].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-[#1D2B80]">{testimonials[index].name}</h4>
                    <p className="text-sm text-[#14B8A6] font-semibold tracking-wide uppercase">{testimonials[index].role}</p>
                  </div>
                </div>

                {/* Navigation Buttons - Solid Medical Colors */}
                <div className="flex gap-4">
                  <button 
                    onClick={prev}
                    className="p-4 rounded-2xl bg-gray-50 text-[#1D2B80] hover:bg-[#14B8A6] hover:text-white transition-all duration-300 active:scale-95 shadow-sm"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={next}
                    className="p-4 rounded-2xl bg-[#1D2B80] text-white hover:bg-[#38B0E3] transition-all duration-300 active:scale-95 shadow-lg shadow-[#1D2B80]/20"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator - Using Flyer Colors */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${i === index ? 'w-10 bg-[#1D2B80]' : 'w-3 bg-gray-200'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;