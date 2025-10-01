import React, { useState } from 'react';

const EventsManagement = () => {
  const [events, setEvents] = useState([
    { 
      id: 1, 
      title: 'Cybersecurity Workshop', 
      description: 'Hands-on workshop covering the latest cybersecurity threats and defense mechanisms.', 
      type: 'Workshop',
      category: 'Cybersecurity',
      status: 'Upcoming',
      startDate: '2024-02-15',
      endDate: '2024-02-15',
      startTime: '09:00',
      endTime: '17:00',
      location: 'Main Campus - Room 101',
      organizer: 'Security Team',
      maxAttendees: 50,
      currentAttendees: 35,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500',
      registrationLink: '#',
      tags: ['workshop', 'cybersecurity', 'hands-on']
    },
    { 
      id: 2, 
      title: 'Microsoft Azure Certification Prep', 
      description: 'Prepare for your Azure certification with expert guidance and practice tests.', 
      type: 'Training',
      category: 'Microsoft Azure',
      status: 'Upcoming',
      startDate: '2024-02-20',
      endDate: '2024-02-22',
      startTime: '10:00',
      endTime: '16:00',
      location: 'Online - Virtual Classroom',
      organizer: 'Cloud Team',
      maxAttendees: 100,
      currentAttendees: 78,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500',
      registrationLink: '#',
      tags: ['azure', 'certification', 'training']
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [view, setView] = useState('list'); // 'list' or 'calendar'
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'Workshop',
    category: 'Cybersecurity',
    status: 'Upcoming',
    startDate: '',
    endDate: '',
    startTime: '09:00',
    endTime: '17:00',
    location: '',
    organizer: '',
    maxAttendees: 50,
    image: '',
    registrationLink: '',
    tags: ''
  });

  const eventTypes = ['Workshop', 'Training', 'Seminar', 'Webinar', 'Conference', 'Networking'];
  const categories = ['Cybersecurity', 'Microsoft Azure', 'Microsoft 365', 'Microsoft Security', 'General'];
  const statusOptions = ['Upcoming', 'Ongoing', 'Completed', 'Cancelled'];

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
    if (!formData.title.trim() || !formData.description.trim() || !formData.startDate || !formData.endDate) {
      alert('Please fill in all required fields');
      return;
    }

    // Process tags
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);

    const eventData = {
      ...formData,
      tags: tagsArray,
      currentAttendees: editingEvent ? editingEvent.currentAttendees : 0
    };

    if (editingEvent) {
      // Update existing event
      setEvents(events.map(event => 
        event.id === editingEvent.id 
          ? { ...eventData, id: editingEvent.id } 
          : event
      ));
    } else {
      // Create new event
      const newEvent = { 
        ...eventData, 
        id: Date.now()
      };
      setEvents([...events, newEvent]);
    }
    
    // Reset form and close
    handleCancel();
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      type: event.type,
      category: event.category,
      status: event.status,
      startDate: event.startDate,
      endDate: event.endDate,
      startTime: event.startTime,
      endTime: event.endTime,
      location: event.location,
      organizer: event.organizer,
      maxAttendees: event.maxAttendees,
      image: event.image,
      registrationLink: event.registrationLink,
      tags: event.tags.join(', ')
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(event => event.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingEvent(null);
    setFormData({ 
      title: '',
      description: '',
      type: 'Workshop',
      category: 'Cybersecurity',
      status: 'Upcoming',
      startDate: '',
      endDate: '',
      startTime: '09:00',
      endTime: '17:00',
      location: '',
      organizer: '',
      maxAttendees: 50,
      image: '',
      registrationLink: '',
      tags: ''
    });
  };

 

  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming': return 'bg-blue-100 text-blue-800';
      case 'Ongoing': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Workshop': return 'bg-purple-100 text-purple-800';
      case 'Training': return 'bg-orange-100 text-orange-800';
      case 'Seminar': return 'bg-indigo-100 text-indigo-800';
      case 'Webinar': return 'bg-teal-100 text-teal-800';
      case 'Conference': return 'bg-pink-100 text-pink-800';
      case 'Networking': return 'bg-cyan-100 text-cyan-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Calendar view functions
  const getEventsByDate = () => {
    const eventsByDate = {};
    events.forEach(event => {
      if (!eventsByDate[event.startDate]) {
        eventsByDate[event.startDate] = [];
      }
      eventsByDate[event.startDate].push(event);
    });
    return eventsByDate;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Manage Events</h3>
          <p className="text-sm text-gray-500 mt-1">Create and manage workshops, trainings, and events</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
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
            <button
              onClick={() => setView('calendar')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition duration-200 ${
                view === 'calendar' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Calendar View
            </button>
          </div>
          
          <button 
            onClick={() => setShowForm(true)}
            className="bg-[#245684] text-white px-4 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200 flex items-center space-x-2"
          >
            <span>📅</span>
            <span>Add Event</span>
          </button>
        </div>
      </div>

      {/* Event Form */}
      {showForm && (
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900">
              {editingEvent ? 'Edit Event' : 'Create New Event'}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Enter event title"
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
                  placeholder="Describe the event"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                >
                  {eventTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Organizer</label>
                <input
                  type="text"
                  value={formData.organizer}
                  onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Event organizer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                <input
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                <input
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Event location"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max Attendees</label>
                <input
                  type="number"
                  value={formData.maxAttendees}
                  onChange={(e) => setFormData({ ...formData, maxAttendees: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Registration Link</label>
                <input
                  type="url"
                  value={formData.registrationLink}
                  onChange={(e) => setFormData({ ...formData, registrationLink: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="https://..."
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
                <p className="text-xs text-gray-500 mt-1">e.g., workshop, cybersecurity, hands-on</p>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Image</label>
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
                {editingEvent ? 'Update Event' : 'Create Event'}
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

      {/* Events Display */}
      <div className="p-6">
        {/* Filters and Search */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent">
            <option value="">All Types</option>
            {eventTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent">
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent">
            <option value="">All Status</option>
            {statusOptions.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <div className="text-4xl mb-4">📅</div>
            <p className="text-lg font-medium">No events found</p>
            <p className="text-sm mt-1">Create your first event to get started</p>
            <button 
              onClick={() => setShowForm(true)}
              className="mt-4 bg-[#245684] text-white px-6 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
            >
              Create Event
            </button>
          </div>
        ) : view === 'list' ? (
          // List View
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-200">
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
                  {event.image && (
                    <img src={event.image} alt={event.title} className="w-full md:w-48 h-32 object-cover rounded-lg" />
                  )}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{event.title}</h4>
                        <p className="text-gray-600 mt-1">{event.description}</p>
                      </div>
                      <div className="flex space-x-2 mt-2 md:mt-0">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <span>📅</span>
                        <span>{formatDate(event.startDate)} {event.startTime} - {event.endTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>📍</span>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>👥</span>
                        <span>{event.currentAttendees} / {event.maxAttendees} attendees</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {event.tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="text-sm text-gray-500">
                        Organized by: {event.organizer}
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleEdit(event)}
                          className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(event.id)}
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
        ) : (
          // Calendar View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(getEventsByDate()).map(([date, dateEvents]) => (
              <div key={date} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">{formatDate(date)}</h4>
                <div className="space-y-3">
                  {dateEvents.map(event => (
                    <div key={event.id} className="border-l-4 border-blue-500 pl-3 py-2">
                      <div className="flex justify-between items-start">
                        <h5 className="font-medium text-gray-900 text-sm">{event.title}</h5>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{event.startTime} - {event.endTime}</p>
                      <p className="text-xs text-gray-500">{event.location}</p>
                      <div className="flex space-x-2 mt-2">
                        <button 
                          onClick={() => handleEdit(event)}
                          className="text-blue-600 hover:text-blue-900 text-xs"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(event.id)}
                          className="text-red-600 hover:text-red-900 text-xs"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
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
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="text-gray-600">Upcoming: {events.filter(event => event.status === 'Upcoming').length}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-gray-600">Ongoing: {events.filter(event => event.status === 'Ongoing').length}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
            <span className="text-gray-600">Completed: {events.filter(event => event.status === 'Completed').length}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span className="text-gray-600">Total: {events.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsManagement;