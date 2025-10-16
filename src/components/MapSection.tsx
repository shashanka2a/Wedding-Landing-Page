"use client";
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Button } from './ui/button';

export function MapSection() {
  const venueAddress = "Grr Convention Hall Banswada";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`;

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#FAF4E8] to-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <MapPin className="text-[#D4AF37]" size={24} />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
          <h2 className="text-[#5A0B27] mb-2" style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2.5rem' }}>
            Location
          </h2>
          <p className="text-[#5A0B27] opacity-70">
            Grr Convention Hall, Banswada
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-lg overflow-hidden shadow-2xl border-4 border-[#D4AF37] cursor-pointer hover:shadow-3xl transition-shadow duration-300"
          style={{
            boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3)'
          }}
          onClick={() => window.open(mapsUrl, '_blank')}
        >
          <div className="relative w-full h-[400px] bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2175385871914!2d77.8834!3d18.3788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDIyJzQzLjciTiA3N8KwNTMnMDAuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, pointerEvents: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Grr Convention Hall Location"
            />
            {/* Overlay hint */}
            <div className="absolute inset-0 bg-transparent hover:bg-[#D4AF37]/5 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <p className="text-[#5A0B27] text-sm flex items-center gap-2">
                  <MapPin size={16} />
                  Click to open in Google Maps
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Get Directions Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-[#E6C47B] to-[#C9A34E] text-[#5A0B27] hover:from-[#C9A34E] hover:to-[#B89340] transition-all duration-300 px-8 py-6 shadow-lg hover:shadow-xl"
          >
            <a 
              href={mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MapPin size={20} />
              Get Directions
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
