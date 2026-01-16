import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, FileText, UserCheck, ClipboardCheck, 
  CircleDollarSign, ShieldAlert, CreditCard, Headset, 
  ArrowRight, X, CheckCircle2, Sparkles, TrendingUp, BarChart3
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Medical Coding Services",
      shortDesc: "Accurate conversion of patient information into standardized codes for maximum reimbursement.",
      icon: <Stethoscope size={32} />,
      color: "#14B8A6",
      details: {
        intro: "Medical Coding refers to the identification of diagnoses, medical tests, procedures, and treatments in clinical papers. Afterward, the patient information from these records is converted into standardized codes used to charge both government and private payers.",
        offers: "CompleteCare Billing provides medical coding services to physicians, medical offices and facilities of all sizes. Our team includes AAPC certified experts who frequently increase client income by at least 10% through streamlined, compliant coding.",
        whyUs: [
          "HIPAA compliant (Complete Data Security)",
          "10-30% increment in monthly collection",
          "Save up to 45% on operating costs",
          "98% clean claim rate",
          "Access to AHIMA certified experts",
          "100% transparency with data processing"
        ],
        included: [
          "ICD-10-PM, CPT, HCPCS coding",
          "Chart Audits and Code Reviews",
          "HCC coding",
          "Payer specific coding requirements"
        ]
      }
    },
    {
      id: 2,
      title: "Eligibility Verification",
      shortDesc: "Real-time verification of patient insurance to prevent denials before the service is provided.",
      icon: <UserCheck size={32} />,
      color: "#38B0E3",
      details: {
        intro: "Verification of eligibility and benefits at the time of services plays the most important role in your revenue. We ensure coverage is active before the patient sees the provider.",
        offers: "We handle real-time verification, coverage analysis, and prior authorization management for all major commercial and government payers.",
        whyUs: ["Reduce front-end denials", "Improve patient experience", "Real-time coverage alerts", "Higher first-pass rates"],
        included: ["Insurance Plan Validation", "Co-pay & Deductible Tracking", "Referral Verification"]
      }
    },
    {
      id: 3,
      title: "Prior Authorization",
      shortDesc: "Managing complex authorization workflows to ensure medical necessity is approved.",
      icon: <ClipboardCheck size={32} />,
      color: "#14B8A6",
      details: {
        intro: "Prior authorization is a critical step in getting paid. We navigate the complex requirements of insurance companies to get your procedures approved.",
        offers: "Our dedicated team manages the entire auth lifecycle, from initial submission to follow-ups and final approval.",
        whyUs: ["Decrease surgery cancellations", "Reduce administrative burden", "Expert payer negotiation"],
        included: ["Auth Submission", "Follow-up", "Denial Resolution"]
      }
    },
    {
        id: 4,
        title: "Rejections & Denials",
        shortDesc: "Aggressive management of denied claims to recover every dollar owed to your practice.",
        icon: <ShieldAlert size={32} />,
        color: "#38B0E3",
        details: {
          intro: "Errors in medical coding or documentation lead to denials. We analyze rejection patterns to eliminate the root cause and recover lost revenue.",
          offers: "We provide an aggressive denial management strategy that focuses on rapid re-submission and clinical appeals.",
          whyUs: ["Improved first-pass rate", "Systematic follow-up", "Pattern analysis for prevention"],
          included: ["Denial Appeals", "Coding Corrections", "Payer Correspondence"]
        }
    },
    {
        id: 5,
        title: "A/R & Aging Recovery",
        shortDesc: "Systematic cleanup of old accounts receivable to secure your financial health.",
        icon: <TrendingUp size={32} />,
        color: "#14B8A6",
        details: {
          intro: "Our team specializes in recovering old AR. Failure to reimburse your work means no revenue for us—we are incentivized to get you paid.",
          offers: "We audit and follow up on all claims older than 30, 60, and 90 days to ensure zero revenue leakage.",
          whyUs: ["Reduce Days in AR", "Consistent cash flow", "Dedicated AR specialists"],
          included: ["Aged AR Analysis", "Systematic Follow-up", "Collection Strategies"]
        }
    },
    {
        id: 6,
        title: "Payment Posting",
        shortDesc: "Accurate daily posting of ERAs and manual payments to keep records precise.",
        icon: <CreditCard size={32} />,
        color: "#38B0E3",
        details: {
          intro: "Payment posting provides insight into a practice's daily revenue stream. We meticulously track adjustments, write-offs, and balances.",
          offers: "Electronic and manual posting services that ensure your financial dashboards are always up to date.",
          whyUs: ["99% posting accuracy", "Daily reconciliation", "Real-time visibility"],
          included: ["ERA/EOB Posting", "Secondary Billing", "Reconciliation Reports"]
        }
    },
    {
        id: 7,
        title: "Reporting & Financials",
        shortDesc: "Real-time dashboards and custom reports to monitor your practice performance.",
        icon: <BarChart3 size={32} />,
        color: "#14B8A6",
        details: {
          intro: "Our financial reporting gives you the insight needed to resolve inefficiencies and ensure claim integrity.",
          offers: "Customizable reporting packages tailored to your practice's specific KPIs and growth goals.",
          whyUs: ["360° business visibility", "Data-driven decisions", "Benchmarking"],
          included: ["Monthly Performance Reviews", "Custom Dashboards", "Compliance Audits"]
        }
    },
    {
        id: 8,
        title: "Patient Help Desk",
        shortDesc: "Exceptional customer support for billing queries, freeing your staff to focus on care.",
        icon: <Headset size={32} />,
        color: "#38B0E3",
        details: {
          intro: "We handle patient billing queries professionally, ensuring a positive experience for your patients.",
          offers: "Dedicated support lines that answer patient questions about statements and insurance coverage.",
          whyUs: ["Higher patient satisfaction", "Reduced office workload", "Faster statement payments"],
          included: ["Billing Inquiries", "Payment Plans", "Portal Support"]
        }
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white font-['Poppins'] selection:bg-[#14B8A6]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#14B8A6]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 mb-8"
          >
            {/* <Sparkles size={16} className="text-[#14B8A6]" /> */}
            <span className="text-[#14B8A6] text-xs font-bold tracking-[0.3em] uppercase">The Set Claims Standard</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.95]">
            Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#38B0E3]">RCM Solutions.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            We offer integrated and customizable medical billing services designed to maximize your practice revenue while reducing administrative burden.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedService(service)}
              className="p-8 rounded-[40px] bg-white/[0.03] border border-white/5 hover:border-[#14B8A6]/40 hover:bg-[#14B8A6]/5 transition-all duration-500 group cursor-pointer relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#14B8A6] to-[#38B0E3] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight uppercase tracking-tight group-hover:text-[#14B8A6] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.shortDesc}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#14B8A6]">
                View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL SYSTEM */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-[#0A0F1E]/90 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white text-[#0A0F1E] rounded-[40px] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-10 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#38B0E3] flex items-center justify-center text-white shadow-lg">
                    {selectedService.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#1D2B80]">
                    {selectedService.title}
                  </h2>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Col: Info */}
                  <div className="space-y-8">
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#14B8A6] mb-4">The Solution</h4>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {selectedService.details.intro}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#38B0E3] mb-4">Our Approach</h4>
                        <p className="text-gray-500 leading-relaxed font-light">
                            {selectedService.details.offers}
                        </p>
                    </div>
                  </div>

                  {/* Right Col: Lists */}
                  <div className="space-y-10">
                    <div className="bg-[#14B8A6]/5 p-8 rounded-[32px] border border-[#14B8A6]/10">
                        <h4 className="text-sm font-bold text-[#1D2B80] mb-6 flex items-center gap-2">
                             Why Choose Us <Sparkles size={16} className="text-[#14B8A6]" />
                        </h4>
                        <div className="grid gap-3">
                            {selectedService.details.whyUs.map((point, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-[#14B8A6] shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-gray-700">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-[#1D2B80] mb-6 px-2">Services Included</h4>
                        <div className="flex flex-wrap gap-2">
                            {selectedService.details.included.map((item, i) => (
                                <span key={i} className="px-4 py-2 rounded-full bg-gray-100 text-[11px] font-bold uppercase tracking-wider text-gray-500 border border-gray-200">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-8 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                 <p className="text-sm font-medium text-gray-500">Ready to optimize your practice revenue?</p>
                 <button className="w-full sm:w-auto px-10 py-4 bg-[#1D2B80] text-white rounded-2xl font-bold hover:bg-[#14B8A6] transition-all shadow-lg shadow-navy/20 active:scale-95">
                    Schedule Free Consultation
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Services;