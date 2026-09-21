import { useEffect } from 'react';
import { X } from 'lucide-react';
import ProductImage from './ProductImage';

export default function ProductModal({ product, categoryName, onClose }) {
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[60] flex items-end justify-center"
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
        >
            <div
                onClick={onClose}
                className="absolute inset-0 animate-fade-in bg-black/70 backdrop-blur-sm"
            />

            <div className="relative max-h-[92dvh] w-full max-w-md animate-sheet-up overflow-y-auto rounded-t-3xl border border-b-0 border-line bg-surface shadow-2xl">
                {/* مقبض السحب (شكلي) */}
                <div className="absolute left-1/2 top-2 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-white/30" />

                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-black/50 text-cream backdrop-blur transition active:scale-90"
                >
                    <X size={18} />
                </button>

                <div className="relative aspect-[4/3] w-full">
                    <ProductImage
                        product={product}
                        className="size-full"
                        emojiClass="text-8xl"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface to-transparent" />
                    {product.badge && (
                        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-bg">
                            {product.badge}
                        </span>
                    )}
                </div>

                <div className="relative -mt-6 px-6 pb-[max(2rem,env(safe-area-inset-bottom))]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                        {categoryName}
                    </p>
                    <div className="mt-1 flex items-start justify-between gap-4">
                        <h2 className="font-display text-2xl font-bold text-cream">
                            {product.name}
                        </h2>
                        {product.price != null && (
                            <span className="font-display text-xl font-bold text-gold">
                                ${product.price}
                            </span>
                        )}
                    </div>
                    {product.description && (
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                            {product.description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}