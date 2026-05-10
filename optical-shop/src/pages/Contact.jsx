import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[var(--color-background)] min-h-screen py-16"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-light mb-4 uppercase tracking-wider"
          >
            Get In <span className="font-semibold text-[var(--color-primary)]">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We're here to help you find the perfect pair. Reach out to us for inquiries, support, or to book an appointment with our specialists.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-primary)] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <h3 className="text-2xl font-medium mb-6 uppercase tracking-wide">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-50 p-3 rounded-full text-[var(--color-primary)]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Our Location</h4>
                    <p className="text-gray-500 mt-1">123 Visionary Avenue, Optics District<br />New York, NY 10012</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-50 p-3 rounded-full text-[var(--color-primary)]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone Number</h4>
                    <p className="text-gray-500 mt-1">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-50 p-3 rounded-full text-[var(--color-primary)]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email Address</h4>
                    <p className="text-gray-500 mt-1">hello@lenscart.com<br />support@lenscart.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-50 p-3 rounded-full text-[var(--color-primary)]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Business Hours</h4>
                    <p className="text-gray-500 mt-1">Mon - Fri: 9:00 AM - 8:00 PM<br />Sat - Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-full lg:w-2/3"
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-medium mb-8 uppercase tracking-wide">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-white transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-white transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-white transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-white transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-white transition-all resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button" 
                  className="w-full py-4 bg-[var(--color-primary)] text-white rounded-lg font-medium tracking-wide flex items-center justify-center space-x-2 hover:bg-[#7a8c4f] transition-colors"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
