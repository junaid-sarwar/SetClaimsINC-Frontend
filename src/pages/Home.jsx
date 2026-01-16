import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, TrendingUp } from 'lucide-react';

// Components
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import ServicesWeOffer from '../components/ServicesWeOffer';
import AboutSetClaims from '../components/AboutSetClaims';
import LoadPercent from '../components/LoadPercent';
import Specialties from '../components/Specialities';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: <Shield />, title: "HIPAA Compliant", desc: "Military-grade encryption for all patient PHI and billing records." },
    { icon: <TrendingUp />, title: "Maximized Yield", desc: "Aggressive A/R follow-up to ensure you get paid for every procedure." },
    { icon: <Zap />, title: "Real-time Access", desc: "Transparent reporting dashboard available to you 24/7/365." }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white font-['Poppins'] selection:bg-[#38B0E3] selection:text-white overflow-x-hidden relative">
      
      {/* GLOW OVERLAYS */}
      <div className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#38B0E3]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#1D2B80]/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none z-0" />

      <Navbar />
      
      <HeroSection />

      {/* VALUE CARDS SECTION */}
      <section className="py-20 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((card, idx) => (
              <motion.div 
                {...fadeInUp}
                key={idx} 
                className="group p-8 md:p-10 rounded-[20px] md:rounded-[24px] bg-[#111625] border border-white/5 hover:border-[#38B0E3]/40 transition-all duration-500"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#38B0E3]/10 flex items-center justify-center text-[#38B0E3] mb-6 md:mb-8">
                  {card.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <TrustStrip /> */}
      <ServicesWeOffer/>
      <AboutSetClaims/>
      <LoadPercent/>
      <Specialties/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactCTA/>
      <Footer/>

    </div>
  );
};

export default Home;