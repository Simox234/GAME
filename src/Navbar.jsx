import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <h1 className="text-4xl font-bold uppercase">
        Game<sup style={{ color: 'orange' }}>UNIVERS</sup>
      </h1>
      <nav className="flex items-center justify-between space-x-6">
        <a href="#" className="text-white font-bold hover:text-orange-600">
          Home
        </a>

        <a href="#" className="text-white font-bold hover:text-orange-600">
          Bits
        </a>

        <a href="#" className="text-white font-bold hover:text-orange-600">
          Play
        </a>

        <a href="#" className="text-white font-bold hover:text-orange-600">
          Shop
        </a>

        {/* Use Link instead of button for navigation */}
        <Link
          to="/login"
          className="bg-orange-500 px-4 py-2 rounded text-black font-bold hover:bg-orange-600"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
