import React from 'react';
import image5 from './assets/5.jpg';
import image6 from './assets/6.jpg';
import image8 from './assets/7.jpeg';

function Hero() {
  const games = [
    { image: image5, title: 'Palworld', description: 'the gaame of the year 2024 ' },
    { image: image6, title: 'fc 25', description: 'another fifa version that break the laws again' },
    { image: image8, title: 'ARK survival evolved', description: 'dinosor game.' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 py-12 text-center">
        <h1 className="text-4xl font-bold uppercase">
          Game<sup style={{ color: 'orange' }}>UNIVERS</sup>
        </h1>

        <p className="mt-4 text-gray-300">Welcome to the ultimate futuristic gaming experience.</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {games.map((game, index) => (
          <Card
            key={index}
            image={game.image}
            title={game.title}
            description={game.description}
          />
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="mt-2 text-gray-400">{props.description}</p>
      </div>
    </div>
  );
}

export default Hero;
