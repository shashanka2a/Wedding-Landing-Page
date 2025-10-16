"use client";
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-[#5A0B27] py-12 px-6 relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Diya Icons */}
        <div className="flex justify-center gap-8 mb-6">
          <span className="text-4xl">🪔</span>
          <span className="text-4xl">🪔</span>
          <span className="text-4xl">🪔</span>
        </div>

        {/* Sanskrit Mantra */}
        <div className="mb-6">
          <p className="text-[#D4AF37] mb-3 italic" style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.25rem' }}>
            ॐ सह नाववतु | सह नौ भुनक्तु | सह वीर्यं करवावहै
          </p>
          <p className="text-[#FAF4E8] opacity-70 text-sm">
            May we be protected together, may we be nourished together,<br />
            may we work together with great energy
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-24 bg-[#D4AF37] opacity-40" />
          <span className="text-[#D4AF37]">❖</span>
          <div className="h-px w-24 bg-[#D4AF37] opacity-40" />
        </div>

        {/* Family Message */}
        <motion.p
          className="text-[#FAF4E8] opacity-90 mb-6"
          style={{ fontFamily: 'Great Vibes, cursive', fontSize: '1.75rem' }}
          animate={{
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          With love from the families 💛
        </motion.p>

        {/* Floral Border */}
        <div className="flex justify-center gap-2 text-[#D4AF37] opacity-60">
          <span>❀</span>
          <span>❀</span>
          <span>❀</span>
          <span>❀</span>
          <span>❀</span>
        </div>

        {/* Copyright */}
        <p className="text-[#FAF4E8] opacity-40 text-sm mt-8">
          © 2025 Wedding of Sai Harika & Aravind
        </p>
      </motion.div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
    </footer>
  );
}
