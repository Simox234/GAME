import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Products from './Products'; // Import the Products component

function Shop() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (product, color, quantity) => {
    const newCartItem = { ...product, color, quantity };
    setCartItems((prevItems) => [...prevItems, newCartItem]);
    setIsCartVisible(true); // Show the cart after adding an item
  };

  const handleCloseCart = () => {
    setIsCartVisible(false);
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/payment', { state: { cartItems } });
    } else {
      alert('Your cart is empty!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to the Shop Section</h1>
        <Products onAddToCart={handleAddToCart} />
      </div>

      {isCartVisible && (
        <div className="fixed right-0 top-0 w-1/4 bg-white shadow-lg p-6 h-full overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Your Cart</h2>
          <button onClick={handleCloseCart} className="text-white bg-red-500 px-4 py-2 rounded mb-4">Close Cart</button>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="mb-4 flex items-center">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <p className="text-gray-700 font-bold">{item.title}</p>
                  <p className="text-gray-500">Color: {item.color}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-gray-500">{item.price} x {item.quantity}</p>
                </div>
              </div>
            ))
          )}

          <div className="mt-4">
            <p className="font-bold text-gray-700">
              Total: {cartItems.reduce((total, item) => total + (parseFloat(item.price.replace(' MAD', '')) * item.quantity), 0)} MAD
            </p>
            <button onClick={handleProceedToCheckout} className="bg-green-500 text-white px-6 py-2 rounded mt-4 w-full">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
