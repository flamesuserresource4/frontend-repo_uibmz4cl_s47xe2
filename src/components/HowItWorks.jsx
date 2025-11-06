import React from 'react';
import { motion } from 'framer-motion';
import { Home, Coins, Shield, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Home,
    title: 'Real Assets Sourced',
    desc: 'Institutional-grade residential and commercial properties undergo due diligence and valuation.',
  },
  {
    icon: Shield,
    title: 'Compliance & Custody',
    desc: 'SPV structuring, KYC/AML readiness, and third‑party custody keep investor rights protected.',
  },
  {
    icon: Coins,
    title: 'On‑Chain Tokenization',
    desc: 'Property value is fractionalized into SPS‑backed tokens representing economic rights.',
  },
  {
    icon: TrendingUp,
    title: 'Invest & Earn',
    desc: 'Buy token shares, trade on secondary markets, and receive rental yield distributions.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#0B1E2D] py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How Tokenized Real Estate Works</h2>
          <p className="mt-2 text-white/80">
            We combine real‑world property fundamentals with programmable on‑chain ownership for global, liquid access.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 text-[#0B1E2D] flex items-center justify-center">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
