import React from 'react';
import photo1 from './assets/1.jpeg';
import photo2 from './assets/2.jpeg';
import photo3 from './assets/3.jpeg';
import photo4 from './assets/4.jpeg';

function Bitsat() {
  const Bits = [
    { name: 'Valorante', image: photo1 },
    { name: 'Fortnite', image: photo2 },
    { name: 'Pubg', image: photo3 },
    { name: 'Free fire', image: photo4 },
  ];

  const videos = [
    { id: 1, src: "/videos/video1.mp4", title: "Video 1" },
    { id: 2, src: "/videos/video2.mp4", title: "Video 2" },
    { id: 3, src: "/videos/video3.mp4", title: "Video 3" },
    { id: 4, src: "/videos/video4.mp4", title: "Video 4" },
    { id: 5, src: "/videos/video5.mp4", title: "Video 5" },
  ];

  return (
    <>
      {/* Section Bits */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Bits for You</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {Bits.map((Bit, index) => (
            <div key={index} className="min-w-[150px] bg-gray-200 p-4 rounded shadow-lg">
              <img
                src={Bit.image}
                alt={Bit.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 text-center">{Bit.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Section Videos */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Shorts for You</h2>
        <div className="flex flex-wrap  ">
          {videos.map((video, index) => (
            <div
              key={index}
              className="min-w-[250px] h-[400px] bg-gray-200 p-4 rounded shadow-lg"
            >
              <video
                src={video.src}
                controls
                autoPlay
                loop
                muted
                className="w-[250px] h-[400px] object-cover rounded"
              ></video>
              <h3 className="mt-2 text-center">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bitsat;
