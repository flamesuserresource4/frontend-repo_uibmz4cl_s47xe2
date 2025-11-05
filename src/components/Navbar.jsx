import React from 'react';
import { Wallet, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Presale', href: '#presale' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Staking', href: '#staking' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onConnect, connectedLabel }) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1E2D]/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center shadow-inner">
            <span className="font-black text-[#0B1E2D]">SPS</span>
          </div>
          <span className="font-semibold tracking-wide text-white">Smart Props Solution</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onConnect}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#0B1E2D] font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg"
          >
            <Wallet className="w-4 h-4" />
            {connectedLabel || 'Connect Wallet'}
          </motion.button>
        </div>

        <button
          className="lg:hidden p-2 text-white/80"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10">
          <div className="px-4 py-4 space-y-3 bg-[#0B1E2D]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-white/80 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onConnect();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#0B1E2D] font-semibold px-4 py-2 rounded-md"
            >
              <Wallet className="w-4 h-4" />
              {connectedLabel || 'Connect Wallet'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
