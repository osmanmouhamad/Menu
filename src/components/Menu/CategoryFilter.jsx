import { useEffect, useRef, useState } from 'react';
import { slugify } from '../../data/menuData';

// أيقونة التاب = صورة القسم مصغّرة (دائرية) من public/images/categories/
// وإذا الصورة مش موجودة بيرجع للإيموجي
function TabIcon({ category }) {
    const [failed, setFailed] = useState(false);
    const src = category.image ?? `/images/categories/${slugify(category.name)}.webp`;

    if (failed) {
        return (
            <span aria-hidden="true" className="grid size-6 place-items-center text-sm">
                {category.emoji}
            </span>
        );
    }

    return (
        <img
            src={src}
            alt=""
            onError={() => setFailed(true)}
            className="size-6 rounded-full object-cover ring-1 ring-black/30"
        />
    );
}

export default function CategoryFilter({ categories, activeId, onSelect }) {
    const refs = useRef({});

    // خلّي التاب الفعّال دايماً ظاهر بالشريط الأفقي
    useEffect(() => {
        refs.current[activeId]?.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest',
        });
    }, [activeId]);

    return (
        <nav aria-label="Menu categories" className="mx-auto max-w-md">
            <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-3">
                {categories.map((category) => {
                    const active = activeId === category.id;
                    return (
                        <button
                            key={category.id}
                            ref={(el) => (refs.current[category.id] = el)}
                            onClick={() => onSelect(category.id)}
                            aria-current={active ? 'true' : undefined}
                            className={`flex shrink-0 items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-4 text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                                active
                                    ? 'border-gold bg-gold text-bg shadow-[0_6px_20px_-6px_rgba(212,162,76,0.6)]'
                                    : 'border-line bg-surface text-muted hover:border-gold/40 hover:text-cream'
                            }`}
                        >
                            <TabIcon category={category} />
                            {category.name}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}