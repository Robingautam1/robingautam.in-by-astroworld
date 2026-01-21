import { useState, useEffect } from 'react';

export default function BookingModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-booking-modal', handleOpen);

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('open-booking-modal', handleOpen);
            window.removeEventListener('keydown', handleEscape);
        };
    }, []);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
            <div className="bg-midnight-800 border border-white/10 rounded-3xl p-8 max-w-lg w-full">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Book Your Strategy Session</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-zinc-400 hover:text-white text-2xl"
                    >
                        ×
                    </button>
                </div>
                <p className="text-zinc-400 mb-6">You don't need a perfect idea. Just bring what you have.</p>
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/gautam-robin333/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                    style={{ minHeight: '700px', height: '700px' }}
                />
                {/* Calendly Script */}
                <script
                    type="text/javascript"
                    src="https://assets.calendly.com/assets/external/widget.js"
                    async
                />
            </div>
        </div>
    );
}
