import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">About Our Institution</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4">
            Shaping Future
            <span className="text-blue-600 block">Leaders & Innovators</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content - Image with Stats Overlay */}
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Students learning together" 
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 border border-blue-100">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600 text-sm font-medium">Graduation Rate</div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-blue-600 text-white rounded-xl shadow-2xl p-6">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm font-medium">Programs Offered</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Excellence in Education Since 2010
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For over a decade, we have been at the forefront of educational innovation, 
                providing students with the skills and knowledge needed to thrive in a rapidly 
                evolving world. Our commitment to academic excellence and personal growth 
                has shaped thousands of successful careers.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Expert Faculty</h4>
                  <p className="text-gray-600 text-sm">Industry professionals and academic experts</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Global Network</h4>
                  <p className="text-gray-600 text-sm">Partnerships with 100+ institutions worldwide</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-lg p-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Innovative Learning</h4>
                  <p className="text-gray-600 text-sm">Cutting-edge technology and methodologies</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 rounded-lg p-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Student Support</h4>
                  <p className="text-gray-600 text-sm">24/7 academic and career guidance</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg transition duration-300 transform hover:-translate-y-1">
                Explore Our Programs
              </button>
              <button className="px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 rounded-xl font-semibold shadow-md transition duration-300">
                Meet Our Faculty
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15K+</div>
            <div className="text-gray-600 font-medium">Students Enrolled</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Expert Instructors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
            <div className="text-gray-600 font-medium">Countries Reached</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Learning Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;