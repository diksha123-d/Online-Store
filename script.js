// Products
const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "electronics", price: 50000, rating: 4.5, image: "https://cdn.pixabay.com/photo/2017/08/07/14/39/laptop-2604524_960_720.jpg" },
  { id: 2, name: "Mobile", category: "electronics", price: 20000, rating: 4.2, image: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?semt=ais_hybrid&w=740&q=80" },

  // Fashion
  { id: 3, name: "Shirt", category: "fashion", price: 1000, rating: 3.8, image: "https://www.shutterstock.com/image-photo/woman-man-wearing-black-tshirts-260nw-2474040523.jpg"},
  // Cosmetics
  { id: 4, name: "Lipstick", category: "cosmetics", price: 500, rating: 4.3, image: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/Lakm%C3%A9.jpg" },
  { id: 5, name: "Facewash", category: "cosmetics", price: 300, rating: 4.1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHDoYw-u-sN04pPLNMrTmn1UiIBFLNxnLeg&s" },
  { id: 6, name: "Perfume", category: "cosmetics", price: 1500, rating: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0GSzC72jkNWhAP4TTj3v1ulgOA7LFoOjOdw&s" }
];

// Cart & Wishlist
let cart = [];
let wishlist = [];

// Display
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

// Cart
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

// Category
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