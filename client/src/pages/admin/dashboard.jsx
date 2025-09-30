import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Form states
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    role: 'student',
    status: 'active',
    phone: ''
  });

  const [blogForm, setBlogForm] = useState({
    title: '',
    category: '',
    content: '',
    author: '',
    status: 'draft',
    image: '',
    tags: ''
  });

  const [newsForm, setNewsForm] = useState({
    title: '',
    category: 'announcement',
    content: '',
    author: '',
    status: 'published',
    image: '',
    publishDate: ''
  });

  const [eventForm, setEventForm] = useState({
    title: '',
    type: 'workshop',
    description: '',
    date: '',
    time: '',
    location: '',
    maxAttendees: '',
    image: ''
  });

  const [scheduleForm, setScheduleForm] = useState({
    course: '',
    instructor: '',
    startDate: '',
    endDate: '',
    days: [],
    time: '',
    location: 'online',
    maxStudents: ''
  });

  const [courseForm, setCourseForm] = useState({
    title: '',
    category: 'cybersecurity',
    description: '',
    level: 'beginner',
    duration: '',
    price: '',
    instructor: '',
    image: '',
    status: 'active'
  });

  // Sample data
  const dashboardStats = [
    { title: 'Total Users', value: '1,234', icon: '👥', change: '+12%' },
    { title: 'Total Courses', value: '56', icon: '📚', change: '+5%' },
    { title: 'Blog Posts', value: '89', icon: '📝', change: '+8%' },
    { title: 'Events', value: '23', icon: '📅', change: '+15%' }
  ];

  const handleSubmit = (formType, e) => {
    e.preventDefault();
    console.log(`Submitting ${formType}:`, getFormData(formType));
    // Here you would typically send data to your backend
    alert(`${formType.charAt(0).toUpperCase() + formType.slice(1)} ${editingItem ? 'updated' : 'created'} successfully!`);
    resetForm(formType);
    setEditingItem(null);
  };

  const resetForm = (formType) => {
    const emptyForms = {
      user: { name: '', email: '', role: 'student', status: 'active', phone: '' },
      blog: { title: '', category: '', content: '', author: '', status: 'draft', image: '', tags: '' },
      news: { title: '', category: 'announcement', content: '', author: '', status: 'published', image: '', publishDate: '' },
      event: { title: '', type: 'workshop', description: '', date: '', time: '', location: '', maxAttendees: '', image: '' },
      schedule: { course: '', instructor: '', startDate: '', endDate: '', days: [], time: '', location: 'online', maxStudents: '' },
      course: { title: '', category: 'cybersecurity', description: '', level: 'beginner', duration: '', price: '', instructor: '', image: '', status: 'active' }
    };
    
    switch(formType) {
      case 'user': setUserForm(emptyForms.user); break;
      case 'blog': setBlogForm(emptyForms.blog); break;
      case 'news': setNewsForm(emptyForms.news); break;
      case 'event': setEventForm(emptyForms.event); break;
      case 'schedule': setScheduleForm(emptyForms.schedule); break;
      case 'course': setCourseForm(emptyForms.course); break;
    }
  };

  const getFormData = (formType) => {
    switch(formType) {
      case 'user': return userForm;
      case 'blog': return blogForm;
      case 'news': return newsForm;
      case 'event': return eventForm;
      case 'schedule': return scheduleForm;
      case 'course': return courseForm;
      default: return {};
    }
  };

 /*  const handleEdit = (item, formType) => {
    setEditingItem(item);
    switch(formType) {
      case 'user': setUserForm(item); break;
      case 'blog': setBlogForm(item); break;
      case 'news': setNewsForm(item); break;
      case 'event': setEventForm(item); break;
      case 'schedule': setScheduleForm(item); break;
      case 'course': setCourseForm(item); break;
    }
    setActiveTab(formType);
  }; */

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#103d5d] transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition duration-300 ease-in-out`}>
        <div className="flex items-center justify-center h-16 bg-[#0c2f4a]">
          <h1 className="text-white text-xl font-bold">Admin Dashboard</h1>
        </div>
        
        <nav className="mt-8">
          {[
            { id: 'dashboard', name: 'Dashboard', icon: '📊' },
            { id: 'users', name: 'Manage Users', icon: '👥' },
            { id: 'blog', name: 'Manage Blog', icon: '📝' },
            { id: 'news', name: 'Manage News', icon: '📰' },
            { id: 'events', name: 'Manage Events', icon: '📅' },
            { id: 'courseschedule', name: 'Course Schedule', icon: '⏰' },
            { id: 'courses', name: 'Manage Courses', icon: '📚' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setEditingItem(null);
                resetForm(item.id);
              }}
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
                {activeTab.replace(/([A-Z])/g, ' $1')} {editingItem && `- Editing`}
              </h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-[#245684] rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
              <span className="text-gray-700 font-medium">Admin</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          {/* Dashboard Overview */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                        <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                      </div>
                      <div className="text-3xl">{stat.icon}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Manage Users Form */}
          {activeTab === 'users' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingItem ? 'Edit User' : 'Add New User'}
                </h3>
              </div>
              <form onSubmit={(e) => handleSubmit('user', e)} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={userForm.name}
                      onChange={(e) => setUserForm({...userForm, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={userForm.email}
                      onChange={(e) => setUserForm({...userForm, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <select
                      value={userForm.role}
                      onChange={(e) => setUserForm({...userForm, role: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    >
                      <option value="student">Student</option>
                      <option value="instructor">Instructor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={userForm.status}
                      onChange={(e) => setUserForm({...userForm, status: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="suspended">Suspended</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={userForm.phone}
                      onChange={(e) => setUserForm({...userForm, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div className="flex space-x-4 pt-6">
                  <button
                    type="submit"
                    className="bg-[#245684] text-white px-6 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
                  >
                    {editingItem ? 'Update User' : 'Create User'}
                  </button>
                  <button
                    type="button"
                    onClick={() => resetForm('user')}
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                  >
                    Reset Form
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Manage Blog Form */}
          {activeTab === 'blog' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingItem ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h3>
              </div>
              <form onSubmit={(e) => handleSubmit('blog', e)} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      required
                      value={blogForm.title}
                      onChange={(e) => setBlogForm({...blogForm, title: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter blog post title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <input
                      type="text"
                      required
                      value={blogForm.category}
                      onChange={(e) => setBlogForm({...blogForm, category: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter category"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                    <input
                      type="text"
                      required
                      value={blogForm.author}
                      onChange={(e) => setBlogForm({...blogForm, author: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter author name"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                    <textarea
                      required
                      rows={8}
                      value={blogForm.content}
                      onChange={(e) => setBlogForm({...blogForm, content: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Write your blog content here..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={blogForm.status}
                      onChange={(e) => setBlogForm({...blogForm, status: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                    <input
                      type="text"
                      value={blogForm.tags}
                      onChange={(e) => setBlogForm({...blogForm, tags: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter tags (comma separated)"
                    />
                  </div>
                </div>
                <div className="flex space-x-4 pt-6">
                  <button
                    type="submit"
                    className="bg-[#245684] text-white px-6 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
                  >
                    {editingItem ? 'Update Post' : 'Create Post'}
                  </button>
                  <button
                    type="button"
                    onClick={() => resetForm('blog')}
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                  >
                    Reset Form
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Manage News Form */}
          {activeTab === 'news' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingItem ? 'Edit News' : 'Add News'}
                </h3>
              </div>
              <form onSubmit={(e) => handleSubmit('news', e)} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      required
                      value={newsForm.title}
                      onChange={(e) => setNewsForm({...newsForm, title: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter news title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={newsForm.category}
                      onChange={(e) => setNewsForm({...newsForm, category: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    >
                      <option value="announcement">Announcement</option>
                      <option value="update">Update</option>
                      <option value="event">Event</option>
                      <option value="achievement">Achievement</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Publish Date</label>
                    <input
                      type="date"
                      required
                      value={newsForm.publishDate}
                      onChange={(e) => setNewsForm({...newsForm, publishDate: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                    <textarea
                      required
                      rows={6}
                      value={newsForm.content}
                      onChange={(e) => setNewsForm({...newsForm, content: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Write news content here..."
                    />
                  </div>
                </div>
                <div className="flex space-x-4 pt-6">
                  <button
                    type="submit"
                    className="bg-[#245684] text-white px-6 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
                  >
                    {editingItem ? 'Update News' : 'Publish News'}
                  </button>
                  <button
                    type="button"
                    onClick={() => resetForm('news')}
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                  >
                    Reset Form
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Manage Events Form */}
          {activeTab === 'events' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingItem ? 'Edit Event' : 'Create Event'}
                </h3>
              </div>
              <form onSubmit={(e) => handleSubmit('event', e)} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                    <input
                      type="text"
                      required
                      value={eventForm.title}
                      onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter event title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                    <select
                      value={eventForm.type}
                      onChange={(e) => setEventForm({...eventForm, type: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    >
                      <option value="workshop">Workshop</option>
                      <option value="seminar">Seminar</option>
                      <option value="conference">Conference</option>
                      <option value="webinar">Webinar</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      required
                      value={eventForm.date}
                      onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <input
                      type="time"
                      required
                      value={eventForm.time}
                      onChange={(e) => setEventForm({...eventForm, time: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      required
                      value={eventForm.location}
                      onChange={(e) => setEventForm({...eventForm, location: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter event location"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Attendees</label>
                    <input
                      type="number"
                      value={eventForm.maxAttendees}
                      onChange={(e) => setEventForm({...eventForm, maxAttendees: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter maximum attendees"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      required
                      rows={4}
                      value={eventForm.description}
                      onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter event description"
                    />
                  </div>
                </div>
                <div className="flex space-x-4 pt-6">
                  <button
                    type="submit"
                    className="bg-[#245684] text-white px-6 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
                  >
                    {editingItem ? 'Update Event' : 'Create Event'}
                  </button>
                  <button
                    type="button"
                    onClick={() => resetForm('event')}
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                  >
                    Reset Form
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Course Schedule Form */}
          {activeTab === 'courseschedule' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingItem ? 'Edit Schedule' : 'Add Schedule'}
                </h3>
              </div>
              <form onSubmit={(e) => handleSubmit('schedule', e)} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                    <select
                      required
                      value={scheduleForm.course}
                      onChange={(e) => setScheduleForm({...scheduleForm, course: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    >
                      <option value="">Select Course</option>
                      <option value="cybersecurity">Cybersecurity Fundamentals</option>
                      <option value="azure">Microsoft Azure</option>
                      <option value="ethical-hacking">Ethical Hacking</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instructor</label>
                    <input
                      type="text"
                      required
                      value={scheduleForm.instructor}
                      onChange={(e) => setScheduleForm({...scheduleForm, instructor: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter instructor name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                    <input
                      type="date"
                      required
                      value={scheduleForm.startDate}
                      onChange={(e) => setScheduleForm({...scheduleForm, startDate: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                    <input
                      type="date"
                      required
                      value={scheduleForm.endDate}
                      onChange={(e) => setScheduleForm({...scheduleForm, endDate: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Class Time</label>
                    <input
                      type="time"
                      required
                      value={scheduleForm.time}
                      onChange={(e) => setScheduleForm({...scheduleForm, time: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select
                      value={scheduleForm.location}
                      onChange={(e) => setScheduleForm({...scheduleForm, location: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    >
                      <option value="online">Online</option>
                      <option value="classroom">Classroom</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Days of Week</label>
                    <div className="flex flex-wrap gap-4">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                        <label key={day} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={scheduleForm.days.includes(day)}
                            onChange={(e) => {
                              const newDays = e.target.checked
                                ? [...scheduleForm.days, day]
                                : scheduleForm.days.filter(d => d !== day);
                              setScheduleForm({...scheduleForm, days: newDays});
                            }}
                            className="mr-2"
                          />
                          {day}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 pt-6">
                  <button
                    type="submit"
                    className="bg-[#245684] text-white px-6 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
                  >
                    {editingItem ? 'Update Schedule' : 'Create Schedule'}
                  </button>
                  <button
                    type="button"
                    onClick={() => resetForm('schedule')}
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                  >
                    Reset Form
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Manage Courses Form */}
          {activeTab === 'courses' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingItem ? 'Edit Course' : 'Add Course'}
                </h3>
              </div>
              <form onSubmit={(e) => handleSubmit('course', e)} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Course Title</label>
                    <input
                      type="text"
                      required
                      value={courseForm.title}
                      onChange={(e) => setCourseForm({...courseForm, title: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter course title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={courseForm.category}
                      onChange={(e) => setCourseForm({...courseForm, category: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    >
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="microsoft-azure">Microsoft Azure</option>
                      <option value="microsoft-365">Microsoft 365</option>
                      <option value="cloud-computing">Cloud Computing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                    <select
                      value={courseForm.level}
                      onChange={(e) => setCourseForm({...courseForm, level: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                    <input
                      type="text"
                      required
                      value={courseForm.duration}
                      onChange={(e) => setCourseForm({...courseForm, duration: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="e.g., 6 weeks"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <input
                      type="text"
                      required
                      value={courseForm.price}
                      onChange={(e) => setCourseForm({...courseForm, price: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="e.g., $89.99"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instructor</label>
                    <input
                      type="text"
                      required
                      value={courseForm.instructor}
                      onChange={(e) => setCourseForm({...courseForm, instructor: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter instructor name"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      required
                      rows={4}
                      value={courseForm.description}
                      onChange={(e) => setCourseForm({...courseForm, description: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                      placeholder="Enter course description"
                    />
                  </div>
                </div>
                <div className="flex space-x-4 pt-6">
                  <button
                    type="submit"
                    className="bg-[#245684] text-white px-6 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
                  >
                    {editingItem ? 'Update Course' : 'Create Course'}
                  </button>
                  <button
                    type="button"
                    onClick={() => resetForm('course')}
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                  >
                    Reset Form
                  </button>
                </div>
              </form>
            </div>
          )}
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