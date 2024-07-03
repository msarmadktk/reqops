import React from 'react';

const WorkChangingFeatures = () => {
  const plans = [
    {
      title: 'Free Trial',
      features: [
        'Project Creation',
        'Customer Journey Mapping',
        'Customer Journey Mapping AI Workshop',
        'Journey Map Diagram',
      ],
    },
    {
      title: 'Registered User',
      features: [
        'Project Creation',
        'Customer Journey Mapping',
        'Customer Journey Mapping AI Workshop',
        'Journey Map Diagram',
        'AI User Story Generation',
        'User Story AI Workshop',
      ],
    },
    {
      title: 'Subscription',
      features: [
        'Project Creation',
        'Customer Journey Mapping',
        'Customer Journey Mapping AI Workshop',
        'Journey Map Diagram',
        'AI User Story Generation',
        'User Story AI Workshop',
        'Sync to Jira / Azure',
        'Project Health Analysis & Scope Creep',
        'Test Case Writing',
        'Test Case Automation',
        'Regression Test Maintenance',
        'All exclusive AI features',
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Get access to work-changing features
      </h2>
      <div className="flex flex-row sm:flex-col gap-6 justify-center sm:items-center" >
        {plans.map((plan, index) => (
          <div key={index} className="flex-1 ">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-t-lg p-4">
              <h3 className="text-xl font-semibold text-center">{plan.title}</h3>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-b-lg p-4 border border-pink-500/50">
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkChangingFeatures;