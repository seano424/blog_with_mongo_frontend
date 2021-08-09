import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import blogService from '../services/blogs'

export default function BlogForm({ setBlogs, blogs }) {
  return (
    <Formik
      initialValues={{ title: '', author: '', content: '' }}
      validationSchema={Yup.object({
        title: Yup.string()
          .max(45, 'Must be 15 characters or less')
          .required('Required '),
        author: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required '),
        content: Yup.string().required('Required '),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const { title, author, content, image } = values
        const newBlog = {
          title,
          author,
          content,
          image,
        }
        blogService.create(newBlog).then((returnedBlog) => {
          setBlogs([...blogs, newBlog])
        })
        setTimeout(() => {
          setSubmitting(false)
          resetForm({
            values: {
              // the type of `values` inferred to be Blog
              title: '',
              author: '',
              content: '',
              image: '',
            },
            // you can also set the other form states here
          })
        }, 400)
      }}
    >
      <Form className="flex flex-col gap-10 w-7/12 mx-auto">
        <div>
          {/* <label htmlFor="title">Title</label> */}
          <Field
            placeholder="Title"
            className="w-full text-3xl font-mono focus:outline-none"
            name="title"
            type="text"
          />
          {/* <ErrorMessage name="title" /> */}
        </div>
        <div>
          {/* <label htmlFor="content">Tell your story</label> */}
          <Field
            autoFocus={true}
            placeholder="Tell your story"
            className="w-full h-64 focus:outline-none"
            as="textarea"
            name="content"
            type="text"
          />
          {/* <ErrorMessage name="content" /> */}
        </div>
        <div>
          {/* <label htmlFor="author">Author</label> */}
          <Field
            placeholder="Author"
            className="w-full focus:outline-none"
            name="author"
            type="text"
          />
          {/* <ErrorMessage name="author" /> */}
        </div>
        <div>
          {/* <label htmlFor="author">Author</label> */}
          <Field
            placeholder="Image URL"
            className="w-full focus:outline-none"
            name="image"
            type="url"
          />
          {/* <ErrorMessage name="author" /> */}
        </div>

        <button
          type="submit"
          className="bg-gray-100 w-min flex self-center px-10 py-2 rounded-full font-mono"
        >
          Publish
        </button>
      </Form>
    </Formik>
  )
}
