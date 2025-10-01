import React, { useState } from 'react';

const CoursesManagement = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      code: 'CS101',
      name: 'Introduction to Cybersecurity',
      description: 'Fundamental concepts of cybersecurity including threats, vulnerabilities, and defense mechanisms.',
      category: 'Cybersecurity',
      level: 'Beginner',
      duration: '12 weeks',
      credits: 3,
      instructor: 'Dr. Sarah Johnson',
      price: 299,
      enrolledStudents: 45,
      maxStudents: 50,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500',
      startDate: '2024-03-01',
      endDate: '2024-05-24',
      syllabus: [
        'Introduction to Cybersecurity',
        'Network Security',
        'Cryptography',
        'Security Policies',
        'Incident Response'
      ],
      prerequisites: [],
      tags: ['cybersecurity', 'beginner', 'fundamentals']
    },
    {
      id: 2,
      code: 'AZ204',
      name: 'Microsoft Azure Developer',
      description: 'Comprehensive training for Azure developer certification with hands-on labs and projects.',
      category: 'Microsoft Azure',
      level: 'Intermediate',
      duration: '16 weeks',
      credits: 4,
      instructor: 'Prof. Michael Chen',
      price: 499,
      enrolledStudents: 32,
      maxStudents: 40,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500',
      startDate: '2024-03-15',
      endDate: '2024-07-05',
      syllabus: [
        'Azure Fundamentals',
        'Developing Solutions',
        'Implementing Security',
        'Monitoring & Optimization'
      ],
      prerequisites: ['Basic programming knowledge'],
      tags: ['azure', 'developer', 'certification']
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [view, setView] = useState('grid'); // 'grid' or 'list'
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    description: '',
    category: 'Cybersecurity',
    level: 'Beginner',
    duration: '12 weeks',
    credits: 3,
    instructor: '',
    price: 0,
    maxStudents: 30,
    status: 'Active',
    image: '',
    startDate: '',
    endDate: '',
    syllabus: '',
    prerequisites: '',
    tags: ''
  });

  const categories = ['Cybersecurity', 'Microsoft Azure', 'Microsoft 365', 'Microsoft Security', 'Programming', 'Networking'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const statusOptions = ['Active', 'Inactive', 'Upcoming', 'Archived'];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.code.trim() || !formData.name.trim() || !formData.description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    // Process arrays
    const syllabusArray = formData.syllabus.split('\n').filter(item => item.trim());
    const prerequisitesArray = formData.prerequisites.split(',').map(item => item.trim()).filter(item => item);
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);

    const courseData = {
      ...formData,
      syllabus: syllabusArray,
      prerequisites: prerequisitesArray,
      tags: tagsArray,
      enrolledStudents: editingCourse ? editingCourse.enrolledStudents : 0
    };

    if (editingCourse) {
      // Update existing course
      setCourses(courses.map(course => 
        course.id === editingCourse.id 
          ? { ...courseData, id: editingCourse.id } 
          : course
      ));
    } else {
      // Create new course
      const newCourse = { 
        ...courseData, 
        id: Date.now()
      };
      setCourses([...courses, newCourse]);
    }
    
    // Reset form and close
    handleCancel();
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormData({
      code: course.code,
      name: course.name,
      description: course.description,
      category: course.category,
      level: course.level,
      duration: course.duration,
      credits: course.credits,
      instructor: course.instructor,
      price: course.price,
      maxStudents: course.maxStudents,
      status: course.status,
      image: course.image,
      startDate: course.startDate,
      endDate: course.endDate,
      syllabus: course.syllabus.join('\n'),
      prerequisites: course.prerequisites.join(', '),
      tags: course.tags.join(', ')
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingCourse(null);
    setFormData({
      code: '',
      name: '',
      description: '',
      category: 'Cybersecurity',
      level: 'Beginner',
      duration: '12 weeks',
      credits: 3,
      instructor: '',
      price: 0,
      maxStudents: 30,
      status: 'Active',
      image: '',
      startDate: '',
      endDate: '',
      syllabus: '',
      prerequisites: '',
      tags: ''
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Upcoming': return 'bg-blue-100 text-blue-800';
      case 'Archived': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className=" text-[#103d5d] bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Manage Courses</h3>
          <p className="text-sm text-gray-500 mt-1">Create and manage educational courses</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setView('grid')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition duration-200 ${
                view === 'grid' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition duration-200 ${
                view === 'list' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              List View
            </button>
          </div>
          
          <button 
            onClick={() => setShowForm(true)}
            className="bg-[#245684] text-white px-4 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200 flex items-center space-x-2"
          >
            <span>📚</span>
            <span>Add Course</span>
          </button>
        </div>
      </div>

      {/* Course Form */}
      {showForm && (
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900">
              {editingCourse ? 'Edit Course' : 'Create New Course'}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="e.g., CS101"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Enter course name"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Describe the course"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="e.g., 12 weeks"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Credits</label>
                <input
                  type="number"
                  value={formData.credits}
                  onChange={(e) => setFormData({ ...formData, credits: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  min="1"
                  max="6"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Instructor</label>
                <input
                  type="text"
                  value={formData.instructor}
                  onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Course instructor"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max Students</label>
                <input
                  type="number"
                  value={formData.maxStudents}
                  onChange={(e) => setFormData({ ...formData, maxStudents: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                >
                  {statusOptions.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Syllabus</label>
                <textarea
                  value={formData.syllabus}
                  onChange={(e) => setFormData({ ...formData, syllabus: e.target.value })}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Enter each syllabus item on a new line"
                />
                <p className="text-xs text-gray-500 mt-1">Enter each item on a separate line</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prerequisites</label>
                <input
                  type="text"
                  value={formData.prerequisites}
                  onChange={(e) => setFormData({ ...formData, prerequisites: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Separate with commas"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Separate tags with commas"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Image</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  />
                  {formData.image && (
                    <div className="text-center">
                      <img src={formData.image} alt="Preview" className="h-20 w-20 object-cover rounded border" />
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, image: '' })}
                        className="mt-1 text-xs text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3 pt-4 border-t border-gray-200">
              <button 
                type="submit" 
                className="bg-[#245684] text-white px-6 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
              >
                {editingCourse ? 'Update Course' : 'Create Course'}
              </button>
              <button 
                type="button" 
                onClick={handleCancel}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Courses Display */}
      <div className="p-6">
        {/* Filters and Search */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent">
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent">
            <option value="">All Levels</option>
            {levels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent">
            <option value="">All Status</option>
            {statusOptions.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <div className="text-4xl mb-4">📚</div>
            <p className="text-lg font-medium">No courses found</p>
            <p className="text-sm mt-1">Create your first course to get started</p>
            <button 
              onClick={() => setShowForm(true)}
              className="mt-4 bg-[#245684] text-white px-6 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
            >
              Create Course
            </button>
          </div>
        ) : view === 'grid' ? (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-200">
                {course.image && (
                  <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
                )}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 text-lg">{course.code}</h4>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(course.status)}`}>
                      {course.status}
                    </span>
                  </div>
                  <h5 className="font-medium text-gray-900 mb-2">{course.name}</h5>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1 mb-4">
                    <div className="flex justify-between">
                      <span>Instructor:</span>
                      <span className="font-medium">{course.instructor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Students:</span>
                      <span className="font-medium">{course.enrolledStudents}/{course.maxStudents}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Credits:</span>
                      <span className="font-medium">{course.credits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="font-medium text-green-600">${course.price}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.tags.map((tag, index) => (
                      <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleEdit(course)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 text-sm font-medium"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(course.id)}
                      className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-200">
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
                  {course.image && (
                    <img src={course.image} alt={course.name} className="w-full md:w-48 h-32 object-cover rounded-lg" />
                  )}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{course.code} - {course.name}</h4>
                        <p className="text-gray-600 mt-1">{course.description}</p>
                      </div>
                      <div className="flex space-x-2 mt-2 md:mt-0">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getLevelColor(course.level)}`}>
                          {course.level}
                        </span>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(course.status)}`}>
                          {course.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <span>👨‍🏫</span>
                        <span>{course.instructor}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>👥</span>
                        <span>{course.enrolledStudents}/{course.maxStudents} students</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>⏱️</span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>💰</span>
                        <span>${course.price}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {course.tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="text-sm text-gray-500">
                        Category: {course.category} • Credits: {course.credits}
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleEdit(course)}
                          className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(course.id)}
                          className="text-red-600 hover:text-red-900 text-sm font-medium"
                        >
                          Delete
                        </button>
                        <button className="text-green-600 hover:text-green-900 text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats Summary */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-gray-600">Active: {courses.filter(course => course.status === 'Active').length}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="text-gray-600">Upcoming: {courses.filter(course => course.status === 'Upcoming').length}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span className="text-gray-600">Total Students: {courses.reduce((sum, course) => sum + course.enrolledStudents, 0)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            <span className="text-gray-600">Total Courses: {courses.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesManagement;