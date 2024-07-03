import React from 'react';

const DeliverySquad = () => {
  const cards = [
    {
      icon: '€',
      title: '80% savings on testing expenditure',
      description: 'Achieve over $70,000 in testing cost savings, automate QA roles within agile squads, and enable development teams, POs, and developers for streamlined operations and improved collaboration.',
    },
    {
      icon: '◎',
      title: 'Never lose track of your features',
      description: 'Streamline documentation across JIRA, Confluence, and git repositories, gain instant product insights, and maintain testing traceability with our comprehensive test script dashboard.',
    },
    {
      icon: '</>', 
      title: 'Less meetings more coding',
      description: 'RegOPS requirement briefs are detailed to ensure your engineers enjoy working with us. We provide comprehensive user stories, functional UI test cases, CI integration, automated process flow generation, AI workshops, and more.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Uplift Your Delivery Squad</h2>
      <div className="flex flex-row sm:flex-col gap-6">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="rounded-lg p-6 bg-gradient-to-br from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p className="text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliverySquad;