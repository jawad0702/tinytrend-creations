/*
  TINYTREND CREATIONS - EASY EDIT FILE
  ------------------------------------
  You can edit business details and products here.
  Prices below are ONLY EXAMPLES. Replace them with your real prices.

  To add a product:
  1. Copy one product block.
  2. Change id, name, category, price and image.
  3. Put the product image inside the images folder.
  4. Use the image filename, e.g. "butterfly-clip.jpg".
*/

const STORE = {
  name: "TinyTrend Creations",
  currency: "₹",
  whatsapp: "917708481747",
  instagramUrl: "https://www.instagram.com/tinytrend_creations123/",
  location: "Trichy",
  delivery: "Currently available in Trichy"
};

const CATEGORIES = [
  {
    id: "phone-cases",
    name: "Phone Cases",
    description: "Stylish crochet phone cases",
    image: "images/phone-cases.svg"
  },
  {
    id: "hair-bands",
    name: "Hair Bands",
    description: "Cute and stylish hair bands",
    image: "images/hair-accessories.svg"
  },
  {
    id: "bouquets",
    name: "Bouquets",
    description: "Beautiful handmade bouquets",
    image: "images/unique-gifts.svg"
  },
  {
    id: "hair-clutches",
    name: "Hair Clutches",
    description: "Trendy hair clutches for every style",
    image: "images/hair-accessories.svg"
  },
  {
    id: "hair-pins",
    name: "Hair Pins",
    description: "Cute pins for your everyday look",
    image: "images/hair-accessories.svg"
  },
  {
    id: "key-chains",
    name: "Key Chains",
    description: "Personalized and stylish key chains",
    image: "images/unique-gifts.svg"
  }
];

