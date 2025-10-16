"use client";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function EventDetails() {
  const events = [
    {
      title: 'Wedding Ceremony',
      time: '9:28 AM - 11:30 AM',
      dressCode: 'Traditional Indian Attire',
      emoji: '🪔',
      description: 'Join us for the sacred wedding ceremony'
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#FAF4E8]">
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
            <span className="text-[#D4AF37] text-2xl">❖</span>
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
          <h2 className="text-[#5A0B27]" style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2.5rem' }}>
            Event Details
          </h2>
        </motion.div>

        {/* Event Cards */}
        <div className="flex justify-center">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white border-2 border-[#D4AF37] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center border-b border-[#D4AF37]/20 pb-4">
                  <div className="text-5xl mb-3">{event.emoji}</div>
                  <CardTitle className="text-[#5A0B27]" style={{ fontFamily: 'DM Serif Display, serif' }}>
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 text-center space-y-3">
                  <p className="text-[#5A0B27] opacity-70 italic">
                    {event.description}
                  </p>
                  <div className="space-y-2 pt-2">
                    <p className="text-[#5A0B27]">
                      <span className="inline-block mr-2">⏰</span>
                      {event.time}
                    </p>
                    <p className="text-[#5A0B27]">
                      <span className="inline-block mr-2">👗</span>
                      {event.dressCode}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
