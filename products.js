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
  },
  const PRODUCTS = [
  {
    id: 6,
    name: "Purple Flower Pot",
    category: "bouquets",
    price: 160,
    image: "images/purple-flower-pot.jpeg",
    emoji: "🌸"
  },
  {
    id: 7,
    name: "Lavender Flower Hair Clip",
    category: "hair-pins",
    price: 60,
    image: "images/lavender-flower-hair-clip.jpeg",
    emoji: "🌸"
  },
  {
    id: 8,
    name: "Blue Flower Bouquet",
    category: "bouquets",
    price: 190,
    image: "images/blue-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 9,
    name: "Butterfly Flower Bouquet",
    category: "bouquets",
    price: 210,
    image: "images/butterfly-flower-bouquet.jpeg",
    emoji: "🦋"
  },
  {
    id: 10,
    name: "Lavender Flower Bouquet",
    category: "bouquets",
    price: 310,
    image: "images/lavender-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 11,
    name: "Pink Bow Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/pink-bow-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 12,
    name: "Pink & Red Bunny Ear Hair Band Set",
    category: "hair-bands",
    price: 120,
    image: "images/pink-red-bunny-hair-band-set.jpeg",
    emoji: "🎀"
  },
  {
    id: 13,
    name: "Colorful Flower Hair Clips",
    category: "hair-pins",
    price: 30,
    image: "images/colorful-flower-hair-clips.jpeg",
    emoji: "🌼"
  },
  {
    id: 14,
    name: "Purple Flower Bouquet",
    category: "bouquets",
    price: 170,
    image: "images/purple-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 15,
    name: "Pink Flower Bouquet",
    category: "bouquets",
    price: 170,
    image: "images/pink-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 16,
    name: "Red Bunny Ear Hair Band",
    category: "hair-bands",
    price: 180,
    image: "images/red-bunny-ear-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 17,
    name: "Pink Flower Bow Hair Band",
    category: "hair-bands",
    price: 190,
    image: "images/pink-flower-bow-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 18,
    name: "Red Bunny Ear Hair Band",
    category: "hair-bands",
    price: 180,
    image: "images/red-bunny-ear-hair-band-2.jpeg",
    emoji: "🎀"
  },
  {
    id: 19,
    name: "Lavender Flower Bouquet",
    category: "bouquets",
    price: 310,
    image: "images/lavender-flower-bouquet-2.jpeg",
    emoji: "💐"
  },
  {
    id: 20,
    name: "Blue Flower Hair Band",
    category: "hair-bands",
    price: 180,
    image: "images/blue-flower-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 21,
    name: "Purple Flower Bouquet",
    category: "bouquets",
    price: 200,
    image: "images/purple-flower-bouquet-2.jpeg",
    emoji: "💐"
  },
  {
    id: 22,
    name: "Colorful Flower Key Chain",
    category: "key-chains",
    price: 50,
    image: "images/colorful-flower-key-chain.jpeg",
    emoji: "🔑"
  },
  {
    id: 23,
    name: "Yellow Flower Bouquet",
    category: "bouquets",
    price: 150,
    image: "images/yellow-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 24,
    name: "Blue & Pink Bunny Ear Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/blue-pink-bunny-ear-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 25,
    name: "Blue Butterfly Hair Band",
    category: "hair-bands",
    price: 170,
    image: "images/blue-butterfly-hair-band.jpeg",
    emoji: "🦋"
  },
  {
    id: 26,
    name: "Yellow Flower Hair Pin Set",
    category: "hair-pins",
    price: 170,
    image: "images/yellow-flower-hair-pin-set.jpeg",
    emoji: "🌼"
  },
  {
    id: 27,
    name: "Pink Flower Bouquet",
    category: "bouquets",
    price: 170,
    image: "images/pink-flower-bouquet-2.jpeg",
    emoji: "💐"
  },
  {
    id: 28,
    name: "Multicolor Flower Hair Pin",
    category: "hair-pins",
    price: 120,
    image: "images/multicolor-flower-hair-pin.jpeg",
    emoji: "🌸"
  },
  {
    id: 29,
    name: "Blue Flower Hair Clutch",
    category: "hair-clutches",
    price: 50,
    image: "images/blue-flower-hair-clutch.jpeg",
    emoji: "🌸"
  },
  {
    id: 30,
    name: "Red Flower Hair Pin",
    category: "hair-pins",
    price: 60,
    image: "images/red-flower-hair-pin.jpeg",
    emoji: "🌹"
  },
  {
    id: 31,
    name: "Yellow Flower Hair Pin",
    category: "hair-pins",
    price: 50,
    image: "images/yellow-flower-hair-pin-2.jpeg",
    emoji: "🌼"
  },
  {
    id: 32,
    name: "Yellow Flower Bouquet",
    category: "bouquets",
    price: 270,
    image: "images/yellow-flower-bouquet-2.jpeg",
    emoji: "💐"
  },
  {
    id: 33,
    name: "Purple Flower Hair Pin",
    category: "hair-pins",
    price: 50,
    image: "images/purple-flower-hair-pin.jpeg",
    emoji: "🌸"
  },
  {
    id: 34,
    name: "Red Bunny Ear Hair Band",
    category: "hair-bands",
    price: 170,
    image: "images/red-bunny-ear-hair-band-3.jpeg",
    emoji: "🎀"
  },
  {
    id: 35,
    name: "Floral Hair Pin Set",
    category: "hair-pins",
    price: 120,
    image: "images/floral-hair-pin-set.jpeg",
    emoji: "🌸"
  },
  {
    id: 36,
    name: "Yellow Flower Hair Clip",
    category: "hair-pins",
    price: 120,
    image: "images/yellow-flower-hair-clip.jpeg",
    emoji: "🌼"
  },
  {
    id: 37,
    name: "Yellow Floral Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/yellow-floral-hair-band-2.jpeg",
    emoji: "🎀"
  },
  {
    id: 38,
    name: "Yellow Floral Hair Band Set",
    category: "hair-bands",
    price: 120,
    image: "images/yellow-floral-hair-band-set.jpeg",
    emoji: "🎀"
  },
  {
    id: 39,
    name: "Purple Floral Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/purple-floral-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 40,
    name: "Pink Flower Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/pink-flower-hair-band-3.jpeg",
    emoji: "🎀"
  },
  {
    id: 41,
    name: "Pink Floral Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/pink-floral-hair-band-2.jpeg",
    emoji: "🎀"
  },
  {
    id: 42,
    name: "White & Red Bunny Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/white-red-bunny-hair-band.jpeg",
    emoji: "🎀"
  },
  const PRODUCTS = [
  {
    id: 6,
    name: "Purple Flower Pot",
    category: "bouquets",
    price: 160,
    image: "images/purple-flower-pot.jpeg",
    emoji: "🌸"
  },
  {
    id: 7,
    name: "Lavender Flower Hair Clip",
    category: "hair-pins",
    price: 60,
    image: "images/lavender-flower-hair-clip.jpeg",
    emoji: "🌸"
  },
  {
    id: 8,
    name: "Blue Flower Bouquet",
    category: "bouquets",
    price: 190,
    image: "images/blue-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 9,
    name: "Butterfly Flower Bouquet",
    category: "bouquets",
    price: 210,
    image: "images/butterfly-flower-bouquet.jpeg",
    emoji: "🦋"
  },
  {
    id: 10,
    name: "Lavender Flower Bouquet",
    category: "bouquets",
    price: 310,
    image: "images/lavender-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 11,
    name: "Pink Bow Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/pink-bow-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 12,
    name: "Pink & Red Bunny Ear Hair Band Set",
    category: "hair-bands",
    price: 120,
    image: "images/pink-red-bunny-hair-band-set.jpeg",
    emoji: "🎀"
  },
  {
    id: 13,
    name: "Colorful Flower Hair Clips",
    category: "hair-pins",
    price: 30,
    image: "images/colorful-flower-hair-clips.jpeg",
    emoji: "🌼"
  },
  {
    id: 14,
    name: "Purple Flower Bouquet",
    category: "bouquets",
    price: 170,
    image: "images/purple-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 15,
    name: "Pink Flower Bouquet",
    category: "bouquets",
    price: 170,
    image: "images/pink-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 16,
    name: "Red Bunny Ear Hair Band",
    category: "hair-bands",
    price: 180,
    image: "images/red-bunny-ear-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 17,
    name: "Pink Flower Bow Hair Band",
    category: "hair-bands",
    price: 190,
    image: "images/pink-flower-bow-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 18,
    name: "Red Bunny Ear Hair Band",
    category: "hair-bands",
    price: 180,
    image: "images/red-bunny-ear-hair-band-2.jpeg",
    emoji: "🎀"
  },
  {
    id: 19,
    name: "Lavender Flower Bouquet",
    category: "bouquets",
    price: 310,
    image: "images/lavender-flower-bouquet-2.jpeg",
    emoji: "💐"
  },
  {
    id: 20,
    name: "Blue Flower Hair Band",
    category: "hair-bands",
    price: 180,
    image: "images/blue-flower-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 21,
    name: "Purple Flower Bouquet",
    category: "bouquets",
    price: 200,
    image: "images/purple-flower-bouquet-2.jpeg",
    emoji: "💐"
  },
  {
    id: 22,
    name: "Colorful Flower Key Chain",
    category: "key-chains",
    price: 50,
    image: "images/colorful-flower-key-chain.jpeg",
    emoji: "🔑"
  },
  {
    id: 23,
    name: "Yellow Flower Bouquet",
    category: "bouquets",
    price: 150,
    image: "images/yellow-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 24,
    name: "Blue & Pink Bunny Ear Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/blue-pink-bunny-ear-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 25,
    name: "Blue Butterfly Hair Band",
    category: "hair-bands",
    price: 170,
    image: "images/blue-butterfly-hair-band.jpeg",
    emoji: "🦋"
  },
  {
    id: 26,
    name: "Yellow Flower Hair Pin Set",
    category: "hair-pins",
    price: 170,
    image: "images/yellow-flower-hair-pin-set.jpeg",
    emoji: "🌼"
  },
  {
    id: 27,
    name: "Pink Flower Bouquet",
    category: "bouquets",
    price: 170,
    image: "images/pink-flower-bouquet-2.jpeg",
    emoji: "💐"
  },
  {
    id: 28,
    name: "Multicolor Flower Hair Pin",
    category: "hair-pins",
    price: 120,
    image: "images/multicolor-flower-hair-pin.jpeg",
    emoji: "🌸"
  },
  {
    id: 29,
    name: "Blue Flower Hair Clutch",
    category: "hair-clutches",
    price: 50,
    image: "images/blue-flower-hair-clutch.jpeg",
    emoji: "🌸"
  },
  {
    id: 30,
    name: "Red Flower Hair Pin",
    category: "hair-pins",
    price: 60,
    image: "images/red-flower-hair-pin.jpeg",
    emoji: "🌹"
  },
  {
    id: 31,
    name: "Yellow Flower Hair Pin",
    category: "hair-pins",
    price: 50,
    image: "images/yellow-flower-hair-pin-2.jpeg",
    emoji: "🌼"
  },
  {
    id: 32,
    name: "Yellow Flower Bouquet",
    category: "bouquets",
    price: 270,
    image: "images/yellow-flower-bouquet-2.jpeg",
    emoji: "💐"
  },
  {
    id: 33,
    name: "Purple Flower Hair Pin",
    category: "hair-pins",
    price: 50,
    image: "images/purple-flower-hair-pin.jpeg",
    emoji: "🌸"
  },
  {
    id: 34,
    name: "Red Bunny Ear Hair Band",
    category: "hair-bands",
    price: 170,
    image: "images/red-bunny-ear-hair-band-3.jpeg",
    emoji: "🎀"
  },
  {
    id: 35,
    name: "Floral Hair Pin Set",
    category: "hair-pins",
    price: 120,
    image: "images/floral-hair-pin-set.jpeg",
    emoji: "🌸"
  },
  {
    id: 36,
    name: "Yellow Flower Hair Clip",
    category: "hair-pins",
    price: 120,
    image: "images/yellow-flower-hair-clip.jpeg",
    emoji: "🌼"
  },
  {
    id: 37,
    name: "Yellow Floral Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/yellow-floral-hair-band-2.jpeg",
    emoji: "🎀"
  },
  {
    id: 38,
    name: "Yellow Floral Hair Band Set",
    category: "hair-bands",
    price: 120,
    image: "images/yellow-floral-hair-band-set.jpeg",
    emoji: "🎀"
  },
  {
    id: 39,
    name: "Purple Floral Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/purple-floral-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 40,
    name: "Pink Flower Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/pink-flower-hair-band-3.jpeg",
    emoji: "🎀"
  },
  {
    id: 41,
    name: "Pink Floral Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/pink-floral-hair-band-2.jpeg",
    emoji: "🎀"
  },
  {
    id: 42,
    name: "White & Red Bunny Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/white-red-bunny-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 6,
    name: "Purple Flower Pot",
    category: "bouquets",
    price: 160,
    image: "images/purple-flower-pot.jpeg",
    emoji: "🌸"
  },
  {
    id: 7,
    name: "Lavender Flower Hair Clip",
    category: "hair-pins",
    price: 60,
    image: "images/lavender-flower-hair-clip.jpeg",
    emoji: "🌸"
  },
  {
    id: 8,
    name: "Blue Flower Bouquet",
    category: "bouquets",
    price: 190,
    image: "images/blue-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 9,
    name: "Butterfly Flower Bouquet",
    category: "bouquets",
    price: 210,
    image: "images/butterfly-flower-bouquet.jpeg",
    emoji: "🦋"
  },
  {
    id: 10,
    name: "Lavender Flower Bouquet",
    category: "bouquets",
    price: 310,
    image: "images/lavender-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 11,
    name: "Pink Bow Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/pink-bow-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 12,
    name: "Pink & Red Bunny Ear Hair Band Set",
    category: "hair-bands",
    price: 120,
    image: "images/pink-red-bunny-hair-band-set.jpeg",
    emoji: "🎀"
  },
  {
    id: 13,
    name: "Colorful Flower Hair Clips",
    category: "hair-pins",
    price: 30,
    image: "images/colorful-flower-hair-clips.jpeg",
    emoji: "🌼"
  },
  {
    id: 14,
    name: "Purple Flower Bouquet",
    category: "bouquets",
    price: 170,
    image: "images/purple-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 15,
    name: "Pink Flower Bouquet",
    category: "bouquets",
    price: 170,
    image: "images/pink-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 16,
    name: "Red Bunny Ear Hair Band",
    category: "hair-bands",
    price: 180,
    image: "images/red-bunny-ear-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 17,
    name: "Pink Flower Bow Hair Band",
    category: "hair-bands",
    price: 190,
    image: "images/pink-flower-bow-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 18,
    name: "Red Bunny Ear Hair Band",
    category: "hair-bands",
    price: 180,
    image: "images/red-bunny-ear-hair-band-2.jpeg",
    emoji: "🎀"
  },
  {
    id: 19,
    name: "Lavender Flower Bouquet",
    category: "bouquets",
    price: 310,
    image: "images/lavender-flower-bouquet-2.jpeg",
    emoji: "💐"
  },
  {
    id: 20,
    name: "Blue Flower Hair Band",
    category: "hair-bands",
    price: 180,
    image: "images/blue-flower-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 21,
    name: "Purple Flower Bouquet",
    category: "bouquets",
    price: 200,
    image: "images/purple-flower-bouquet-2.jpeg",
    emoji: "💐"
  },
  {
    id: 22,
    name: "Colorful Flower Key Chain",
    category: "key-chains",
    price: 50,
    image: "images/colorful-flower-key-chain.jpeg",
    emoji: "🔑"
  },
  {
    id: 23,
    name: "Yellow Flower Bouquet",
    category: "bouquets",
    price: 150,
    image: "images/yellow-flower-bouquet.jpeg",
    emoji: "💐"
  },
  {
    id: 24,
    name: "Blue & Pink Bunny Ear Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/blue-pink-bunny-ear-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 25,
    name: "Blue Butterfly Hair Band",
    category: "hair-bands",
    price: 170,
    image: "images/blue-butterfly-hair-band.jpeg",
    emoji: "🦋"
  },
  {
    id: 26,
    name: "Yellow Flower Hair Pin Set",
    category: "hair-pins",
    price: 170,
    image: "images/yellow-flower-hair-pin-set.jpeg",
    emoji: "🌼"
  },
  {
    id: 27,
    name: "Pink Flower Bouquet",
    category: "bouquets",
    price: 170,
    image: "images/pink-flower-bouquet-2.jpeg",
    emoji: "💐"
  },
  {
    id: 28,
    name: "Multicolor Flower Hair Pin",
    category: "hair-pins",
    price: 120,
    image: "images/multicolor-flower-hair-pin.jpeg",
    emoji: "🌸"
  },
  {
    id: 29,
    name: "Blue Flower Hair Clutch",
    category: "hair-clutches",
    price: 50,
    image: "images/blue-flower-hair-clutch.jpeg",
    emoji: "🌸"
  },
  {
    id: 30,
    name: "Red Flower Hair Pin",
    category: "hair-pins",
    price: 60,
    image: "images/red-flower-hair-pin.jpeg",
    emoji: "🌹"
  },
  {
    id: 31,
    name: "Yellow Flower Hair Pin",
    category: "hair-pins",
    price: 50,
    image: "images/yellow-flower-hair-pin-2.jpeg",
    emoji: "🌼"
  },
  {
    id: 32,
    name: "Yellow Flower Bouquet",
    category: "bouquets",
    price: 270,
    image: "images/yellow-flower-bouquet-2.jpeg",
    emoji: "💐"
  },
  {
    id: 33,
    name: "Purple Flower Hair Pin",
    category: "hair-pins",
    price: 50,
    image: "images/purple-flower-hair-pin.jpeg",
    emoji: "🌸"
  },
  {
    id: 34,
    name: "Red Bunny Ear Hair Band",
    category: "hair-bands",
    price: 170,
    image: "images/red-bunny-ear-hair-band-3.jpeg",
    emoji: "🎀"
  },
  {
    id: 35,
    name: "Floral Hair Pin Set",
    category: "hair-pins",
    price: 120,
    image: "images/floral-hair-pin-set.jpeg",
    emoji: "🌸"
  },
  {
    id: 36,
    name: "Yellow Flower Hair Clip",
    category: "hair-pins",
    price: 120,
    image: "images/yellow-flower-hair-clip.jpeg",
    emoji: "🌼"
  },
  {
    id: 37,
    name: "Yellow Floral Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/yellow-floral-hair-band-2.jpeg",
    emoji: "🎀"
  },
  {
    id: 38,
    name: "Yellow Floral Hair Band Set",
    category: "hair-bands",
    price: 120,
    image: "images/yellow-floral-hair-band-set.jpeg",
    emoji: "🎀"
  },
  {
    id: 39,
    name: "Purple Floral Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/purple-floral-hair-band.jpeg",
    emoji: "🎀"
  },
  {
    id: 40,
    name: "Pink Flower Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/pink-flower-hair-band-3.jpeg",
    emoji: "🎀"
  },
  {
    id: 41,
    name: "Pink Floral Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/pink-floral-hair-band-2.jpeg",
    emoji: "🎀"
  },
  {
    id: 42,
    name: "White & Red Bunny Hair Band",
    category: "hair-bands",
    price: 120,
    image: "images/white-red-bunny-hair-band.jpeg",
    emoji: "🎀"
  }
];

