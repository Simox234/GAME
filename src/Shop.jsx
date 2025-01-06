import React from "react";

function Products() {
  const products = [
    {
      id: 1,
      title: "REAL MADRID 23-24 HOME",
      oldPrice: "500 MAD",
      price: "299 MAD",
      image: "./images/real-madrid.jpg", // Replace with the actual image path
    },
    {
      id: 2,
      title: "BARCELONA 23-24 HOME",
      oldPrice: "500 MAD",
      price: "299 MAD",
      image: "./images/barcelona.jpg", // Replace with the actual image path
    },
    {
      id: 3,
      title: "BAYERN MUNCHEN 23-24 HOME",
      oldPrice: "500 MAD",
      price: "299 MAD",
      image: "./images/bayern.jpg", // Replace with the actual image path
    },
    {
      id: 4,
      title: "ARSENAL 23-24 HOME",
      oldPrice: "500 MAD",
      price: "299 MAD",
      image: "./images/arsenal.jpg", // Replace with the actual image path
    },
    {
      id: 5,
      title: "AJAX AMSTERDAM KIT 23-24 THIRD",
      oldPrice: "500 MAD",
      price: "299 MAD",
      image: "./images/ajax.jpg", // Replace with the actual image path
    },
    {
      id: 6,
      title: "JUVENTUS 23-24 HOME",
      oldPrice: "500 MAD",
      price: "299 MAD",
      image: "./images/juventus.jpg", // Replace with the actual image path
    },
    {
      id: 7,
      title: "MAN CITY 23-24 HOME KIT",
      oldPrice: "500 MAD",
      price: "299 MAD",
      image: "./images/man-city.jpg", // Replace with the actual image path
    },
  ];

  return (
    <section className="section-products py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-700">Featured Product</h3>
          <h2 className="text-2xl font-bold text-gray-900">Popular Products</h2>
        </div>
        <div className="overflow-x-auto">
          <div className="flex space-x-6">
            {products.map((product) => (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className="single-product bg-white shadow-lg rounded-lg overflow-hidden min-w-[250px]"
              >
                {/* Product Image */}
                <div
                  className="part-1 h-40 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                ></div>
                {/* Product Details */}
                <div className="part-2 p-4">
                  <h3 className="product-title text-lg font-bold text-gray-800">
                    {product.title}
                  </h3>
                  <h4 className="product-old-price text-sm line-through text-gray-500">
                    {product.oldPrice}
                  </h4>
                  <h4 className="product-price text-xl font-semibold text-gray-800">
                    {product.price}
                  </h4>
                  <button className="add-cart mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    <i className="fas fa-shopping-cart mr-2"></i> Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
