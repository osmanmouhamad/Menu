import ProductImage from './ProductImage';

export default function ProductCard({ product, onSelect, index = 0 }) {
    return (
        <button
            type="button"
            onClick={() => onSelect(product)}
            style={{ animationDelay: `${Math.min(index, 8) * 50}ms` }}
            className="group flex w-full animate-rise gap-3.5 rounded-2xl border border-line bg-surface p-3 text-left transition duration-300 hover:border-gold/40 hover:bg-surface-2 hover:shadow-[0_10px_30px_-12px_rgba(212,162,76,0.25)] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-gold"
        >
            <div className="relative size-24 shrink-0 overflow-hidden rounded-xl sm:size-28">
                <ProductImage
                    product={product}
                    className="size-full transition duration-500 group-hover:scale-110"
                />
                {product.badge && (
                    <span className="absolute left-1.5 top-1.5 rounded-full bg-gold px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-bg">
                        {product.badge}
                    </span>
                )}
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[15px] font-semibold leading-snug text-cream">
                        {product.name}
                    </h3>
                    {product.price != null && (
                        <span className="shrink-0 font-display text-base font-bold text-gold">
                            ${product.price}
                        </span>
                    )}
                </div>
                {product.description && (
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                        {product.description}
                    </p>
                )}
            </div>
        </button>
    );
}