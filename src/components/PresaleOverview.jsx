import React from 'react';
import { motion } from 'framer-motion';

const mockPresale = {
  phase: 3,
  price: 0.018,
  totalPhases: 9,
  sold: 1234567,
  cap: 5000000,
  endsIn: '10d 04h 22m',
};

export default function PresaleOverview({ onConnect }) {
  const progress = Math.min(100, Math.round((mockPresale.sold / mockPresale.cap) * 100));

  return (
    <section id="presale" className="relative bg-[#0B1E2D] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Public Presale</h2>
            <p className="mt-3 text-white/80">
              Secure early access to SPS tokens. Transparent phases, fixed allocations, and instant wallet delivery.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between text-sm text-white/80">
                <span>Phase {mockPresale.phase} / {mockPresale.totalPhases}</span>
                <span>Price: ${mockPresale.price.toFixed(3)}</span>
              </div>
              <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600" style={{ width: `${progress}%` }} />
              </div>
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Sold: {mockPresale.sold.toLocaleString()}</span>
                <span>Cap: {mockPresale.cap.toLocaleString()}</span>
                <span>Ends in: {mockPresale.endsIn}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['ETH', 'USDT', 'USDC', 'BNB', 'BUSD', 'Credit Card'].map((p) => (
                <span key={p} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
                  {p}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button onClick={onConnect} className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#0B1E2D] font-semibold shadow">
                Connect Wallet
              </button>
              <button className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 text-white border border-white/10">
                Buy with Crypto
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <h3 className="text-white font-semibold text-lg">Presale Stages</h3>
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className={`rounded-lg p-3 text-center border ${i + 1 <= mockPresale.phase ? 'bg-yellow-500/20 border-yellow-500/40' : 'bg-white/5 border-white/10'}`}>
                  <div className="text-xs text-white/60">Stage {i + 1}</div>
                  <div className="text-sm text-white font-semibold">${(0.012 + i * 0.002).toFixed(3)}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-white/80">
              <p>Accepted: ETH, USDT, USDC, BNB, BUSD. Credit Card via partner on-ramp.</p>
              <p className="mt-2">Placeholder: buyTokens() smart contract integration</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
