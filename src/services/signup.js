import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'
// const baseUrl = '/api/users'

const signup = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const exports = {
  signup,
}

export default exports
