import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Users', value: '1,234', icon: '👥', change: '+12%', color: 'blue' },
    { title: 'Total Courses', value: '56', icon: '📚', change: '+5%', color: 'green' },
    { title: 'Blog Posts', value: '89', icon: '📝', change: '+8%', color: 'purple' },
    { title: 'Events', value: '23', icon: '📅', change: '+15%', color: 'orange' },
    { title: 'News Articles', value: '45', icon: '📰', change: '+10%', color: 'red' },
    { title: 'Enrollments', value: '2,567', icon: '🎓', change: '+18%', color: 'indigo' }
  ];

  const enrollmentData = [
    { month: 'Jan', cybersecurity: 40, azure: 24, office: 18 },
    { month: 'Feb', cybersecurity: 30, azure: 13, office: 29 },
    { month: 'Mar', cybersecurity: 20, azure: 38, office: 25 },
    { month: 'Apr', cybersecurity: 27, azure: 39, office: 20 },
    { month: 'May', cybersecurity: 18, azure: 48, office: 21 },
    { month: 'Jun', cybersecurity: 23, azure: 38, office: 25 }
  ];

  const categoryData = [
    { name: 'Cybersecurity', value: 35 },
    { name: 'Microsoft Azure', value: 25 },
    { name: 'Microsoft 365', value: 20 },
    { name: 'Microsoft Security', value: 20 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Sample data for quick management
  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'Inactive' }
  ];

  const recentPosts = [
    { id: 1, title: 'Introduction to Cybersecurity', status: 'Published', date: '2024-01-15' },
    { id: 2, title: 'Azure Best Practices', status: 'Draft', date: '2024-01-14' }
  ];

  const recentEvents = [
    { id: 1, title: 'Cybersecurity Workshop', date: '2024-02-01', attendees: 45 },
    { id: 2, title: 'Azure Certification Prep', date: '2024-02-15', attendees: 32 }
  ];

  const recentCourses = [
    { id: 1, title: 'Ethical Hacking', enrollments: 234, status: 'Active' },
    { id: 2, title: 'Azure Administrator', enrollments: 189, status: 'Active' }
  ];

  const recentNews = [
    { id: 1, title: 'New Course Launch', status: 'Published', date: '2024-01-10' },
    { id: 2, title: 'Partnership Announcement', status: 'Published', date: '2024-01-08' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'users', name: 'Users', icon: '👥' },
    { id: 'blogs', name: 'Blogs', icon: '📝' },
    { id: 'events', name: 'Events', icon: '📅' },
    { id: 'courses', name: 'Courses', icon: '📚' },
    { id: 'news', name: 'News', icon: '📰' }
  ];

  return (
    <div className="space-y-6">
      {/* Tabs Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-[#245684] text-[#245684]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                        <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                      </div>
                      <div className="text-2xl opacity-80">{stat.icon}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Course Enrollment Trends</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={enrollmentData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="cybersecurity" fill="#245684" name="Cybersecurity" />
                      <Bar dataKey="azure" fill="#00C49F" name="Microsoft Azure" />
                      <Bar dataKey="office" fill="#FF8042" name="Microsoft 365" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Course Category Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Quick User Management</h3>
                <button className="bg-[#245684] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1a4066] transition duration-200">
                  Manage All Users
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentUsers.map((user) => (
                      <tr key={user.id}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{user.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{user.email}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Blogs Tab */}
          {activeTab === 'blogs' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Quick Blog Management</h3>
                <button className="bg-[#245684] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1a4066] transition duration-200">
                  Manage All Blogs
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentPosts.map((post) => (
                      <tr key={post.id}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{post.title}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {post.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">{post.date}</td>
                        <td className="px-4 py-3 text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Quick Event Management</h3>
                <button className="bg-[#245684] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1a4066] transition duration-200">
                  Manage All Events
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Attendees</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentEvents.map((event) => (
                      <tr key={event.id}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{event.title}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{event.date}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{event.attendees}</td>
                        <td className="px-4 py-3 text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Quick Course Management</h3>
                <button className="bg-[#245684] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1a4066] transition duration-200">
                  Manage All Courses
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Enrollments</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentCourses.map((course) => (
                      <tr key={course.id}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{course.title}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{course.enrollments}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            course.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {course.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* News Tab */}
          {activeTab === 'news' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Quick News Management</h3>
                <button className="bg-[#245684] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1a4066] transition duration-200">
                  Manage All News
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentNews.map((news) => (
                      <tr key={news.id}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{news.title}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            news.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {news.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">{news.date}</td>
                        <td className="px-4 py-3 text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;