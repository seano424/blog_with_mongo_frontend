import React from 'react'
import { useParams } from 'react-router-dom'

export default function Blog({ blogs }) {
  let { blogTitle } = useParams()
  const blog = blogs.find((b) => b.title === blogTitle)
  return (
    <div className="w-6/12 mx-auto">
      <h1 className="text-4xl font-mono">{blog.title}</h1>
      <h4>{blog.author && `~ ${blog.author}`}</h4>
      {blog.image && (
        <div className="my-8">
          <img src={blog.image} alt={`${blog.title}`} />
        </div>
      )}
      <p className="mt-10 tracking-wider leading-8">{blog.content}</p>
      <p className="tracking-wider leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        quibusdam hic sequi a tempore asperiores eius est placeat? Nihil,
        expedita quasi? Consectetur eligendi beatae vitae, incidunt autem
        explicabo suscipit obcaecati at dignissimos ea recusandae quidem velit.
        Vitae rerum omnis consectetur officiis reiciendis quod adipisci! Ea
        pariatur accusamus laboriosam id placeat cum rerum dicta, corporis
        repellat temporibus sunt. Fugiat nesciunt ut a voluptas officiis. Aut
        dolorem, voluptatibus laborum tempore incidunt aperiam consectetur
        provident, pariatur voluptas necessitatibus amet architecto fugiat
        cumque eius rerum, non ipsum nulla nesciunt cum perferendis est esse.
        Sapiente velit esse ipsa dolores ipsam autem, necessitatibus dolor
        tenetur optio?
      </p>
    </div>
  )
}
