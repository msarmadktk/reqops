import React from 'react';
import Card1 from '../assets/Card1.svg';
import Card2 from '../assets/Card2.svg';

const FeatureSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mb-4">
        Never waste more than a day handing over design
      </h2>
      <h3 className="text-center text-xl md:text-2xl lg:text-3xl mb-12">
        requirements with these features:
      </h3>
      
      <div className="flex flex-row sm:flex-col gap-8">
        <FeatureCard
          title="Process Map Generation"
          description="Generate User Journeys and automate the Journey creation flow with AI"
          imageSrc={Card1}
          className="md:w-[30%] sm:w-auto"
        />
        <FeatureCard
          title="Automatic AI Generated User Stories"
          description="Create User Stories with AI based on your User Journeys."
          imageSrc={Card2}
          className="w-[70%] sm:w-auto"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, imageSrc, className }) => {
  return (
    <div className={`relative p-[3px] rounded-3xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] rounded-3xl" />
      <div className="relative bg-gray-900 rounded-3xl p-6 h-full flex flex-col">
        <div className="mb-4 rounded-2xl overflow-hidden">
          <img src={imageSrc} alt={title} className="w-full h-auto" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="mt-auto">
          <span className="bg-pink-500 text-sm px-2 py-1 rounded-full">Designer</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;