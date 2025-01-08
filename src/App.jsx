import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './login'; 
import Hero from './Hero.jsx'
import Shop from './Shop.jsx'


const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Hero />} />
        <Route path="/shop" element={<Shop />} />
        
      </Routes>
    </Router>
  );
};

export default App;
