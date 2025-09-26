import React, { useState, useEffect } from 'react';

const BlogSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cybersecurity in 2025",
      excerpt: "Explore the latest trends and predictions in cybersecurity and how they will impact businesses worldwide.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Cybersecurity",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      author: "Sarah Johnson"
    },
    {
      id: 2,
      title: "Mastering Microsoft Azure: Best Practices for Beginners",
      excerpt: "Learn the essential Azure concepts and best practices to kickstart your cloud computing journey.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Microsoft Azure",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      author: "Michael Chen"
    },
    {
      id: 3,
      title: "Microsoft 365 Security: Protecting Your Digital Workplace",
      excerpt: "Discover how to secure your Microsoft 365 environment against modern cyber threats.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Microsoft Security",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      author: "Emma Rodriguez"
    },
    {
      id: 4,
      title: "Ethical Hacking: Building a Career in Cybersecurity",
      excerpt: "A comprehensive guide to starting your career as an ethical hacker and the skills you need.",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Career",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      author: "David Kim"
    },
    {
      id: 5,
      title: "Cloud Computing Trends for 2025",
      excerpt: "What to expect in the cloud computing landscape and how to prepare for the changes ahead.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Cloud",
      date: "Nov 22, 2024",
      readTime: "4 min read",
      author: "Lisa Wang"
    },
    {
      id: 6,
      title: "Microsoft Certification Paths: Which One is Right for You?",
      excerpt: "Navigate through Microsoft's certification options and choose the best path for your career goals.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Certification",
      date: "Nov 15, 2024",
      readTime: "6 min read",
      author: "Robert Brown"
    }
  ];

  const postsPerSlide = 3;
  const totalSlides = Math.ceil(blogPosts.length / postsPerSlide);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#103d5d]">Latest from Our Blog</h2>
          <div className="mt-4 h-1 w-20 bg-[#245684] mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and expert opinions in IT education and technology
          </p>
        </div>

        {/* Blog Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {blogPosts.slice(slideIndex * postsPerSlide, (slideIndex + 1) * postsPerSlide).map((post) => (
                      <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        {/* Blog Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-[#245684] text-white text-sm font-medium rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        
                        {/* Blog Content */}
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-[#103d5d] mb-3 line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-gradient-to-r from-[#103d5d] to-[#245684] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                                {post.author.split(' ').map(name => name[0]).join('')}
                              </div>
                              <span className="text-sm text-gray-700">{post.author}</span>
                            </div>
                            <button className="text-[#245684] hover:text-[#1a4066] font-medium text-sm flex items-center transition duration-300">
                              Read More
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition duration-300 z-10"
          >
            <svg className="w-6 h-6 text-[#245684]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition duration-300 z-10"
          >
            <svg className="w-6 h-6 text-[#245684]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                index === currentSlide ? 'bg-[#245684]' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#245684] hover:bg-[#1a4066] text-white font-medium rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;