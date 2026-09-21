// client/src/data/menuData.js
export const menuData = {
    restaurant: {
        name: "07 Coffee Board",
        description: "Don't search for the best, ask for the rest",
        phone: "+963 900 000 000",
        address: "Lebanon"
    },
    categories: [
        { id: 1, name: "Hot Drinks" },
        { id: 2, name: "Cold Coffee" },
        { id: 3, name: "Cold Beverages" },
        { id: 4, name: "Salads" },
        { id: 5, name: "Food Menu" }
    ],
    products: [
        // Hot Drinks
        { id: 1, category_id: 1, name: "Espresso Coffee", description: "Rich and concentrated espresso" },
        { id: 2, category_id: 1, name: "Macchiato", description: "Espresso with a dash of foamed milk" },
        { id: 3, category_id: 1, name: "Americano Coffee", description: "Espresso with hot water" },
        { id: 4, category_id: 1, name: "Spanish Latte", description: "Espresso with sweetened condensed milk" },
        { id: 5, category_id: 1, name: "Nescafe", description: "Classic hot nescafe" },
        { id: 6, category_id: 1, name: "Flat White", description: "Espresso with velvety microfoam milk" },
        { id: 7, category_id: 1, name: "Cappuccino", description: "Espresso, steamed milk, and dense foam" },
        { id: 8, category_id: 1, name: "Hot Chocolate", description: "Rich hot chocolate beverage" },
        { id: 9, category_id: 1, name: "Tea Varieties", description: "Selection of premium teas" },

        // Cold Coffee
        { id: 10, category_id: 2, name: "Iced Latte", description: "Espresso with cold milk and ice" },
        { id: 11, category_id: 2, name: "Iced Mocha", description: "Espresso, chocolate, and cold milk" },
        { id: 12, category_id: 2, name: "Iced Americano", description: "Espresso with cold water and ice" },
        { id: 13, category_id: 2, name: "Iced Matcha", description: "Japanese matcha with iced milk" },
        { id: 14, category_id: 2, name: "Cold Brew", description: "Slow-steeped cold brew coffee" },
        { id: 15, category_id: 2, name: "Frappuchino", description: "Blended iced coffee beverage" },

        // Cold Beverages
        { id: 16, category_id: 3, name: "Fresh Orange", description: "Freshly squeezed orange juice" },
        { id: 17, category_id: 3, name: "Lemonade", description: "Refreshing mint lemonade" },
        { id: 18, category_id: 3, name: "Iced Tea", description: "Refreshing flavored iced tea" },
        { id: 19, category_id: 3, name: "Strawberry Milkshake", description: "Delicious strawberry milkshake" },
        { id: 20, category_id: 3, name: "Chocolate Milkshake", description: "Rich chocolate milkshake" },
        { id: 21, category_id: 3, name: "Soft Drinks", description: "Assorted soft drinks" },
        { id: 22, category_id: 3, name: "Small Water", description: "Mineral water" },
        { id: 23, category_id: 3, name: "Sparkling Water", description: "Carbonated sparkling water" },
        { id: 24, category_id: 3, name: "Energy Drinks", description: "Energy boost drinks" },

        // Salads
        { id: 25, category_id: 4, name: "Cezar Salad", description: "Classic Caesar salad with chicken" },
        { id: 26, category_id: 4, name: "Pasta Salad", description: "Pasta salad with special dressing" },
        { id: 27, category_id: 4, name: "Fetta Salad", description: "Greek feta cheese salad" },

        // Food Menu
        { id: 28, category_id: 5, name: "Ajo", description: "Special Ajo sandwich" },
        { id: 29, category_id: 5, name: "Grilled Haloumi Pesto", description: "Grilled halloumi with pesto sauce" },
        { id: 30, category_id: 5, name: "Turkey and Cheese", description: "Turkey with melted cheese" },
        { id: 31, category_id: 5, name: "Crepe and Cheese", description: "Savory cheese crepe" },
        { id: 32, category_id: 5, name: "Mixed Cheese", description: "Assorted rich cheeses" },
        { id: 33, category_id: 5, name: "Labneh and Vegetables", description: "Fresh labneh with vegetables" },
        { id: 34, category_id: 5, name: "Thym", description: "Traditional thyme manousheh" },
        { id: 35, category_id: 5, name: "Akkawi Cheese Naka", description: "Akkawi cheese specialty" },
        { id: 36, category_id: 5, name: "Butter and Jam", description: "Butter and jam spread" }
    ]
};