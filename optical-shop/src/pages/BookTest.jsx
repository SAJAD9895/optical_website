import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';

const BookTest = () => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">

        {/* Info Column */}
        <div className="lg:w-1/3">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[var(--color-primary)] uppercase tracking-widest text-xs font-semibold mb-2 block">Professional Care</span>
            <h1 className="text-4xl md:text-5xl font-light text-[var(--color-secondary)] mb-6">
              Book Eye Test
            </h1>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Comprehensive eye examinations by our expert optometrists using state-of-the-art diagnostic technology.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[var(--color-primary)]" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-secondary)]">Lens Cart Flagship Store</h4>
                  <p className="text-sm text-gray-500 mt-1">123 Luxury Avenue, Design District<br />New York, NY 10012</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                  <Clock className="text-[var(--color-primary)]" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-secondary)]">Opening Hours</h4>
                  <p className="text-sm text-gray-500 mt-1">Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form Column */}
        <div className="lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--color-surface)] p-8 md:p-12 rounded-sm border border-gray-100"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2"><Calendar size={14} /> Select Date</label>
                  <input type="date" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors text-gray-600" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2"><Clock size={14} /> Select Time</label>
                  <select className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors text-gray-600">
                    <option>10:00 AM</option>
                    <option>11:30 AM</option>
                    <option>02:00 PM</option>
                    <option>04:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Additional Notes (Optional)</label>
                <textarea rows="3" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none" placeholder="Any specific concerns?"></textarea>
              </div>

              <button type="submit" className="w-full bg-[var(--color-secondary)] text-white py-4 uppercase tracking-widest text-sm hover:bg-[var(--color-primary)] transition-colors duration-300 flex items-center justify-center gap-2">
                <CheckCircle2 size={18} /> Confirm Appointment
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookTest;
