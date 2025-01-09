import React from 'react';

function Products() {
  const products = [
    {
      id: 1,
      title: "REAL MADRID 23-24 HOME",
      oldPrice: "500 MAD",
      price: "299 MAD",
      image: "./images/cassque.png",
    },
    {
      id: 2,
      title: "BARCELONA 23-24 HOME",
      oldPrice: "500 MAD",
      price: "299 MAD",
      image: "./images/cassque.png",
    },
    {
      id: 3,
      title: "BAYERN MUNCHEN 23-24 HOME",
      oldPrice: "500 MAD",
      price: "299 MAD",
      image: "./images/cassque.png",
    },
    {
      id: 4,
      title: "ARSENAL 23-24 HOME",
      oldPrice: "500 MAD",
      price: "299 MAD",
      image: "./images/cassque.png",
    },
    {
      id: 5,
      title: "JUVENTUS 23-24 HOME",
      oldPrice: "500 MAD",
      price: "299 MAD",
      image: "./images/cassque.png",
    },
  ];

  return (
    <section className="section-products py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Popular Products</h2>
        </div>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-700">{product.title}</h3>
                <p className="text-sm line-through text-gray-500">{product.oldPrice}</p>
                <p className="text-xl font-bold text-orange-500">{product.price}</p>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
