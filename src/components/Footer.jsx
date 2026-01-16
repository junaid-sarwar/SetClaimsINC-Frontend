import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Globe, 
  ShieldCheck, 
  ArrowRight, 
  HeartPulse
} from 'lucide-react';

// Ensure your logo path is correct
import Logo from '../assets/logos/logo.jpeg'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0F1E] text-white pt-20 pb-10 relative overflow-hidden font-['Poppins']">
      
      {/* Subtle Flyer Gradients - Maintaining that Teal/Blue identity */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#14B8A6]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#38B0E3]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* TOP SECTION: Branding & Navigation */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          <div className="lg:col-span-4">
            {/* LOGO CONTAINER: Styled as a Corporate Seal */}
            <div className="mb-8">
               <div className="inline-block p-2 bg-white rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/10">
                  <img 
                    src={Logo} 
                    alt="Set Claims Solutions Logo" 
                    className="h-12 w-auto object-contain rounded-xl" 
                  />
               </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm font-light">
              Pioneering the future of healthcare through AI-powered Revenue Cycle Management. We turn administrative complexity into practice growth.
            </p>
            
            {/* <div className="flex gap-4">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#14B8A6] hover:bg-[#14B8A6]/10 hover:border-[#14B8A6]/30 transition-all duration-500">
                  <Icon size={20} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links Sections */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#14B8A6] mb-8">Expertise</h4>
            <ul className="space-y-4 text-[13px] text-gray-400 font-medium tracking-wide">
              <li><a href="#" className="hover:text-white transition-colors">Medical Billing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medical Coding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Credentialing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">A/R Recovery</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#38B0E3] mb-8">Resources</h4>
            <ul className="space-y-4 text-[13px] text-gray-400 font-medium tracking-wide">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Specialties</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HIPAA Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Investor/Newsletter Section */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-white mb-8">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-6 font-light">Get the latest RCM insights and practice performance reports.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:border-[#14B8A6] transition-all placeholder:text-gray-600 text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 w-12 bg-gradient-to-br from-[#14B8A6] to-[#38B0E3] text-white rounded-xl flex items-center justify-center hover:scale-105 transition-all shadow-lg shadow-[#14B8A6]/20">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Minimal Contact Strip */}
        <div className="grid md:grid-cols-3 gap-8 py-12 border-b border-white/5">
            <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#14B8A6] group-hover:bg-[#14B8A6] group-hover:text-white transition-all">
                    <Phone size={18} />
                </div>
                <p className="text-sm font-bold tracking-tight">413-328-3913</p>
            </div>
            <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#38B0E3] group-hover:bg-[#38B0E3] group-hover:text-white transition-all">
                    <Mail size={18} />
                </div>
                <p className="text-sm font-bold tracking-tight truncate">info@setclaimssolutionsinc.com</p>
            </div>
            <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#0A0F1E] transition-all">
                    <MapPin size={18} />
                </div>
                <p className="text-sm font-bold tracking-tight italic">Livermore, CA 94550</p>
            </div>
        </div>

        {/* BOTTOM SECTION: Trust & Legal */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[10px] font-bold text-gray-600 tracking-[0.3em] uppercase">
              © {currentYear} SET CLAIMS SOLUTIONS INC.
            </p>
            <div className="flex gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest italic">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/5">
             <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#14B8A6]" />
                <span className="text-[9px] font-black tracking-[0.2em] uppercase opacity-70">HIPAA Compliant</span>
             </div>
             <div className="w-[1px] h-3 bg-white/10" />
             <div className="flex items-center gap-2">
                <HeartPulse size={14} className="text-[#38B0E3]" />
                <span className="text-[9px] font-black tracking-[0.2em] uppercase opacity-70">Secure RCM</span>
             </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;