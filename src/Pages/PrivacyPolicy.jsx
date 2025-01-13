import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-black min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold text-orange-500 mb-6">Privacy Policy</h1>
        <p className="text-lg leading-relaxed mb-4">
          At <span className="text-orange-500 font-semibold">GamesPlay</span>, your privacy is our priority. We are committed to safeguarding your personal data 
          and ensuring that it is handled with the utmost care.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          This privacy policy outlines the types of information we collect, how we use it, and the steps we take to protect it. By using our services, 
          you agree to the practices described in this policy.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          If you have any questions or concerns regarding your privacy, please don't hesitate to contact us at any time. Your trust means everything to us.
        </p>
        <p className="text-lg leading-relaxed">
          Thank you for trusting <span className="text-orange-500 font-semibold">GamesPlay</span> with your personal information.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
