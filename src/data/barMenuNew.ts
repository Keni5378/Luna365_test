export interface BarItem {
  name: string;
  price: string;
  measurement: string;
  subCategory: string;
  featured?: boolean;
  image?: string;
}

export interface BarCategory {
  id: string;
  label: string;
  items: BarItem[];
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
}

export const BAR_CATEGORIES: BarCategory[] = [
  {
    id: "whiskies-spirits",
    label: "Whiskies & Spirits",
    heroImage: "/bar/premium_malts.png",
    heroTitle: "Whiskies & Spirits",
    heroDescription: "From peated single malts to aged bourbons — the world's finest distilleries, poured by the measure.",
    items: [
      // BLENDED WHISKY
      { name: "JW Red Label", price: "₹200/1200/4850", measurement: "30ML/180ML/750ML", subCategory: "Blended Whisky" },
      { name: "JW Black Label", price: "₹290/1740/7250", measurement: "30ML/180ML/750ML", subCategory: "Blended Whisky", featured: true },
      { name: "JW Double Black Label", price: "₹525", measurement: "30ML/180ML/750ML", subCategory: "Blended Whisky" },
      { name: "Chivas Regal", price: "₹495", measurement: "30ML/180ML/750ML", subCategory: "Blended Whisky", featured: true },
      { name: "Ballantine's", price: "₹325", measurement: "30ML/180ML/750ML", subCategory: "Blended Whisky" },
      { name: "J&B Rare", price: "₹345", measurement: "30ML/180ML/750ML", subCategory: "Blended Whisky" },
      // SINGLE MALT
      { name: "Amrut Singlemalt", price: "₹285", measurement: "30ML/180ML/750ML", subCategory: "Single Malt", featured: true, image: "/bar/premium_malts.png" },
      { name: "Indri Single Malt", price: "₹345", measurement: "30ML/180ML/750ML", subCategory: "Single Malt", featured: true, image: "/bar/indri_bottle.png" },
      { name: "Paul John Nirvana", price: "₹285", measurement: "30ML/180ML/750ML", subCategory: "Single Malt" },
      // BOURBON & IRISH
      { name: "Jack Daniel's Tennessee Whiskey", price: "₹260/1520/6300", measurement: "30ML/180ML/750ML", subCategory: "Bourbon & Irish", featured: true },
      { name: "Jim Beam Bourbon", price: "₹285", measurement: "30ML/180ML/750ML", subCategory: "Bourbon & Irish" },
      { name: "Jameson Irish Whiskey", price: "₹325", measurement: "30ML/180ML/750ML", subCategory: "Bourbon & Irish" },
      // IMFL
      { name: "Black & White", price: "₹140/840/3380", measurement: "30ML/180ML/750ML", subCategory: "IMFL Whiskey" },
      { name: "Teachers 50", price: "₹190/1130/4690", measurement: "30ML/180ML/750ML", subCategory: "IMFL Whiskey" },
      { name: "Teachers Highland", price: "₹140/820/3350", measurement: "30ML/180ML/750ML", subCategory: "IMFL Whiskey" },
      { name: "Blenders Pride", price: "₹100/600/2450", measurement: "30ML/180ML/750ML", subCategory: "IMFL Whiskey" },
      { name: "Antiquity Blue", price: "₹175", measurement: "30ML/180ML/750ML", subCategory: "IMFL Whiskey" },
      { name: "Signature Rare Aged", price: "₹160/630/3910", measurement: "30ML/180ML/750ML", subCategory: "IMFL Whiskey" },
      { name: "Black Dog", price: "₹140/840/3380", measurement: "30ML/180ML/750ML", subCategory: "IMFL Whiskey" },
      { name: "100 Pipers", price: "₹140/840/3380", measurement: "30ML/180ML/750ML", subCategory: "IMFL Whiskey" },
      { name: "Vat 69", price: "₹140/840/3380", measurement: "30ML/180ML/750ML", subCategory: "IMFL Whiskey" },
      // VODKA
      { name: "Smirnoff", price: "₹100/620/2470", measurement: "30ML/180ML/750ML", subCategory: "Vodka" },
      { name: "Smirnoff Green Apple", price: "₹110/630/2570", measurement: "30ML/180ML/750ML", subCategory: "Vodka" },
      { name: "Absolut", price: "₹245", measurement: "30ML/180ML/750ML", subCategory: "Vodka" },
      { name: "Magic Moments", price: "₹70/420/1700", measurement: "30ML/180ML/750ML", subCategory: "Vodka" },
      { name: "Romanov", price: "₹60/330/1350", measurement: "30ML/180ML/750ML", subCategory: "Vodka" },
      { name: "Grey Goose", price: "₹385", measurement: "30ML/180ML/750ML", subCategory: "Vodka", featured: true },
      // GIN
      { name: "Greater Than", price: "₹195", measurement: "30ML/180ML/750ML", subCategory: "Gin" },
      { name: "Beefeater", price: "₹245", measurement: "30ML/180ML/750ML", subCategory: "Gin" },
      { name: "Tanqueray", price: "₹285", measurement: "30ML/180ML/750ML", subCategory: "Gin" },
      { name: "Bombay Sapphire", price: "₹285", measurement: "30ML/180ML/750ML", subCategory: "Gin", featured: true },
      { name: "Jaisalmer Indian Craft Gin", price: "₹275", measurement: "30ML/180ML/750ML", subCategory: "Gin" },
      // RUM
      { name: "Old Monk", price: "₹50/260/1080", measurement: "30ML/180ML/750ML", subCategory: "Rum" },
      { name: "Captain Morgan Black", price: "₹95", measurement: "30ML/180ML/750ML", subCategory: "Rum" },
      { name: "Bacardi Black", price: "₹100/620/2470", measurement: "30ML/180ML/750ML", subCategory: "Rum" },
      { name: "Bacardi Superior", price: "₹100/620/2470", measurement: "30ML/180ML/750ML", subCategory: "Rum" },
      { name: "Old Monk White", price: "₹85", measurement: "30ML/180ML/750ML", subCategory: "Rum" },
      { name: "Bacardi Limon", price: "₹100/620/2470", measurement: "30ML/180ML/750ML", subCategory: "Rum" },
      // TEQUILA
      { name: "José Cuervo", price: "₹340", measurement: "30ML/180ML/750ML", subCategory: "Tequila" },
      { name: "Patron", price: "₹510", measurement: "30ML/180ML/750ML", subCategory: "Tequila", featured: true },
      { name: "Don Angle", price: "₹290", measurement: "30ML/180ML/750ML", subCategory: "Tequila" },
      { name: "Camino Gold", price: "₹295", measurement: "30ML/180ML/750ML", subCategory: "Tequila" },
      { name: "Desmondji", price: "₹250", measurement: "30ML/180ML/750ML", subCategory: "Tequila" },
      // BRANDY
      { name: "Morpheus Blue", price: "₹95/560/2254", measurement: "30ML/180ML/750ML", subCategory: "Brandy & Cognac" },
      { name: "Morpheus", price: "₹95/560/2254", measurement: "30ML/180ML/750ML", subCategory: "Brandy & Cognac" },
      { name: "Mansion House", price: "₹70/350/1350", measurement: "30ML/180ML/750ML", subCategory: "Brandy & Cognac" },
      // LIQUEUR
      { name: "Baileys Irish Cream", price: "₹395", measurement: "30ML", subCategory: "Liqueur" },
      { name: "Kahlúa", price: "₹265", measurement: "30ML", subCategory: "Liqueur" },
      { name: "Sambuca Molinari", price: "₹165", measurement: "30ML", subCategory: "Liqueur" },
      { name: "Jagermeister", price: "₹395", measurement: "30ML", subCategory: "Liqueur", featured: true },
      { name: "Campari", price: "₹265", measurement: "30ML", subCategory: "Liqueur" },
      { name: "Martini Bianco", price: "₹165", measurement: "30ML", subCategory: "Liqueur" },
      { name: "Martini Dry", price: "₹165", measurement: "30ML", subCategory: "Liqueur" },
    ],
  },
  {
    id: "wines-beers",
    label: "Wines & Beers",
    heroImage: "/bar/wine_hero.png",
    heroTitle: "Wines & Beers",
    heroDescription: "A curated cellar of reds, whites, and artisanal craft brews from around the world.",
    items: [
      // WHITE WINE
      { name: "Big Banian", price: "₹365/1300", measurement: "150ml/750ml", subCategory: "White Wine" },
      { name: "Sula Sauvignon Blanc", price: "₹370/1400", measurement: "150ml/750ml", subCategory: "White Wine", featured: true, image: "/bar/wine_hero.png" },
      // RED WINE
      { name: "Big Banian", price: "₹385/1350", measurement: "150ml/750ml", subCategory: "Red Wine" },
      { name: "Sula Shiraz", price: "₹385/1450", measurement: "150ml/750ml", subCategory: "Red Wine", featured: true },
      // FLAVORED
      { name: "Breezer (Flavor)", price: "₹200", measurement: "Single", subCategory: "Flavored Drinks" },
      { name: "Bacardi+ (Flavor)", price: "₹180", measurement: "Single", subCategory: "Flavored Drinks" },
      // BOTTLED BEER
      { name: "Kingfisher Premium", price: "₹170/255", measurement: "330ML/650ML", subCategory: "Bottled Beer" },
      { name: "Kingfisher Strong", price: "₹160/270", measurement: "330ML/650ML", subCategory: "Bottled Beer" },
      { name: "Budweiser Premium", price: "₹225/325", measurement: "330ML/650ML", subCategory: "Bottled Beer", featured: true },
      { name: "Budweiser Magnum", price: "₹225/315", measurement: "330ML/650ML", subCategory: "Bottled Beer" },
      { name: "Heineken", price: "₹350", measurement: "650ML", subCategory: "Bottled Beer", featured: true },
      { name: "Corona", price: "₹280", measurement: "330ML", subCategory: "Bottled Beer" },
      { name: "Carlsberg Elephant", price: "₹350", measurement: "650ML", subCategory: "Bottled Beer" },
      { name: "Carlsberg Smooth", price: "₹325", measurement: "650ML", subCategory: "Bottled Beer" },
      { name: "Tuborg Premium", price: "₹170/270", measurement: "330ML/650ML", subCategory: "Bottled Beer" },
      { name: "Tuborg Strong", price: "₹170/280", measurement: "330ML/650ML", subCategory: "Bottled Beer" },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails",
    heroImage: "/bar/cocktail_hero.png",
    heroTitle: "The Cocktails",
    heroDescription: "Theatrical mixology where chemistry meets celestial artistry — flame-kissed, shaken, and stirred.",
    items: [
      // CLASSIC
      { name: "Gin & Tonic", price: "₹385", measurement: "Standard", subCategory: "Classic Cocktails" },
      { name: "Tom Collins", price: "₹325", measurement: "Standard", subCategory: "Classic Cocktails" },
      { name: "Sangria (Red/White)", price: "₹345", measurement: "Standard", subCategory: "Classic Cocktails" },
      { name: "Cuba Libre", price: "₹350", measurement: "Standard", subCategory: "Classic Cocktails" },
      { name: "Daiquiri", price: "₹350", measurement: "Standard", subCategory: "Classic Cocktails" },
      { name: "Mojito", price: "₹345", measurement: "Standard", subCategory: "Classic Cocktails", featured: true },
      { name: "Tequila Sunrise", price: "₹475", measurement: "Standard", subCategory: "Classic Cocktails", featured: true },
      { name: "White Russian", price: "₹385", measurement: "Standard", subCategory: "Classic Cocktails" },
      { name: "Sex on the Beach", price: "₹385", measurement: "Standard", subCategory: "Classic Cocktails" },
      { name: "Cosmopolitan", price: "₹385", measurement: "Standard", subCategory: "Classic Cocktails" },
      // SIGNATURE
      { name: "Jamugi", price: "₹450", measurement: "Standard", subCategory: "Signature Cocktails", featured: true },
      { name: "Mintisa", price: "₹450", measurement: "Standard", subCategory: "Signature Cocktails" },
      { name: "Port Authority", price: "₹450", measurement: "Standard", subCategory: "Signature Cocktails" },
      { name: "Beergarita", price: "₹565", measurement: "Standard", subCategory: "Signature Cocktails", featured: true },
      { name: "Shandy", price: "₹390", measurement: "Standard", subCategory: "Signature Cocktails" },
      { name: "Electric Iced Tea", price: "₹545", measurement: "Standard", subCategory: "Signature Cocktails" },
      { name: "Cherry Bomb", price: "₹450", measurement: "Standard", subCategory: "Signature Cocktails" },
      { name: "Ocean's Flame", price: "₹590", measurement: "Standard", subCategory: "Signature Cocktails", featured: true, image: "/bar/oceans_flame.png" },
      { name: "Luna Special (Passion)", price: "₹490", measurement: "Standard", subCategory: "Signature Cocktails", featured: true },
      { name: "Sky Hawaiian", price: "₹425", measurement: "Standard", subCategory: "Signature Cocktails" },
      // MARTINIS
      { name: "Pomegranate Martini", price: "₹355", measurement: "Standard", subCategory: "Martinis" },
      { name: "Jalapeno Martini", price: "₹350", measurement: "Standard", subCategory: "Martinis" },
      { name: "Basil Lemongrass Martini", price: "₹355", measurement: "Standard", subCategory: "Martinis", featured: true },
      { name: "Dry Martini", price: "₹325", measurement: "Standard", subCategory: "Martinis" },
      // MARGARITAS
      { name: "Exotic Margarita", price: "₹545", measurement: "Standard", subCategory: "Margaritas", featured: true },
      { name: "Golden Margarita", price: "₹545", measurement: "Standard", subCategory: "Margaritas" },
      { name: "Classic Margarita", price: "₹525", measurement: "Standard", subCategory: "Margaritas" },
    ],
  },
  {
    id: "mocktails",
    label: "Mocktails",
    heroImage: "/bar/virgin_mojito.png",
    heroTitle: "Mocktails",
    heroDescription: "Refreshing alcohol-free fusions that capture the essence of the lunar tide.",
    items: [
      // MOJITOS
      { name: "Virgin Mojito", price: "₹185", measurement: "Standard", subCategory: "Mojitos", image: "/bar/virgin_mojito.png" },
      { name: "Tangerine Mojito", price: "₹210", measurement: "Standard", subCategory: "Mojitos" },
      { name: "Watermelon Mojito", price: "₹210", measurement: "Standard", subCategory: "Mojitos", featured: true },
      { name: "Green Apple Mojito", price: "₹210", measurement: "Standard", subCategory: "Mojitos" },
      // LUNA CHILLERS
      { name: "Lychee Orbit", price: "₹235", measurement: "Standard", subCategory: "Luna Chillers", featured: true },
      { name: "Passion Delight", price: "₹210", measurement: "Standard", subCategory: "Luna Chillers" },
      { name: "Guava Marry", price: "₹210", measurement: "Standard", subCategory: "Luna Chillers" },
      { name: "Shirley Temple", price: "₹210", measurement: "Standard", subCategory: "Luna Chillers" },
      { name: "Bubbly Brut", price: "₹245", measurement: "Standard", subCategory: "Luna Chillers", featured: true },
      { name: "Strawberry Basil Lemonade", price: "₹245", measurement: "Standard", subCategory: "Luna Chillers" },
      { name: "Cranberry Cooler", price: "₹245", measurement: "Standard", subCategory: "Luna Chillers" },
      { name: "Minty Melon", price: "₹245", measurement: "Standard", subCategory: "Luna Chillers" },
      // MOONLIT SIP
      { name: "Strawberry Cooler", price: "₹245", measurement: "Standard", subCategory: "Moonlit Sip" },
      { name: "Luna Light", price: "₹250", measurement: "Standard", subCategory: "Moonlit Sip", featured: true },
      { name: "Fruit Punch", price: "₹225", measurement: "Standard", subCategory: "Moonlit Sip" },
      { name: "Vanilla Mix Fruit Smoothie", price: "₹265", measurement: "Standard", subCategory: "Moonlit Sip" },
      { name: "Mix Berry Smoothie", price: "₹265", measurement: "Standard", subCategory: "Moonlit Sip" },
      { name: "Monster Milkshake", price: "₹285", measurement: "Standard", subCategory: "Moonlit Sip", featured: true },
      { name: "Oreo Milkshake", price: "₹275", measurement: "Standard", subCategory: "Moonlit Sip" },
      // COFFEE
      { name: "Café Frappé", price: "₹225", measurement: "Standard", subCategory: "Coffee Drinks" },
      { name: "Choco Frappé", price: "₹225", measurement: "Standard", subCategory: "Coffee Drinks" },
      { name: "Devil Zone", price: "₹235", measurement: "Standard", subCategory: "Coffee Drinks" },
      { name: "Irish Frappé", price: "₹235", measurement: "Standard", subCategory: "Coffee Drinks" },
      { name: "Affogato", price: "₹225", measurement: "Standard", subCategory: "Coffee Drinks", featured: true },
    ],
  },
  {
    id: "pitchers-more",
    label: "Pitchers & More",
    heroImage: "/bar/celestial_sips.png",
    heroTitle: "Pitchers & More",
    heroDescription: "Shared experiences designed for cosmic gatherings and lunar celebrations.",
    items: [
      // MOCKTAIL PITCHERS
      { name: "Luna Mix Mojito", price: "₹680", measurement: "Pitcher", subCategory: "Mocktail Pitchers" },
      { name: "Luna Harvest", price: "₹725", measurement: "Pitcher", subCategory: "Mocktail Pitchers", featured: true },
      // COCKTAIL PITCHERS
      { name: "Long Island Iced Tea", price: "₹1345", measurement: "Pitcher", subCategory: "Cocktail Pitchers", featured: true, image: "/bar/celestial_sips.png" },
      { name: "Celestial Sips", price: "₹1275", measurement: "Pitcher", subCategory: "Cocktail Pitchers", featured: true },
      { name: "Gin Farm", price: "₹1275", measurement: "Pitcher", subCategory: "Cocktail Pitchers" },
      // SHOOTERS
      { name: "B-52", price: "₹545", measurement: "60ml", subCategory: "Shooters", image: "/bar/b52_shooter.png", featured: true },
      { name: "B-55", price: "₹545", measurement: "60ml", subCategory: "Shooters" },
      { name: "Kamikaze", price: "₹295", measurement: "60ml", subCategory: "Shooters" },
      { name: "Brain Haemorrhage", price: "₹545", measurement: "60ml", subCategory: "Shooters", featured: true },
      { name: "Sweet Kiss", price: "₹345", measurement: "60ml", subCategory: "Shooters" },
      { name: "Bubbly Shoot", price: "₹345", measurement: "60ml", subCategory: "Shooters" },
      { name: "Kickstart", price: "₹345", measurement: "60ml", subCategory: "Shooters" },
      // NON-ALCOHOLIC
      { name: "Energy Drink", price: "₹175", measurement: "Unit", subCategory: "Non-Alcoholic" },
      { name: "Bottled Water", price: "₹20", measurement: "Unit", subCategory: "Non-Alcoholic" },
      { name: "Tonic Water", price: "₹80", measurement: "Unit", subCategory: "Non-Alcoholic" },
      { name: "Ginger Ale", price: "₹80", measurement: "Unit", subCategory: "Non-Alcoholic" },
      { name: "Fresh Lime Water/Soda", price: "₹110", measurement: "Unit", subCategory: "Non-Alcoholic" },
      { name: "Packaged Fruit Juices", price: "₹110", measurement: "Unit", subCategory: "Non-Alcoholic" },
      { name: "Aerated Beverage", price: "₹40", measurement: "Unit", subCategory: "Non-Alcoholic" },
    ],
  },
];
