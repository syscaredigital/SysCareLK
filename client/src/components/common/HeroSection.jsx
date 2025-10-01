import React, { useState, useEffect } from 'react';
import heroImage1 from '../../assets/website_images/heroImage1.jpg';
import heroImage2 from '../../assets/website_images/heroImage2.jpg';
import heroImage3 from '../../assets/website_images/heroImage3.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample course data
  const courses = [
    {
      id: 1,
      image: heroImage1,
    },
    {
      id: 2,
      image: heroImage2,
    },
    {
      id: 3,
      image: heroImage3,
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [courses.length]);

  return (
    <div className="relative bg-gradient-to-br from-[#103d5d] to-[#245684] text-white overflow-hidden min-h-screen">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-white opacity-5 rounded-full"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-white opacity-5 rounded-full"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="block">Unlock Your</span>
              <span className="block text-white mt-2">Learning Potential</span>
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto lg:mx-0 opacity-90">
              Discover a world of knowledge with our interactive courses. Expand your skills, advance your career, and achieve your learning goals with expert instructors.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#245684] hover:bg-[#1a4066] shadow-md md:py-4 md:text-lg md:px-10 transition duration-300"
              >
                Enroll Now
              </a>
              <a
                href="#"
                className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-[#103d5d] hover:bg-opacity-10 md:py-4 md:text-lg md:px-10 transition duration-300"
              >
                View Courses
              </a>
            </div>
            
          </div>
          
          {/* Course Banner Slider - Optimized for 1080x1080 images */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full max-w-lg relative">
              {/* Slider navigation */}
              <div className="absolute top-1/2 left-0 right-0 flex justify-between z-10 transform -translate-y-1/2 px-4">
                <button 
                  onClick={() => setCurrentSlide((currentSlide - 1 + courses.length) % courses.length)}
                  className="bg-[#103d5d] bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 backdrop-blur-sm transition duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => setCurrentSlide((currentSlide + 1) % courses.length)}
                  className="bg-[#103d5d] bg-opacity-10 hover:bg-opacity-30 rounded-full p-3 backdrop-blur-sm transition duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Slider indicators */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-10">
                {courses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-white scale-125' : 'bg-white bg-opacity-40'
                    }`}
                  />
                ))}
              </div>
              
              {/* Course banners - Square container for 1080x1080 images */}
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                {courses.map((course, index) => (
                  <div
                    key={course.id}
                    className={`transition-transform duration-500 ease-in-out ${
                      index === currentSlide ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                      {/* Square image container */}
                      <img 
                        src={course.image} 
                        alt={`Course ${course.id}`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient overlay for better button visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          className="w-full h-16 text-white" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;