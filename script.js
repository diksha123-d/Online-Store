// Product Data
const products = [
  {
    id: 1,
    name: "Laptop",
    category: "electronics",
    price: 50000,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAeo-venJIrrE5Y_kMBEu3Wc3-B8CyfsfcA&s"
  },
  {
    id: 2,
    name: "Mobile",
    category: "electronics",
    price: 20000,
    rating: 4.2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymASdrvvHe_iSTCn93OnwI_82-tn81Yejtw&s"
  },
  {
    id: 3,
    name: "Shirt",
    category: "fashion",
    price: 1000,
    rating: 3.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7r1aw6ezCo6MU1k35Twym1VapCUmdGiNOQ&s"
  }
];

// Cart & Wishlist
let cart = [];
let wishlist = [];

// Display Products
function displayProducts(items) {
  let container = document.getElementById("products");
  container.innerHTML = "";

  items.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p>⭐ ${p.rating}</p>

        <button onclick="addToCart(${p.id})">Add to Cart</button>
        <button onclick="addToWishlist(${p.id})">❤️</button>
      </div>
    `;
  });
}

displayProducts(products);

// Add to Cart
function addToCart(id) {
  let product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById("cartCount").innerText = cart.length;
}

// Wishlist
function addToWishlist(id) {
  let product = products.find(p => p.id === id);
  wishlist.push(product);
  alert("Added to wishlist");
}

// Category Filter
function filterCategory(cat) {
  if (cat === "all") {
    displayProducts(products);
  } else {
    let filtered = products.filter(p => p.category === cat);
    displayProducts(filtered);
  }
}

// Sort
function sortProducts(type) {
  let sorted = [...products];

  if (type === "low") sorted.sort((a, b) => a.price - b.price);
  if (type === "high") sorted.sort((a, b) => b.price - a.price);

  displayProducts(sorted);
}

// Search
function searchProduct(text) {
  if (text === "") {
    displayProducts(products);
    return;
  }

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(text.toLowerCase())
  );

  displayProducts(filtered);
}

// Rating Filter
function filterRating() {
  let filtered = products.filter(p => p.rating >= 4);
  displayProducts(filtered);
}