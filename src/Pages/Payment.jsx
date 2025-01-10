import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const { state } = useLocation();
  const cartItems = state?.cartItems || [];

  const totalAmount = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace(' MAD', ''));
    return total + itemPrice * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Payment Information</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Cart Details</h2>
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <p className="text-gray-700 font-bold">{item.title}</p>
                  <p className="text-gray-500">Color: {item.color}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-gray-500">{item.price} x {item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="mt-4 text-xl font-bold text-gray-700">
              Total: {totalAmount} MAD
            </div>
          </div>
        )}

        <button className="bg-green-500 text-white px-6 py-2 rounded mt-4 w-full">Confirm Payment</button>
      </div>
    </div>
  );
};

export default Payment;
