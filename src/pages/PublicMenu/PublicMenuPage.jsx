// client/src/pages/PublicMenu/PublicMenuPage.jsx
import React, { useState } from 'react';
import { menuData } from '../../data/menuData';

export default function PublicMenuPage() {
    const { restaurant, categories, products } = menuData;
    const [activeCategory, setActiveCategory] = useState(categories[0]?.id);

    const scrollToCategory = (categoryId) => {
        setActiveCategory(categoryId);
        const element = document.getElementById(`category-${categoryId}`);
        if (element) {
            const yOffset = -130; // إزاحة لتجنب تغطية العنوان بالشريط الثابت
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#121212] text-gray-100 pb-24">
            
            {/* حاوية علوية واحدة تجمع الترويسة وشريط الأقسام وتثبت مع الـ Scroll */}
            <div className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-neutral-800 shadow-xl">
                
                {/* الترويسة */}
                <header className="px-4 py-4 text-center border-b border-neutral-800/50">
                    <div className="max-w-md mx-auto">
                        <div className="inline-block bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full mb-1">
                            <span className="text-[9px] tracking-widest text-amber-400 font-bold uppercase">Digital Menu</span>
                        </div>
                        <h1 className="text-2xl font-black tracking-wider text-white font-serif">{restaurant.name}</h1>
                        <p className="text-amber-400/80 text-[11px] italic mt-0.5 font-medium">"{restaurant.description}"</p>
                    </div>
                </header>

                {/* شريط الأقسام (يتحرك مع الصفحة ويثبت في أعلى الشاشة مباشرة) */}
                <nav className="py-2.5">
                    <div className="max-w-md mx-auto px-4 flex gap-2 overflow-x-auto no-scrollbar">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => scrollToCategory(category.id)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                                    activeCategory === category.id
                                        ? 'bg-amber-500 text-neutral-950 scale-105 shadow-amber-500/20'
                                        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </nav>

            </div>

            {/* قائمة المنتجات والأصناف */}
            <main className="max-w-md mx-auto px-4 mt-6 space-y-12">
                {categories.map(category => {
                    const categoryProducts = products.filter(p => p.category_id === category.id);
                    if (categoryProducts.length === 0) return null;

                    return (
                        <section key={category.id} id={`category-${category.id}`} className="scroll-mt-32">
                            {/* عنوان القسم */}
                            <div className="flex items-center gap-3 mb-4">
                                <h2 className="text-sm font-serif font-extrabold text-amber-400 tracking-wider uppercase">
                                    {category.name}
                                </h2>
                                <div className="flex-1 h-[1px] bg-neutral-800"></div>
                            </div>

                            {/* الأصناف باللغة الإنجليزية */}
                            <div className="space-y-2.5">
                                {categoryProducts.map(product => (
                                    <div 
                                        key={product.id} 
                                        className="bg-neutral-900 border border-neutral-800/80 rounded-xl p-3.5 shadow-sm hover:border-amber-500/40 transition-all"
                                    >
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-sm font-bold text-white tracking-wide">{product.name}</h3>
                                        </div>
                                        {product.description && (
                                            <p className="text-neutral-400 text-[11px] mt-1 leading-relaxed">{product.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </main>

            {/* التذييل */}
            <footer className="bg-neutral-950 border-t border-neutral-800 mt-16 py-3 text-center text-[10px] text-neutral-500 fixed bottom-0 w-full z-30">
                <p>07 Coffee Board • Don't search for the best, ask for the rest</p>
            </footer>
        </div>
    );
}