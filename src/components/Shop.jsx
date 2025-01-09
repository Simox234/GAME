import React from 'react';
import Products from './products'; // Import the Products component

function Shop() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to the Shop section </h1>
        <Products /> {/* Display the products here */}
      </div>
    </div>
  );
}

export default Shop;
