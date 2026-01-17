import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterest: "Medical Billing Services",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`, // Merge for backend
          email: formData.email,
          phone: formData.phone,
          company: "Home Page Demo Request", // Default mapping for backend
          serviceInterest: formData.serviceInterest,
          message: formData.message
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", serviceInterest: "Medical Billing Services", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3.5 md:px-5 md:py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/5 transition-all text-[#1D2B80] placeholder:text-gray-400 font-medium text-sm md:text-base";
  const labelClass = "block text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2 ml-1";

  return (
    <section id='contact-form' className="py-12 md:py-24 bg-white text-[#1D2B80] font-['Poppins'] relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-[-5%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#38B0E3]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#14B8A6]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* LEFT SIDE: Value Prop */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 mb-6 md:mb-8">
              {/* <Sparkles size={14} className="text-[#14B8A6]" /> */}
              <span className="text-[#14B8A6] text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">Scale Your Practice</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] md:leading-[0.95] mb-6 md:mb-8">
              Get A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#38B0E3]">Free Demo.</span>
            </h2>

            <p className="text-gray-500 text-base md:text-lg mb-8 md:mb-12 leading-relaxed max-w-md">
              Leave us a message and our RCM experts will show you exactly how we can increase your revenue by <span className="text-[#1D2B80] font-bold">up to 30%.</span>
            </p>

            <div className="space-y-4 md:space-y-6">
              {[
                "Customized Revenue Cycle Analysis",
                "Clean Claim Rate Optimization Demo",
                "Credentialing & Enrollment Comparison"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 md:gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] shrink-0">
                    <CheckCircle size={12} fill="currentColor" className="text-white" />
                  </div>
                  <span className="font-semibold text-sm md:text-base text-[#1D2B80]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 md:mt-12 pt-8 md:pt-12 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Direct Line</p>
                    <p className="text-lg md:text-xl font-bold flex items-center gap-2 font-['Poppins'] tracking-tight">
                        <Phone size={18} className="text-[#14B8A6]" /> 413-328-3913
                    </p>
                </div>
                <div>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Email Inquiry</p>
                    <p className="text-sm sm:text-base md:text-lg font-bold flex items-start gap-2 tracking-tighter break-all">
                        <Mail size={18} className="text-[#38B0E3] mt-1 shrink-0" /> info@setclaimssolutionsinc.com
                    </p>
                </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 md:p-12 rounded-[32px] md:rounded-[40px] bg-white shadow-2xl border border-gray-50 w-full">
            {status === "success" ? (
                <div className="text-center py-10">
                    <CheckCircle size={48} className="text-[#14B8A6] mx-auto mb-4" />
                    <h3 className="font-black text-xl md:text-2xl uppercase tracking-tighter text-[#1D2B80]">Demo Booked!</h3>
                    <p className="text-sm text-gray-500 mt-2">Our team will contact you within one business day.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {status === "error" && <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-bold flex items-center gap-2 border border-red-100"><AlertCircle size={14}/> Error sending request. Please check connection.</div>}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className={labelClass}>First Name *</label><input name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" placeholder="John" required className={inputClass} /></div>
                    <div><label className={labelClass}>Last Name *</label><input name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" placeholder="Doe" required className={inputClass} /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className={labelClass}>Work Email *</label><input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="john@clinic.com" required className={inputClass} /></div>
                    <div><label className={labelClass}>Phone *</label><input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="555-0199" required className={inputClass} /></div>
                  </div>
                  <div>
                    <label className={labelClass}>You Need Help With *</label>
                    <select name="serviceInterest" value={formData.serviceInterest} onChange={handleInputChange} required className={inputClass}>
                      <option value="Medical Billing">Medical Billing Services</option>
                      <option value="Credentialing">Credentialing & Enrollment</option>
                      <option value="Denial Management">Denial Management</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows="3" placeholder="Practice needs..." required className={`${inputClass} resize-none`} />
                  </div>
                  <button disabled={isSubmitting} type="submit" className="w-full bg-[#1D2B80] hover:bg-[#14B8A6] text-white py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3">
                    {isSubmitting ? "Transmitting..." : "Request Free Demo"}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;