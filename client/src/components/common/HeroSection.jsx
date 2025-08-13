import { useState, useEffect } from 'react';
const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const words = ['Skills', 'Knowledge', 'Future', 'Career'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        setTypingSpeed(100);
      } else {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, wordIndex, isDeleting, words, typingSpeed]);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Moving silver gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#103d5d] via-[#245684] to-[#ffffff] animate-moveGradient"></div>
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e4a] via-[#1a4b7a] to-[#2d6ba3] opacity-95"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-indigo-400 animate-float1"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-blue-400 animate-float2"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-purple-400 animate-float3"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-teal-400 animate-float4"></div>
        <div className="absolute bottom-1/3 left-3/4 w-12 h-12 rounded-full bg-pink-400 animate-float5"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">
              Access 5,000+ courses from top instructors around the world. Grow your skills with our interactive learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Learning Free
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow hover:shadow-md border border-white/20"
              >
                Explore Courses
              </a>
            </div>
            
            <div className="mt-10 flex items-center justify-center md:justify-start space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <img 
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item+20}.jpg`}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-white hover:scale-110 transition-transform duration-200"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white">50,000+</span> students learning
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="md:w-1/2 relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl border-4 border-indigo-200/50 animate-pulse-slow"></div>
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-4 border-indigo-300/50 animate-pulse-slower"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Students learning"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover transform hover:rotate-1 transition-transform duration-500"
              />
            </div>
            
            {/* Floating course cards - 5 total now */}
            <div className="hidden lg:block absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
              <div className="flex items-center">
                <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Microsoft 365</p>
                  <p className="text-sm text-gray-500">120+ Courses</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Cybersecurity</p>
                  <p className="text-sm text-gray-500">85+ Courses</p>
                </div>
              </div>
            </div>
            
            {/* New floating card 1 */}
            <div className="hidden lg:block absolute -bottom-5 right-0 bg-white p-3 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Microsoft Azure</p>
                  <p className="text-xs text-gray-500">42+ Courses</p>
                </div>
              </div>
            </div>
            
            {/* New floating card 2 */}
            <div className="hidden lg:block absolute top-10 left-0 bg-white p-3 rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
              <div className="flex items-center">
                <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Microsoft Security</p>
                  <p className="text-xs text-gray-500">67+ Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;