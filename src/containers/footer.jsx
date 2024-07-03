import React from 'react';

const JoinUs = () => {
  return (
    <div className="bg-gradient-to-br from-purple-800 via-pink-700 to-purple-800 min-h-screen flex flex-col justify-between">
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
          Join us in revolutionizing global business growth through AI-driven innovation today
        </h1>
        <p className="text-white mb-8">
          Get early access to our free features.
        </p>
        <div className="w-full max-w-md flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your work email"
            className="flex-grow px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
            Request Early Access
          </button>
        </div>
      </div>
      <footer className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">req<span className="text-pink-500">ops</span></div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544A8.127 8.127 0 0 1 5.5 16.898a5.778 5.778 0 0 0 4.252-1.189 2.879 2.879 0 0 1-2.684-1.995 2.88 2.88 0 0 0 1.298-.049c-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359a2.877 2.877 0 0 1-.889-3.835 8.153 8.153 0 0 0 5.92 3.001 2.876 2.876 0 0 1 4.895-2.62 5.73 5.73 0 0 0 1.824-.697 2.884 2.884 0 0 1-1.263 1.589 5.73 5.73 0 0 0 1.649-.453 5.765 5.765 0 0 1-1.433 1.489z"/></svg>
          </a>
          <a href="#" className="hover:text-gray-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
          </a>
        </div>
        <button className="text-sm hover:underline">
          Already a member? Log in
        </button>
      </footer>
    </div>
  );
};

export default JoinUs;