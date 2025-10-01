import React from 'react';

const Dashboard = ({ onNavigate }) => {
  const stats = [
    { title: 'Total Courses', value: '12', icon: '📚', change: '+2%', color: 'blue' },
    { title: 'Active Schedules', value: '8', icon: '⏰', change: '+5%', color: 'green' },
    { title: 'Online Courses', value: '7', icon: '💻', change: '+3%', color: 'purple' },
    { title: 'Offline Courses', value: '5', icon: '🏢', change: '+1%', color: 'orange' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-xs text-green-600 mt-1">{stat.change}</p>
              </div>
              <div className="text-3xl opacity-80">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate('courses')}
            className="p-4 border border-gray-200 rounded-lg hover:border-[#245684] hover:bg-blue-50 transition duration-200 text-left"
          >
            <div className="text-2xl mb-2">📚</div>
            <h4 className="font-medium text-gray-900">Manage Courses</h4>
            <p className="text-sm text-gray-500 mt-1">Add, edit, or delete courses</p>
          </button>
          <button
            onClick={() => onNavigate('schedule')}
            className="p-4 border border-gray-200 rounded-lg hover:border-[#245684] hover:bg-blue-50 transition duration-200 text-left"
          >
            <div className="text-2xl mb-2">⏰</div>
            <h4 className="font-medium text-gray-900">Manage Schedule</h4>
            <p className="text-sm text-gray-500 mt-1">Manage course schedules and timings</p>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600">+</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">New course added</p>
                <p className="text-xs text-gray-500">Ethical Hacking Basics</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">⏰</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Schedule updated</p>
                <p className="text-xs text-gray-500">Azure Fundamentals course</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">5 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;