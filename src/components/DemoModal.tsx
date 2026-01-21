import { useState, useEffect } from 'react';

interface DemoInfo {
    demoId: string;
    title: string;
    price: string;
}

export default function DemoModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [demoInfo, setDemoInfo] = useState<DemoInfo | null>(null);

    useEffect(() => {
        const handleOpen = (e: CustomEvent<DemoInfo>) => {
            setDemoInfo(e.detail);
            setIsOpen(true);
            document.body.style.overflow = 'hidden';
        };

        window.addEventListener('open-demo-modal', handleOpen as EventListener);

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('open-demo-modal', handleOpen as EventListener);
            window.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        setDemoInfo(null);
        document.body.style.overflow = '';
    };

    if (!isOpen || !demoInfo) return null;

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
            <div className="relative w-full max-w-7xl h-[90vh] bg-midnight-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-white text-xl transition-all hover:scale-110"
                >
                    ×
                </button>

                {/* Demo Header */}
                <div className="absolute top-4 left-6 z-20 flex items-center gap-3">
                    <div className="text-lg font-bold text-white">{demoInfo.title} Demo</div>
                    <div className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-semibold">
                        {demoInfo.price}
                    </div>
                </div>

                {/* Iframe Container */}
                <iframe
                    className="w-full h-full border-0 pt-16"
                    src={`/demos/${demoInfo.demoId}.html`}
                    title="Demo Preview"
                />
            </div>
        </div>
    );
}
