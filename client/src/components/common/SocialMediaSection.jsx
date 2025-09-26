
import React, { useState } from 'react';

const SocialMediaFeed = () => {
  const [activePlatform, setActivePlatform] = useState('facebook');

  // Sample social media posts data
  const socialPosts = [
    {
      id: 1,
      platform: 'facebook',
      title: 'New Cybersecurity Workshop Announcement',
      embedCode: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fexample%2Fposts%2F123&show_text=true&width=500" width="100%" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
      date: '2 hours ago',
      likes: 45,
      shares: 12,
      comments: 8,
      previewImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      platform: 'youtube',
      title: 'Microsoft Azure Training Demo',
      embedCode: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      date: '1 day ago',
      likes: 123,
      views: '2.4K',
      comments: 25,
      previewImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      platform: 'linkedin',
      title: 'Student Success Story: From Beginner to Security Analyst',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:123456" width="100%" height="400" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      date: '3 days ago',
      likes: 89,
      shares: 34,
      comments: 15,
      previewImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      platform: 'facebook',
      title: 'Live Q&A Session Recording Available',
      embedCode: '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fexample%2Fvideos%2F123&show_text=true&width=500" width="100%" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
      date: '1 week ago',
      likes: 67,
      shares: 18,
      comments: 22,
      previewImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      platform: 'youtube',
      title: 'Ethical Hacking Tutorial for Beginners',
      embedCode: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/abcdefghijk" title="Ethical Hacking Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      date: '2 weeks ago',
      likes: 234,
      views: '5.7K',
      comments: 42,
      previewImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      platform: 'linkedin',
      title: 'Industry Partnerships Announcement',
      embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:789012" width="100%" height="400" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      date: '3 weeks ago',
      likes: 156,
      shares: 45,
      comments: 31,
      previewImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const filteredPosts = activePlatform === 'all' 
    ? socialPosts 
    : socialPosts.filter(post => post.platform === activePlatform);

  

  const PlatformIcon = ({ platform, size = 6 }) => {
    const icons = {
      facebook: 'ⓕ',
      youtube: ' ▶︎ ',
      linkedin: 'in'
    };
    
    return (
      <span className={`text-${size}xl`}>{icons[platform]}</span>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🌐 Social Media Feed
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Follow Us on <span className="text-blue-600">Social Media</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with the latest updates, tutorials, and student success stories
          </p>
        </div>

     

        {/* Platform Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
       
          {['facebook', 'youtube', 'linkedin'].map((platform) => (
            <button
              key={platform}
              onClick={() => setActivePlatform(platform)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activePlatform === platform
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <PlatformIcon platform={platform} size={4} />
              <span className="capitalize">{platform}</span>
            </button>
          ))}
        </div>

        {/* Social Media Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              
              {/* Platform Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <PlatformIcon platform={post.platform} />
                  <span className="font-medium text-gray-900 capitalize">{post.platform}</span>
                </div>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>

              {/* Post Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                
                {/* Embedded Content */}
                <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <div 
                    className="w-full h-48 flex items-center justify-center bg-gray-200"
                    dangerouslySetInnerHTML={{ __html: post.embedCode }}
                  />
                  <img 
                    src={post.previewImage} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <span>👍</span>
                      <span>{post.likes}</span>
                    </span>
                    {post.shares && (
                      <span className="flex items-center space-x-1">
                        <span>🔄</span>
                        <span>{post.shares}</span>
                      </span>
                    )}
                    {post.views && (
                      <span className="flex items-center space-x-1">
                        <span>👁️</span>
                        <span>{post.views}</span>
                      </span>
                    )}
                    <span className="flex items-center space-x-1">
                      <span>💬</span>
                      <span>{post.comments}</span>
                    </span>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View Post →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        

        </div>
    </section>
  );
};

export default SocialMediaFeed;