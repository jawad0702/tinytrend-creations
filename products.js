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
  city: "Trichy",
  whatsapp: "917708481747",
  instagram: "tinytrend_creations123",
  instagramUrl: "https://www.instagram.com/tinytrend_creations123/",
  deliveryText: "Currently serving Trichy. Tamil Nadu-wide delivery can be enabled later.",
  currency: "₹"
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
    category: "phone-cases",
    price: 400,
    image: "images/phone-case-burgundy.jpeg",
    emoji: "📱"
  },
   {
    id: 2,
    name: "Pink Bow Crochet Phone Case",
    category: "phone-cases",
    price: 400,
    image: "images/phone-case-pink.jpeg",
    emoji: "📱"
  },
  {
    id: 3,
    name: "Red Floral Crochet Hair Band Set",
    category: "hair-bands",
    price: 210,
    image: "images/red-floral-hair-band.jpeg",
    emoji: "🌸"
  },
  {
    id: 4,
    name: "Pink Floral Crochet Hair Band Set",
    category: "hair-bands",
    price: 210,
    image: "images/pink-floral-hair-band.jpeg",
    emoji: "🌸"
  },
  {
    id: 5,
    name: "Pink Bunny Ear Hair Band",
    category: "hair-bands",
    price: 180,
    image: "images/pink-bunny-hair-band.jpeg",
    emoji: "🐰"
  }
];
