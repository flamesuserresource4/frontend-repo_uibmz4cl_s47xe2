import React from 'react';
import { motion } from 'framer-motion';

const holdings = [
  { name: 'Dubai Skyline Residences', ticker: 'DSR', shares: 1250, cost: 0.95, nav: 1.12, yield: 12.4 },
  { name: 'SoMa Tech Lofts', ticker: 'STL', shares: 840, cost: 0.88, nav: 0.98, yield: 9.8 },
  { name: 'Shibuya Micro-Apts', ticker: 'SMA', shares: 620, cost: 0.76, nav: 0.81, yield: 10.5 },
];

export default function TokenizedPortfolio() {
  return (
    <section id="portfolio" className="bg-[#0B1E2D] py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Tokenized Portfolio</h2>
          <p className="mt-2 text-white/80">A sample of diversified exposure across geographies and risk profiles.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
          <table className="min-w-full text-sm">
            <thead className="text-white/70">
              <tr>
                <th className="text-left px-4 py-3">Asset</th>
                <th className="text-left px-4 py-3">Ticker</th>
                <th className="text-right px-4 py-3">Shares</th>
                <th className="text-right px-4 py-3">Entry (SPS)</th>
                <th className="text-right px-4 py-3">NAV (SPS)</th>
                <th className="text-right px-4 py-3">Yield</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((h, i) => (
                <motion.tr
                  key={h.ticker}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-t border-white/10"
                >
                  <td className="px-4 py-3">{h.name}</td>
                  <td className="px-4 py-3 text-white/80">{h.ticker}</td>
                  <td className="px-4 py-3 text-right">{h.shares.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right">{h.cost.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right">{h.nav.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right"><span className="text-yellow-400 font-semibold">{h.yield}%</span></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
