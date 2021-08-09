import React from 'react'

export default function Notification({ message, user }) {
  return (
    <div>
      {message !== null && user !== null && (
        <h1> {user.username} is logged in</h1>
      )}
    </div>
  )
}
