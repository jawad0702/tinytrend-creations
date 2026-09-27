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
  whatsapp: "917708481747", // India country code +91, no spaces
  instagram: "tinytrend_creations123",
  instagramUrl: "https://www.instagram.com/tinytrend_creations123/",
  deliveryText: "Currently serving Trichy. Tamil Nadu-wide delivery can be enabled later.",
  currency: "₹"
};

const CATEGORIES = [
  {
    id: "phone-cases",
    name: "Phone Cases",
    description: "Personalized cases for your style",
    image: "images/phone-cases.svg"
  },
  {
    id: "hair-accessories",
    name: "Hair Accessories",
    description: "Cute clips, bands and more",
    image: "images/hair-accessories.svg"
  },
  {
    id: "decorative-lights",
    name: "Decorative Lights",
    description: "Warm lights for special spaces",
    image: "images/decorative-lights.svg"
  },
  {
    id: "unique-gifts",
    name: "Unique Gifts",
    description: "Thoughtful gifts for every occasion",
    image: "images/unique-gifts.svg"
  }
];

const PRODUCTS = [
  {
    id: 1,
    name: "Custom Floral Phone Case",
    category: "phone-cases",
    price: 399,
    image: "", // Example: "images/floral-phone-case.jpg"
    emoji: "📱"
  },
  {
    id: 2,
    name: "Pastel Butterfly Hair Clip",
    category: "hair-accessories",
    price: 99,
    image: "",
    emoji: "🎀"
  },
  {
    id: 3,
    name: "Warm Fairy Light Set",
    category: "decorative-lights",
    price: 299,
    image: "",
    emoji: "💡"
  },
  {
    id: 4,
    name: "Personalized Gift Box",
    category: "unique-gifts",
    price: 499,
    image: "",
    emoji: "🎁"
  }
];
