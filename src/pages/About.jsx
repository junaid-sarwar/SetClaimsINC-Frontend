import React from 'react';
import { motion } from 'framer-motion';
import { 
  Link 
} from 'react-router-dom';
import { 
  ChevronRight, 
  Target, 
  Eye, 
  Award, 
  Users, 
  ShieldCheck, 
  Cpu, 
  HeartPulse,
  Home as HomeIcon
} from 'lucide-react';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const coreValues = [
    {
      title: "Dedicated Team",
      desc: "We hire a dedicated team of expert medical billers for each client. You get direct access to professionals who handle your specific specialty.",
      icon: <Users className="text-[#14B8A6]" size={28} />
    },
    {
      title: "Software Flexibility",
      desc: "Our systems integrate with any billing software in the market. We adapt to your workflow, whether it's digital or traditional paperwork.",
      icon: <Cpu className="text-[#38B0E3]" size={28} />
    },
    {
      title: "Transaction Transparency",
      desc: "Real-time visibility into your claims and financials. We believe in 100% transparency with custom reporting available on demand.",
      icon: <Eye className="text-[#14B8A6]" size={28} />
    },
    {
      title: "Cost Efficiency",
      desc: "Elite RCM services at the most competitive rates. We maximize your ROI by eliminating revenue leakage and reducing operational costs.",
      icon: <Award className="text-[#38B0E3]" size={28} />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Poppins'] selection:bg-[#14B8A6] selection:text-white">
      <Navbar />

      {/* PAGE HEADER / BREADCRUMBS */}
      <section className="relative pt-40 pb-20 bg-[#0A0F1E] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#14B8A6_1px,transparent_1px),linear-gradient(to_bottom,#14B8A6_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6"
          >
            <Link to="/" className="hover:text-[#38B0E3] flex items-center gap-1 transition-colors">
                <HomeIcon size={12} /> Home
            </Link>
            <ChevronRight size={10} />
            <span className="text-[#14B8A6]">About Us</span>
          </motion.nav>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#38B0E3]">Legacy.</span>
          </motion.h1>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="w-16 h-1.5 bg-[#14B8A6] mb-8 rounded-full" />
              <h2 className="text-4xl font-black text-[#1D2B80] uppercase tracking-tight mb-8 leading-[1.1]">
                Pioneering the Future of <br />
                <span className="text-[#14B8A6]">Healthcare Solutions.</span>
              </h2>
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
                <p>
                  <span className="font-bold text-[#1D2B80]">SET CLAIMS SOLUTIONS INC</span> is a healthcare IT powerhouse committed to providing integrated Credentialing and Complete Medical Billing Services across the USA.
                </p>
                <p className="font-light">
                  With over <span className="text-[#38B0E3] font-bold">20 years of collective experience</span>, we empower healthcare organizations to focus on what matters most—patient care—while we handle the intricate financial health of the practice.
                </p>
                <p className="text-sm border-l-4 border-[#14B8A6] pl-6 italic bg-gray-50 py-4 rounded-r-xl">
                  "We help you attain operational efficiency and channelize your efforts into delivering optimal healthcare."
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="rounded-[60px] overflow-hidden border-8 border-gray-50 shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
                  alt="Medical team" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D2B80]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#38B0E3]/10 rounded-full blur-3xl" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#14B8A6]/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION - FROM FLYER */}
      <section className="py-24 bg-[#0A0F1E] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <motion.div 
              {...fadeInUp}
              className="p-12 rounded-[50px] bg-white/[0.03] border border-white/5 relative group hover:border-[#14B8A6]/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] mb-8 group-hover:scale-110 transition-transform">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Our <span className="text-[#14B8A6]">Mission.</span></h3>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                To revolutionize healthcare claims processing through cutting-edge AI technology, empowering healthcare providers to focus on what matters most — delivering exceptional patient care.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              {...fadeInUp}
              className="p-12 rounded-[50px] bg-white/[0.03] border border-white/5 relative group hover:border-[#38B0E3]/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#38B0E3]/10 flex items-center justify-center text-[#38B0E3] mb-8 group-hover:scale-110 transition-transform">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Our <span className="text-[#38B0E3]">Vision.</span></h3>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                To be the global leader in AI-powered healthcare technology, creating a world where administrative complexities never compromise the quality of patient care.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CORE VALUES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#1D2B80] uppercase tracking-tighter mb-4">Why Choose <span className="text-[#14B8A6]">Us?</span></h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#14B8A6] to-[#38B0E3] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[40px] border border-gray-100 bg-white hover:shadow-2xl hover:shadow-[#14B8A6]/5 transition-all duration-500"
              >
                <div className="mb-6">{val.icon}</div>
                <h4 className="text-xl font-extrabold text-[#1D2B80] mb-4 uppercase tracking-tight">{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-[60px] bg-gradient-to-br from-[#1D2B80] to-[#0A0F1E] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
          >
             {/* Abstract background graphics */}
             <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                 <HeartPulse size={400} className="absolute -bottom-20 -right-20" />
             </div>

             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                Ready for cost effective <br />
                <span className="text-[#14B8A6]">Medical Billing?</span>
             </h2>
             <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-light">
                We do not compromise on quality. We provide custom, integrated solutions for every billing need. Let's transform your practice today.
             </p>
             <Link to="/contact">
                <button className="px-12 py-5 bg-[#14B8A6] hover:bg-white hover:text-[#1D2B80] text-white rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-[#14B8A6]/20 active:scale-95">
                    Contact Us Today
                </button>
             </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;