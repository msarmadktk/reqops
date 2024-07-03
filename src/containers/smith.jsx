import React from 'react';
import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.svg';
import img4 from '../assets/img4.svg';

const WorkPracticesFramework = () => {
  const sections = [
    {
      title: 'Requirements Management',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: img1
    },
    {
      title: 'Automatic BPMN 2.0 Generation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: img2
    },
    {
      title: 'Test Automation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: img3
    },
    {
      title: 'Integrate into your existing ecosystem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: img4
    }
  ];

  return (
    <div className="bg-gray-900 text-white p-6 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Transform work practices forever. Our</h2>
      <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">Framework for the future:</h3>
      
      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="rounded-lg overflow-hidden bg-gradient-to-br from-pink-600 to-purple-700">
            <div className="p-6 flex flex-row sm:flex-col items-center">
              <div className="w-1/2 sm:w-full mb-4 md:mb-0 md:pr-4">
                <h4 className="text-xl font-semibold mb-2">{section.title}</h4>
                <p className="text-sm max-w-[400px] mb-4">{section.description}</p>
              </div>
              <div className="w-[50%] sm:w-full">
                <img src={section.image} alt={section.title} className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPracticesFramework;