import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './login';
import Signup from './signUp';
import Slider from './Slider';
import Bits from './Bits';
import Hero from './Hero';
import Shop from './Shop';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar - Always Visible */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <Hero />
                  <Bits />
                  <Shop />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        {/* Footer - Always Visible */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;