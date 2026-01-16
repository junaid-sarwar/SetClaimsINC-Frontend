import React from 'react';
import { Link } from 'react-router-dom';
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

// Path to your logo
import Logo from '../assets/logos/logo.jpeg'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0F1E] text-white pt-20 pb-10 relative overflow-hidden font-['Poppins']">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#14B8A6]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#38B0E3]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          <div className="lg:col-span-4">
            <div className="mb-8">
               <div className="inline-block p-2 bg-white rounded-2xl shadow-xl">
                  <img 
                    src={Logo} 
                    alt="Set Claims Solutions Logo" 
                    className="h-12 w-auto object-contain rounded-xl" 
                  />
               </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm font-light">
              Pioneering the future of healthcare through AI-powered Revenue Cycle Management. Transforming complexity into practice growth.
            </p>
            
            {/* <div className="flex gap-4">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#14B8A6] hover:bg-[#14B8A6]/10 transition-all duration-500">
                  <Icon size={20} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Services Section - Updated Header and Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#14B8A6] mb-8 text-nowrap">Our Services</h4>
            <ul className="space-y-4 text-[13px] text-gray-400 font-medium tracking-wide">
              {/* Passing state lets the Services page know which modal to open */}
              <li><Link to="/services" state={{ openId: 1 }} className="hover:text-[#14B8A6] transition-colors">Medical Coding</Link></li>
              <li><Link to="/services" state={{ openId: 2 }} className="hover:text-[#14B8A6] transition-colors">Eligibility</Link></li>
              <li><Link to="/services" state={{ openId: 3 }} className="hover:text-[#14B8A6] transition-colors">Prior Auth</Link></li>
              <li><Link to="/services" state={{ openId: 5 }} className="hover:text-[#14B8A6] transition-colors">A/R Recovery</Link></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#38B0E3] mb-8 text-nowrap">Quick Links</h4>
            <ul className="space-y-4 text-[13px] text-gray-400 font-medium tracking-wide">
              <li><Link to="/" className="hover:text-[#38B0E3] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#38B0E3] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#38B0E3] transition-colors">Contact Us</Link></li>
              <li><Link to="/services" className="hover:text-[#38B0E3] transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Investor Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-white mb-8">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-6 font-light">Get the latest RCM insights and reports.</p>
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

        {/* MIDDLE SECTION: Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 py-12 border-b border-white/5">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#14B8A6]">
                    <Phone size={18} />
                </div>
                <p className="text-sm font-bold tracking-tight">413-328-3913</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#38B0E3]">
                    <Mail size={18} />
                </div>
                <p className="text-sm font-bold tracking-tight truncate">info@setclaimssolutionsinc.com</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500">
                    <MapPin size={18} />
                </div>
                <p className="text-sm font-bold tracking-tight">Livermore, CA 94550</p>
            </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-gray-600 tracking-[0.3em] uppercase text-center md:text-left">
            © {currentYear} SET CLAIMS SOLUTIONS INC.
          </p>

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