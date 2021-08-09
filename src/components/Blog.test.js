import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const blogs = [
    {
      content: 'Component testing is done with react-testing-library',
      author: 'Sean Oreilly',
      title: 'Hello Testing!',
    },
  ]

  const component = render(<Blog blogs={blogs} />)

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})
