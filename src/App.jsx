import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './Pages/login';
import Signup from './Pages/signUp';
import Slider from './components/Slider';
import Bits from './components/Bits';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Products from './components/products';
import Footer from './components/Footer';
import PalworldPage from './Pages/palworld';
import Bits2 from './Pages/Bits2';
import Ark from './Pages/Ark';
import FC25 from './Pages/Fc25';
import Play from './Pages/Play';
import Payment from './Pages/Payment';  // Import Payment component

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
            <Route path="/palworld" element={<PalworldPage />} />
            <Route path="/Ark" element={<Ark />} />
            <Route path="/Fc25" element={<FC25 />} />
            <Route path="/Play" element={<Play />} />
            <Route path="/Bits2" element={<Bits2 />} />
            
            {/* Add the Payment Route */}
            <Route path="/payment" element={<Payment />} /> {/* Payment page route */}
          </Routes>
        </main>

        {/* Footer - Always Visible */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
