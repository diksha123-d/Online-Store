const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 50000, rating:4.5 },
  { id: 2, name: "Shirt", category: "fashion", price: 1000, rating:3.8 },
  { id: 3, name: "Mobile", category: "electronics", price: 20000,rating:4.2 }
];
function displayProducts(items) {
  let container = document.getElementById("products");
  container.innerHTML = "";

  items.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p>⭐${p.rating}</p>
        <button>Add to Cart</button>
      </div>
    `;
  });
}

displayProducts(products);
function filterCategory(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    let filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}
function sortProducts(type) {
  let sorted = [...products];

  if (type === "low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (type === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  displayProducts(sorted);
}