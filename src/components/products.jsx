import React, { useState } from 'react';

function Products({ onAddToCart }) {
  const products = [
    { id: 1, title: "Secretlab Titan Evo 2024", oldPrice: "3500 MAD", price: "3300 MAD", image: "./images/cassque.png", availableColors: ["White", "Black", "Red"] },
    { id: 2, title: "ASUS ROG Swift PG32UQX", oldPrice: "4500 MAD", price: "4299 MAD", image: "./images/cassque.png", availableColors: ["Blue", "Red", "Yellow"] },
    { id: 3, title: "PlayStation 5", oldPrice: "1500 MAD", price: "1200 MAD", image: "./images/cassque.png", availableColors: ["Black", "White"] },
    { id: 4, title: "Razer Huntsman V2", oldPrice: "500 MAD", price: "299 MAD", image: "./images/cassque.png", availableColors: ["Red", "White", "Blue"] },
    { id: 5, title: "Logitech G Pro X Superlight", oldPrice: "900 MAD", price: "599 MAD", image: "./images/cassque.png", availableColors: ["Black", "White"] },
  ];

  return (
    <section className="section-products py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (selectedColor && quantity > 0) {
      onAddToCart(product, selectedColor, quantity);
    } else {
      alert('Please select a color and quantity before adding to cart.');
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-700">{product.title}</h3>
        <p className="text-sm line-through text-gray-500">{product.oldPrice}</p>
        <p className="text-xl font-bold text-orange-500">{product.price}</p>

        <div className="mt-2">
          <label className="block text-gray-700">Select Color:</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          >
            <option value="">Select color</option>
            {product.availableColors.map((color, index) => (
              <option key={index} value={color}>{color}</option>
            ))}
          </select>
        </div>

        <div className="mt-2">
          <label className="block text-gray-700">Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            min="1"
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Products;
