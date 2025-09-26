import React, { useState, useEffect } from 'react';

const EventsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      title: "2025 New Year Celebration",
      subtitle: "Beginning For New Year 2025 Celebrations 🌟️ SysCare IT Solutions 🌟️",
      description: "SysCare IT Solutions – Sri Lanka is thrilled to welcome the New Year 2025 with exciting celebrations and new beginnings for our team and community.",
      image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "January 2025",
      type: "Celebration"
    },
    {
      id: 2,
      title: "2024 Annual Trip",
      subtitle: "SysCare Annual Team Trip Nuwara Eliya November 2024 💤",
      description: "We're excited to share that the SysCare Team enjoyed an unforgettable Annual Trip to the scenic highlands of Nuwara Eliya, creating lasting memories and strengthening our team bond.",
      image: "",
      date: "November 2024",
      type: "Team Event"
    },
    {
      id: 3,
      title: "Tech Conference 2025",
      subtitle: "Annual Technology Summit & Innovation Showcase",
      description: "Join us for the biggest technology event of the year featuring industry leaders, workshops, and cutting-edge innovations in IT solutions.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "March 2025",
      type: "Conference"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#103d5d]">SysCare Events</h2>
          <div className="mt-4 h-1 w-20 bg-[#245684] mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest events, celebrations, and community engagements
          </p>
        </div>

        {/* Events Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {events.map((event) => (
                <div key={event.id} className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:flex-row min-h-96">
                    {/* Event Image */}
                    <div className="lg:w-1/2 relative">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#245684] text-white text-sm font-medium rounded-full">
                          {event.type}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-white bg-opacity-90 text-[#103d5d] text-sm font-medium rounded-full">
                          {event.date}
                        </span>
                      </div>
                    </div>
                    
                    {/* Event Content */}
                    <div className="lg:w-1/2 bg-white p-8 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#103d5d] mb-3">
                        {event.title}
                      </h3>
                      <p className="text-lg text-[#245684] font-medium mb-4">
                        {event.subtitle}
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {event.description}
                      </p>
                      <button className="inline-flex items-center px-6 py-3 bg-[#245684] hover:bg-[#1a4066] text-white font-medium rounded-lg transition duration-300 w-fit">
                        Learn more
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition duration-300"
          >
            <svg className="w-6 h-6 text-[#245684]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition duration-300"
          >
            <svg className="w-6 h-6 text-[#245684]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  index === currentSlide ? 'bg-[#245684]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#245684] hover:bg-[#1a4066] text-white font-medium rounded-lg transition duration-300">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;