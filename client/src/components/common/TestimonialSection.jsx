import React, { useState, useEffect } from 'react';

const EducationalTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    rating: 5,
    testimonial: ''
  });

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      course: "Cybersecurity Bootcamp",
      avatar: "👩‍💻",
      result: "Passed CEH Exam",
      rating: 5,
      text: "The hands-on labs and expert instructors made complex security concepts easy to understand. I landed a cybersecurity analyst role right after completion!",
      before: "IT Support",
      after: "Security Analyst",
      duration: "6 months"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      course: "Microsoft Azure Administrator",
      avatar: "👨‍💼",
      result: "AZ-104 Certified",
      rating: 4,
      text: "Practical Azure training that directly translated to my job. The real-world scenarios helped me implement cloud solutions confidently.",
      before: "System Admin",
      after: "Cloud Engineer",
      duration: "4 months"
    },
    {
      id: 3,
      name: "Priya Patel",
      course: "Ethical Hacking",
      avatar: "👩‍🎓",
      result: "CEH Certified",
      rating: 5,
      text: "From beginner to certified ethical hacker! The course structure and mentor support were exceptional. Highly recommended for career changers.",
      before: "Student",
      after: "Penetration Tester",
      duration: "8 months"
    }
  ];

  // Course options for the form
  const courses = [
    "Cybersecurity Bootcamp",
    "Microsoft Azure Administrator",
    "Ethical Hacking",
    "Network Defense",
    "Cloud Security",
    "Microsoft 365 Security"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Testimonial submitted:', formData);
    alert('Thank you for sharing your experience! Your testimonial will be reviewed.');
    setFormData({
      name: '',
      email: '',
      course: '',
      rating: 5,
      testimonial: ''
    });
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🎓 Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transformative <span className="text-blue-600">Learning Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our students have transformed their careers through our industry-leading certification programs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Testimonials Carousel */}
          <div className="space-y-8">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-2xl">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{testimonials[activeTestimonial].name}</h3>
                    <p className="text-blue-600 font-medium">{testimonials[activeTestimonial].course}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonials[activeTestimonial].result}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4">
                {renderStars(testimonials[activeTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonials[activeTestimonial].text}"
              </blockquote>

              {/* Career Progress */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">Career Transformation</span>
                  <span className="text-sm text-blue-600">{testimonials[activeTestimonial].duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Before</div>
                    <div className="font-semibold text-gray-900">{testimonials[activeTestimonial].before}</div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="relative">
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-full"></div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="text-blue-600">→</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">After</div>
                    <div className="font-semibold text-green-600">{testimonials[activeTestimonial].after}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

          
          </div>

          {/* Right Column - Share Your Story Form */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-8 text-white">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Share Your Success Story</h3>
              <p className="text-blue-100">Inspire others with your learning journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="text-black w-full px-4 py-3 bg-white bg-opacity-10 border border-blue-400 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent placeholder-blue-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="text-black w-full px-4 py-3 bg-white bg-opacity-10 border border-blue-400 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent placeholder-blue-200"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">Course Taken</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({...formData, course: e.target.value})}
                  className="text-black w-full px-4 py-3 bg-white bg-opacity-10 border border-blue-400 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent"
                  required
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">Your Rating</label>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({...formData, rating: star})}
                        className="text-2xl transition transform hover:scale-110"
                      >
                        {star <= formData.rating ? '⭐' : '☆'}
                      </button>
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{formData.rating}.0</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">Your Experience</label>
                <textarea
                  value={formData.testimonial}
                  onChange={(e) => setFormData({...formData, testimonial: e.target.value})}
                  rows="4"
                  className="text-black w-full px-4 py-3 bg-white bg-opacity-10 border border-blue-400 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent placeholder-blue-200"
                  placeholder="Share how this course helped your career..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Share My Story 🎉
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-blue-200 text-sm">
                Your testimonial will be reviewed and featured to inspire future students
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalTestimonials;