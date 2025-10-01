import React, { useState } from 'react';
import Dashboard from './dashboard';
import UsersManagement from './addUsers';
import BlogManagement from './addBlogs';
import NewsManagement from './addNews';
import EventsManagement from './addEvents';
import CourseSchedule from './courseSchedule';
import CoursesManagement from './addCourse';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'users', name: 'Manage Users', icon: '👥' },
    { id: 'blog', name: 'Manage Blog', icon: '📝' },
    { id: 'news', name: 'Manage News', icon: '📰' },
    { id: 'events', name: 'Manage Events', icon: '📅' },
    { id: 'courseschedule', name: 'Course Schedule', icon: '⏰' },
    { id: 'courses', name: 'Manage Courses', icon: '📚' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UsersManagement />;
      case 'blog':
        return <BlogManagement />;
      case 'news':
        return <NewsManagement />;
      case 'events':
        return <EventsManagement />;
      case 'courseschedule':
        return <CourseSchedule />;
      case 'courses':
        return <CoursesManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#103d5d] transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition duration-300 ease-in-out`}>
        <div className="flex items-center justify-center h-16 bg-[#0c2f4a]">
          <h1 className="text-white text-xl font-bold">Admin Dashboard</h1>
        </div>
        
        <nav className="mt-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${
                activeTab === item.id
                  ? 'bg-[#245684] text-white'
                  : 'text-gray-300 hover:bg-[#1a4066] hover:text-white'
              }`}
            >
              <span className="text-lg mr-3">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h2 className="text-xl font-semibold text-gray-800 ml-4 capitalize">
                {navigationItems.find(item => item.id === activeTab)?.name || 'Dashboard'}
              </h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#245684] rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <span className="text-gray-700 font-medium">Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>

      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminDashboard;