import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const properties = [
  {
    id: 'prop-1',
    title: 'Skyline Residences, Dubai',
    location: 'Dubai, UAE',
    yield: 12.4,
    price: 1.2,
    image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'prop-2',
    title: 'SoMa Tech Lofts',
    location: 'San Francisco, USA',
    yield: 9.8,
    price: 0.8,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'prop-3',
    title: 'Shibuya Micro-Apartments',
    location: 'Tokyo, Japan',
    yield: 10.5,
    price: 0.6,
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function MarketplacePreview() {
  return (
    <section id="marketplace" className="bg-[#0B1E2D] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Marketplace Preview</h2>
            <p className="mt-2 text-white/80">Discover tokenized properties across the globe.</p>
          </div>
          <a href="#marketplace" className="hidden sm:inline-flex text-yellow-400 hover:text-yellow-300">Explore All</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E2D] via-transparent to-transparent opacity-70 pointer-events-none" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-white/70 text-sm">{p.location}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-white/80">Yield: <span className="text-yellow-400 font-semibold">{p.yield}%</span></span>
                  <span className="text-sm text-white/80">From <span className="text-yellow-400 font-semibold">{p.price} SPS</span></span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <button className="flex-1 inline-flex justify-center items-center px-4 py-2 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#0B1E2D] font-semibold">
                    Buy Token Shares
                  </button>
                  <a href="#" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm">
                    <ExternalLink className="w-4 h-4" /> View on chain
                  </a>
                </div>
                <div className="mt-3 text-xs text-white/60">3D model viewer placeholder</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
