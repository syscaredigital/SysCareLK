import { Users, Award, BookOpen, Globe, Target, Heart, CheckCircle, GraduationCap } from 'lucide-react';

const AboutUs = () => {
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Us</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Empowering the next generation of technology professionals through cutting-edge education and hands-on learning experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Mission</span>
            </h3>
            <p className="text-gray-300 mb-6">
              At EduTech, we believe that quality education in technology should be accessible to everyone, everywhere. 
              Our mission is to bridge the digital skills gap by providing industry-relevant courses taught by experts 
              in cybersecurity, cloud computing, and Microsoft technologies.
            </p>
            <p className="text-gray-300 mb-8">
              We combine theoretical knowledge with practical, real-world applications to ensure our students are 
              job-ready upon completion of our programs. Our innovative learning platform and supportive community 
              create an environment where students can thrive and excel.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/30 p-4 rounded-lg border border-cyan-500/10">
                <div className="flex items-center mb-2">
                  <Target className="text-cyan-400 mr-2" size={20} />
                  <h4 className="text-white font-medium">Our Vision</h4>
                </div>
                <p className="text-sm text-gray-300">
                  To become the world's leading platform for technology education and career transformation.
                </p>
              </div>
              
              <div className="bg-gray-800/30 p-4 rounded-lg border border-cyan-500/10">
                <div className="flex items-center mb-2">
                  <Heart className="text-cyan-400 mr-2" size={20} />
                  <h4 className="text-white font-medium">Our Values</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Excellence, innovation, accessibility, and student success are at the core of everything we do.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-cyan-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-cyan-400" size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1">50,000+</h4>
                  <p className="text-gray-300 text-sm">Active Students</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-cyan-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="text-cyan-400" size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1">200+</h4>
                  <p className="text-gray-300 text-sm">Courses</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-cyan-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-cyan-400" size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1">98%</h4>
                  <p className="text-gray-300 text-sm">Success Rate</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-cyan-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="text-cyan-400" size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1">120+</h4>
                  <p className="text-gray-300 text-sm">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-8 md:p-12 border border-cyan-500/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to <span className="text-cyan-400">Transform</span> Your Career?
            </h3>
            <p className="text-gray-300 mb-8">
              Join thousands of students who have accelerated their careers with our industry-leading technology courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Explore Courses
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;