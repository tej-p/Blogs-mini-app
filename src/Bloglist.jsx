import React from 'react'

export const Bloglist = ({ blogs, title, handleDelete }) => {
    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <h2>{ blog.title }</h2>
            <p style={{color:'white', fontStyle:'italic' }}>Written by { blog.author }</p>
            <button className='btn' onClick={() => handleDelete(blog.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
