export interface BarMenuItem {
  category: string;
  subCategory: string;
  name: string;
  measurement: string;
  price: string;
  featured: boolean;
}

export const barMenuData: Record<string, BarMenuItem[]> = {
  "Wines & Beers": [
    {
      "category": "Wines & Beers",
      "subCategory": "WINE WHITE",
      "name": "Big Banian",
      "measurement": "150ml/750ml",
      "price": "365/1300",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "WINE WHITE",
      "name": "Sula Sauvignon Blanc",
      "measurement": "150ml/750ml",
      "price": "370/1400",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "WINE RED",
      "name": "Big Banian",
      "measurement": "150ml/750ml",
      "price": "385/1350",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "WINE RED",
      "name": "Sula Shiraz",
      "measurement": "150ml/750ml",
      "price": "385/1450",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "FLAVORED DRINKS",
      "name": "Brezzer (flavor)",
      "measurement": "Single",
      "price": "200",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "FLAVORED DRINKS",
      "name": "Bacardi + (flavor)",
      "measurement": "Single",
      "price": "180",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "BOTTLED BEER",
      "name": "Kingfisher Premium",
      "measurement": "330ML/650ML",
      "price": "170/255",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "BOTTLED BEER",
      "name": "Kingfisher Strong",
      "measurement": "330ML/650ML",
      "price": "160/270",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "BOTTLED BEER",
      "name": "Budweiser Premium",
      "measurement": "330ML/650ML",
      "price": "225/325",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "BOTTLED BEER",
      "name": "Budweiser Magnum",
      "measurement": "330ML/650ML",
      "price": "225/315",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "BOTTLED BEER",
      "name": "Heineken",
      "measurement": "650ML",
      "price": "350",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "BOTTLED BEER",
      "name": "Corona",
      "measurement": "330ML",
      "price": "280",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "BOTTLED BEER",
      "name": "Carlsberg Elepha",
      "measurement": "650ML",
      "price": "350",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "BOTTLED BEER",
      "name": "Carlsberg Smooth",
      "measurement": "650ML",
      "price": "325",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "BOTTLED BEER",
      "name": "Tuborg Premium",
      "measurement": "330ML/650ML",
      "price": "170/270",
      "featured": false
    },
    {
      "category": "Wines & Beers",
      "subCategory": "BOTTLED BEER",
      "name": "Tuborg Strong",
      "measurement": "330ML/650ML",
      "price": "170/280",
      "featured": false
    }
  ],
  "Premium Spirits": [
    {
      "category": "Premium Spirits",
      "subCategory": "BLENDED WHISKY",
      "name": "Jw Red Label",
      "measurement": "30ML/180ML/750ML",
      "price": "200/1200/4850",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "BLENDED WHISKY",
      "name": "Jw Black Label",
      "measurement": "30ML/180ML/750ML",
      "price": "290/1740/7250",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "BLENDED WHISKY",
      "name": "Jw Double Black Label",
      "measurement": "30ML/180ML/750ML",
      "price": "525",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "BLENDED WHISKY",
      "name": "Chivas Regal",
      "measurement": "30ML/180ML/750ML",
      "price": "495",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "BLENDED WHISKY",
      "name": "Ballantine’s",
      "measurement": "30ML/180ML/750ML",
      "price": "325",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "BLENDED WHISKY",
      "name": "J&B Rare",
      "measurement": "30ML/180ML/750ML",
      "price": "345",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "SINGLE MALT WHISKY",
      "name": "Amrut Singlemalt",
      "measurement": "30ML/180ML/750ML",
      "price": "285",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "SINGLE MALT WHISKY",
      "name": "Indri Single Malt",
      "measurement": "30ML/180ML/750ML",
      "price": "345",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "SINGLE MALT WHISKY",
      "name": "Paul John Nirvana",
      "measurement": "30ML/180ML/750ML",
      "price": "285",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "BOURBON & IRISH WHISKEY",
      "name": "Jack Daniel’s Tennessee Whiskey",
      "measurement": "30ML/180ML/750ML",
      "price": "260/1520/6300",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "BOURBON & IRISH WHISKEY",
      "name": "Jim Beam Bourbon",
      "measurement": "30ML/180ML/750ML",
      "price": "285",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "BOURBON & IRISH WHISKEY",
      "name": "Jameson Irish Whiskey",
      "measurement": "30ML/180ML/750ML",
      "price": "325",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "IMFL WHISKEY",
      "name": "Black & White",
      "measurement": "30ML/180ML/750ML",
      "price": "140/840/3380",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "IMFL WHISKEY",
      "name": "Teachers 50",
      "measurement": "30ML/180ML/750ML",
      "price": "190/1130/4690",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "IMFL WHISKEY",
      "name": "Teachers Highland",
      "measurement": "30ML/180ML/750ML",
      "price": "140/820/3350",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "IMFL WHISKEY",
      "name": "Blenders Pride",
      "measurement": "30ML/180ML/750ML",
      "price": "100/600/2450",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "IMFL WHISKEY",
      "name": "Antiquity Blue",
      "measurement": "30ML/180ML/750ML",
      "price": "175",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "IMFL WHISKEY",
      "name": "Signature Rare Aged",
      "measurement": "30ML/180ML/750ML",
      "price": "160/630/3910",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "IMFL WHISKEY",
      "name": "Black Dog",
      "measurement": "30ML/180ML/750ML",
      "price": "140/840/3380",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "IMFL WHISKEY",
      "name": "100 Pipers",
      "measurement": "30ML/180ML/750ML",
      "price": "140/840/3380",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "IMFL WHISKEY",
      "name": "Vat 69",
      "measurement": "30ML/180ML/750ML",
      "price": "140/840/3380",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "VODKA",
      "name": "Smirnoff",
      "measurement": "30ML/180ML/750ML",
      "price": "100/620/2470",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "VODKA",
      "name": "Smirnoff Green Apple",
      "measurement": "30ML/180ML/750ML",
      "price": "110/630/2570",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "VODKA",
      "name": "Absolut",
      "measurement": "30ML/180ML/750ML",
      "price": "245",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "VODKA",
      "name": "Magic Moments",
      "measurement": "30ML/180ML/750ML",
      "price": "70/420/1700",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "VODKA",
      "name": "Romanov",
      "measurement": "30ML/180ML/750ML",
      "price": "60/330/1350",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "VODKA",
      "name": "Grey Goose",
      "measurement": "30ML/180ML/750ML",
      "price": "385",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "GIN",
      "name": "Greater Than",
      "measurement": "30ML/180ML/750ML",
      "price": "195",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "GIN",
      "name": "Beefeater",
      "measurement": "30ML/180ML/750ML",
      "price": "245",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "GIN",
      "name": "Tanqueray",
      "measurement": "30ML/180ML/750ML",
      "price": "285",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "GIN",
      "name": "Bombay Sapphire",
      "measurement": "30ML/180ML/750ML",
      "price": "285",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "GIN",
      "name": "Jaisalmer Indian Craft Gin",
      "measurement": "30ML/180ML/750ML",
      "price": "275",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "DARK & WHITE RUM",
      "name": "Old Monk",
      "measurement": "30ML/180ML/750ML",
      "price": "50/260/1080",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "DARK & WHITE RUM",
      "name": "Captain Morgan Black",
      "measurement": "30ML/180ML/750ML",
      "price": "95",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "DARK & WHITE RUM",
      "name": "Bacardi Black",
      "measurement": "30ML/180ML/750ML",
      "price": "100/620/2470",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "DARK & WHITE RUM",
      "name": "Bacardi Superior",
      "measurement": "30ML/180ML/750ML",
      "price": "100/620/2470",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "DARK & WHITE RUM",
      "name": "Old Monk White",
      "measurement": "30ML/180ML/750ML",
      "price": "85",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "DARK & WHITE RUM",
      "name": "Bacardi Limon",
      "measurement": "30ML/180ML/750ML",
      "price": "100/620/2470",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "TEQUILA",
      "name": "José Cuervo",
      "measurement": "30ML/180ML/750ML",
      "price": "340",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "TEQUILA",
      "name": "Patron",
      "measurement": "30ML/180ML/750ML",
      "price": "510",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "TEQUILA",
      "name": "Don Angle",
      "measurement": "30ML/180ML/750ML",
      "price": "290",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "TEQUILA",
      "name": "Camino Gold",
      "measurement": "30ML/180ML/750ML",
      "price": "295",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "TEQUILA",
      "name": "Desmondji",
      "measurement": "30ML/180ML/750ML",
      "price": "250",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "BRANDY & COGNAC",
      "name": "Morpheus Blue",
      "measurement": "30ML/180ML/750ML",
      "price": "95/560/2254",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "BRANDY & COGNAC",
      "name": "Morpheus",
      "measurement": "30ML/180ML/750ML",
      "price": "95/560/2254",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "BRANDY & COGNAC",
      "name": "Mansion House",
      "measurement": "30ML/180ML/750ML",
      "price": "70/350/1350",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "LIQUEUR",
      "name": "Baileys Irish Cream",
      "measurement": "30ML",
      "price": "395",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "LIQUEUR",
      "name": "Kahlúa",
      "measurement": "30ML",
      "price": "265",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "LIQUEUR",
      "name": "Sambuca Molinari",
      "measurement": "30ML",
      "price": "165",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "LIQUEUR",
      "name": "Jagermeister",
      "measurement": "30ML",
      "price": "395",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "LIQUEUR",
      "name": "Campiri",
      "measurement": "30ML",
      "price": "265",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "LIQUEUR",
      "name": "Martini Bianco",
      "measurement": "30ML",
      "price": "165",
      "featured": false
    },
    {
      "category": "Premium Spirits",
      "subCategory": "LIQUEUR",
      "name": "Martini Dry",
      "measurement": "30ML",
      "price": "165",
      "featured": false
    }
  ],
  "The Mixology Lab": [
    {
      "category": "The Mixology Lab",
      "subCategory": "SHOOTER",
      "name": "B-52",
      "measurement": "60ml",
      "price": "545",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SHOOTER",
      "name": "B-55",
      "measurement": "60ml",
      "price": "545",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SHOOTER",
      "name": "KAMIKAZE",
      "measurement": "60ml",
      "price": "295",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SHOOTER",
      "name": "BRAIN HAEMORRHAGE",
      "measurement": "60ml",
      "price": "545",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SHOOTER",
      "name": "SWEET KISS",
      "measurement": "60ml",
      "price": "345",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SHOOTER",
      "name": "BUBBLY SHOOT",
      "measurement": "60ml",
      "price": "345",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SHOOTER",
      "name": "KICKSTART",
      "measurement": "60ml",
      "price": "345",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "CLASSIC COCKTAIL",
      "name": "GIN & TONIC",
      "measurement": "Standard",
      "price": "385",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "CLASSIC COCKTAIL",
      "name": "TOM COLLINS",
      "measurement": "Standard",
      "price": "325",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "CLASSIC COCKTAIL",
      "name": "SANGRIA (RED/WHITE)",
      "measurement": "Standard",
      "price": "345",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "CLASSIC COCKTAIL",
      "name": "CUBA LIBRE",
      "measurement": "Standard",
      "price": "350",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "CLASSIC COCKTAIL",
      "name": "DAIQUIRI",
      "measurement": "Standard",
      "price": "350",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "CLASSIC COCKTAIL",
      "name": "MOJITO",
      "measurement": "Standard",
      "price": "345",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "CLASSIC COCKTAIL",
      "name": "TEQUILA SUNRISE",
      "measurement": "Standard",
      "price": "475",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "CLASSIC COCKTAIL",
      "name": "WHITE RUSSIAN",
      "measurement": "Standard",
      "price": "385",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "CLASSIC COCKTAIL",
      "name": "SEX ON THE BEACH",
      "measurement": "Standard",
      "price": "385",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "CLASSIC COCKTAIL",
      "name": "COSMOPOLITAN",
      "measurement": "Standard",
      "price": "385",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SIGNATURE COCKTAIL",
      "name": "JAMUGI",
      "measurement": "Standard",
      "price": "450",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SIGNATURE COCKTAIL",
      "name": "MINTISA",
      "measurement": "Standard",
      "price": "450",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SIGNATURE COCKTAIL",
      "name": "PORT AUTHORITY",
      "measurement": "Standard",
      "price": "450",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SIGNATURE COCKTAIL",
      "name": "BEERGARITA",
      "measurement": "Standard",
      "price": "565",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SIGNATURE COCKTAIL",
      "name": "SHANDY",
      "measurement": "Standard",
      "price": "390",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SIGNATURE COCKTAIL",
      "name": "ELECTRIC ICED TEA",
      "measurement": "Standard",
      "price": "545",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SIGNATURE COCKTAIL",
      "name": "CHERRY BOMB",
      "measurement": "Standard",
      "price": "450",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SIGNATURE COCKTAIL",
      "name": "OCEAN'S FLAME (LUNA SPECIAL)",
      "measurement": "Standard",
      "price": "590",
      "featured": true
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SIGNATURE COCKTAIL",
      "name": "LUNA SPECIAL (Passion)",
      "measurement": "Standard",
      "price": "490",
      "featured": true
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "SIGNATURE COCKTAIL",
      "name": "SKY HAWAIIAN",
      "measurement": "Standard",
      "price": "425",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "MARTINI’S",
      "name": "POMEGRANATE MARTINI",
      "measurement": "Standard",
      "price": "355",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "MARTINI’S",
      "name": "JALAPENO MARTINI",
      "measurement": "Standard",
      "price": "350",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "MARTINI’S",
      "name": "BASIL LEMONGRASS MARTINI",
      "measurement": "Standard",
      "price": "355",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "MARTINI’S",
      "name": "DRY MARTINI",
      "measurement": "Standard",
      "price": "325",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "MARGARITA’S",
      "name": "EXOTIC MARGARITA",
      "measurement": "Standard",
      "price": "545",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "MARGARITA’S",
      "name": "GOLDEN MARGARITA",
      "measurement": "Standard",
      "price": "545",
      "featured": false
    },
    {
      "category": "The Mixology Lab",
      "subCategory": "MARGARITA’S",
      "name": "CLASSIC MARGARITA",
      "measurement": "Standard",
      "price": "525",
      "featured": false
    }
  ],
  "Lunar Chillers": [
    {
      "category": "Lunar Chillers",
      "subCategory": "MOCKTAIL - MOJITOS",
      "name": "VIRGIN MOJITO",
      "measurement": "Standard",
      "price": "185",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "MOCKTAIL - MOJITOS",
      "name": "TANGERINE MOJITO",
      "measurement": "Standard",
      "price": "210",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "MOCKTAIL - MOJITOS",
      "name": "WATERMELON MOJITO",
      "measurement": "Standard",
      "price": "210",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "MOCKTAIL - MOJITOS",
      "name": "GREEN APPLE MOJITO",
      "measurement": "Standard",
      "price": "210",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "LUNA CHILLERS",
      "name": "LYCHEE ORBIT (Luna Special)",
      "measurement": "Standard",
      "price": "235",
      "featured": true
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "LUNA CHILLERS",
      "name": "PASSION DELIGHT",
      "measurement": "Standard",
      "price": "210",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "LUNA CHILLERS",
      "name": "GUAVA MARRY",
      "measurement": "Standard",
      "price": "210",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "LUNA CHILLERS",
      "name": "SHIRLEY TEMPLE",
      "measurement": "Standard",
      "price": "210",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "LUNA CHILLERS",
      "name": "BUBBLY BRUT",
      "measurement": "Standard",
      "price": "245",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "LUNA CHILLERS",
      "name": "STRAWBERRY BASIL LEMONADE",
      "measurement": "Standard",
      "price": "245",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "LUNA CHILLERS",
      "name": "CRANBERRY COOLER",
      "measurement": "Standard",
      "price": "245",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "LUNA CHILLERS",
      "name": "MINTY MELLON",
      "measurement": "Standard",
      "price": "245",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "MOONLIT SIP",
      "name": "STRAWBERRY COOLER",
      "measurement": "Standard",
      "price": "245",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "MOONLIT SIP",
      "name": "LUNA LIGHT",
      "measurement": "Standard",
      "price": "250",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "MOONLIT SIP",
      "name": "FRUIT PUNCH",
      "measurement": "Standard",
      "price": "225",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "MOONLIT SIP",
      "name": "VANILLA MIX FRUIT SMOOTHIE",
      "measurement": "Standard",
      "price": "265",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "MOONLIT SIP",
      "name": "MIX BERRY SMOOTHIE",
      "measurement": "Standard",
      "price": "265",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "MOONLIT SIP",
      "name": "MONSTER MILKSHAKE",
      "measurement": "Standard",
      "price": "285",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "MOONLIT SIP",
      "name": "OREO MILK SHAKE",
      "measurement": "Standard",
      "price": "275",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "COFFEE DRINK",
      "name": "CAFE FRAPPE",
      "measurement": "Standard",
      "price": "225",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "COFFEE DRINK",
      "name": "CHOCO FRAPPE",
      "measurement": "Standard",
      "price": "225",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "COFFEE DRINK",
      "name": "DEVIL ZONE",
      "measurement": "Standard",
      "price": "235",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "COFFEE DRINK",
      "name": "IRISH FRAPPE",
      "measurement": "Standard",
      "price": "235",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "COFFEE DRINK",
      "name": "AFFOGATE",
      "measurement": "Standard",
      "price": "225",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "NON ALCOHOLIC BEVERAGES",
      "name": "Energy Drink",
      "measurement": "Unit",
      "price": "175",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "NON ALCOHOLIC BEVERAGES",
      "name": "Bottled Water",
      "measurement": "Unit",
      "price": "20",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "NON ALCOHOLIC BEVERAGES",
      "name": "Tonic Water",
      "measurement": "Unit",
      "price": "80",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "NON ALCOHOLIC BEVERAGES",
      "name": "Ginger Ale",
      "measurement": "Unit",
      "price": "80",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "NON ALCOHOLIC BEVERAGES",
      "name": "Fresh Lime Water/Soda",
      "measurement": "Unit",
      "price": "110",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "NON ALCOHOLIC BEVERAGES",
      "name": "Packaged Fruit Juices",
      "measurement": "Unit",
      "price": "110",
      "featured": false
    },
    {
      "category": "Lunar Chillers",
      "subCategory": "NON ALCOHOLIC BEVERAGES",
      "name": "Aerated Beverage",
      "measurement": "Unit",
      "price": "40",
      "featured": false
    }
  ],
  "Luna Gatherings": [
    {
      "category": "Luna Gatherings",
      "subCategory": "LUNA GATHERINGS - MOCKTAIL PITCHER",
      "name": "LUNA MIX MOJITO",
      "measurement": "Pitcher",
      "price": "680",
      "featured": false
    },
    {
      "category": "Luna Gatherings",
      "subCategory": "LUNA GATHERINGS - MOCKTAIL PITCHER",
      "name": "LUNA HARVEST",
      "measurement": "Pitcher",
      "price": "725",
      "featured": false
    },
    {
      "category": "Luna Gatherings",
      "subCategory": "LUNA GATHERINGS - COCKTAIL PITCHER",
      "name": "LONG ISLAND ICED TEA",
      "measurement": "Pitcher",
      "price": "1345",
      "featured": false
    },
    {
      "category": "Luna Gatherings",
      "subCategory": "LUNA GATHERINGS - COCKTAIL PITCHER",
      "name": "CELESTIAL SIPS",
      "measurement": "Pitcher",
      "price": "1275",
      "featured": false
    },
    {
      "category": "Luna Gatherings",
      "subCategory": "LUNA GATHERINGS - COCKTAIL PITCHER",
      "name": "GIN FARM",
      "measurement": "Pitcher",
      "price": "1275",
      "featured": false
    }
  ]
};
