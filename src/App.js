import './App.css'
import Layout from './components/Layout'
import Hero from './components/Hero'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import Login from './components/Login'
import Signup from './components/Signup'
import Blog from './components/Blog'
import { useState, useEffect } from 'react'
import blogsService from './services/blogs'
import { Switch, Route } from 'react-router-dom'

function App() {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  console.log('user: ', user)
  console.log('blogs: ', blogs)

  useEffect(() => {
    blogsService.getAll().then((allBlogs) => {
      setBlogs(allBlogs)
    })
  }, [])

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson)
      setUser(user)
      blogsService.setToken(user.token)
    }
  }, [])

  return (
    <Layout message={message} user={user} setUser={setUser}>
      <Switch>
        <Route path={`/blogs/:blogTitle`}>
          <Blog blogs={blogs} />
        </Route>
        <Route path="/create">
          {user === null ? (
            <Login setUser={setUser} setMessage={setMessage} />
          ) : (
            <BlogForm setBlogs={setBlogs} blogs={blogs} />
          )}
        </Route>
        <Route path="/login">
          <Login setUser={setUser} setMessage={setMessage} />
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} setMessage={setMessage} />
        </Route>
        <Route path="/">
          {/* LandingPage */}
          <Hero />
          <BlogList setBlogs={setBlogs} blogs={blogs} user={user} />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
