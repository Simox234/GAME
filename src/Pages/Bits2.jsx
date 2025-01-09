import React, { useState } from 'react';
import photo1 from '../assets/1.jpeg';
import photo2 from '../assets/2.jpeg';
import photo3 from '../assets/3.jpeg';
import photo4 from '../assets/4.jpeg';

function Bits() {
  const Bits = [
    { name: 'Fortnite', image: photo4 },
    { name: 'Gta V', image: photo2 },
    { name: 'Minecraft', image: photo3 },
    { name: 'Valorant', image: photo1 },
  ];

  const videos = [
    { id: 1, src: '/videos/video1.mp4', title: 'Valorant Match 1', category: 'fortnite' },
    { id: 2, src: '/videos/video2.mp4', title: 'Fortnite Tips', category: 'setup' },
    { id: 3, src: '/videos/video3.mp4', title: 'Pubg Highlights', category: 'gta v' },
    { id: 4, src: '/videos/video4.mp4', title: 'Free Fire Tricks', category: 'minecraft' },
    { id: 5, src: '/videos/video5.mp4', title: 'Valorant Clutch', category: 'valorant' },
    { id: 6, src: '/videos/video6.mp4', title: 'GtaV', category: 'gta v' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newVideo, setNewVideo] = useState({
    title: '',
    src: '',
    category: '',
  });

  const [videoFile, setVideoFile] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleVideoInputChange = (e) => {
    const { name, value } = e.target;
    setNewVideo((prevVideo) => ({
      ...prevVideo,
      [name]: value,
    }));
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(URL.createObjectURL(file));
    }
  };

  const filteredVideos = selectedCategory
    ? videos.filter((video) =>
      video.category.toLowerCase().includes(selectedCategory.toLowerCase())
    )
    : videos.filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleAddVideo = (e) => {
    e.preventDefault();
    console.log('Adding new video:', newVideo);
    console.log('Video file:', videoFile);
  };

  return (
    <div className="p-4 bg-black min-h-screen">
      {/* Categories Section */}
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Bits for You</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {Bits.map((Bit, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(Bit.name.toLowerCase())}
            className={`relative min-w-[75px] h-[60px] rounded shadow-lg transition overflow-hidden ${selectedCategory === Bit.name.toLowerCase()
                ? 'ring-4 ring-orange-500'
                : 'hover:ring-2 hover:ring-gray-400'
              }`}
            style={{
              backgroundImage: `url(${Bit.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white font-bold text-sm">{Bit.name}</h3>
            </div>
          </button>
        ))}
        <button
          onClick={() => {
            setSelectedCategory(null);
            setSearchTerm('');
          }}
          className="min-w-[75px] h-[60px] bg-gray-700 p-4 rounded shadow-lg hover:bg-gray-600"
        >
          <h3 className="text-center text-sm text-white">Show All</h3>
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search game categories or videos..."
          className="w-full max-w-md p-2 border rounded shadow-md focus:outline-none focus:ring focus:ring-orange-500"
        />
      </div>

      {/* Videos Section */}
      <div className="p-4 mt-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          {selectedCategory ? `${selectedCategory} Videos` : 'All Shorts for You'}
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredVideos.map((video, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-gray-800 p-4 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-700"
            >
              <video
                src={video.src}
                controls
                autoPlay
                loop
                muted
                className="w-[250px] h-[500px] object-cover rounded-lg"
              />
              <h3 className="mt-2 text-center text-white">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Add Video Form */}
      <div className="mt-6 p-4 bg-gray-800 rounded shadow-lg">
        <h3 className="text-xl font-bold text-center mb-4 text-white">Add a New Video</h3>
        <form onSubmit={handleAddVideo} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            value={newVideo.title}
            onChange={handleVideoInputChange}
            placeholder="Video Title"
            className="p-2 border rounded shadow-md text-black"
          />
          <input
            type="file"
            name="src"
            onChange={handleVideoFileChange}
            className="p-2 border rounded shadow-md text-black"
          />
          <input
            type="text"
            name="category"
            value={newVideo.category}
            onChange={handleVideoInputChange}
            placeholder="Category"
            className="p-2 border rounded shadow-md text-black"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition"
          >
            Add Video
          </button>
        </form>
        {videoFile && (
          <div className="mt-4">
            <h4 className="text-center text-white">Video Preview:</h4>
            <video
              src={videoFile}
              controls
              className="w-full h-[200px] object-cover mt-2 rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Bits;
