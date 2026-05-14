export interface MenuItem {
  name: string;
  price: string;
  notes?: string;
  subCategory?: string;
  featured?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "appetisers",
    label: "Appetisers",
    heroImage: "/menu/tandoori_paneer.png",
    heroTitle: "The Appetisers",
    heroDescription: "Curated small plates from the tandoor, wok & griddle — each one a prelude to the feast.",
    items: [
      // TIT BIT (VEGETARIAN)
      { name: "Chunky Munky Peanut", price: "₹125", subCategory: "Tit Bit" },
      { name: "Garlic Jeera Khakra Chat Bites", price: "₹125", subCategory: "Tit Bit" },
      { name: "Dal Pakwan in Corn Chips", price: "₹125", subCategory: "Tit Bit" },
      { name: "Double Mango Pani Puri", price: "₹125", subCategory: "Tit Bit", notes: "House Special", featured: true },
      { name: "Raw Banana Tuk Tuk", price: "₹125", subCategory: "Tit Bit" },
      { name: "Schezwan Chinese Bhel", price: "₹132", subCategory: "Tit Bit" },
      { name: "Paneer Phataka", price: "₹145", subCategory: "Tit Bit" },
      { name: "Jhalapeno Poppers", price: "₹132", subCategory: "Tit Bit" },
      { name: "Crispy Lotus in Hot Chili Sauce", price: "₹145", subCategory: "Tit Bit" },
      { name: "Crispy Corn in Hot Spice", price: "₹145", subCategory: "Tit Bit" },
      // NON VEG
      { name: "Desi Feta Eggs Baked", price: "₹165", subCategory: "Non-Veg Starters" },
      { name: "Pan Fried Eggs Luna Style", price: "₹165", subCategory: "Non-Veg Starters" },
      { name: "Cajun Chicken Bites", price: "₹185", subCategory: "Non-Veg Starters", featured: true },
      { name: "Chili Chicken Crispy Phylo Wontons", price: "₹185", subCategory: "Non-Veg Starters" },
      { name: "Silver Fish Rawa Cajun Fried", price: "₹195", subCategory: "Non-Veg Starters" },
      { name: "Shrimps Fritters in Tandoori Spices", price: "₹215", subCategory: "Non-Veg Starters", featured: true },
      // FRIES
      { name: "Salted Fries", price: "₹215", subCategory: "Fries" },
      { name: "Mexican Loaded Fries", price: "₹245", subCategory: "Fries", featured: true },
      { name: "Cajun Tossed Fries", price: "₹225", subCategory: "Fries" },
      { name: "Peri Peri Fries", price: "₹225", subCategory: "Fries" },
      // SOUP
      { name: "Railway Style Tomato Soup", price: "₹125", subCategory: "Soups", notes: "Served with bread" },
      { name: "Tom Yum Soup", price: "₹145", subCategory: "Soups", notes: "Add Chicken ₹30" },
      { name: "Hot & Sour Soup", price: "₹145", subCategory: "Soups" },
      { name: "Lemon Coriander Soup", price: "₹145", subCategory: "Soups" },
      { name: "Mancho Soup", price: "₹145", subCategory: "Soups" },
      { name: "Broccoli Almond Soup", price: "₹165", subCategory: "Soups", featured: true },
      // SALADS
      { name: "Garden Green Salad", price: "₹150", subCategory: "Salads" },
      { name: "Sprout Desi Salad", price: "₹225", subCategory: "Salads" },
      { name: "Honey Citrus Salad", price: "₹225", subCategory: "Salads" },
      { name: "Chicken Caesar Salad", price: "₹285", subCategory: "Salads", featured: true },
      // WESTERN
      { name: "Nachos & Salsa", price: "₹245", subCategory: "Western Specials", image: "/menu/western_specials.png" },
      { name: "Nachos Fully Loaded Veg", price: "₹205", subCategory: "Western Specials" },
      { name: "Onion Ring Crispy Fried", price: "₹225", subCategory: "Western Specials" },
      { name: "Crispy Fried Cauliflower", price: "₹265", subCategory: "Western Specials", notes: "Peri Peri or Cheese Sauce" },
      { name: "Paneer Chat Pata Spring Roll", price: "₹275", subCategory: "Western Specials" },
      { name: "Chicken Tender Strips", price: "₹265", subCategory: "Western Specials", notes: "With Honey Mustard Sauce" },
      { name: "Buffalo Wings (12 pcs)", price: "₹295", subCategory: "Western Specials", featured: true },
      { name: "Nachos Fully Loaded Chicken", price: "₹325", subCategory: "Western Specials" },
      { name: "Chicken Bacon-Wrapped Cocktail Prawns", price: "₹295", subCategory: "Western Specials", featured: true },
      { name: "Fish Fingers Panko Crumb Fried", price: "₹295", subCategory: "Western Specials" },
      // PAN ASIAN
      { name: "Crispy Baby Corn Luna Special", price: "₹210", subCategory: "Pan Asian Specials", image: "/menu/pan_asian.png" },
      { name: "Mushroom Salt N Pepper", price: "₹265", subCategory: "Pan Asian Specials" },
      { name: "Baked Stuffed Potato in Tangy Spicy Sauce", price: "₹235", subCategory: "Pan Asian Specials" },
      { name: "Crispy Vegetables in Schezwan Sauce", price: "₹235", subCategory: "Pan Asian Specials" },
      { name: "Thai Chili Paneer", price: "₹255", subCategory: "Pan Asian Specials", featured: true },
      { name: "Hunan Stir-Fried Chicken", price: "₹325", subCategory: "Pan Asian Specials" },
      { name: "Pepper Chicken Dry", price: "₹325", subCategory: "Pan Asian Specials" },
      { name: "CB Pur Chili Chicken", price: "₹325", subCategory: "Pan Asian Specials", notes: "Chef Special", featured: true },
      { name: "Chicken Lollipop", price: "₹310", subCategory: "Pan Asian Specials" },
      { name: "Vietnamese Chicken", price: "₹325", subCategory: "Pan Asian Specials" },
      { name: "Numprek Chicken", price: "₹335", subCategory: "Pan Asian Specials", notes: "House Special" },
      { name: "Stir-Fried Crispy Honey Chili Lime Fish", price: "₹335", subCategory: "Pan Asian Specials" },
      { name: "Stir-Fried Thai Style Prawns", price: "₹365", subCategory: "Pan Asian Specials", featured: true },
      // REGIONAL & TANDOOR
      { name: "Methi Paneer Tikka", price: "₹325", subCategory: "Regional & Tandoor", image: "/menu/tandoori_paneer.png" },
      { name: "Hara Bhara Kaju Kebab", price: "₹285", subCategory: "Regional & Tandoor" },
      { name: "Stuffed Paneer Tikka", price: "₹335", subCategory: "Regional & Tandoor", featured: true },
      { name: "Stuffed Mushroom Lasooni Tikka", price: "₹325", subCategory: "Regional & Tandoor" },
      { name: "Malia Broccoli Kebab", price: "₹325", subCategory: "Regional & Tandoor" },
      { name: "Protein Galouti Veg Kebab", price: "₹295", subCategory: "Regional & Tandoor" },
      { name: "Vegetarian Platter", price: "₹545", subCategory: "Regional & Tandoor", featured: true },
      { name: "Smoked Chicken Tikka", price: "₹345", subCategory: "Regional & Tandoor", image: "/menu/tandoori_chicken.png", featured: true },
      { name: "Methi Malai Chicken Tikka", price: "₹345", subCategory: "Regional & Tandoor" },
      { name: "Chicken Galouti Kebab", price: "₹335", subCategory: "Regional & Tandoor" },
      { name: "Kalmi Lasooni Kebab", price: "₹345", subCategory: "Regional & Tandoor" },
      { name: "Alfham Chicken", price: "₹325/525", subCategory: "Regional & Tandoor", notes: "Half/Full" },
      { name: "Tandoori Chicken/Prawn", price: "₹425/525", subCategory: "Regional & Tandoor", notes: "Half/Full" },
      { name: "Chicken Sukka", price: "₹325", subCategory: "Regional & Tandoor" },
      { name: "Chicken/Prawn Ghee Roast", price: "₹345/425", subCategory: "Regional & Tandoor" },
      { name: "Guntur Chili Chicken", price: "₹325", subCategory: "Regional & Tandoor" },
      { name: "Mutton Sukka", price: "₹395", subCategory: "Regional & Tandoor" },
      { name: "Mutton Boti Fry", price: "₹385", subCategory: "Regional & Tandoor" },
      { name: "Daily Special Tawa Fish Fry", price: "Market", subCategory: "Regional & Tandoor", notes: "Daily Price" },
    ],
  },
  {
    id: "main-course",
    label: "Main Course",
    heroImage: "/menu/butter_chicken.png",
    heroTitle: "The Main Course",
    heroDescription: "Robust gravies, sizzling platters & wok-fired perfection — the heart of Luna 365.",
    items: [
      // SANDWICH/BURGER
      { name: "Cucumber and Mint Grilled Sandwich", price: "₹185", subCategory: "Sandwiches & Burgers", notes: "Served with dip & fries" },
      { name: "Chicken and Cheese Grilled Sandwich", price: "₹245", subCategory: "Sandwiches & Burgers", notes: "Served with dip & fries" },
      { name: "Triple Decker Club Sandwich", price: "₹285", subCategory: "Sandwiches & Burgers", notes: "Served with dip & fries", featured: true },
      { name: "Mix Veg Crispy Fried Burger", price: "₹245", subCategory: "Sandwiches & Burgers", notes: "Served with dip & fries" },
      { name: "Legendary Chicken Burger", price: "₹285", subCategory: "Sandwiches & Burgers", featured: true },
      { name: "Classic Chicken Burger", price: "₹265", subCategory: "Sandwiches & Burgers" },
      // PIZZA
      { name: "Farm Fresh Vegetable Pizza", price: "₹345", subCategory: "Pizza" },
      { name: "Paneer Tikka / Peri Peri / Ghee Roast Pizza", price: "₹365", subCategory: "Pizza", featured: true },
      { name: "Mexican Corn and Bell Pepper Pizza", price: "₹345", subCategory: "Pizza" },
      { name: "Classic Margherita Pizza", price: "₹335", subCategory: "Pizza" },
      { name: "BBQ Chicken & Caramel Onion Pizza", price: "₹385", subCategory: "Pizza" },
      { name: "Peri Peri / Chicken Pepperoni Pizza", price: "₹385", subCategory: "Pizza" },
      { name: "Ghee Roast / Chettinad / Coorg Roast Chicken Pizza", price: "₹425", subCategory: "Pizza", featured: true },
      { name: "Seafood Marinara & Bell Pepper Pizza", price: "₹465", subCategory: "Pizza" },
      // WESTERN MAIN
      { name: "Paneer Steak Sizzler", price: "₹425", subCategory: "Western Mains" },
      { name: "Chicken Steak Sizzler", price: "₹425", subCategory: "Western Mains", featured: true },
      { name: "Fish & Chips", price: "₹395", subCategory: "Western Mains" },
      { name: "Grilled Churmuri Prawn Sizzler", price: "₹465", subCategory: "Western Mains", featured: true },
      { name: "Veg Lasagne", price: "₹325", subCategory: "Western Mains" },
      { name: "Chicken Lasagne", price: "₹345", subCategory: "Western Mains" },
      { name: "Pasta (Penne/Spaghetti/Macaroni)", price: "₹345", subCategory: "Western Mains", notes: "Arrabbiata, Creamy Mushroom, AOP, Creamy Pesto" },
      // PAN ASIAN MAIN
      { name: "House Special Fried Rice/Noodle", price: "₹265/275", subCategory: "Pan Asian Mains", notes: "Green/Red/Brown Spice Roast", image: "/menu/pan_asian.png" },
      { name: "Pad Thai Noodle", price: "₹325", subCategory: "Pan Asian Mains", featured: true },
      { name: "Ramen Noodle", price: "₹325", subCategory: "Pan Asian Mains" },
      { name: "Burnt Garlic Fried Rice", price: "₹225", subCategory: "Pan Asian Mains" },
      { name: "Thai Green Veg Curry with Rice", price: "₹375", subCategory: "Pan Asian Mains" },
      { name: "Thai Red Chicken Curry with Rice", price: "₹395", subCategory: "Pan Asian Mains", featured: true },
      // INDIAN MAIN
      { name: "Dal Tadka / Fry / Masala", price: "₹225", subCategory: "Indian Mains", image: "/menu/dal_main_course.png" },
      { name: "Dal Makhni", price: "₹285", subCategory: "Indian Mains", featured: true },
      { name: "Dal Pakwan", price: "₹245", subCategory: "Indian Mains" },
      { name: "Lasooni Palak Paneer", price: "₹285", subCategory: "Indian Mains" },
      { name: "Kadai Paneer / Vegetable", price: "₹285", subCategory: "Indian Mains" },
      { name: "Sham Savera", price: "₹325", subCategory: "Indian Mains", featured: true },
      { name: "Mix Veg Hyderabadi", price: "₹285", subCategory: "Indian Mains" },
      { name: "Paneer Butter Masala", price: "₹325", subCategory: "Indian Mains" },
      { name: "Kaju Veg Masala", price: "₹325", subCategory: "Indian Mains" },
      { name: "Smoke Butter Chicken Gravy", price: "₹345", subCategory: "Indian Mains", image: "/menu/butter_chicken.png", featured: true },
      { name: "Kadai Chicken Curry", price: "₹325", subCategory: "Indian Mains" },
      { name: "Methi Malai Murgh Curry", price: "₹325", subCategory: "Indian Mains" },
      { name: "Mutton Roganjosh", price: "₹365", subCategory: "Indian Mains", featured: true },
    ],
  },
  {
    id: "breads-biryani",
    label: "Breads & Biryani",
    heroImage: "/menu/biryani_bread.png",
    heroTitle: "Breads & Biryani",
    heroDescription: "Tandoor-fresh breads and aromatic biryanis sealed in tradition.",
    items: [
      { name: "Steam Rice / Jeera Rice", price: "₹145", subCategory: "Rice" },
      { name: "Hyderabadi Veg Biryani", price: "₹285", subCategory: "Biryani", featured: true },
      { name: "Hyderabadi Chicken / Mutton Biryani", price: "₹325/385", subCategory: "Biryani", image: "/menu/biryani_bread.png", featured: true },
      { name: "Desi Nati Biryani Veg / Chicken", price: "₹325/385", subCategory: "Biryani" },
      { name: "Roti / Naan / Butter Garlic Roti / Naan", price: "₹35/45", subCategory: "Breads" },
      { name: "Chur Chur Parotha", price: "₹200", subCategory: "Breads", featured: true },
      { name: "Aloo / Beetroot / Subji Kulcha", price: "₹200", subCategory: "Breads" },
      { name: "Stuffed Paratha", price: "₹60", subCategory: "Breads" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts & Beverages",
    heroImage: "/menu/gulab_jamun_brulee.png",
    heroTitle: "Sweet Orbits",
    heroDescription: "Celestial finales — torched, bruleed, and drizzled in liquid gold.",
    items: [
      { name: "Walnut Sizzling Brownie", price: "₹165", subCategory: "Desserts", notes: "With Vanilla Ice Cream & Choc Sauce" },
      { name: "Mexican Tres Leches", price: "₹225/265", subCategory: "Desserts", notes: "Plain/Liquor", featured: true },
      { name: "Hot Fudge Chocolate Cake", price: "₹245", subCategory: "Desserts" },
      { name: "Red Velvet Cake", price: "₹245", subCategory: "Desserts" },
      { name: "Caramelized Banana Split", price: "₹245", subCategory: "Desserts", notes: "With Ice Cream", featured: true },
      { name: "Gulab Jamun Rabri Brulee", price: "₹150", subCategory: "Desserts", notes: "Jamuns in saffron rabdi, torched golden brown", image: "/menu/gulab_jamun_brulee.png", featured: true },
      { name: "Kesar Phirnee", price: "₹125", subCategory: "Desserts" },
      { name: "Birthday Cake", price: "₹325/635", subCategory: "Desserts" },
    ],
  },
];
