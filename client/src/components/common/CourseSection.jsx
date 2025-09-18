import React, { useState } from 'react';

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Cybersecurity');

  // Sample course data for each category
  const courseCategories = {
    Cybersecurity: [
      {
        id: 1,
        title: "Introduction to Cybersecurity",
        description: "Learn the fundamentals of cybersecurity principles and practices",
        level: "Beginner",
        duration: "6 weeks",
        lessons: 24,
        rating: 4.8,
        students: 12500,
        price: "$89.99"
      },
      {
        id: 2,
        title: "Ethical Hacking Fundamentals",
        description: "Understand ethical hacking techniques and penetration testing",
        level: "Intermediate",
        duration: "8 weeks",
        lessons: 32,
        rating: 4.7,
        students: 8700,
        price: "$94.99"
      },
      {
        id: 3,
        title: "Network Security Essentials",
        description: "Master network security protocols and defense mechanisms",
        level: "Intermediate",
        duration: "7 weeks",
        lessons: 28,
        rating: 4.9,
        students: 10200,
        price: "$79.99"
      },
      {
        id: 4,
        title: "Cyber Threat Intelligence",
        description: "Learn to identify and analyze cyber threats",
        level: "Advanced",
        duration: "5 weeks",
        lessons: 20,
        rating: 4.6,
        students: 5600,
        price: "$109.99"
      },
      {
        id: 5,
        title: "Security Operations Center (SOC)",
        description: "Develop skills for working in a Security Operations Center",
        level: "Advanced",
        duration: "9 weeks",
        lessons: 36,
        rating: 4.8,
        students: 7200,
        price: "$119.99"
      }
    ],
    MicrosoftAzure: [
      {
        id: 1,
        title: "Azure Fundamentals (AZ-900)",
        description: "Prepare for the AZ-900 certification with comprehensive training",
        level: "Beginner",
        duration: "4 weeks",
        lessons: 16,
        rating: 4.7,
        students: 18900,
        price: "$79.99"
      },
      {
        id: 2,
        title: "Azure Administrator (AZ-104)",
        description: "Master Azure administration and management",
        level: "Intermediate",
        duration: "8 weeks",
        lessons: 32,
        rating: 4.8,
        students: 12500,
        price: "$99.99"
      },
      {
        id: 3,
        title: "Azure Solutions Architect",
        description: "Design solutions on Microsoft Azure",
        level: "Advanced",
        duration: "10 weeks",
        lessons: 40,
        rating: 4.9,
        students: 9800,
        price: "$129.99"
      },
      {
        id: 4,
        title: "Azure DevOps Engineering",
        description: "Implement DevOps practices using Azure tools",
        level: "Intermediate",
        duration: "7 weeks",
        lessons: 28,
        rating: 4.7,
        students: 11200,
        price: "$94.99"
      },
      {
        id: 5,
        title: "Azure Security Technologies",
        description: "Secure your Azure cloud environment effectively",
        level: "Advanced",
        duration: "6 weeks",
        lessons: 24,
        rating: 4.8,
        students: 8400,
        price: "$109.99"
      }
    ],
    Microsoft365: [
      {
        id: 1,
        title: "Microsoft 365 Fundamentals",
        description: "Get started with Microsoft 365 applications and services",
        level: "Beginner",
        duration: "3 weeks",
        lessons: 12,
        rating: 4.6,
        students: 21500,
        price: "$69.99"
      },
      {
        id: 2,
        title: "Microsoft Teams Mastery",
        description: "Become proficient in Microsoft Teams for collaboration",
        level: "Intermediate",
        duration: "4 weeks",
        lessons: 16,
        rating: 4.8,
        students: 17800,
        price: "$79.99"
      },
      {
        id: 3,
        title: "Power Platform Fundamentals",
        description: "Learn Power Apps, Power Automate, and Power BI",
        level: "Intermediate",
        duration: "6 weeks",
        lessons: 24,
        rating: 4.7,
        students: 13200,
        price: "$89.99"
      },
      {
        id: 4,
        title: "Advanced SharePoint Online",
        description: "Master SharePoint Online for document management",
        level: "Advanced",
        duration: "5 weeks",
        lessons: 20,
        rating: 4.8,
        students: 9500,
        price: "$94.99"
      },
      {
        id: 5,
        title: "Microsoft 365 Security Administration",
        description: "Manage security in Microsoft 365 environment",
        level: "Advanced",
        duration: "7 weeks",
        lessons: 28,
        rating: 4.9,
        students: 7800,
        price: "$109.99"
      }
    ],
    MicrosoftSecurity: [
      {
        id: 1,
        title: "Microsoft Security Fundamentals",
        description: "Understand Microsoft's security framework and tools",
        level: "Beginner",
        duration: "4 weeks",
        lessons: 16,
        rating: 4.7,
        students: 14200,
        price: "$79.99"
      },
      {
        id: 2,
        title: "Identity and Access Management",
        description: "Master Azure Active Directory and identity solutions",
        level: "Intermediate",
        duration: "6 weeks",
        lessons: 24,
        rating: 4.8,
        students: 10800,
        price: "$94.99"
      },
      {
        id: 3,
        title: "Microsoft Defender Suite",
        description: "Implement and manage Microsoft Defender products",
        level: "Advanced",
        duration: "8 weeks",
        lessons: 32,
        rating: 4.9,
        students: 8900,
        price: "$119.99"
      },
      {
        id: 4,
        title: "Security Compliance Manager",
        description: "Learn to manage compliance with Microsoft tools",
        level: "Intermediate",
        duration: "5 weeks",
        lessons: 20,
        rating: 4.7,
        students: 7600,
        price: "$89.99"
      },
      {
        id: 5,
        title: "Advanced Threat Protection",
        description: "Implement advanced threat protection measures",
        level: "Advanced",
        duration: "7 weeks",
        lessons: 28,
        rating: 4.8,
        students: 6800,
        price: "$109.99"
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#103d5d]">Explore Our Courses</h2>
          <div className="mt-4 h-1 w-20 bg-[#245684] mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our specialized courses in key technology areas to advance your career
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.keys(courseCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#245684] text-white shadow-md'
                  : 'bg-white text-[#103d5d] border border-[#245684] hover:bg-[#245684] hover:text-white'
              }`}
            >
              {category.replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseCategories[activeCategory].map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-[#103d5d] to-[#245684] p-6 text-white flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-white text-[#103d5d] bg-opacity-20 rounded-full text-sm">
                    {course.level}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-sm opacity-90">{course.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-700 font-medium">{course.rating}</span>
                    <span className="text-gray-500 ml-2">({(course.students / 1000).toFixed(0)}k students)</span>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {course.lessons} lessons
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#245684]">{course.price}</span>
                  <button className="px-4 py-2 bg-[#245684] hover:bg-[#1a4066] text-white rounded-md text-sm font-medium transition duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border border-[#245684] text-[#245684] hover:bg-[#245684] hover:text-white rounded-md font-medium transition duration-300">
            View All Courses in {activeCategory.replace(/([A-Z])/g, ' $1')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;