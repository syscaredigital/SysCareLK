import React, { useState } from 'react';

const CourseManagement = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Ethical Hacking', category: 'Cybersecurity', description: 'Learn ethical hacking techniques', mode: 'online', status: 'active' },
    { id: 2, name: 'Azure Fundamentals', category: 'Microsoft Azure', description: 'Azure cloud basics', mode: 'offline', status: 'active' }
  ]);
  
  const [editingCourse, setEditingCourse] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    mode: 'online'
  });

  const handleAddCourse = () => {
    const newCourse = {
      id: courses.length + 1,
      ...formData,
      status: 'active'
    };
    setCourses([...courses, newCourse]);
    setIsAddModalOpen(false);
    setFormData({ name: '', category: '', description: '', mode: 'online' });
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setFormData({
      name: course.name,
      category: course.category,
      description: course.description,
      mode: course.mode
    });
  };

  const handleUpdateCourse = () => {
    setCourses(courses.map(course => 
      course.id === editingCourse.id 
        ? { ...course, ...formData }
        : course
    ));
    setEditingCourse(null);
    setFormData({ name: '', category: '', description: '', mode: 'online' });
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Course Management</h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#245684] text-white px-4 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
        >
          Add New Course
        </button>
      </div>

      {/* Courses Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.category}</td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{course.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    course.mode === 'online' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {course.mode}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    course.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {course.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => handleEditCourse(course)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {(isAddModalOpen || editingCourse) && (
        <CourseModal
          isEditing={!!editingCourse}
          formData={formData}
          setFormData={setFormData}
          onSave={editingCourse ? handleUpdateCourse : handleAddCourse}
          onClose={() => {
            setIsAddModalOpen(false);
            setEditingCourse(null);
            setFormData({ name: '', category: '', description: '', mode: 'online' });
          }}
        />
      )}
    </div>
  );
};

// Separate Modal Component
const CourseModal = ({ isEditing, formData, setFormData, onSave, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-md">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        {isEditing ? 'Edit Course' : 'Add New Course'}
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Course Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#245684] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#245684] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows="3"
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#245684] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mode</label>
          <select
            value={formData.mode}
            onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#245684] focus:border-transparent"
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-3">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          className="px-4 py-2 bg-[#245684] text-white text-sm font-medium rounded-md hover:bg-[#1a4066]"
        >
          {isEditing ? 'Update Course' : 'Add Course'}
        </button>
      </div>
    </div>
  </div>
);

export default CourseManagement;