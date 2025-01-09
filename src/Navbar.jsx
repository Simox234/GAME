import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full  p-4 bg-black text-white z-10">
      <div className="flex justify-between items-center ">
        <h1 className="text-4xl font-bold uppercase">
          Game<sup style={{ color: 'orange' }}>UNIVERS</sup>
        </h1>
        <nav className="flex items-center justify-between space-x-6">
          {/* Replace anchor tags with Link components */}
          <Link to="/" className="text-white font-bold hover:text-orange-600">
            Home
          </Link>

          <Link to="/bits" className="text-white font-bold hover:text-orange-600">
            Bits
          </Link>

          <Link to="/play" className="text-white font-bold hover:text-orange-600">
            Play
          </Link>

          <Link to="/shop" className="text-white font-bold hover:text-orange-600">
            Shop
          </Link>

          {/* Use Link for login as well */}
          <Link
            to="/login"
            className="bg-orange-500 px-4 py-2 rounded text-black font-bold hover:bg-orange-600"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
