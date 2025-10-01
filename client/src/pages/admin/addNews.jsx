import React, { useState } from 'react';

const NewsManagement = () => {
  const [news, setNews] = useState([
    { 
      id: 1, 
      title: 'New Cybersecurity Course Launch', 
      excerpt: 'We are excited to announce our new advanced cybersecurity certification program...', 
      content: 'We are excited to announce our new advanced cybersecurity certification program starting next month. This comprehensive course covers the latest security threats and defense mechanisms.', 
      category: 'Announcement', 
      status: 'Published', 
      publishDate: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500',
      author: 'Admin',
      tags: ['cybersecurity', 'course', 'launch']
    },
    { 
      id: 2, 
      title: 'Partnership with Microsoft', 
      excerpt: 'SysCare partners with Microsoft to provide exclusive training programs...', 
      content: 'We are proud to announce our partnership with Microsoft to provide exclusive training programs and certification opportunities for our students.', 
      category: 'Partnership', 
      status: 'Published', 
      publishDate: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500',
      author: 'Admin',
      tags: ['microsoft', 'partnership', 'training']
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Announcement',
    status: 'Draft',
    image: '',
    author: 'Admin',
    tags: ''
  });

  const categories = [
    'Announcement',
    'Partnership',
    'Achievement',
    'Event',
    'Update',
    'General'
  ];

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
    if (!formData.title.trim() || !formData.excerpt.trim() || !formData.content.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    // Process tags
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);

    const newsData = {
      ...formData,
      tags: tagsArray
    };

    if (editingNews) {
      // Update existing news
      setNews(news.map(item => 
        item.id === editingNews.id 
          ? { ...newsData, id: editingNews.id, publishDate: editingNews.publishDate } 
          : item
      ));
    } else {
      // Create new news
      const newNews = { 
        ...newsData, 
        id: Date.now(),
        publishDate: new Date().toISOString().split('T')[0] 
      };
      setNews([...news, newNews]);
    }
    
    // Reset form and close
    handleCancel();
  };

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem);
    setFormData({
      title: newsItem.title,
      excerpt: newsItem.excerpt,
      content: newsItem.content,
      category: newsItem.category,
      status: newsItem.status,
      image: newsItem.image,
      author: newsItem.author,
      tags: newsItem.tags.join(', ')
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this news article?')) {
      setNews(news.filter(item => item.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingNews(null);
    setFormData({ 
      title: '', 
      excerpt: '', 
      content: '', 
      category: 'Announcement', 
      status: 'Draft', 
      image: '', 
      author: 'Admin',
      tags: ''
    });
  };

  const handleStatusChange = (id, newStatus) => {
    setNews(news.map(item => 
      item.id === id ? { ...item, status: newStatus } : item
    ));
  };

  return (
    <div className=" text-[#103d5d] bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Manage News</h3>
          <p className="text-sm text-gray-500 mt-1">Create and manage news articles and announcements</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="bg-[#245684] text-white px-4 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200 flex items-center space-x-2"
        >
          <span>📰</span>
          <span>Add News</span>
        </button>
      </div>

      {/* News Form */}
      {showForm && (
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900">
              {editingNews ? 'Edit News Article' : 'Create New News Article'}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Enter news title"
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Author name"
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
                <p className="text-xs text-gray-500 mt-1">e.g., cybersecurity, microsoft, training</p>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Brief summary of the news article"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
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
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows="8"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Write the full news content here..."
                  required
                />
              </div>
            </div>
            
            <div className="flex space-x-3 pt-4 border-t border-gray-200">
              <button 
                type="submit" 
                className="bg-[#245684] text-white px-6 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
              >
                {editingNews ? 'Update News' : 'Publish News'}
              </button>
              <button 
                type="button" 
                onClick={handleCancel}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
              {editingNews && (
                <button 
                  type="button" 
                  onClick={() => setFormData({ ...formData, status: 'Draft' })}
                  className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
                >
                  Save as Draft
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {/* News Table */}
      <div className="p-6">
        {/* Filters and Search */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search news..."
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
            <option value="">All Status</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
            <option value="Archived">Archived</option>
          </select>
        </div>

        {news.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <div className="text-4xl mb-4">📰</div>
            <p className="text-lg font-medium">No news articles found</p>
            <p className="text-sm mt-1">Create your first news article to get started</p>
            <button 
              onClick={() => setShowForm(true)}
              className="mt-4 bg-[#245684] text-white px-6 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
            >
              Create News Article
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Article</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {news.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition duration-150">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        {item.image && (
                          <img src={item.image} alt={item.title} className="h-12 w-12 object-cover rounded-lg" />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate">{item.title}</div>
                          <div className="text-sm text-gray-500 truncate">{item.excerpt}</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.tags.map((tag, index) => (
                              <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded-full">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className={`text-xs font-semibold rounded-full border-0 focus:ring-2 focus:ring-[#245684] ${
                          item.status === 'Published' 
                            ? 'bg-green-100 text-green-800' 
                            : item.status === 'Draft'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <option value="Published">Published</option>
                        <option value="Draft">Draft</option>
                        <option value="Archived">Archived</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.publishDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-3">
                        <button 
                          onClick={() => handleEdit(item)}
                          className="text-blue-600 hover:text-blue-900 transition duration-200"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:text-red-900 transition duration-200"
                        >
                          Delete
                        </button>
                        <button className="text-green-600 hover:text-green-900 transition duration-200">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Stats Summary */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-gray-600">Published: {news.filter(item => item.status === 'Published').length}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="text-gray-600">Draft: {news.filter(item => item.status === 'Draft').length}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
            <span className="text-gray-600">Archived: {news.filter(item => item.status === 'Archived').length}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="text-gray-600">Total: {news.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsManagement;