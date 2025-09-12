import React, { useState, useEffect, useRef } from 'react';

const CallToAction = () => {
  const [counters, setCounters] = useState({
    students: 0,
    trainings: 0,
    passingRate: 0,
    internationalStudents: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animate counters when section is visible
  useEffect(() => {
    if (isVisible) {
      const targetValues = {
        students: 400,
        trainings: 60,
        passingRate: 94,
        internationalStudents: 40
      };

      const duration = 2000;
      const frameRate = 30;
      const totalFrames = duration / (1000 / frameRate);
      
      let frame = 0;
      
      const counterInterval = setInterval(() => {
        frame++;
        
        setCounters({
          students: Math.min(targetValues.students, Math.floor(targetValues.students * (frame / totalFrames))),
          trainings: Math.min(targetValues.trainings, Math.floor(targetValues.trainings * (frame / totalFrames))),
          passingRate: Math.min(targetValues.passingRate, Math.floor(targetValues.passingRate * (frame / totalFrames))),
          internationalStudents: Math.min(targetValues.internationalStudents, Math.floor(targetValues.internationalStudents * (frame / totalFrames)))
        });
        
        if (frame >= totalFrames) clearInterval(counterInterval);
      }, 1000 / frameRate);

      return () => clearInterval(counterInterval);
    }
  }, [isVisible]);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseType: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-[#0f2e46] to-[#1a4066] text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#245684] opacity-10 rounded-full -translate-y-36 translate-x-36"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#103d5d] opacity-10 rounded-full -translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Transform Your Career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Expert Training</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join thousands of successful professionals who have advanced their careers with our industry-leading certification programs
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Stats */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10 shadow-2xl transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{counters.students}+</div>
                <div className="text-lg font-medium">Students Trained</div>
              </div>
              <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10 shadow-2xl transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{counters.trainings}+</div>
                <div className="text-lg font-medium">Professional Trainings</div>
              </div>
              <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10 shadow-2xl transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{counters.passingRate}%</div>
                <div className="text-lg font-medium">Exam Passing Rate</div>
              </div>
              <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10 shadow-2xl transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{counters.internationalStudents}+</div>
                <div className="text-lg font-medium">International Students</div>
              </div>
            </div>
            
            <div className="mt-12 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                Talk to Our Learning Specialists
              </h3>
              <div className="flex items-center text-xl font-medium pl-16">
                <span>0760454562</span>
              </div>
              <p className="mt-4 opacity-80 pl-16">
                Our experts are ready to guide you to the right training program for your career goals
              </p>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-[#0f2e46] to-[#1a4066] rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 opacity-10 rounded-full translate-y-20 -translate-x-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">CONTACT FOR MORE TRAININGS</h3>
                    <p className="opacity-90">Want to Know about SysCare IT Trainings?</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Your name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-white placeholder-opacity-60"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Your mail*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-white placeholder-opacity-60"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone*</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-white placeholder-opacity-60"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="courseType" className="block text-sm font-medium mb-2">Course Type</label>
                      <select
                        id="courseType"
                        name="courseType"
                        value={formData.courseType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      >
                        <option value="">Select a course type</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="microsoft-azure">Microsoft Azure</option>
                        <option value="microsoft-365">Microsoft 365</option>
                        <option value="microsoft-security">Microsoft Security</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium mb-2">Comment</label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-white placeholder-opacity-60"
                      placeholder="Like what you see? Contact us to see what type of courses you're looking for!"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Contact Our Learning Specialists
                  </button>
                </form>
                
                <p className="mt-6 text-sm text-center opacity-80">
                  Contact our learning consultants to get more information about SysCare Professional trainings and get the Best training for uplift your Professional qualifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;