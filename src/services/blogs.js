import axios from 'axios'
// const baseUrl = 'https://murmuring-spire-22088.herokuapp.com/api/blogs'
const baseUrl = 'http://localhost:3001/api/blogs'
// const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then((res) => res.data)
}

const create = async (newObj) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObj, config)

  return response.data
}

const destroy = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`)
  return req.then((res) => res.data)
}

const exports = {
  getAll,
  create,
  destroy,
  setToken,
}

export default exports
