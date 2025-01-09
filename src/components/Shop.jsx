import React from 'react';
import Products from './products'; // Import the Products component

function Shop() {
  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to the Shop Section
        </h1>
        {/* Render the Products component */}
        <div className="mt-6">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default Shop;
