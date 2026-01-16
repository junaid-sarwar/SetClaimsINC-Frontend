import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, CheckCircle, 
  Clock, Star, Sparkles, ShieldCheck, 
  Linkedin, Twitter, Globe, ArrowRight 
} from 'lucide-react';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practice: "",
    specialty: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // This is where you will add your production API later
    // For now, it simulates a successful submission for your meeting
    try {
      setTimeout(() => {
        setSubmitStatus("success");
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: <Phone size={24} />,
      title: "Call Our Experts",
      details: ["413-328-3913", "281-317-1154"],
      sub: "Mon-Fri 9AM-6PM EST",
      color: "from-[#14B8A6] to-[#38B0E3]"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Inquiry",
      details: ["info@setclaimssolutionsinc.com"],
      sub: "We respond within 24 hours",
      color: "from-[#38B0E3] to-[#4F46E5]"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Headquarters",
      details: ["1749 Tourmaline CT", "Livermore, CA 94550"],
      sub: "United States",
      color: "from-[#1D2B80] to-[#14B8A6]"
    }
  ];

  const inputClass = "w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/5 transition-all text-[#1D2B80] placeholder:text-gray-400 font-medium";
  const labelClass = "block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2 ml-1";

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Poppins'] selection:bg-[#14B8A6] selection:text-white">
      <Navbar />

      {/* HERO SECTION - Dark/Tech vibe for impact */}
      <section className="relative pt-40 pb-24 bg-[#0A0F1E] overflow-hidden">
        {/* Animated Glow Accents */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#14B8A6]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[400px] h-[400px] bg-[#38B0E3]/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 mb-8"
          >
            {/* <Sparkles size={16} className="text-[#14B8A6]" /> */}
            <span className="text-[#14B8A6] text-[10px] font-black tracking-[0.3em] uppercase">Connect with Excellence</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9]"
          >
            Let's Start Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#38B0E3] to-[#4F46E5]">Transformation.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Our experts are ready to help you maximize revenue and streamline operations with cutting-edge AI technology.
          </motion.p>
        </div>
      </section>

      {/* MAIN INTERACTIVE SECTION */}
      <section className="relative -mt-16 pb-24 px-6 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: Trust & Stats (Based on Flyer) */}
            <div className="lg:col-span-4 space-y-6">
               <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[40px] bg-[#1D2B80] text-white shadow-2xl relative overflow-hidden"
               >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 italic uppercase tracking-tight">The Guarantee</h3>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#14B8A6]"><Star fill="currentColor" /></div>
                            <div>
                                <p className="font-bold text-lg leading-tight">5-Star Rated</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest">Industry Standard</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#38B0E3]"><Clock /></div>
                            <div>
                                <p className="font-bold text-lg leading-tight">24 Hours</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest">Guaranteed Response</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white"><ShieldCheck /></div>
                            <div>
                                <p className="font-bold text-lg leading-tight">100% Secure</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest">HIPAA Compliant</p>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#14B8A6]/20 rounded-full blur-3xl" />
               </motion.div>

               <div className="p-8 rounded-[40px] bg-white border border-gray-100 shadow-xl">
                    <h4 className="text-[#1D2B80] font-black uppercase tracking-widest text-xs mb-6">Quick Links</h4>
                    <div className="flex flex-wrap gap-3">
                        {["Credentialing", "AI Coding", "A/R Recovery", "Dashboards"].map((tag) => (
                            <span key={tag} className="px-4 py-2 bg-gray-50 rounded-full text-[11px] font-bold text-gray-500 border border-gray-100">{tag}</span>
                        ))}
                    </div>
               </div>
            </div>

            {/* RIGHT: High-End Form */}
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-16 rounded-[60px] shadow-[0_30px_80px_rgba(0,0,0,0.05)] border border-gray-50"
              >
                {submitStatus === "success" ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-[#14B8A6]/10 rounded-full flex items-center justify-center text-[#14B8A6] mx-auto mb-8">
                        <CheckCircle size={48} />
                    </div>
                    <h2 className="text-4xl font-black text-[#1D2B80] mb-4">Request Received.</h2>
                    <p className="text-gray-500 text-lg">An RCM consultant will contact you within 24 hours.</p>
                    <button 
                        onClick={() => setSubmitStatus(null)}
                        className="mt-10 text-[#14B8A6] font-bold uppercase tracking-widest text-sm flex items-center gap-2 mx-auto hover:gap-4 transition-all"
                    >
                        Send another message <ArrowRight size={16} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className={labelClass}>Full Name *</label>
                            <input name="name" onChange={handleInputChange} required type="text" placeholder="John Doe" className={inputClass} />
                        </div>
                        <div>
                            <label className={labelClass}>Email Address *</label>
                            <input name="email" onChange={handleInputChange} required type="email" placeholder="john@clinic.com" className={inputClass} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className={labelClass}>Phone Number *</label>
                            <input name="phone" onChange={handleInputChange} required type="tel" placeholder="(555) 000-0000" className={inputClass} />
                        </div>
                        <div>
                            <label className={labelClass}>Practice Name</label>
                            <input name="practice" onChange={handleInputChange} type="text" placeholder="Advanced Health Group" className={inputClass} />
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>Specialty Interest</label>
                        <select name="specialty" onChange={handleInputChange} className={inputClass}>
                            <option value="">Select a Specialty</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Orthopedic">Orthopedic</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="Internal Medicine">Internal Medicine</option>
                            <option value="Hospital Billing">Hospital Billing</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className={labelClass}>Message</label>
                        <textarea name="message" onChange={handleInputChange} rows="4" placeholder="Tell us how we can help your revenue cycle..." className={`${inputClass} resize-none`} />
                    </div>

                    <div className="pt-4">
                        <button 
                            disabled={isSubmitting}
                            className="w-full py-5 bg-gradient-to-r from-[#14B8A6] via-[#38B0E3] to-[#1D2B80] text-white rounded-[24px] font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-[#14B8A6]/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 flex items-center justify-center gap-3"
                        >
                            {isSubmitting ? "Processing..." : "Schedule Free Consultation"}
                            {!isSubmitting && <Send size={18} />}
                        </button>
                    </div>

                    <p className="text-center text-[10px] text-gray-400 font-medium uppercase tracking-[0.1em]">
                        Your data is encrypted and HIPAA compliant
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT METHOD CARDS */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
                {contactCards.map((card, i) => (
                    <motion.div 
                        whileHover={{ y: -10 }}
                        key={i} 
                        className="p-10 rounded-[40px] bg-[#F8FAFC] border border-gray-100 group transition-all duration-500"
                    >
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                            {card.icon}
                        </div>
                        <h4 className="text-xl font-extrabold text-[#1D2B80] mb-4 uppercase tracking-tight">{card.title}</h4>
                        <div className="space-y-1 mb-6">
                            {card.details.map((line, j) => (
                                <p key={j} className="text-[#1D2B80] font-bold text-sm break-all">{line}</p>
                            ))}
                        </div>
                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#14B8A6]">{card.sub}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;