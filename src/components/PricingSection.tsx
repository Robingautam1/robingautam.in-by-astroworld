import { useState } from 'react';

interface PricingSectionProps { }

export default function PricingSection({ }: PricingSectionProps) {
    const [activeTab, setActiveTab] = useState<'essentials' | 'expansion'>('essentials');

    const openBookingModal = () => {
        window.dispatchEvent(new CustomEvent('open-booking-modal'));
    };

    const openDemoModal = (demoId: string, title: string, price: string) => {
        window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: { demoId, title, price } }));
    };

    const CheckIcon = ({ className = "text-accent" }: { className?: string }) => (
        <svg className={`w-5 h-5 ${className} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    );

    const EyeIcon = () => (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
    );

    return (
        <section id="pricing" className="py-32 bg-midnight-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest">Your Investment</span>
                    <h2 className="text-fluid-display font-bold mt-4 mb-6">Pick Your Launch Tier</h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Focused packages designed for modern founders. Start where you are.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-midnight-800 p-1 rounded-2xl border border-white/10">
                        <button
                            onClick={() => setActiveTab('essentials')}
                            className={`tab-btn px-8 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'essentials' ? 'active' : ''}`}
                        >
                            Essentials
                        </button>
                        <button
                            onClick={() => setActiveTab('expansion')}
                            className={`tab-btn px-8 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'expansion' ? 'active' : ''}`}
                        >
                            Expansion
                        </button>
                    </div>
                </div>

                {/* Essentials Panel */}
                {activeTab === 'essentials' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Tier 1: Bio-Link */}
                        <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">The Bio-Link</h3>
                                <p className="text-zinc-400 text-sm">Your Digital Identity.</p>
                            </div>
                            <div className="mb-8">
                                <div className="text-4xl font-bold text-white mb-1">₹249</div>
                                <div className="text-zinc-500 text-sm">One-time</div>
                            </div>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Single screen layout</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Links to all your socials</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Resume/PDF download</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">QR Code ready</span></div>
                            </div>
                            <button onClick={openBookingModal} className="pricing-btn w-full px-6 py-4 bg-midnight-800 hover:bg-accent text-white rounded-xl font-semibold transition-all">
                                <span className="btn-text">Buy Now</span>
                                <span className="btn-delivery text-sm">⚡ Delivered in 24 Hours</span>
                            </button>
                            <button onClick={() => openDemoModal('bio-link', 'The Bio-Link', '₹249')} className="demo-btn w-full mt-3 px-6 py-3 border border-white/20 text-white rounded-xl font-medium flex items-center justify-center gap-2">
                                <EyeIcon /> View Demo
                            </button>
                        </div>

                        {/* Tier 2: Landing */}
                        <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">The Landing</h3>
                                <p className="text-zinc-400 text-sm">Convert Visitors.</p>
                            </div>
                            <div className="mb-8">
                                <div className="text-4xl font-bold text-white mb-1">₹999</div>
                                <div className="text-zinc-500 text-sm">One-time</div>
                            </div>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Long-scroll one page</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Hero section with CTA</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Services/Features grid</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Contact form integration</span></div>
                            </div>
                            <button onClick={openBookingModal} className="pricing-btn w-full px-6 py-4 bg-midnight-800 hover:bg-accent text-white rounded-xl font-semibold transition-all">
                                <span className="btn-text">Buy Now</span>
                                <span className="btn-delivery text-sm">📦 Delivered in 3-5 Days</span>
                            </button>
                            <button onClick={() => openDemoModal('landing-page', 'The Landing', '₹999')} className="demo-btn w-full mt-3 px-6 py-3 border border-white/20 text-white rounded-xl font-medium flex items-center justify-center gap-2">
                                <EyeIcon /> View Demo
                            </button>
                        </div>

                        {/* Tier 3: Portfolio */}
                        <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">The Portfolio</h3>
                                <p className="text-zinc-400 text-sm">Build Authority.</p>
                            </div>
                            <div className="mb-8">
                                <div className="text-4xl font-bold text-white mb-1">₹1,499</div>
                                <div className="text-zinc-500 text-sm">One-time</div>
                            </div>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">3-5 distinct pages</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Home, About, Work sections</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Google Maps integration</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">SEO basics included</span></div>
                            </div>
                            <button onClick={openBookingModal} className="pricing-btn w-full px-6 py-4 bg-midnight-800 hover:bg-accent text-white rounded-xl font-semibold transition-all">
                                <span className="btn-text">Buy Now</span>
                                <span className="btn-delivery text-sm">📦 Delivered in 5-7 Days</span>
                            </button>
                            <button onClick={() => openDemoModal('portfolio', 'The Portfolio', '₹1,499')} className="demo-btn w-full mt-3 px-6 py-3 border border-white/20 text-white rounded-xl font-medium flex items-center justify-center gap-2">
                                <EyeIcon /> View Demo
                            </button>
                        </div>
                    </div>
                )}

                {/* Expansion Panel */}
                {activeTab === 'expansion' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Tier 4: Publisher */}
                        <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">The Publisher</h3>
                                <p className="text-zinc-400 text-sm">Content Engine.</p>
                            </div>
                            <div className="mb-8">
                                <div className="text-4xl font-bold text-white mb-1">₹2,499</div>
                                <div className="text-zinc-500 text-sm">One-time</div>
                            </div>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">CMS-powered blog</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Newsletter integration</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Content scheduling</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Analytics dashboard</span></div>
                            </div>
                            <button onClick={openBookingModal} className="pricing-btn w-full px-6 py-4 bg-midnight-800 hover:bg-accent text-white rounded-xl font-semibold transition-all">
                                <span className="btn-text">Buy Now</span>
                                <span className="btn-delivery text-sm">📦 Delivered in 1-2 Weeks</span>
                            </button>
                            <button onClick={() => openDemoModal('publisher', 'The Publisher', '₹2,499')} className="demo-btn w-full mt-3 px-6 py-3 border border-white/20 text-white rounded-xl font-medium flex items-center justify-center gap-2">
                                <EyeIcon /> View Demo
                            </button>
                        </div>

                        {/* Tier 5: Storefront */}
                        <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">The Storefront</h3>
                                <p className="text-zinc-400 text-sm">Sell Online.</p>
                            </div>
                            <div className="mb-8">
                                <div className="text-4xl font-bold text-white mb-1">₹4,999</div>
                                <div className="text-zinc-500 text-sm">One-time</div>
                            </div>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Product catalog</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Shopping cart & checkout</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Payment gateway</span></div>
                                <div className="flex items-start gap-3"><CheckIcon /><span className="text-zinc-300 text-sm">Order management</span></div>
                            </div>
                            <button onClick={openBookingModal} className="pricing-btn w-full px-6 py-4 bg-midnight-800 hover:bg-accent text-white rounded-xl font-semibold transition-all">
                                <span className="btn-text">Buy Now</span>
                                <span className="btn-delivery text-sm">📦 Delivered in 2-3 Weeks</span>
                            </button>
                            <button onClick={() => openDemoModal('storefront', 'The Storefront', '₹4,999')} className="demo-btn w-full mt-3 px-6 py-3 border border-white/20 text-white rounded-xl font-medium flex items-center justify-center gap-2">
                                <EyeIcon /> View Demo
                            </button>
                        </div>

                        {/* Tier 6: Ecosystem (Premium) */}
                        <div className="relative ecosystem-card">
                            {/* Premium Badge */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                <div className="px-4 py-1.5 gold-glow rounded-full text-midnight-950 text-xs font-bold uppercase tracking-wide">
                                    ✨ Complete Solution
                                </div>
                            </div>

                            {/* Gold Gradient Border */}
                            <div className="gold-glow rounded-3xl p-[2px]">
                                <div className="glass-card rounded-3xl p-8 bg-midnight-900/98">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold mb-2">The Ecosystem</h3>
                                        <p className="text-zinc-400 text-sm">Digital Empire.</p>
                                    </div>
                                    <div className="mb-8">
                                        <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-1">₹9,999</div>
                                        <div className="text-zinc-500 text-sm">One-time</div>
                                    </div>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3"><CheckIcon className="text-amber-400" /><span className="text-zinc-300 text-sm">Full custom web application</span></div>
                                        <div className="flex items-start gap-3"><CheckIcon className="text-amber-400" /><span className="text-zinc-300 text-sm">Free domain (1 year)</span></div>
                                        <div className="flex items-start gap-3"><CheckIcon className="text-amber-400" /><span className="text-zinc-300 text-sm">Hosting included (1 year)</span></div>
                                        <div className="flex items-start gap-3"><CheckIcon className="text-amber-400" /><span className="text-zinc-300 text-sm">Custom logo design</span></div>
                                        <div className="flex items-start gap-3"><CheckIcon className="text-amber-400" /><span className="text-zinc-300 text-sm">1 month priority support</span></div>
                                    </div>
                                    <button onClick={openBookingModal} className="pricing-btn w-full px-6 py-4 gold-glow text-midnight-950 rounded-xl font-bold transition-all hover:scale-105">
                                        <span className="btn-text">Buy Now</span>
                                        <span className="btn-delivery text-sm font-bold">🏆 Delivered in 3-4 Weeks</span>
                                    </button>
                                    <button onClick={() => openDemoModal('ecosystem', 'The Ecosystem', '₹9,999')} className="demo-btn demo-btn-gold w-full mt-3 px-6 py-3 border border-amber-400/30 text-amber-400 rounded-xl font-medium flex items-center justify-center gap-2">
                                        <EyeIcon /> View Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
