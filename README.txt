# TinyTrend Creations Website

This is a simple static online shop for TinyTrend Creations.

## Files
- index.html = website structure
- style.css = design and responsive layout
- products.js = BUSINESS DETAILS + CATEGORIES + PRODUCTS (edit this file most often)
- script.js = cart and WhatsApp ordering logic
- images/logo.jpeg = your uploaded logo
- images/*.svg = example category images

## How to edit products
Open `products.js`.

Change:
- `STORE.whatsapp`
- `STORE.instagram`
- category names/descriptions
- product name
- product price
- product image

For a real product image:
1. Put the image in the `images` folder.
2. Example filename: `pink-clip.jpg`
3. Set: `image: "images/pink-clip.jpg"`

If `image` is empty, the website shows an example emoji instead.

## Important
The prices in this first version are examples only. Replace them before publishing.

The site currently says Trichy delivery. You can later change `STORE.deliveryText` and the location section in `index.html` when you expand delivery across Tamil Nadu.

WhatsApp order uses the number in `STORE.whatsapp`. It is written with India country code +91 and no spaces.
