import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import signupService from '../services/signup'
import blogService from '../services/blogs'

const Signup = ({ setUser, setMessage }) => {
  const history = useHistory()
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        username: Yup.string()
          .max(40, 'Must be 40 characters or less')
          .required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const { name, username, password } = values

        try {
          const user = await signupService.signup({ name, username, password })
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
            : history.push('/')
        }, 1000)
      }}
    >
      <Form className="flex flex-col w-4/12 mx-auto">
        <div className="flex flex-col pb-4">
          <label htmlFor="name">Name</label>
          <Field className="border p-1" name="name" type="text" />
        </div>

        <div className="flex flex-col pb-4">
          <label htmlFor="username">Username</label>
          <Field className="border p-1" name="username" type="text" />
        </div>

        <label htmlFor="password">Password</label>
        <Field className="border p-1" name="password" type="password" />

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

export default Signup
