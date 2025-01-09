import React from 'react';
import palworldImage from './assets/palworld.jpg'; // Example image
import gameplayVideo from './assets/vid1.mp4'; // Example video

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-black text-white">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">Welcome to Palword</h1>
      <div className="text-center mb-8">
        <img src={palworldImage} alt="Palworld" className="w-full h-96 object-cover rounded-lg shadow-lg" />
      </div>

      {/* Game Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Game Overview</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Palword is an exciting multiplayer game that combines strategy, action, and mystery-solving elements. Set in a vast open world, players explore diverse landscapes, engage in epic battles, and uncover secrets hidden throughout the game.
        </p>
        <div className="mt-6">
          <video className="w-full rounded-lg shadow-lg" controls>
            <source src={gameplayVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">What You Should Know About Palword</h2>
        <ul className="list-disc pl-6 text-lg text-gray-300 space-y-4">
          <li><strong>Gameplay:</strong> The game features an open-world design with various quests, missions, and PvP (Player vs. Player) zones. Players can explore, craft, and fight in both solo and multiplayer modes.</li>
          <li><strong>Progression:</strong> As you play, you will level up, unlock new abilities, and gain access to better gear. Players must work together to defeat difficult bosses and complete challenges.</li>
          <li><strong>Resources:</strong> Collect resources like wood, ores, and herbs to craft items, potions, and weapons that will aid you in your journey.</li>
          <li><strong>Teamwork:</strong> Palword encourages teamwork. Form alliances, trade, and strategize with other players to tackle difficult areas and missions.</li>
        </ul>
      </section>

      {/* Game Characters Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Game Pals: Key Characters</h2>
        <p className="text-lg leading-relaxed text-gray-300">Meet some of the most important characters in Palword, who will assist or challenge you during your adventure:</p>
        <ul className="space-y-4 text-lg text-gray-300">
          <li><strong>Elara:</strong> A skilled mage who guides you through the early stages of the game. She is known for her wisdom and powerful magic spells.</li>
          <li><strong>Fergal:</strong> A tough warrior who specializes in hand-to-hand combat. Fergal will help you take on dangerous creatures and provide support in battles.</li>
          <li><strong>Liora:</strong> A rogue who excels in stealth and agility. Liora is your go-to character for sneaking through enemy lines and uncovering hidden treasures.</li>
          <li><strong>King Varik:</strong> The ruler of the central kingdom who plays a major role in the game's main storyline. He will send you on important quests to restore peace.</li>
        </ul>
      </section>

      {/* Secret Areas Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Secret Areas & Easter Eggs</h2>
        <p className="text-lg leading-relaxed text-gray-300">Palword is filled with hidden areas and Easter eggs that reward observant players. Here are a few secrets you can discover in the game:</p>
        <ul className="list-decimal pl-6 text-lg text-gray-300 space-y-4">
          <li><strong>Hidden Cave of the Ancients:</strong> This secret cave can be accessed by solving a series of riddles found scattered across the world. Inside, you’ll find powerful artifacts and ancient lore.</li>
          <li><strong>The Forgotten Forest:</strong> A mystical forest that only appears during the full moon. You must follow specific clues to find the hidden entrance, where you’ll face rare enemies and gain valuable resources.</li>
          <li><strong>Lost Temple of Alzar:</strong> A secret dungeon buried beneath the mountain. The entrance can only be unlocked by completing a set of complex puzzles and defeating an elite boss to claim legendary gear.</li>
          <li><strong>Hidden Shop of Wonders:</strong> An elusive shop run by a mysterious vendor who only appears when you complete certain quests or unlock hidden achievements. The shop sells unique items, including rare pets and powerful weapons.</li>
        </ul>
      </section>

      {/* Tips Section */}
      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Tips for Success</h2>
        <ul className="list-disc pl-6 text-lg text-gray-300 space-y-4">
          <li><strong>Explore Every Corner:</strong> Palword’s world is vast, and there are always hidden secrets waiting to be uncovered. Don’t hesitate to explore off the beaten path!</li>
          <li><strong>Team Up:</strong> Many of the hardest challenges require teamwork. Don’t hesitate to form alliances and collaborate with others to overcome tough enemies.</li>
          <li><strong>Upgrade Regularly:</strong> Be sure to upgrade your character’s gear and skills regularly to stay competitive, especially when facing stronger enemies.</li>
          <li><strong>Watch for Clues:</strong> Pay attention to environmental clues, hidden symbols, and NPC dialogues for hints about secret locations and puzzles.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
