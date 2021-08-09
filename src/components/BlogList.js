import React from 'react'
import blogService from '../services/blogs'
import { Link } from 'react-router-dom'

export default function BlogList({ blogs, setBlogs, user }) {
  const handleDestroy = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id))
    blogService.destroy(id)
  }
  return (
    <div>
      {blogs.map((blog) => (
        <div
          className="flex items-center justify-between w-8/12 mx-auto my-10"
          key={blog.id}
        >
          <div>
            <h1 className="font-mono border-b-8 border-yellow-200">
              <Link to={`/blogs/${blog.title}`}>
                {blog.title} {blog.author && `by ${blog.author}`}
              </Link>
            </h1>
            <p className="truncate w-96">{blog.content}</p>
          </div>
          {user !== null && blog.user && blog.user.username === user.username && (
            <button
              onClick={() => handleDestroy(blog.id)}
              className="bg-red-500 text-white rounded-full px-10 py-2"
            >
              Destroy Blog
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
