import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import loginService from '../services/login'
import blogService from '../services/blogs'
import { Link } from 'react-router-dom'

const Login = ({ setUser, setMessage }) => {
  const history = useHistory()
  console.log(history)
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(40, 'Must be 40 characters or less')
          .required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const { username, password } = values

        try {
          const user = await loginService.login({ username, password })
          window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
          blogService.setToken(user.token)
          setUser(user)
          setMessage('Correct credentials')
        } catch (exception) {
          setMessage('Wrong credentials')
        }
        setTimeout(() => {
          setMessage(null)
          setSubmitting(false)
          resetForm({
            values: {
              // the type of `values` inferred to be Blog
              username: '',
              password: '',
            },
            // you can also set the other form states here
          })
          history.location.pathname === '/create'
            ? history.goForward()
            : history.goBack()
        }, 1000)
      }}
    >
      <Form className="flex flex-col w-4/12 mx-auto">
        <div className="flex flex-col py-4">
          <label htmlFor="username">Username</label>
          <Field className="border p-1" name="username" type="text" />
          {/* <ErrorMessage name="lastName" /> */}
        </div>

        <label htmlFor="password">Password</label>
        <Field className="border p-1" name="password" type="password" />
        {/* <ErrorMessage name="email" /> */}

        <Link className="text-green-600" to="/signup">
          Not a member? Sign Up
        </Link>

        <button
          className="border border-green-200 rounded-full w-max px-4 py-3 mx-auto mt-4"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </Formik>
  )
}

export default Login
