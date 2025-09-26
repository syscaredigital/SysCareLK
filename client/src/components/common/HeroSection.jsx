import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12500,
      image: "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png",
      price: "$89.99"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Michael Chen",
      rating: 4.7,
      students: 8700,
      image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
      price: "$94.99"
    },
    {
      id: 3,
      title: "UX/UI Design Masterclass",
      instructor: "Emma Rodriguez",
      rating: 4.9,
      students: 10200,
      image: "https://cdn.pixabay.com/photo/2018/06/18/23/59/design-3483051_1280.jpg",
      price: "$79.99"
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
        <div className="flex flex-col lg:flex-row items-center">
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
                Start Learning
              </a>
              <a
                href="#"
                className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-[#103d5d] hover:bg-opacity-10 md:py-4 md:text-lg md:px-10 transition duration-300"
              >
                View Courses
              </a>
            </div>
            
            {/* Stats section */}
            <div className="mt-16 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-4xl font-bold">500+</div>
                <div className="mt-1 text-sm opacity-80">Courses</div>
              </div>
              <div>
                <div className="text-4xl font-bold">50K+</div>
                <div className="mt-1 text-sm opacity-80">Students</div>
              </div>
              <div>
                <div className="text-4xl font-bold">200+</div>
                <div className="mt-1 text-sm opacity-80">Instructors</div>
              </div>
            </div>
          </div>
          
          {/* Course Banner Slider */}
          <div className="mt-16 lg:mt-0 lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md relative">
              {/* Slider navigation */}
              <div className="absolute top-1/2 left-0 right-0 flex justify-between z-10 transform -translate-y-1/2 px-4">
                <button 
                  onClick={() => setCurrentSlide((currentSlide - 1 + courses.length) % courses.length)}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 backdrop-blur-sm transition duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => setCurrentSlide((currentSlide + 1) % courses.length)}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 backdrop-blur-sm transition duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Slider indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                {courses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-40'}`}
                  />
                ))}
              </div>
              
              {/* Course banners */}
              <div className="overflow-hidden rounded-2xl shadow-xl">
                {courses.map((course, index) => (
                  <div
                    key={course.id}
                    className={`transition-transform duration-500 ease-in-out ${index === currentSlide ? 'block' : 'hidden'}`}
                  >
                    <div className="bg-white text-gray-800 rounded-2xl overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#103d5d]">{course.title}</h3>
                        <p className="text-gray-600 mt-2">by {course.instructor}</p>
                        <div className="flex items-center mt-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">{course.rating}</span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-gray-600">{course.students.toLocaleString()} students</span>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-2xl font-bold text-[#245684]">{course.price}</span>
                          <button className="px-4 py-2 bg-[#245684] hover:bg-[#1a4066] text-white rounded-md transition duration-300">
                            Enroll Now
                          </button>
                        </div>
                      </div>
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