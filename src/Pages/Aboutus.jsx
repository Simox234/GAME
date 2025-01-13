import React from 'react';

const Aboutus = () => {
  return (
    <div className="bg-white text-black min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold text-orange-500 mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to <span className="text-orange-500 font-semibold">GamesPlay</span>! We are passionate about providing gamers with the best products and experiences. 
          Our mission is to deliver top-notch gaming accessories and content to enhance your gaming journey.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Whether you're a casual gamer or a competitive pro, our store has something for everyone. From cutting-edge gear to the latest gaming trends, 
          <span className="text-orange-500 font-semibold"> GamesPlay</span> is your ultimate destination for all things gaming.
        </p>
        <p className="text-lg leading-relaxed">
          Thank you for choosing us as your gaming partner. Let's level up your gaming experience together!
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
