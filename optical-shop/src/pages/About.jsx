import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Eye, HeartHandshake, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Eye,
    title: 'Precision First',
    text: 'Every recommendation begins with clear vision needs, face fit, and everyday comfort.',
  },
  {
    icon: Sparkles,
    title: 'Curated Style',
    text: 'Our collections balance timeless frames, premium materials, and modern design.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal Care',
    text: 'From eye tests to aftercare, our team keeps the experience calm and considered.',
  },
];

const stats = [
  { value: '12+', label: 'Years of optical care' },
  { value: '8k+', label: 'Customers styled' },
  { value: '150+', label: 'Premium frame designs' },
];

const About = () => {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <section className="relative min-h-[72vh] flex items-center overflow-hidden bg-[var(--color-secondary)] text-white">
        <img
          src="/hero.png"
          alt="Lens Cart eyewear showroom"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-24">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold mb-5 block"
          >
            About Lens Cart
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light max-w-4xl leading-tight mb-8"
          >
            Eyewear chosen with <span className="italic text-[var(--color-primary)]">clarity</span>, crafted for everyday elegance.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/75 max-w-2xl text-lg leading-relaxed"
          >
            We bring refined frame curation, accurate eye care, and thoughtful guidance together so every pair feels personal from the first fitting.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[var(--color-surface)] overflow-hidden">
              <img src="/women.png" alt="Premium eyewear fitting" className="w-full h-full object-contain p-10" />
            </div>
            <div className="absolute -bottom-8 right-6 md:right-10 bg-[var(--color-secondary)] text-white p-6 max-w-xs">
              <Award className="text-[var(--color-primary)] mb-4" size={28} />
              <p className="text-sm leading-relaxed text-white/75">
                Trusted optical styling with premium frames and careful aftercare.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-[var(--color-primary-dark)] uppercase tracking-widest text-sm font-semibold mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Built for people who want their glasses to feel as good as they look.
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-5">
              Lens Cart began with a simple idea: buying eyewear should be easier, warmer, and more precise. We pair optical expertise with a carefully edited selection of frames so customers can move quickly from uncertainty to confidence.
            </p>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-8">
              Whether you are booking an eye test, exploring luxury brands, or trying frames virtually, our focus stays the same: clear guidance, better fit, and eyewear that suits your life.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-7 py-4 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-all duration-300 uppercase tracking-widest text-sm rounded-sm"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] py-16">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item) => (
            <div key={item.label} className="border-l-2 border-[var(--color-primary)] pl-6">
              <p className="text-4xl md:text-5xl font-light mb-2">{item.value}</p>
              <p className="text-sm uppercase tracking-widest text-[var(--color-text-light)]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--color-secondary)] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-14">
            <span className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold mb-4 block">
              What Guides Us
            </span>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              A calmer way to find the right frame.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-8"
              >
                <Icon className="text-[var(--color-primary)] mb-8" size={34} />
                <h3 className="text-2xl font-light mb-4">{title}</h3>
                <p className="text-white/60 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-[var(--color-primary-dark)] uppercase tracking-widest text-sm font-semibold mb-4 block">
              Visit Lens Cart
            </span>
            <h2 className="text-4xl md:text-5xl font-light max-w-2xl">
              Ready for a sharper, more personal eyewear experience?
            </h2>
          </div>
          <Link
            to="/book-test"
            className="self-start md:self-center px-8 py-4 bg-[var(--color-secondary)] text-white hover:bg-[var(--color-primary-dark)] transition-all duration-300 uppercase tracking-widest text-sm rounded-sm"
          >
            Book Eye Test
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
