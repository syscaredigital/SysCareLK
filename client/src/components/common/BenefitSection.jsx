import React from 'react';

const StudentPlatforms = () => {
  const platforms = [
    {
      id: 1,
      title: "Learning Management System",
      icon: "🎓",
      description: "Complete course access with progress tracking",
      color: "blue",
      link: "https://lms.syscare.com",
      buttonText: "Go to LMS"
    },
    {
      id: 2,
      title: "Certificate Verification System",
      icon: "🏆",
      description: "Verify and validate your certificates securely",
      color: "green",
      link: "https://certificates.syscare.com",
      buttonText: "Verify Certificates"
    },
    {
      id: 3,
      title: "Document Verification System",
      icon: "📄",
      description: "Secure document validation and authentication",
      color: "purple",
      link: "https://documents.syscare.com",
      buttonText: "Verify Documents"
    },
    {
      id: 4,
      title: "Payment Portal",
      icon: "💳",
      description: "Secure payment processing and fee management",
      color: "orange",
      link: "https://payments.syscare.com",
      buttonText: "Make Payment"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200",
    green: "bg-green-100 text-green-600 border-green-200 hover:bg-green-200",
    purple: "bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200",
    orange: "bg-orange-100 text-orange-600 border-orange-200 hover:bg-orange-200"
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#103d5d] mb-4">Student Platforms</h2>
          <div className="mt-4 h-1 w-20 bg-[#245684] mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Access all our dedicated platforms designed to support your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <div key={platform.id} className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition duration-300 group">
              <div className={`w-16 h-16 ${colorClasses[platform.color]} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transition duration-300 group-hover:scale-110`}>
                {platform.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{platform.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
              <a 
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-4 py-2 ${colorClasses[platform.color]} rounded-lg font-medium text-sm transition duration-300 hover:shadow-md`}
              >
                {platform.buttonText}
              </a>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default StudentPlatforms;