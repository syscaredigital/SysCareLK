import React, { useState } from 'react';

const CourseSchedule = () => {
  const [schedule, setSchedule] = useState([
    {
      id: 1,
      courseCode: 'CS101',
      courseName: 'Introduction to Cybersecurity',
      instructor: 'Dr. Sarah Johnson',
      day: 'Monday',
      startTime: '09:00',
      endTime: '10:30',
      room: 'Room 101',
      type: 'Lecture',
      color: '#3B82F6',
      enrolled: true
    },
    {
      id: 2,
      courseCode: 'AZ204',
      courseName: 'Microsoft Azure Developer',
      instructor: 'Prof. Michael Chen',
      day: 'Monday',
      startTime: '11:00',
      endTime: '12:30',
      room: 'Lab 205',
      type: 'Lab',
      color: '#10B981',
      enrolled: true
    },
    {
      id: 3,
      courseCode: 'SC900',
      courseName: 'Microsoft Security Fundamentals',
      instructor: 'Dr. Emily Rodriguez',
      day: 'Tuesday',
      startTime: '14:00',
      endTime: '15:30',
      room: 'Room 102',
      type: 'Lecture',
      color: '#8B5CF6',
      enrolled: true
    },
    {
      id: 4,
      courseCode: 'CS101',
      courseName: 'Introduction to Cybersecurity',
      instructor: 'Dr. Sarah Johnson',
      day: 'Wednesday',
      startTime: '09:00',
      endTime: '10:30',
      room: 'Room 101',
      type: 'Lecture',
      color: '#3B82F6',
      enrolled: true
    },
    {
      id: 5,
      courseCode: 'MS700',
      courseName: 'Microsoft 365 Administration',
      instructor: 'Prof. David Kim',
      day: 'Thursday',
      startTime: '13:00',
      endTime: '14:30',
      room: 'Lab 210',
      type: 'Workshop',
      color: '#F59E0B',
      enrolled: false
    }
  ]);

  const [selectedDay, setSelectedDay] = useState('All');
  const [view, setView] = useState('weekly');
 

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const filteredSchedule = selectedDay === 'All' 
    ? schedule 
    : schedule.filter(item => item.day === selectedDay);

  const getCoursesByDayAndTime = () => {
    const scheduleByDay = {};
    days.forEach(day => {
      scheduleByDay[day] = {};
      timeSlots.forEach(time => {
        scheduleByDay[day][time] = filteredSchedule.filter(
          item => item.day === day && item.startTime === time
        );
      });
    });
    return scheduleByDay;
  };

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    if (hour === 12) return `12:${minutes} PM`;
    return hour > 12 ? `${hour - 12}:${minutes} PM` : `${hour}:${minutes} AM`;
  };

  const getDuration = (startTime, endTime) => {
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    return (end - start) / (1000 * 60 * 60);
  };

  const handleEnroll = (courseId) => {
    setSchedule(schedule.map(item =>
      item.id === courseId ? { ...item, enrolled: true } : item
    ));
  };

  const handleDrop = (courseId) => {
    setSchedule(schedule.map(item =>
      item.id === courseId ? { ...item, enrolled: false } : item
    ));
  };

  const scheduleByDay = getCoursesByDayAndTime();

  // Calculate course height based on duration
  const calculateCourseHeight = (startTime, endTime) => {
    const duration = getDuration(startTime, endTime);
    return duration * 80; // 80px per hour
  };

  // Calculate course position based on start time
  const calculateCoursePosition = (startTime) => {
    const [hours, minutes] = startTime.split(':');
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    const startMinutes = 8 * 60; // 8:00 AM start
    return (totalMinutes - startMinutes) / 60 * 80; // 80px per hour
  };

  return (
    <div className=" text-[#103d5d] bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Course Schedule</h3>
            <p className="text-sm text-gray-500 mt-1">Manage your weekly class schedule</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* View Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setView('weekly')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition duration-200 ${
                  view === 'weekly' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Weekly View
              </button>
              <button
                onClick={() => setView('daily')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition duration-200 ${
                  view === 'daily' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Daily View
              </button>
            </div>

            {/* Day Filter */}
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Days</option>
              {days.map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Schedule Content */}
      <div className="p-6">
        {view === 'weekly' ? (
          /* Weekly Schedule View */
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Time Header */}
              <div className="flex border-b border-gray-200 bg-gray-50">
                <div className="w-20 flex-shrink-0 py-3 text-sm font-medium text-gray-500 text-center">Time</div>
                {days.map(day => (
                  <div key={day} className="flex-1 py-3 text-center text-sm font-medium text-gray-900">
                    {day}
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              <div className="relative">
                {timeSlots.map(time => (
                  <div key={time} className="flex border-b border-gray-100 min-h-20">
                    <div className="w-20 flex-shrink-0 py-4 text-sm text-gray-500 text-center border-r border-gray-100">
                      {formatTime(time)}
                    </div>
                    {days.map(day => (
                      <div 
                        key={`${day}-${time}`} 
                        className="flex-1 border-r border-gray-100 p-1 relative min-h-20"
                      >
                        {scheduleByDay[day]?.[time]?.map(course => {
                          const height = calculateCourseHeight(course.startTime, course.endTime);
                          const top = calculateCoursePosition(course.startTime);
                          
                          return (
                            <div
                              key={course.id}
                              className="absolute rounded-lg p-2 text-white text-xs shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                              style={{
                                backgroundColor: course.color,
                                top: `${top}px`,
                                height: `${height}px`,
                                left: '4px',
                                right: '4px',
                                zIndex: 10
                              }}
                              title={`${course.courseName} - ${course.instructor}`}
                            >
                              <div className="font-semibold truncate">{course.courseCode}</div>
                              <div className="opacity-90 truncate">{course.type}</div>
                              <div className="opacity-80 truncate">{course.room}</div>
                              {!course.enrolled && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleEnroll(course.id);
                                  }}
                                  className="mt-1 bg-white bg-opacity-20 hover:bg-opacity-30 px-2 py-1 rounded text-xs w-full"
                                >
                                  Enroll
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Daily Schedule View */
          <div className="space-y-4">
            {days
              .filter(day => selectedDay === 'All' || day === selectedDay)
              .map(day => {
                const dayCourses = filteredSchedule
                  .filter(item => item.day === day)
                  .sort((a, b) => a.startTime.localeCompare(b.startTime));

                return (
                  <div key={day} className="border border-gray-200 rounded-lg">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900">{day}</h4>
                    </div>
                    <div className="p-4">
                      {dayCourses.length > 0 ? (
                        dayCourses.map(course => (
                          <div
                            key={course.id}
                            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg mb-3 last:mb-0 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center space-x-4 flex-1">
                              <div
                                className="w-3 h-12 rounded"
                                style={{ backgroundColor: course.color }}
                              ></div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <h5 className="font-semibold text-gray-900">
                                    {course.courseCode} - {course.courseName}
                                  </h5>
                                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                    course.enrolled 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {course.enrolled ? 'Enrolled' : 'Not Enrolled'}
                                  </span>
                                </div>
                                <div className="text-sm text-gray-600">
                                  <div className="flex flex-wrap gap-4">
                                    <span className="flex items-center space-x-1">
                                      <span>👨‍🏫</span>
                                      <span>{course.instructor}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                      <span>🕐</span>
                                      <span>{formatTime(course.startTime)} - {formatTime(course.endTime)}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                      <span>📍</span>
                                      <span>{course.room}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                      <span>📚</span>
                                      <span>{course.type}</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2 ml-4">
                              {course.enrolled ? (
                                <button
                                  onClick={() => handleDrop(course.id)}
                                  className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition duration-200 text-sm font-medium whitespace-nowrap"
                                >
                                  Drop Course
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleEnroll(course.id)}
                                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 text-sm font-medium whitespace-nowrap"
                                >
                                  Enroll Now
                                </button>
                              )}
                              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200 text-sm font-medium whitespace-nowrap">
                                View Details
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          <div className="text-3xl mb-2">📚</div>
                          <p>No classes scheduled for {day}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">
              Enrolled: {schedule.filter(item => item.enrolled).length} courses
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-gray-600">
              Lectures: {schedule.filter(item => item.type === 'Lecture').length}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">
              Labs: {schedule.filter(item => item.type === 'Lab').length}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-gray-600">
              Total: {schedule.length} scheduled
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSchedule;