import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">GamesPlay</h3>
          <p className="text-sm mb-4">Your one-stop shop for all your gaming needs. We offer the best gaming gear, accessories, and content to keep you at the top of your game!</p>
          <p>&copy; 2024 GamesPlay. All Rights Reserved.</p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="/help" className="text-sm hover:text-orange-500">Help & FAQs</a></li>
            <li><a href="/contact-us" className="text-sm hover:text-orange-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Shop Categories</h3>
          <ul className="space-y-2">
            <li><a href="/shop/gaming-laptops" className="text-sm hover:text-orange-500">Gaming Accessories</a></li>
          </ul>
        </div>

        {/* Social Media & Legal Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-6 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
              <FaLinkedin />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
              <FaYoutube />
            </a>
          </div>

          <div className="text-sm space-x-2">
            <a href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</a> | 
            <a href="/about-us" className="hover:text-orange-500">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
