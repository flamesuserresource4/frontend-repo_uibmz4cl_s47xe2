import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PresaleOverview from './components/PresaleOverview';
import MarketplacePreview from './components/MarketplacePreview';
import { CheckCircle2 } from 'lucide-react';

// Placeholder for SPS token smart contract
const SPS_CONTRACT = "INSERT_CONTRACT_ADDRESS_HERE";

function SectionShell({ id, title, subtitle, children }) {
  return (
    <section id={id} className="bg-[#0B1E2D] py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          {subtitle && <p className="mt-2 text-white/80">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const [showWalletModal, setShowWalletModal] = React.useState(false);
  const [connectedWallet, setConnectedWallet] = React.useState(null);
  const [showVerify, setShowVerify] = React.useState(false);

  const walletOptions = [
    { id: 'metamask', label: 'MetaMask' },
    { id: 'coinbase', label: 'Coinbase Wallet' },
    { id: 'walletconnect', label: 'WalletConnect' },
  ];

  function handleConnect(walletId) {
    setConnectedWallet(walletId);
    setShowWalletModal(false);
  }

  return (
    <div className="min-h-screen bg-[#0B1E2D] text-white selection:bg-yellow-400 selection:text-[#0B1E2D]">
      <Navbar
        onConnect={() => setShowWalletModal(true)}
        connectedLabel={connectedWallet ? `${walletOptions.find(w => w.id === connectedWallet)?.label}` : undefined}
      />

      <main className="pt-16">
        <Hero onPrimary={() => document.getElementById('presale')?.scrollIntoView({ behavior: 'smooth' })} onSecondary={() => document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' })} />

        <SectionShell id="about" title="About & Vision" subtitle="The bridge between blockchain and real estate.">
          <div className="grid md:grid-cols-3 gap-6">
            {[{h:'Liquidity', p:'Tokenized shares enable 24/7 secondary trading.'},{h:'Transparency', p:'On-chain records, verifiable ownership, and rental flows.'},{h:'Sustainability', p:'Energy-efficient assets and ESG-aligned disclosures.'}].map((c) => (
              <motion.div key={c.h} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="font-semibold text-xl">{c.h}</h3>
                <p className="mt-2 text-white/80 text-sm">{c.p}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-sm text-white/70">Global expansion map placeholder • Upcoming markets: UAE, USA, UK, SG, JP</div>
        </SectionShell>

        <SectionShell id="tokenomics" title="Tokenomics" subtitle="Balanced distribution for growth and sustainability.">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-semibold">Distribution</h4>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {[
                  ['Presale', '40%'],
                  ['Staking', '35%'],
                  ['DEX & CEX', '15%'],
                  ['Treasury', '10%'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                    <span className="text-white/80">{k}</span>
                    <span className="text-yellow-400 font-semibold">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-white/70">Deflationary Buyback & Burn, Listing price: $0.030</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-semibold">Presale Stages</h4>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-white/70">
                      <th className="py-2 pr-4">Stage</th>
                      <th className="py-2 pr-4">Price</th>
                      <th className="py-2">USD Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 9 }).map((_, i) => (
                      <tr key={i} className="border-t border-white/10">
                        <td className="py-2 pr-4">{i + 1}</td>
                        <td className="py-2 pr-4">${(0.012 + i * 0.002).toFixed(3)}</td>
                        <td className="py-2">${((500000) * (0.012 + i * 0.002)).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </SectionShell>

        <PresaleOverview onConnect={() => setShowWalletModal(true)} />

        <SectionShell id="staking" title="Staking" subtitle="Stake SPS and earn rental-backed yields.">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'City Living', m: 3, apy: 15 },
              { t: 'Premium Residential', m: 6, apy: 20 },
              { t: 'Exclusive Property', m: 12, apy: 30 },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold">{s.t}</h3>
                <p className="text-white/70 text-sm">Lockup: {s.m} months</p>
                <div className="mt-3 text-yellow-400 text-2xl font-bold">{s.apy}% APY</div>
                <div className="mt-4 flex items-center gap-3">
                  <button className="flex-1 px-4 py-2 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#0B1E2D] font-semibold">Stake SPS</button>
                  <button className="px-4 py-2 rounded-md bg-white/10 text-white border border-white/10">Unstake</button>
                </div>
                <div className="mt-3 text-xs text-white/60">Placeholder: stake() / unstake() smart contract integration</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-white/70">TVL (mock): $12,450,000 • Live APY simulation running</div>
        </SectionShell>

        <MarketplacePreview />

        <SectionShell id="roadmap" title="Roadmap" subtitle="From launch to global expansion.">
          <div className="space-y-6">
            {[1,2,3,4,5].map((phase) => (
              <motion.div key={phase} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5" />
                <div>
                  <div className="font-semibold">Phase {phase}</div>
                  <div className="text-white/70 text-sm">Milestones and deliverables placeholder with animations and listings.</div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="faq" title="FAQ" subtitle="Everything you need to know.">
          <div className="space-y-3">
            {[
              ['What is SPS?', 'A tokenized real estate ecosystem enabling fractional property ownership and yield.'],
              ['How do I invest?', 'Connect your wallet, choose a property or presale stage, and confirm your purchase.'],
              ['What are token shares?', 'Fractionalized ownership tokens representing rights to revenue distribution.'],
              ['How does staking work?', 'Lock SPS for fixed terms to earn boosted yields from rental distributions.'],
              ['How do I earn rental income?', 'Income is pooled and distributed to token holders via smart contracts.'],
            ].map(([q,a], idx) => (
              <details key={q} className="group rounded-lg border border-white/10 bg-white/5">
                <summary className="cursor-pointer list-none px-4 py-3 text-white/90 font-medium flex items-center justify-between">
                  <span>{q}</span>
                  <span className="text-white/50">{idx % 2 === 0 ? '+' : '–'}</span>
                </summary>
                <div className="px-4 pb-4 text-white/70 text-sm">{a}</div>
              </details>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="contact" title="Contact" subtitle="Investor relations and support.">
          <div className="grid md:grid-cols-2 gap-8">
            <form className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <input className="w-full bg-white/10 border border-white/10 rounded-md px-3 py-2 text-white placeholder-white/50" placeholder="Name" />
              <input type="email" className="w-full bg-white/10 border border-white/10 rounded-md px-3 py-2 text-white placeholder-white/50" placeholder="Email" />
              <textarea rows="4" className="w-full bg-white/10 border border-white/10 rounded-md px-3 py-2 text-white placeholder-white/50" placeholder="Message" />
              <button type="button" className="inline-flex px-5 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#0B1E2D] font-semibold">Send</button>
              <div className="text-xs text-white/60">KYC & investor verification placeholder • contact@sps.example</div>
            </form>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-semibold">Social</h4>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white">Telegram</a></li>
                <li><a href="#" className="hover:text-white">Twitter (X)</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
              <div className="mt-6 text-sm text-white/70">Legal: This is not financial advice. DYOR.</div>
            </div>
          </div>
        </SectionShell>

        <footer className="bg-[#0B1E2D] border-t border-white/10 py-8 text-center text-white/60 text-sm">
          © Smart Props Solution 2025 • Privacy • Terms
        </footer>
      </main>

      <AnimatePresence>
        {showWalletModal && (
          <motion.div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0B1E2D] p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">Connect Wallet</h3>
                <button className="text-white/60" onClick={() => setShowWalletModal(false)}>✕</button>
              </div>
              <div className="mt-4 grid gap-3">
                {walletOptions.map((w) => (
                  <button key={w.id} onClick={() => handleConnect(w.id)} className="w-full text-left px-4 py-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10">
                    {w.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-xs text-white/60">Placeholder for provider init and EVM chain selection.</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {connectedWallet && (
          <motion.div className="fixed bottom-4 right-4 z-[55]" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 w-80">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Dashboard</div>
                <button className="text-xs text-white/60" onClick={() => setConnectedWallet(null)}>Disconnect</button>
              </div>
              <div className="mt-3 text-sm text-white/80 space-y-2">
                <div>Wallet: {walletOptions.find(w => w.id === connectedWallet)?.label}</div>
                <div>Portfolio Value (mock): $24,320</div>
                <div>Staked SPS (mock): 12,500</div>
                <div>Owned Property Tokens: 4</div>
                <div className="text-xs text-white/60 break-all">SPS Contract: {SPS_CONTRACT}</div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button onClick={() => setShowVerify(true)} className="flex-1 px-3 py-2 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#0B1E2D] font-semibold">Verify on Chain</button>
                <a href="#staking" className="px-3 py-2 rounded-md bg-white/10 text-white border border-white/10">Stake</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showVerify && (
          <motion.div className="fixed inset-0 z-[70] bg-black/60 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0B1E2D] p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">Verify on Blockchain</h3>
                <button className="text-white/60" onClick={() => setShowVerify(false)}>✕</button>
              </div>
              <div className="mt-4 text-sm text-white/80 space-y-2">
                <div>Recent Tx Hash: 0x92e1...ab21cd (demo)</div>
                <div>Contract Read: balanceOf(address)</div>
                <div>Contract Write: buyTokens() — placeholder</div>
                <div className="text-xs text-white/60">Insert Smart Contract Here</div>
              </div>
              <div className="mt-4 text-right">
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/10 text-white" onClick={() => setShowVerify(false)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
