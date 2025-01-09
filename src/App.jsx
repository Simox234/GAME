import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './login';
import Signup from './signUp';
import Slider from './Slider';
import Bits from './Bits';
import Hero from './Hero';
import Shop from './Shop';
import Products from './products'
import Footer from './Footer';
import PalworldPage from './palworld'; // New page for Palworld

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar - Always Visible */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow pt-16"> {/* Added padding to avoid content overlap */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Homepage Components */}
                  <Slider />
                  <Hero />
                  <Bits />
                  <Products />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/palworld" element={<PalworldPage />} /> {/* Palworld page */}
          </Routes>
        </main>

        {/* Footer - Always Visible */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
