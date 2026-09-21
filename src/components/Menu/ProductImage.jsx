import { useState } from 'react';
import { getProductImage } from '../../data/menuData';

// صورة المنتج، ولو ما لقيت الصورة بتعرض تصميم بديل (إيموجي + تدرّج)
export default function ProductImage({ product, className = '', emojiClass = 'text-4xl' }) {
    const [failed, setFailed] = useState(false);

    if (!failed) {
        return (
            <img
                src={getProductImage(product)}
                alt={product.name}
                loading="lazy"
                onError={() => setFailed(true)}
                className={`object-cover ${className}`}
            />
        );
    }

    return (
        <div
            aria-hidden="true"
            className={`flex items-center justify-center bg-gradient-to-br from-surface-2 via-surface to-bg ring-1 ring-inset ring-gold/10 ${className}`}
        >
            <span className={`${emojiClass} drop-shadow-[0_4px_12px_rgba(212,162,76,0.35)]`}>
                {product.emoji ?? '☕'}
            </span>
        </div>
    );
}