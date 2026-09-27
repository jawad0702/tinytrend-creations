let cart = JSON.parse(localStorage.getItem("tinytrend_cart") || "[]");

const money = n => `${STORE.currency}${Number(n).toLocaleString("en-IN")}`;

function saveCart(){
  localStorage.setItem("tinytrend_cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function updateCartCount(){
  document.getElementById("cartCount").textContent = cart.reduce((sum,i)=>sum+i.qty,0);
}

function categoryName(id){
  return CATEGORIES.find(c=>c.id===id)?.name || id;
}

function renderCategories(){
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = CATEGORIES.map(c => `
    <article class="category-card" onclick="filterCategory('${c.id}')">
      <img src="${c.image}" alt="${c.name}">
      <div><h3>${c.name}</h3><p>${c.description}</p></div>
    </article>
  `).join("");

  const select = document.getElementById("categoryFilter");
  select.innerHTML = `<option value="all">All categories</option>` +
    CATEGORIES.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");
}

function renderProducts(){
  const grid = document.getElementById("productGrid");
  const search = document.getElementById("searchInput").value.toLowerCase().trim();
  const cat = document.getElementById("categoryFilter").value;

  const filtered = PRODUCTS.filter(p =>
    (cat === "all" || p.category === cat) &&
    (p.name.toLowerCase().includes(search) || categoryName(p.category).toLowerCase().includes(search))
  );

  if(!filtered.length){
    grid.innerHTML = `<div class="empty-cart" style="grid-column:1/-1">No products found.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <div class="product-image">
        ${p.image ? `<img src="${p.image}" alt="${p.name}">` : `<span aria-label="${p.name}">${p.emoji || "🛍️"}</span>`}
      </div>
      <div class="product-info">
        <small style="color:#8a8a8a">${categoryName(p.category)}</small>
        <h3>${p.name}</h3>
        <div class="product-meta">
          <span class="price">${money(p.price)}</span>
          <button class="add-btn" onclick="addToCart(${p.id})">Add to cart</button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const existing = cart.find(x=>x.id===id);
  if(existing) existing.qty++;
  else cart.push({id:p.id, qty:1});
  saveCart();
  document.getElementById("cart").scrollIntoView({behavior:"smooth"});
}

function changeQty(id, delta){
  const item = cart.find(x=>x.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(x=>x.id!==id);
  saveCart();
}

function removeItem(id){
  cart = cart.filter(x=>x.id!==id);
  saveCart();
}

function renderCart(){
  const wrap = document.getElementById("cartItems");
  if(!cart.length){
    wrap.innerHTML = `<div class="empty-cart">Your cart is empty. Add a product to get started.</div>`;
    document.getElementById("cartTotal").textContent = money(0);
    return;
  }

  let total = 0;
  wrap.innerHTML = cart.map(item=>{
    const p = PRODUCTS.find(x=>x.id===item.id);
    if(!p) return "";
    total += p.price * item.qty;
    return `
      <div class="cart-row">
        <div><b>${p.name}</b><br><small>${money(p.price)} each</small></div>
        <div class="qty">
          <button onclick="changeQty(${p.id},-1)">−</button>
          <b>${item.qty}</b>
          <button onclick="changeQty(${p.id},1)">+</button>
        </div>
        <div><b>${money(p.price*item.qty)}</b><br><button class="remove" onclick="removeItem(${p.id})">Remove</button></div>
      </div>
    `;
  }).join("");
  document.getElementById("cartTotal").textContent = money(total);
}

function filterCategory(id){
  document.getElementById("categoryFilter").value = id;
  renderProducts();
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
}

function orderOnWhatsApp(){
  if(!cart.length){
    alert("Please add at least one product to your cart.");
    return;
  }

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();

  if(!name || !phone || !address){
    alert("Please enter your name, phone number and delivery address.");
    return;
  }

  let total = 0;
  const lines = cart.map(item=>{
    const p = PRODUCTS.find(x=>x.id===item.id);
    total += p.price * item.qty;
    return `• ${p.name} × ${item.qty} = ${money(p.price*item.qty)}`;
  });

  const message =
`Hello TinyTrend Creations! 👋

I would like to place an order.

Customer name: ${name}
Phone: ${phone}
Delivery address: ${address}

Order:
${lines.join("\n")}

Total: ${money(total)}

Please confirm availability and payment details. Thank you!`;

  window.open(`https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
}

document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("heroWhatsApp").href = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent("Hello TinyTrend Creations! I would like to know more about your products.")}`;
  document.getElementById("contactWhatsApp").href = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent("Hello TinyTrend Creations! I would like to enquire about your products.")}`;
  document.getElementById("instagramLink").href = STORE.instagramUrl;

  renderCategories();
  renderProducts();
  renderCart();
  updateCartCount();

  document.getElementById("searchInput").addEventListener("input", renderProducts);
  document.getElementById("categoryFilter").addEventListener("change", renderProducts);
  document.getElementById("whatsappOrder").addEventListener("click", orderOnWhatsApp);

  document.getElementById("menuBtn").addEventListener("click", ()=>{
    document.getElementById("navLinks").classList.toggle("open");
  });
});
