import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import photo1 from '../assets/1.jpeg';
import photo2 from '../assets/2.jpeg';
import photo3 from '../assets/3.jpeg';
import photo4 from '../assets/4.jpeg';

function Bits() {
  const [Bits, setBits] = useState([
    { name: 'Fortnite', image: photo4 },
    { name: 'Gta V', image: photo2 },
    { name: 'Minecraft', image: photo3 },
    { name: 'Valorant', image: photo1 },
  ]);
  
  const [allVideos, setAllVideos] = useState([
    { id: 1, src: '/videos/video1.mp4', title: 'Valorant Match 1', category: 'fortnite' },
    { id: 2, src: '/videos/video2.mp4', title: 'Fortnite Tips', category: 'setup' },
    { id: 3, src: '/videos/video3.mp4', title: 'Pubg Highlights', category: 'gta v' },
    { id: 4, src: '/videos/video4.mp4', title: 'Free Fire Tricks', category: 'minecraft' },
    { id: 5, src: '/videos/video5.mp4', title: 'Valorant Clutch', category: 'valorant' },
    { id: 6, src: '/videos/video6.mp4', title: 'GtaV', category: 'gta v' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleVideos, setVisibleVideos] = useState(6);
  const [showForm, setShowForm] = useState(false);
  const [newVideo, setNewVideo] = useState({ title: '', src: '', category: '' });
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter videos by selected category or search term
  const filteredVideos = allVideos.filter((video) => {
    const categoryMatch =
      !selectedCategory || video.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const searchMatch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.category.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const loadMoreVideos = () => {
    setVisibleVideos((prevVisible) => prevVisible + 6);
  };

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  const handleVideoInputChange = (e) => {
    const { name, value } = e.target;
    setNewVideo((prev) => ({ ...prev, [name]: value }));
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const src = URL.createObjectURL(file);
      setNewVideo((prev) => ({ ...prev, src }));
    }
  };

  const handleAddVideo = (e) => {
    e.preventDefault();
    if (!newVideo.title || !newVideo.category) {
      alert("Please fill out all fields.");
      return;
    }

    const newVideoObj = {
      ...newVideo,
      id: allVideos.length + 1,
    };

    // Add the new video to allVideos state
    setAllVideos((prevVideos) => [...prevVideos, newVideoObj]);

    // Optionally, add the new video category to Bits if it doesn't already exist
    if (!Bits.some((bit) => bit.name.toLowerCase() === newVideo.category.toLowerCase())) {
      setBits((prevBits) => [
        ...prevBits,
        { name: newVideo.category, image: '/path-to-default-image.jpg' }, // Use a default image or dynamic image
      ]);
    }

    setShowForm(false);
    setNewVideo({ title: '', src: '', category: '' });
  };

  // Handle video click to navigate to Bits2
  const handleVideoClick = (videoId) => {
    navigate(`/Bits2?videoId=${videoId}`); // Passing the videoId as a query parameter
  };

  return (
    <div className="p-4 bg-black min-h-screen">
      {/* Categories Section */}
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Bits for You</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {Bits.map((Bit, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(Bit.name.toLowerCase())}
            className={`relative min-w-[75px] h-[60px] rounded shadow-lg transition overflow-hidden ${
              selectedCategory === Bit.name.toLowerCase()
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
        <div className="relative">
          <button
            onClick={handleFormToggle}
            className="flex items-center justify-center w-[75px] h-[60px] bg-orange-500 text-white rounded shadow-lg hover:bg-orange-600 transition"
          >
            +
          </button>
          {showForm && (
            <div className="absolute top-[-120px] right-0 w-[200px] bg-gray-800 p-4 rounded-lg shadow-lg z-50">
              <h3 className="text-md font-bold text-center mb-2 text-white">Add a New Video</h3>
              <form onSubmit={handleAddVideo} className="flex flex-col gap-2">
                <input
                  type="text"
                  name="title"
                  value={newVideo.title}
                  onChange={handleVideoInputChange}
                  placeholder="Title"
                  className="p-1 border rounded shadow-md text-black"
                />
                <input
                  type="file"
                  onChange={handleVideoFileChange}
                  className="p-1 border rounded shadow-md text-black"
                />
                <input
                  type="text"
                  name="category"
                  value={newVideo.category}
                  onChange={handleVideoInputChange}
                  placeholder="Category"
                  className="p-1 border rounded shadow-md text-black"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white p-1 rounded hover:bg-orange-600 transition"
                >
                  Add
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-4 mb-6 flex justify-center">
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
          {filteredVideos.slice(0, visibleVideos).map((video, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-gray-800 p-4 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-700"
              onClick={() => handleVideoClick(video.id)} // Click handler to navigate
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
        {visibleVideos < filteredVideos.length && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={loadMoreVideos}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bits;
