import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Hero from './components/Hero';
import Bits from './components/Bits';
import Shop from './components/Shop';
import ContactUs from './components/contactus'; 
import Login from './Pages/login';
import Signup from './Pages/signUp';
import PalworldPage from './Pages/palworld';
import Bits2 from './Pages/Bits2';
import Ark from './Pages/Ark';
import FC25 from './Pages/Fc25';
import Play from './Pages/Play';
import Payment from './Pages/Payment';
import Aboutus from './Pages/Aboutus'; // Adjust path as needed
import PrivacyPolicy from './Pages/PrivacyPolicy'; // Adjust path as needed



const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <Hero />
                  <Bits />
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
            <Route path="/payment" element={<Payment />} />
            <Route path="/contact-us" element={<ContactUs />} /> {/* New ContactUs Route */}
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
