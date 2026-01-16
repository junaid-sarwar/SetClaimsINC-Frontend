import React from 'react';

const TrustStrip = () => {
  const partners = ["MEDICARE", "HEALTHCARE.gov", "BLUE CROSS", "AETNA", "CIGNA"];

  return (
    <section className="border-t border-white/5 py-12 bg-[#080C17]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap justify-center md:justify-between items-center opacity-30 grayscale gap-8 md:gap-12 text-center">
        {partners.map((text) => (
          <span key={text} className="font-extrabold text-lg md:text-2xl tracking-tighter italic whitespace-nowrap">
            {text}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;