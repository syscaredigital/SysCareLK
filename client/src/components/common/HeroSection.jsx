import { useState, useEffect } from 'react';
import { Play, Users, Award, BookOpen, Star, ChevronRight, ChevronLeft, ChevronDown, Zap, Cpu, Code, Shield } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const words = ['CyberSecurity', 'Microsoft Azure', 'Microsoft 365', 'Cloud Computing'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Banner slides data
  const bannerSlides = [
    {
      title: "Microsoft Azure Mastery",
      subtitle: "Cloud Computing Track",
      description: "Learn to deploy, manage, and monitor cloud applications",
      progress: 75,
      modules: "12/16 Modules",
      rating: 4.9,
      instructor: "Sarah Johnson",
      duration: "8 Weeks",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bgGradient: "from-blue-900/30 to-cyan-900/20",
      borderColor: "border-cyan-500/30"
    },
    {
      title: "Cybersecurity Essentials",
      subtitle: "Security Track",
      description: "Protect systems from cyber threats and attacks",
      progress: 60,
      modules: "9/15 Modules",
      rating: 4.8,
      instructor: "Michael Chen",
      duration: "10 Weeks",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bgGradient: "from-green-900/30 to-emerald-900/20",
      borderColor: "border-green-500/30"
    },
    {
      title: "Microsoft 365 Administration",
      subtitle: "Productivity Track",
      description: "Master enterprise productivity and collaboration tools",
      progress: 45,
      modules: "6/13 Modules",
      rating: 4.7,
      instructor: "Jessica Williams",
      duration: "6 Weeks",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bgGradient: "from-purple-900/30 to-fuchsia-900/20",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Cloud Infrastructure",
      subtitle: "Advanced Track",
      description: "Design and implement cloud infrastructure solutions",
      progress: 30,
      modules: "4/12 Modules",
      rating: 4.9,
      instructor: "David Martinez",
      duration: "12 Weeks",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bgGradient: "from-orange-900/30 to-red-900/20",
      borderColor: "border-orange-500/30"
    }
  ];

  // Auto-typing effect
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

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gray-950">
      {/* Binary code background animation */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/30 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
      
      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-circuit-pattern bg-cover bg-center"></div>
      
      {/* Grid overlay with cyber style */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-pattern bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950"></div>
      </div>
      
      {/* Digital particles */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Glowing orbs with cyber colors */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slower"></div>
      <div className="absolute top-3/4 left-1/4 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-medium"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-900/20 border border-cyan-400/30 text-cyan-400 text-sm mb-6 glow-cyan">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
              Future-ready digital learning
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Master <span className="text-cyan-400">Digital</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
              <br />Technologies
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Join 50,000+ professionals advancing their careers with our cutting-edge courses in cybersecurity, cloud computing, and Microsoft technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
              <a 
                href="#" 
                className="group relative bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-gray-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/20 flex items-center cyber-button"
              >
                <Zap className="mr-2" size={20} fill="currentColor" />
                <span>Start Learning Now</span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#" 
                className="group relative bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50 flex items-center glow-cyan-hover"
              >
                <Play className="mr-2" size={20} />
                <span>Watch Demo</span>
              </a>
            </div>
            
            {/* Stats with cyber icons */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-md">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="relative">
                    <Users className="text-cyan-400 mr-2" size={20} />
                    <div className="absolute -inset-1 bg-cyan-400/20 rounded-full blur-sm"></div>
                  </div>
                  <span className="text-2xl font-bold text-white">50K+</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Active Students</p>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="relative">
                    <Code className="text-cyan-400 mr-2" size={20} />
                    <div className="absolute -inset-1 bg-cyan-400/20 rounded-full blur-sm"></div>
                  </div>
                  <span className="text-2xl font-bold text-white">200+</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Courses</p>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="relative">
                    <Shield className="text-cyan-400 mr-2" size={20} />
                    <div className="absolute -inset-1 bg-cyan-400/20 rounded-full blur-sm"></div>
                  </div>
                  <span className="text-2xl font-bold text-white">98%</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Success Rate</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Banner Slider Carousel */}
          <div className="md:w-1/2 relative">
            <div className="relative max-w-md mx-auto h-96">
              {/* Slider container */}
              <div className="relative h-full overflow-hidden rounded-xl cyber-border">
                {bannerSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                      index === currentSlide
                        ? 'translate-x-0'
                        : index < currentSlide
                        ? '-translate-x-full'
                        : 'translate-x-full'
                    }`}
                  >
                    <div className={`relative h-full bg-gradient-to-br ${slide.bgGradient} rounded-xl border ${slide.borderColor} p-6 overflow-hidden cyber-card`}>
                      {/* Hexagon pattern overlay */}
                      <div className="absolute inset-0 opacity-5 bg-hexagon-pattern"></div>
                      
                      {/* Background image with overlay */}
                      <div className="absolute inset-0 z-0">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-full object-cover opacity-10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/90"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">{slide.title}</h3>
                            <p className="text-cyan-400 text-sm">{slide.subtitle}</p>
                          </div>
                          <div className="flex items-center bg-cyan-900/20 px-3 py-1 rounded-full glow-cyan">
                            <Star className="text-cyan-400 mr-1" size={14} fill="currentColor" />
                            <span className="text-cyan-300 text-sm">{slide.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-4 flex-grow">{slide.description}</p>
                        
                        <div className="mb-4">
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" 
                              style={{ width: `${slide.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-400 mt-2">
                            <span>Progress: {slide.progress}%</span>
                            <span>{slide.modules}</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="bg-gray-800/50 p-3 rounded-lg cyber-border-inner">
                            <p className="text-white text-sm font-medium">Instructor</p>
                            <p className="text-cyan-400 text-xs">{slide.instructor}</p>
                          </div>
                          <div className="bg-gray-800/50 p-3 rounded-lg cyber-border-inner">
                            <p className="text-white text-sm font-medium">Duration</p>
                            <p className="text-cyan-400 text-xs">{slide.duration}</p>
                          </div>
                        </div>
                        
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-gray-900 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center cyber-button">
                          <Cpu className="mr-2" size={18} />
                          <span>Access Course</span>
                          <ChevronRight className="ml-2" size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-cyan-900/50 text-cyan-400 p-2 rounded-full z-20 transition-all duration-300 cyber-border glow-cyan-hover"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-cyan-900/50 text-cyan-400 p-2 rounded-full z-20 transition-all duration-300 cyber-border glow-cyan-hover"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Indicator dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {bannerSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-cyan-400 scale-125 glow-cyan' : 'bg-gray-600'
                    }`}
                  ></button>
                ))}
              </div>
              
              {/* Slide counter */}
              <div className="absolute top-4 right-4 bg-gray-900/80 text-cyan-300 text-xs px-2 py-1 rounded-full z-20 cyber-border">
                {currentSlide + 1} / {bannerSlides.length}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center text-cyan-400">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="animate-bounce" />
        </div>
      </div>
      
      {/* Custom styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-10px) rotate(5deg); opacity: 1; }
          100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(103 232 249 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2345f7ff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        .bg-hexagon-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 25V75L50 100L0 75V25L50 0Z' fill='%2345f7ff' fill-opacity='0.03'/%3E%3C/svg%3E");
          background-size: 50px;
        }
        .cyber-border {
          border: 1px solid rgba(34, 211, 238, 0.2);
          box-shadow: 0 0 5px rgba(34, 211, 238, 0.1), 
                      inset 0 0 5px rgba(34, 211, 238, 0.1);
        }
        .cyber-border-inner {
          border: 1px solid rgba(34, 211, 238, 0.1);
          box-shadow: inset 0 0 5px rgba(34, 211, 238, 0.05);
        }
        .cyber-card {
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.1),
                      0 0 30px rgba(34, 211, 238, 0.05);
        }
        .cyber-button {
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.4),
                      0 0 20px rgba(34, 211, 238, 0.2),
                      0 0 30px rgba(34, 211, 238, 0.1);
        }
        .cyber-button:hover {
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.5),
                      0 0 25px rgba(34, 211, 238, 0.3),
                      0 0 40px rgba(34, 211, 238, 0.2);
        }
        .glow-cyan {
          box-shadow: 0 0 5px rgba(34, 211, 238, 0.5);
        }
        .glow-cyan-hover:hover {
          box-shadow: 0 0 8px rgba(34, 211, 238, 0.6);
        }
      `}</style>
    </section>
  );
};

export default Hero;