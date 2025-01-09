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
    <section className="section-products py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Popular Products</h2>
        </div>
        {/* Use grid-cols-5 for 5 products per row */}
        <div className="grid grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-sm line-through text-gray-500">{product.oldPrice}</p>
                <p className="text-xl font-bold text-orange-500">{product.price}</p>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
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
