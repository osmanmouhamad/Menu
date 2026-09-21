// client/src/pages/PublicMenu/PublicMenuPage.jsx
import { useEffect, useRef, useState } from 'react';
import { menuData } from '../../data/menuData';
import CategoryFilter from '../../components/Menu/CategoryFilter';
import CategoryBanner from '../../components/Menu/CategoryBanner';
import ProductCard from '../../components/Menu/ProductCard';
import ProductModal from '../../components/Menu/ProductModal';

export default function PublicMenuPage() {
    const { restaurant, categories, products } = menuData;
    const [activeCategory, setActiveCategory] = useState(categories[0]?.id);
    const [selected, setSelected] = useState(null);
    const [logoFailed, setLogoFailed] = useState(false);
    const clickLock = useRef(false);

    // تحديث التاب الفعّال تلقائياً أثناء التمرير
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (clickLock.current) return;
                const visible = entries.find((e) => e.isIntersecting);
                if (visible) setActiveCategory(Number(visible.target.dataset.id));
            },
            { rootMargin: '-120px 0px -65% 0px' }
        );
        categories.forEach((c) => {
            const el = document.getElementById(`category-${c.id}`);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [categories]);

    const scrollToCategory = (categoryId) => {
        setActiveCategory(categoryId);
        clickLock.current = true;
        setTimeout(() => (clickLock.current = false), 800);
        document
            .getElementById(`category-${categoryId}`)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const selectedCategory = categories.find((c) => c.id === selected?.category_id);

    return (
        <div className="min-h-screen bg-bg">
            {/* عمود بعرض الموبايل، وعالكمبيوتر بيبين متل شاشة موبايل بالنص */}
            <div className="relative mx-auto min-h-screen max-w-md bg-bg pb-10 md:border-x md:border-line md:shadow-2xl">
                {/* ───── Hero ───── */}
                <header
                    className="relative overflow-hidden border-b border-line bg-surface px-5 pb-9 pt-[max(3rem,env(safe-area-inset-top))] text-center"
                    style={{
                        // صورة الغلاف (اختيارية): public/images/hero.webp
                        backgroundImage:
                            'linear-gradient(180deg, rgba(15,13,11,0.55) 0%, rgba(15,13,11,0.95) 100%), url(/images/hero.webp)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
                    <div className="relative animate-rise">
                        {/* اللوغو: public/images/logo.webp (وإذا ما لقاه بيعرض الاسم نص) */}
                        {!logoFailed && (
                            <img
                                src="/images/logo.webp"
                                alt=""
                                onError={() => setLogoFailed(true)}
                                className="mx-auto mb-4 block size-28 rounded-3xl object-cover ring-1 ring-gold/30 shadow-[0_10px_40px_-10px_rgba(212,162,76,0.5)]"
                            />
                        )}
                        <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-gold-soft">
                            Digital Menu
                        </span>
                        <h1
                            className={
                                logoFailed
                                    ? 'mt-4 font-display text-4xl font-extrabold tracking-wide text-cream'
                                    : 'sr-only'
                            }
                        >
                            {restaurant.name}
                        </h1>
                        <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-gold/70">
                            <span className="h-px w-10 bg-current" />
                            <span aria-hidden="true">☕</span>
                            <span className="h-px w-10 bg-current" />
                        </div>
                        <p className="mt-4 font-display text-sm italic text-muted">
                            “{restaurant.description}”
                        </p>
                    </div>
                </header>

                {/* ───── Sticky categories ───── */}
                <div className="sticky top-0 z-50 border-b border-line bg-bg/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
                    <CategoryFilter
                        categories={categories}
                        activeId={activeCategory}
                        onSelect={scrollToCategory}
                    />
                </div>

                {/* ───── Products ───── */}
                <main className="space-y-10 px-4 pt-7">
                    {categories.map((category) => {
                        const items = products.filter((p) => p.category_id === category.id);
                        if (items.length === 0) return null;

                        return (
                            <section
                                key={category.id}
                                id={`category-${category.id}`}
                                data-id={category.id}
                                className="scroll-mt-20"
                            >
                                <CategoryBanner category={category} count={items.length} />

                                <div className="mt-4 space-y-3">
                                    {items.map((product, i) => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            index={i}
                                            onSelect={setSelected}
                                        />
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </main>

                {/* ───── Footer ───── */}
                <footer className="mt-14 px-4 pb-[env(safe-area-inset-bottom)] text-center">
                    <div className="mx-auto mb-4 h-px w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                    <p className="font-display text-sm italic text-muted">
                        {restaurant.description}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-gold/70">
                        {restaurant.name}
                    </p>
                </footer>

                {selected && (
                    <ProductModal
                        product={selected}
                        categoryName={selectedCategory?.name}
                        onClose={() => setSelected(null)}
                    />
                )}
            </div>
        </div>
    );
}