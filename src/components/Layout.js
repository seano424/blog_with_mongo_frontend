import React from 'react'
import { Link } from 'react-router-dom'
import Notification from './Notification'

export default function Layout({ user, setUser, children, message }) {
  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
  }
  return (
    <div>
      <nav>
        <ul className="flex items-center my-4 mx-4 justify-between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <Notification user={user} message={message} />
          <div className="flex items-center gap-6">
            <li>
              {user === null ? (
                <Link to="/login">Login</Link>
              ) : (
                <button onClick={handleLogout}>Logout</button>
              )}
            </li>
            <li className="border rounded-full border-green-300 px-4 py-2">
              <Link to="/create">Write</Link>
            </li>
          </div>
        </ul>
      </nav>
      {children}
    </div>
  )
}
