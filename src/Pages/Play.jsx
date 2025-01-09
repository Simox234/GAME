import robotDetourImage from '../assets/robot-detour.jpg'; // Make sure to replace this with the correct image path

const GameRedirect = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-7xl p-8 bg-black text-white text-center">
        <h1 className="text-3xl font-bold text-orange-500 mb-6">Play Robot Detour</h1>
        <img 
          src={robotDetourImage} 
          alt="Robot Detour" 
          className="w-full max-w-md mx-auto mb-6 rounded-lg shadow-lg" 
        />
        <p className="text-lg text-gray-300 mb-4">
          Click the button below to play "Robot Detour" on itch.io.
        </p>
        <a 
          href="https://nozomu57.itch.io/robot-detour" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600">
          Play Now
        </a>
      </div>
    </div>
  );
};

export default GameRedirect;
