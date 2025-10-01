import React, { useState } from 'react';

const BlogManagement = () => {
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      title: 'Introduction to Cybersecurity', 
      excerpt: 'Learn the basics of cybersecurity...', 
      content: 'This is the blog content...', 
      category: 'Cybersecurity', 
      status: 'Published', 
      publishDate: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Cybersecurity',
    status: 'Draft',
    image: ''
  });

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

    if (editingPost) {
      // Update existing post
      setPosts(posts.map(post => 
        post.id === editingPost.id 
          ? { ...formData, id: editingPost.id, publishDate: editingPost.publishDate } 
          : post
      ));
    } else {
      // Create new post
      const newPost = { 
        ...formData, 
        id: Date.now(),
        publishDate: new Date().toISOString().split('T')[0] 
      };
      setPosts([...posts, newPost]);
    }
    
    // Reset form and close
    handleCancel();
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      status: post.status,
      image: post.image
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingPost(null);
    setFormData({ 
      title: '', 
      excerpt: '', 
      content: '', 
      category: 'Cybersecurity', 
      status: 'Draft', 
      image: '' 
    });
  };

  return (
    <div className="text-[#103d5d] bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Manage Blog Posts</h3>
        <button 
          onClick={() => setShowForm(true)}
          className="bg-[#245684] text-white px-4 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
        >
          Create New Post
        </button>
      </div>

      {/* Blog Form */}
      {showForm && (
        <div className="p-6 border-b border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Enter blog post title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                >
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Microsoft Azure">Microsoft Azure</option>
                  <option value="Microsoft 365">Microsoft 365</option>
                  <option value="Microsoft Security">Microsoft Security</option>
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
                </select>
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
                  placeholder="Brief description of the blog post"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                />
                {formData.image && (
                  <div className="mt-2">
                    <img src={formData.image} alt="Preview" className="h-32 object-cover rounded border" />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image: '' })}
                      className="mt-2 text-sm text-red-600 hover:text-red-800"
                    >
                      Remove Image
                    </button>
                  </div>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows="10"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  placeholder="Write your blog content here..."
                  required
                />
              </div>
            </div>
            
            <div className="flex space-x-3 pt-4">
              <button 
                type="submit" 
                className="bg-[#245684] text-white px-6 py-2 rounded-lg hover:bg-[#1a4066] transition duration-200"
              >
                {editingPost ? 'Update Post' : 'Create Post'}
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

      {/* Blog Posts Table */}
      <div className="p-6">
        {posts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No blog posts found. Create your first post!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Publish Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {post.image && (
                          <img src={post.image} alt={post.title} className="h-10 w-10 object-cover rounded mr-3" />
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">{post.title}</div>
                          <div className="text-sm text-gray-500 line-clamp-1">{post.excerpt}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        post.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.publishDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        onClick={() => handleEdit(post)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(post.id)}
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
        )}
      </div>
    </div>
  );
};

export default BlogManagement;