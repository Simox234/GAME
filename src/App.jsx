import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Bitsat from './Bits';
import Shop from './Shop';
import Footer from './Footer';
import Carousel from './Slider.jsx';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Hero/>
      <Bitsat/>
      <Shop/>
      <Footer/>
      

      
    </div>
  );
}

export default App;

