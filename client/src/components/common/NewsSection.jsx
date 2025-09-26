import React, { useState, useEffect } from 'react';

const NewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const newsItems = [
    {
      id: 1,
      title: "New Cybersecurity Certification Program Launched",
      excerpt: "We're excited to announce our new advanced cybersecurity certification program starting next month.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Announcement",
      date: "Dec 15, 2024",
      author: "Dr. Sarah Johnson",
      readTime: "3 min read",
      badge: "New"
    },
    {
      id: 2,
      title: "Microsoft Azure Training Updated with Latest Features",
      excerpt: "Our Azure curriculum now includes the latest cloud security features and best practices.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Update",
      date: "Dec 12, 2024",
      author: "Michael Chen",
      readTime: "4 min read",
      badge: "Updated"
    },
    {
      id: 3,
      title: "Partnership with Industry Leaders for Practical Training",
      excerpt: "We've partnered with leading tech companies to provide real-world project experience.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Partnership",
      date: "Dec 10, 2024",
      author: "Emma Rodriguez",
      readTime: "5 min read",
      badge: "Featured"
    },
    {
      id: 4,
      title: "Student Success: 95% Certification Pass Rate Achieved",
      excerpt: "Our students achieved a remarkable 95% pass rate in the latest certification exams.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Success",
      date: "Dec 8, 2024",
      author: "David Kim",
      readTime: "2 min read",
      badge: "Achievement"
    },
    {
      id: 5,
      title: "Free Workshop: Introduction to Cloud Security",
      excerpt: "Join our free introductory workshop on cloud security fundamentals next weekend.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Workshop",
      date: "Dec 5, 2024",
      author: "Lisa Wang",
      readTime: "3 min read",
      badge: "Free"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, newsItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            📰 Latest News & Updates
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated with <span className="text-blue-600">SysCare</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the latest news about our courses, events, and student success stories
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Auto-play Toggle */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                autoPlay 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <span className={`w-3 h-3 rounded-full ${autoPlay ? 'bg-green-500' : 'bg-gray-400'}`}></span>
              <span>Auto-play {autoPlay ? 'On' : 'Off'}</span>
            </button>
          </div>

          {/* Carousel Container */}
          <div 
            className="relative overflow-hidden rounded-3xl shadow-2xl"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {newsItems.map((news) => (
                <div key={news.id} className="w-full flex-shrink-0">
                  <div className="relative h-96 md:h-[500px]">
                    {/* Background Image */}
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="max-w-4xl">
                        {/* Badge and Category */}
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="px-3 py-1 bg-blue-600 rounded-full text-sm font-medium">
                            {news.badge}
                          </span>
                          <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                            {news.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                          {news.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed">
                          {news.excerpt}
                        </p>

                        {/* Meta Information */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-300">
                            <span>{news.date}</span>
                            <span>•</span>
                            <span>{news.author}</span>
                            <span>•</span>
                            <span>{news.readTime}</span>
                          </div>
                          
                          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors">
                            Read Full Story →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex items-center transition-all duration-300 ${
                  index === currentSlide ? 'w-8' : 'w-3'
                }`}
              >
                <div className={`h-1 rounded-full transition-all ${
                  index === currentSlide ? 'bg-blue-600 w-full' : 'bg-gray-300 w-3 hover:bg-gray-400'
                }`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick News Grid Below Carousel */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.slice(0, 3).map((news) => (
            <div key={news.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    {news.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{news.category}</span>
                  <span className="mx-2">•</span>
                  <span>{news.readTime}</span>
                </div>
                
                <h4 className="font-bold text-gray-900 mb-3 line-clamp-2">
                  {news.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{news.date}</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            View All News & Updates
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;