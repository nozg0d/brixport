import { useState } from 'react';
import { blogPosts } from '../../data/blogPosts';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openPost = (post) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts, insights, and tutorials on web development and technology
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="flex items-center space-x-4 mb-2 lg:mb-0">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">By {post.author}</span>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                <button
                  onClick={() => openPost(post)}
                  className="text-left w-full"
                >
                  {post.title}
                </button>
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => openPost(post)}
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </article>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-16">
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-accent-50 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to get notified about new blog posts and updates on web development trends.
            </p>
            <form className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Blog post modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                  <span>•</span>
                  <span>By {selectedPost.author}</span>
                </div>
              </div>
              <button
                onClick={closePost}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal content */}
            <div className="p-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              {/* Modal footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Published on {selectedPost.date}
                  </div>
                  <button
                    onClick={closePost}
                    className="btn-primary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
