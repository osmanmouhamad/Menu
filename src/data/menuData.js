// client/src/data/menuData.js
//
// حقول اختيارية لكل منتج:
//   price: 9.5              → بيظهر السعر
//   badge: "Popular"        → شارة فوق الصورة
//   image: "/images/x.webp" → صورة مخصصة (وإلا بتنقرأ تلقائياً حسب اسم المنتج)
//
// الصور بتنحط بـ public/images/menu/ باسم = slug اسم المنتج
// مثال: "Spanish Latte" → public/images/menu/spanish-latte.webp

export const slugify = (name) =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const getProductImage = (product) =>
    product.image ?? `/images/menu/${slugify(product.name)}.webp`;

export const menuData = {
    restaurant: {
        name: "07 Coffee Board",
        description: "Don't search for the best, ask for the rest",
        phone: "+963 900 000 000",
        address: "Lebanon"
    },
    categories: [
        { id: 1, name: "Hot Drinks", emoji: "☕" },
        { id: 2, name: "Cold Coffee", emoji: "🧊" },
        { id: 3, name: "Cold Beverages", emoji: "🥤" },
        { id: 4, name: "Salads", emoji: "🥗" },
        { id: 5, name: "Food Menu", emoji: "🥪" }
    ],
    products: [
        // Hot Drinks
        { id: 1, category_id: 1, name: "Espresso Coffee", description: "Rich and concentrated espresso", emoji: "☕" },
        { id: 2, category_id: 1, name: "Macchiato", description: "Espresso with a dash of foamed milk", emoji: "☕" },
        { id: 3, category_id: 1, name: "Americano Coffee", description: "Espresso with hot water", emoji: "☕" },
        { id: 4, category_id: 1, name: "Spanish Latte", description: "Espresso with sweetened condensed milk", emoji: "🥛" },
        { id: 5, category_id: 1, name: "Nescafe", description: "Classic hot nescafe", emoji: "☕" },
        { id: 6, category_id: 1, name: "Flat White", description: "Espresso with velvety microfoam milk", emoji: "☕" },
        { id: 7, category_id: 1, name: "Cappuccino", description: "Espresso, steamed milk, and dense foam", emoji: "☕" },
        { id: 8, category_id: 1, name: "Hot Chocolate", description: "Rich hot chocolate beverage", emoji: "🍫" },
        { id: 9, category_id: 1, name: "Tea Varieties", description: "Selection of premium teas", emoji: "🍵" },

        // Cold Coffee
        { id: 10, category_id: 2, name: "Iced Latte", description: "Espresso with cold milk and ice", emoji: "🧊" },
        { id: 11, category_id: 2, name: "Iced Mocha", description: "Espresso, chocolate, and cold milk", emoji: "🍫" },
        { id: 12, category_id: 2, name: "Iced Americano", description: "Espresso with cold water and ice", emoji: "🧊" },
        { id: 13, category_id: 2, name: "Iced Matcha", description: "Japanese matcha with iced milk", emoji: "🍵" },
        { id: 14, category_id: 2, name: "Cold Brew", description: "Slow-steeped cold brew coffee", emoji: "🧊" },
        { id: 15, category_id: 2, name: "Frappuchino", description: "Blended iced coffee beverage", emoji: "🥤" },

        // Cold Beverages
        { id: 16, category_id: 3, name: "Fresh Orange", description: "Freshly squeezed orange juice", emoji: "🍊" },
        { id: 17, category_id: 3, name: "Lemonade", description: "Refreshing mint lemonade", emoji: "🍋" },
        { id: 18, category_id: 3, name: "Iced Tea", description: "Refreshing flavored iced tea", emoji: "🍹" },
        { id: 19, category_id: 3, name: "Strawberry Milkshake", description: "Delicious strawberry milkshake", emoji: "🍓" },
        { id: 20, category_id: 3, name: "Chocolate Milkshake", description: "Rich chocolate milkshake", emoji: "🍫" },
        { id: 21, category_id: 3, name: "Soft Drinks", description: "Assorted soft drinks", emoji: "🥤" },
        { id: 22, category_id: 3, name: "Small Water", description: "Mineral water", emoji: "💧" },
        { id: 23, category_id: 3, name: "Sparkling Water", description: "Carbonated sparkling water", emoji: "🫧" },
        { id: 24, category_id: 3, name: "Energy Drinks", description: "Energy boost drinks", emoji: "⚡" },

        // Salads
        { id: 25, category_id: 4, name: "Cezar Salad", description: "Classic Caesar salad with chicken", emoji: "🥗" },
        { id: 26, category_id: 4, name: "Pasta Salad", description: "Pasta salad with special dressing", emoji: "🍝" },
        { id: 27, category_id: 4, name: "Fetta Salad", description: "Greek feta cheese salad", emoji: "🧀" },

        // Food Menu
        { id: 28, category_id: 5, name: "Ajo", description: "Special Ajo sandwich", emoji: "🥪" },
        { id: 29, category_id: 5, name: "Grilled Haloumi Pesto", description: "Grilled halloumi with pesto sauce", emoji: "🧀" },
        { id: 30, category_id: 5, name: "Turkey and Cheese", description: "Turkey with melted cheese", emoji: "🥪" },
        { id: 31, category_id: 5, name: "Crepe and Cheese", description: "Savory cheese crepe", emoji: "🥞" },
        { id: 32, category_id: 5, name: "Mixed Cheese", description: "Assorted rich cheeses", emoji: "🧀" },
        { id: 33, category_id: 5, name: "Labneh and Vegetables", description: "Fresh labneh with vegetables", emoji: "🥒" },
        { id: 34, category_id: 5, name: "Thym", description: "Traditional thyme manousheh", emoji: "🌿" },
        { id: 35, category_id: 5, name: "Akkawi Cheese Naka", description: "Akkawi cheese specialty", emoji: "🧀" },
        { id: 36, category_id: 5, name: "Butter and Jam", description: "Butter and jam spread", emoji: "🍯" }
    ]
};