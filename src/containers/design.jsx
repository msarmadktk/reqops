import React from 'react';

const CollectiveDeliverySquad = () => {
  const items = [
    {
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      title: 'Project Coordination',
      description: 'Ensure efficient planning, execution, and completion of projects, keeping them on schedule and within budget.',
    },
    {
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      title: 'Risk Management:',
      description: 'Proactively identify and mitigate risks to prevent delays and project failures.',
    },
    {
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      title: 'Communication',
      description: 'They maintain open communication between teams and stakeholders, ensuring alignment and clarity on project goals.',
    },
    {
      icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
      title: 'Strategic Alignment',
      description: 'They ensure projects align with and contribute to the organisation\'s strategic objectives.',
    },
    {
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      title: 'Scope Management',
      description: 'Changes in project scope or resources, adapting strategies to ensure successful outcomes.',
    },
    {
      icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Quality Assurance',
      description: 'Oversee project standards and quality, ensuring outputs meet or exceed expectations.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 md:p-12">
      <h3 className="text-center text-lg mb-2">Behind Every Great Delivery:</h3>
      <h2 className="text-center text-3xl font-bold mb-8">The Collective Delivery Squad</h2>
      <div className="grid md:grid-cols-2 grid-cols-3 gap-8 ">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center rounded-2xl ">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectiveDeliverySquad;