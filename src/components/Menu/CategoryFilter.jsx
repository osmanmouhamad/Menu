import { useEffect, useRef } from 'react';

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
                            className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                                active
                                    ? 'border-gold bg-gold text-bg shadow-[0_6px_20px_-6px_rgba(212,162,76,0.6)]'
                                    : 'border-line bg-surface text-muted hover:border-gold/40 hover:text-cream'
                            }`}
                        >
                            <span aria-hidden="true">{category.emoji}</span>
                            {category.name}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}