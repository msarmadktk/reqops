import React from 'react';
import heroImage from '../assets/hero.svg';

const LandingPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">req<span className="text-pink-500">ops</span></div>

        <button className="bg-transparent text-white px-4 py-2 rounded">Log In</button>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Pioneering communication in
          <span className="block text-pink-400">software delivery.</span>
        </h1>

        <p className="text-lg mb-8">
          Accelerate development with AI-driven speed from design to delivery faster than ever before.
        </p>

        <div className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full p-3 rounded-md bg-gray-800 text-white mb-4"
          />
          <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition">
            Request Early Access
          </button>
        </div>

        <div className="mt-16">
          <img
            src={heroImage}
            alt="Reqops App Interface"
            className="max-w-full mx-auto rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;