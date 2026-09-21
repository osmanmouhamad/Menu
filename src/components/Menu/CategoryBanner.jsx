import { useState } from 'react';
import { slugify } from '../../data/menuData';

// بانر القسم: صورة من public/images/categories/<slug>.webp
// مثال: "Hot Drinks" → hot-drinks.webp  (وإذا ما لقاها بيعرض تصميم بديل)
export default function CategoryBanner({ category, count }) {
    const [failed, setFailed] = useState(false);
    const src = category.image ?? `/images/categories/${slugify(category.name)}.webp`;

    return (
        <div className="relative h-36 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface-2 via-surface to-bg">
            {!failed ? (
                <img
                    src={src}
                    alt=""
                    loading="lazy"
                    onError={() => setFailed(true)}
                    className="absolute inset-0 size-full object-cover"
                />
            ) : (
                <span
                    aria-hidden="true"
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl opacity-25"
                >
                    {category.emoji}
                </span>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

            <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-soft">
                    {count} {count === 1 ? 'item' : 'items'}
                </p>
                <h2 className="font-display text-2xl font-bold text-cream">
                    {category.name}
                </h2>
            </div>
        </div>
    );
}