const PRODUCTS = [
  {
    id: 1,
    name: "Burgundy Bow Crochet Phone Case",
    price: 400,
    category: "phone-cases",
    image: "images/phone-case-burgundy.jpeg"
  },
  {
    id: 2,
    name: "Pink Bow Crochet Phone Case",
    price: 400,
    category: "phone-cases",
    image: "images/phone-case-pink.jpeg"
  },
  {
    id: 3,
    name: "Red Floral Crochet Hair Band Set",
    price: 210,
    category: "hair-bands",
    image: "images/red-floral-hair-band.jpeg"
  },
  {
    id: 4,
    name: "Pink Floral Crochet Hair Band Set",
    price: 210,
    category: "hair-bands",
    image: "images/pink-floral-hair-band.jpeg"
  },
  {
    id: 5,
    name: "Pink Bunny Ear Hair Band",
    price: 180,
    category: "hair-bands",
    image: "images/pink-bunny-hair-band.jpeg"
  },
  {
    id: 6,
    name: "Purple Flower Pot",
    price: 160,
    category: "bouquets",
    image: "images/purple-flower-pot.jpeg"
  },
  {
    id: 7,
    name: "Lavender Flower Hair Clip",
    price: 60,
    category: "hair-pins",
    image: "images/lavender-flower-hair-clip.jpeg"
  },
  {
    id: 8,
    name: "Blue Flower Bouquet",
    price: 190,
    category: "bouquets",
    image: "images/blue-flower-bouquet.jpeg"
  },
  {
    id: 9,
    name: "Butterfly Flower Bouquet",
    price: 210,
    category: "bouquets",
    image: "images/butterfly-flower-bouquet.jpeg"
  },
  {
    id: 10,
    name: "Lavender Flower Bouquet",
    price: 310,
    category: "bouquets",
    image: "images/lavender-flower-bouquet.jpeg"
  },
  {
    id: 11,
    name: "Pink Bow Hair Band",
    price: 120,
    category: "hair-bands",
    image: "images/pink-bow-hair-band.jpeg"
  },
  {
    id: 12,
    name: "Pink & Red Bunny Ear Hair Band Set-1pc",
    price: 120,
    category: "hair-bands",
    image: "images/pink-red-bunny-ear-hair-band-set-1pc.jpeg"
  },
  {
    id: 13,
    name: "Colorful Flower Hair Clips",
    price: 30,
    category: "hair-pins",
    image: "images/colorful-flower-hair-clips.jpeg"
  },
  {
    id: 14,
    name: "Purple Flower Bouquet",
    price: 170,
    category: "bouquets",
    image: "images/purple-flower-bouquet.jpeg"
  },
  {
    id: 15,
    name: "Pink Flower Bouquet",
    price: 170,
    category: "bouquets",
    image: "images/pink-flower-bouquet.jpeg"
  },
  {
    id: 16,
    name: "Red Bunny Ear Hair Band",
    price: 180,
    category: "hair-bands",
    image: "images/red-bunny-ear-hair-band.jpeg"
  },
  {
    id: 17,
    name: "Pink Flower Bow Hair Band",
    price: 190,
    category: "hair-bands",
    image: "images/pink-flower-bow-hair-band.jpeg"
  },
  {
    id: 18,
    name: "Red Bunny Ear Hair Band",
    price: 180,
    category: "hair-bands",
    image: "images/red-bunny-ear-hair-band-2.jpeg"
  },
  {
    id: 19,
    name: "Lavender Flower Bouquet",
    price: 310,
    category: "bouquets",
    image: "images/lavender-flower-bouquet-2.jpeg"
  },
  {
    id: 20,
    name: "Blue Flower Hair Band",
    price: 180,
    category: "hair-bands",
    image: "images/blue-flower-hair-band.jpeg"
  },
  {
    id: 21,
    name: "Purple Flower Bouquet",
    price: 200,
    category: "bouquets",
    image: "images/purple-flower-bouquet-2.jpeg"
  },
  {
    id: 22,
    name: "Colorful Flower Key Chain",
    price: 50,
    category: "key-chains",
    image: "images/colorful-flower-key-chain.jpeg"
  },
  {
    id: 23,
    name: "Yellow Flower Bouquet",
    price: 150,
    category: "bouquets",
    image: "images/yellow-flower-bouquet.jpeg"
  },
  {
    id: 24,
    name: "Blue & Pink Bunny Ear Hair Band",
    price: 120,
    category: "hair-bands",
    image: "images/blue-pink-bunny-ear-hair-band.jpeg"
  },
  {
    id: 25,
    name: "Blue Butterfly Hair Band",
    price: 170,
    category: "hair-bands",
    image: "images/blue-butterfly-hair-band.jpeg"
  },
  {
    id: 26,
    name: "Yellow Flower Hair Pin Set",
    price: 170,
    category: "hair-pins",
    image: "images/yellow-flower-hair-pin-set.jpeg"
  },
  {
    id: 27,
    name: "Pink Flower Bouquet",
    price: 170,
    category: "bouquets",
    image: "images/pink-flower-bouquet-2.jpeg"
  },
  {
    id: 28,
    name: "Multicolor Flower Hair Pin",
    price: 120,
    category: "hair-pins",
    image: "images/multicolor-flower-hair-pin.jpeg"
  },
  {
    id: 29,
    name: "Blue Flower Hair Clutch",
    price: 50,
    category: "hair-clutches",
    image: "images/blue-flower-hair-clutch.jpeg"
  },
  {
    id: 30,
    name: "Red Flower Hair Pin",
    price: 60,
    category: "hair-pins",
    image: "images/red-flower-hair-pin.jpeg"
  },
  {
    id: 31,
    name: "Yellow Flower Hair Pin",
    price: 50,
    category: "hair-pins",
    image: "images/yellow-flower-hair-pin-2.jpeg"
  },
  {
    id: 32,
    name: "Yellow Flower Bouquet",
    price: 270,
    category: "bouquets",
    image: "images/yellow-flower-bouquet-2.jpeg"
  },
  {
    id: 33,
    name: "Purple Flower Hair Pin",
    price: 50,
    category: "hair-pins",
    image: "images/purple-flower-hair-pin.jpeg"
  },
  {
    id: 34,
    name: "Red Bunny Ear Hair Band",
    price: 170,
    category: "hair-bands",
    image: "images/red-bunny-ear-hair-band-3.jpeg"
  },
  {
    id: 35,
    name: "Floral Hair Pin Set",
    price: 120,
    category: "hair-pins",
    image: "images/floral-hair-pin-set.jpeg"
  },
  {
    id: 36,
    name: "Yellow Flower Hair Clip",
    price: 120,
    category: "hair-pins",
    image: "images/yellow-flower-hair-clip.jpeg"
  },
  {
    id: 37,
    name: "Yellow Floral Hair Band",
    price: 120,
    category: "hair-bands",
    image: "images/yellow-floral-hair-band-2.jpeg"
  },
  {
    id: 38,
    name: "Yellow Floral Hair Band Set",
    price: 120,
    category: "hair-bands",
    image: "images/yellow-floral-hair-band-set.jpeg"
  },
  {
    id: 39,
    name: "Purple Floral Hair Band",
    price: 120,
    category: "hair-bands",
    image: "images/purple-floral-hair-band.jpeg"
  },
  {
    id: 40,
    name: "Pink Flower Hair Band",
    price: 120,
    category: "hair-bands",
    image: "images/pink-flower-hair-band-3.jpeg"
  },
  {
    id: 41,
    name: "Pink Floral Hair Band",
    price: 120,
    category: "hair-bands",
    image: "images/pink-floral-hair-band-2.jpeg"
  },
  {
    id: 42,
    name: "White & Red Bunny Hair Band",
    price: 120,
    category: "hair-bands",
    image: "images/white-red-bunny-hair-band.jpeg"
  }
];
