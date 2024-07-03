import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      title: "AI Test Case Generation",
      description: "Easily import designs to create Acceptance Criteria for every screen and user flow.",
      icon: "📄"
    },
    {
      title: "Import your Designs",
      description: "Import your designs seamlessly and use AI to narrate your user flows.",
      icon: "🎨"
    },
    {
      title: "Sync to your Tools",
      description: "Easily sync your User Stories, Epics, and Acceptance Criteria to production tools.",
      icon: "🔄"
    }
  ];

  return (
    <div className="bg-gray-900 p-8">
      <div className="flex sm:flex-col flex-row gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex-1">
      <div className="bg-gray-900 rounded-2xl p-6 h-full flex flex-col">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="mt-auto flex gap-2">
          {['A', 'B', 'C'].map((item, index) => (
            <div key={index} className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;