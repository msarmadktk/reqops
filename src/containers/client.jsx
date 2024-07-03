import React from 'react';

const FeatureSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mb-12">
        Say goodbye to manual requirement building. Let Reqops speed things up.
      </h2>
      
      <div className="flex flex-row sm:flex-col gap-8">
        <FeatureCard
          title="AI-Assisted Requirement Managemennt"
          content={
            <div className="flex flex-col h-full">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md mb-4">
                Generate with AI
              </button>
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-2 rounded-full mr-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="bg-pink-500 text-sm px-2 py-1 rounded-full">Designer</span>
              </div>
              <div className="space-y-2 mt-auto">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="bg-gray-700 h-2 w-full rounded-full">
                      <div className="bg-blue-500 h-2 w-3/4 rounded-full"></div>
                    </div>
                    <div className="ml-2 w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />
        
        <FeatureCard
          title="Efficient AI-Driven Communication"
          content={
            <div className="flex flex-col h-full">
              <div className="bg-gray-800 p-4 rounded-lg mb-4 flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-blue-400">AI Workshop</span>
                  <div className="flex space-x-2">
                    <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">Developer</span>
                    <span className="bg-pink-500 text-xs px-2 py-1 rounded-full">Designer</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-gray-700 h-2 w-full rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          }
        />
        
        <FeatureCard
          title="Scope Creep Management"
          content={
            <div className="flex flex-col h-full">
              <div className="bg-gray-800 p-4 rounded-lg mb-4 flex-grow">
                <svg className="w-full h-24" viewBox="0 0 100 50">
                  <path d="M0 40 Q 25 20 50 30 T 100 20" fill="none" stroke="#3B82F6" strokeWidth="2" />
                </svg>
              </div>
              <div className="space-y-2 mt-auto">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="bg-gray-700 h-2 w-full rounded-full">
                      <div className="bg-blue-500 h-2 w-1/2 rounded-full"></div>
                    </div>
                    <div className="ml-2 w-4 h-4 bg-pink-500 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, content }) => {
  return (
    <div className="relative p-[3px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex-1">
      <div className="bg-gray-900 rounded-lg p-6 h-full flex flex-col">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        {content}
      </div>
    </div>
  );
};

export default FeatureSection;