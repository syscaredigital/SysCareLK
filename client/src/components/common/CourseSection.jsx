import { Shield, Cloud, Server, Lock, Zap, BookOpen, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
const TrainingCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Certified Network Defender (CND)",
      code: "CND",
      description: "Learn network defense fundamentals, security controls, protocols, perimeter appliances, secure IDS, VPN and firewall configuration.",
      duration: "6 Weeks",
      level: "Intermediate",
      students: "2.5k+",
      rating: 4.8,
      icon: <Shield className="text-blue-500" size={24} />,
      category: "CyberSecurity",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      id: 2,
      title: "Certified Ethical Hacker (CEH)",
      code: "CEH",
      description: "Master ethical hacking techniques, penetration testing, vulnerability assessment, and security auditing.",
      duration: "8 Weeks",
      level: "Advanced",
      students: "4.2k+",
      rating: 4.9,
      icon: <Lock className="text-green-500" size={24} />,
      category: "CyberSecurity",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      id: 3,
      title: "Microsoft Azure Fundamentals (AZ-900)",
      code: "AZ-900",
      description: "Understand cloud concepts, Azure services, security, privacy, compliance, and trust in Azure.",
      duration: "4 Weeks",
      level: "Beginner",
      students: "5.7k+",
      rating: 4.7,
      icon: <Cloud className="text-cyan-500" size={24} />,
      category: "Microsoft Azure",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    },
    {
      id: 4,
      title: "Microsoft Azure Administrator (AZ-104)",
      code: "AZ-104",
      description: "Implement, manage, and monitor identity, governance, storage, compute, and virtual networks in a cloud environment.",
      duration: "8 Weeks",
      level: "Intermediate",
      students: "3.8k+",
      rating: 4.8,
      icon: <Server className="text-purple-500" size={24} />,
      category: "Microsoft Azure",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      id: 5,
      title: "Microsoft 365 Fundamentals (MS-900)",
      code: "MS-900",
      description: "Learn about cloud concepts, Microsoft 365 products and services, security, compliance, privacy, and trust.",
      duration: "4 Weeks",
      level: "Beginner",
      students: "3.1k+",
      rating: 4.6,
      icon: <Zap className="text-amber-500" size={24} />,
      category: "Microsoft 365",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20"
    },
    {
      id: 6,
      title: "EC-Council Incident Handler (ECIH)",
      code: "ECIH",
      description: "Handle and respond to security incidents, identify vulnerabilities and prevent information security breaches.",
      duration: "6 Weeks",
      level: "Intermediate",
      students: "1.9k+",
      rating: 4.7,
      icon: <Lock className="text-red-500" size={24} />,
      category: "CyberSecurity",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20"
    },
    {
      id: 7,
      title: "Computer Hacking Forensic Investigator (CHFI)",
      code: "CHFI",
      description: "Learn computer forensics, evidence analysis, data recovery, and investigating cyber crimes.",
      duration: "10 Weeks",
      level: "Advanced",
      students: "2.3k+",
      rating: 4.9,
      icon: <Shield className="text-indigo-500" size={24} />,
      category: "CyberSecurity",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20"
    }
  ];

  const categories = ["All", "CyberSecurity", "Microsoft Azure", "Microsoft 365"];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Cyber Lines Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400/30"></div>
        <div className="absolute top-10 left-0 w-full h-0.5 bg-blue-400/20"></div>
        <div className="absolute top-20 left-0 w-full h-0.5 bg-cyan-400/30"></div>
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-blue-400/20"></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-cyan-400/30"></div>
        <div className="absolute bottom-20 left-0 w-full h-0.5 bg-blue-400/20"></div>
        <div className="absolute bottom-10 left-0 w-full h-0.5 bg-cyan-400/30"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400/20"></div>
        
        {/* Vertical lines */}
        <div className="absolute top-0 left-10 h-full w-0.5 bg-cyan-400/20"></div>
        <div className="absolute top-0 left-1/4 h-full w-0.5 bg-blue-400/10"></div>
        <div className="absolute top-0 left-1/2 h-full w-0.5 bg-cyan-400/20"></div>
        <div className="absolute top-0 left-3/4 h-full w-0.5 bg-blue-400/10"></div>
        <div className="absolute top-0 right-10 h-full w-0.5 bg-cyan-400/20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Professional</span> Training Courses
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Advance your career with industry-recognized certifications in cybersecurity and cloud technologies. 
            Learn from experts and gain hands-on experience with real-world scenarios.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-cyan-500/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className={`rounded-2xl overflow-hidden border ${course.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10`}
            >
              <div className={`p-6 ${course.bgColor} border-b ${course.borderColor}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center">
                    {course.icon}
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-800/50 text-cyan-300">
                    {course.code}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{course.description}</p>
              </div>
              
              <div className="p-6 bg-gray-800/30">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Clock size={16} className="text-cyan-400 mr-1" />
                    <span className="text-sm text-gray-300">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={16} className="text-cyan-400 mr-1" />
                    <span className="text-sm text-gray-300">{course.level}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Users size={16} className="text-cyan-400 mr-1" />
                    <span className="text-sm text-gray-300">{course.students}</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="text-amber-400 mr-1" fill="currentColor" />
                    <span className="text-sm text-gray-300">{course.rating}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group">
                  <span>View Course Details</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Partners */}
        <div className="bg-gray-800/30 rounded-2xl p-8 border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Our <span className="text-cyan-400">Certification</span> Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-blue-400" size={32} />
              </div>
              <h4 className="text-white font-medium text-center">EC-Council</h4>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4">
                <Cloud className="text-cyan-400" size={32} />
              </div>
              <h4 className="text-white font-medium text-center">Microsoft</h4>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                <Lock className="text-green-400" size={32} />
              </div>
              <h4 className="text-white font-medium text-center">CompTIA</h4>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                <Server className="text-purple-400" size={32} />
              </div>
              <h4 className="text-white font-medium text-center">AWS</h4>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to <span className="text-cyan-400">Advance</span> Your Career?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our industry-recognized certification programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <span>Explore All Courses</span>
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50">
              Speak to an Advisor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCourses;