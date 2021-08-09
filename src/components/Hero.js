import React from 'react'

export default function Hero() {
  return (
    <div className="">
      <h1 className="absolute top-64 right-0 left-0 mx-auto w-full text-white font-mono text-7xl text-center">
        Sean's Medium
      </h1>
      <img
        style={{ height: '500px', objectFit: 'cover' }}
        className="w-full"
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1330&q=80"
        alt="Landing Page Hero"
      />
    </div>
  )
}
