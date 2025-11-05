import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-[#0B1E2D] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E2D]/70 via-[#0B1E2D]/70 to-[#0B1E2D] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 mb-6 bg-white/5">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <p className="text-xs text-white/80">Premium Web3 Real Estate Platform</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Revolutionizing Real Estate Investment through Blockchain Tokenization
          </h1>
          <p className="mt-6 text-white/80 text-lg">
            Own fractions of world-class properties, earn rental income, and stake SPS tokens — all secured by transparent smart contracts.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onPrimary}
              className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#0B1E2D] font-semibold shadow-lg"
            >
              Join Presale
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onSecondary}
              className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/10"
            >
              Explore Marketplace
            </motion.button>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["KYC Ready", "Audited", "Multi-Chain", "DeFi Native"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 text-white/80 text-sm px-4 py-3 backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
