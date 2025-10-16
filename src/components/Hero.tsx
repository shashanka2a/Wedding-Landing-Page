"use client";
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#5A0B27] to-[#7B113A]">
      {/* Gold Spark Particles Background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Ornamental Border */}
      <div className="absolute inset-4 border-2 border-[#D4AF37] opacity-40 rounded-lg" 
           style={{
             boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
           }}>
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#D4AF37]" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#D4AF37]" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#D4AF37]" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#D4AF37]" />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-3xl mx-auto px-6 py-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Om Symbol */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto">
            <text 
              x="50" 
              y="70" 
              fontSize="60" 
              textAnchor="middle" 
              fill="#D4AF37"
              fontFamily="serif"
            >
              ॐ
            </text>
          </svg>
        </motion.div>

        {/* Ivory Arch Frame with Mandala Watermark */}
        <div className="relative bg-[#FAF4E8] rounded-t-full pt-16 pb-12 px-8 md:px-16 shadow-2xl"
             style={{
               boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 0 100px rgba(212,175,55,0.1)'
             }}>
          {/* Mandala Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 overflow-hidden rounded-t-full">
            <svg width="400" height="400" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#5A0B27" strokeWidth="0.5"/>
              <circle cx="100" cy="100" r="60" fill="none" stroke="#5A0B27" strokeWidth="0.5"/>
              <circle cx="100" cy="100" r="40" fill="none" stroke="#5A0B27" strokeWidth="0.5"/>
              {[...Array(12)].map((_, i) => (
                <line 
                  key={i}
                  x1="100" 
                  y1="100" 
                  x2={100 + 80 * Math.cos((i * 30 * Math.PI) / 180)} 
                  y2={100 + 80 * Math.sin((i * 30 * Math.PI) / 180)}
                  stroke="#5A0B27"
                  strokeWidth="0.5"
                />
              ))}
            </svg>
          </div>

          {/* Bride's Parents Names */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-6"
          >
            <p className="text-[#5A0B27] mb-2" style={{ fontFamily: 'DM Serif Display, serif' }}>
              Mr. Gangaram & Mrs. Umalatha
            </p>
            <p className="text-[#5A0B27] opacity-80 italic">
              cordially invite you to the wedding
            </p>
          </motion.div>

          {/* Couple Names */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="my-8"
          >
            <h1 className="text-[#5A0B27] mb-4" style={{ fontFamily: 'Great Vibes, cursive', fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}>
              Dr. Sai Harika
            </h1>
            <div className="flex items-center justify-center gap-4 my-4">
              <div className="h-px w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37]">❖</span>
              <div className="h-px w-12 bg-[#D4AF37]" />
            </div>
            <h1 className="text-[#5A0B27]" style={{ fontFamily: 'Great Vibes, cursive', fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}>
              Aravind
            </h1>
          </motion.div>

          {/* Date & Time */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="border-t-2 border-b-2 border-[#D4AF37] py-6 my-8"
          >
            <p className="text-[#5A0B27] mb-2" style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.5rem' }}>
              Thursday, November 13
            </p>
            <p className="text-[#5A0B27] opacity-80">
              at 9:28 AM
            </p>
          </motion.div>

          {/* Venue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <p className="text-[#5A0B27]" style={{ fontFamily: 'DM Serif Display, serif' }}>
              Grr Convention Hall
            </p>
            <p className="text-[#5A0B27] opacity-80">
              Banswada
            </p>
          </motion.div>

          {/* Bottom Gold Accent */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
