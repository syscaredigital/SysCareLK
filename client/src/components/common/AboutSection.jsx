import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#103d5d]">About Our Education Platform</h2>
          <div className="mt-4 h-1 w-20 bg-[#245684] mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to transforming education through innovative technology and expert instruction.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#103d5d] text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold mb-2">2010</div>
                <p>Year Established</p>
              </div>
              <div className="bg-[#245684] text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold mb-2">95%</div>
                <p>Student Satisfaction</p>
              </div>
              <div className="bg-white border border-[#245684] text-[#103d5d] p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold mb-2">50+</div>
                <p>Countries Reached</p>
              </div>
              <div className="bg-white border border-[#245684] text-[#103d5d] p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p>Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-[#103d5d] mb-6">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              Our mission is to make quality education accessible to everyone, everywhere. We believe that learning should 
              be engaging, flexible, and tailored to individual needs. Through our platform, we're breaking down barriers 
              to education and empowering learners to achieve their goals.
            </p>
            
            <h3 className="text-2xl font-bold text-[#103d5d] mb-6">What Makes Us Different</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#245684] rounded-full p-2 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#103d5d]">Quality Content</h4>
                  <p className="text-gray-600">All courses are created by industry experts and regularly updated.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#245684] rounded-full p-2 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#103d5d]">Community Learning</h4>
                  <p className="text-gray-600">Join a global community of learners and experts for collaboration.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#245684] rounded-full p-2 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#103d5d]">Innovative Technology</h4>
                  <p className="text-gray-600">Our platform uses cutting-edge technology to enhance learning experiences.</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 px-6 py-3 bg-[#245684] hover:bg-[#1a4066] text-white rounded-md shadow-md transition duration-300">
              Learn More About Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;