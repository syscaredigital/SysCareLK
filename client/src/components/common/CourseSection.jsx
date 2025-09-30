import React, { useState } from 'react';

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Cybersecurity');

  // Sample course data for each category
  const courseCategories = {
    Cybersecurity: [
      {
        id: 1,
        title: "Introduction to Cybersecurity",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        title: "Ethical Hacking Fundamentals",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        title: "Network Security Essentials",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        title: "Cyber Threat Intelligence",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      
    ],
    MicrosoftAzure: [
      {
        id: 1,
        title: "Azure Fundamentals (AZ-900)",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        title: "Azure Administrator (AZ-104)",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        title: "Azure Solutions Architect",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        title: "Azure DevOps Engineering",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      
    ],
    Microsoft365: [
      {
        id: 1,
        title: "Microsoft 365 Fundamentals",
        image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        title: "Microsoft Teams Mastery",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        title: "Power Platform Fundamentals",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        title: "Advanced SharePoint Online",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      
    ],
    MicrosoftSecurity: [
      {
        id: 1,
        title: "Microsoft Security Fundamentals",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        title: "Identity and Access Management",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        title: "Microsoft Defender Suite",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        title: "Security Compliance Manager",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
     
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

        {/* Courses Grid - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courseCategories[activeCategory].map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-[#245684] text-white text-sm font-medium rounded-full">
                    {activeCategory.replace(/([A-Z])/g, ' $1')}
                  </span>
                </div>
              </div>
              
              {/* Course Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-[#245684] transition-colors duration-300">
                  {course.title}
                </h3>
                
                {/* Enroll Button */}
                <button className="w-full mt-3 px-4 py-2 bg-[#245684] hover:bg-[#1a4066] text-white rounded-lg font-medium transition-colors duration-300">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border border-[#245684] text-[#245684] hover:bg-[#245684] hover:text-white rounded-lg font-medium transition duration-300">
            View All {activeCategory.replace(/([A-Z])/g, ' $1')} Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;