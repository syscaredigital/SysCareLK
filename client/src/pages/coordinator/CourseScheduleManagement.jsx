import React, { useState } from 'react';

const CourseScheduleManagement = () => {
  const [schedules, setSchedules] = useState([
    { id: 1, courseName: 'Ethical Hacking', startDate: '2024-02-01', time: '10:00', duration: '2 hours', instructor: 'John Doe' },
    { id: 2, courseName: 'Azure Fundamentals', startDate: '2024-02-15', time: '14:00', duration: '3 hours', instructor: 'Jane Smith' }
  ]);
  
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [scheduleForm, setScheduleForm] = useState({
    courseName: '',
    startDate: '',
    time: '',
    duration: '',
    instructor: ''
  });

  const handleAddSchedule = () => {
    const newSchedule = {
      id: schedules.length + 1,
      ...scheduleForm
    };
    setSchedules([...schedules, newSchedule]);
    setIsAddModalOpen(false);
    setScheduleForm({ courseName: '', startDate: '', time: '', duration: '', instructor: '' });
  };

  const handleEditSchedule = (schedule) => {
    setEditingSchedule(schedule);
    setScheduleForm({
      courseName: schedule.courseName,
      startDate: schedule.startDate,
      time: schedule.time,
      duration: schedule.duration,
      instructor: schedule.instructor
    });
  };

  const handleUpdateSchedule = () => {
    setSchedules(schedules.map(schedule => 
      schedule.id === editingSchedule.id 
        ? { ...schedule, ...scheduleForm }
        : schedule
    ));
    setEditingSchedule(null);
    setScheduleForm({ courseName: '', startDate: '', time: '', duration: '', instructor: '' });
  };

  const handleDeleteSchedule = (id) => {
    setSchedules(schedules.filter(schedule => schedule.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Course Schedule Management</h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#245684] text-white px-4 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
        >
          Add New Schedule
        </button>
      </div>

      {/* Schedule Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedules.map((schedule) => (
              <tr key={schedule.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{schedule.courseName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{schedule.startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{schedule.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{schedule.duration}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{schedule.instructor}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => handleEditSchedule(schedule)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteSchedule(schedule.id)}
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

      {/* Add/Edit Schedule Modal */}
      {(isAddModalOpen || editingSchedule) && (
        <ScheduleModal
          isEditing={!!editingSchedule}
          formData={scheduleForm}
          setFormData={setScheduleForm}
          onSave={editingSchedule ? handleUpdateSchedule : handleAddSchedule}
          onClose={() => {
            setIsAddModalOpen(false);
            setEditingSchedule(null);
            setScheduleForm({ courseName: '', startDate: '', time: '', duration: '', instructor: '' });
          }}
        />
      )}
    </div>
  );
};

// Separate Modal Component for Schedule
const ScheduleModal = ({ isEditing, formData, setFormData, onSave, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-md">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        {isEditing ? 'Edit Schedule' : 'Add New Schedule'}
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Course Name</label>
          <input
            type="text"
            value={formData.courseName}
            onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#245684] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#245684] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#245684] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Duration</label>
          <input
            type="text"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            placeholder="e.g., 2 hours"
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#245684] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Instructor</label>
          <input
            type="text"
            value={formData.instructor}
            onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#245684] focus:border-transparent"
          />
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
          {isEditing ? 'Update Schedule' : 'Add Schedule'}
        </button>
      </div>
    </div>
  </div>
);

export default CourseScheduleManagement;