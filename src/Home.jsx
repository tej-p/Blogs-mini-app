import React, { useEffect } from 'react'
import { useState } from "react";
import { Bloglist } from './Bloglist';

export const Home = () => {
    const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
  
    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }
  
    useEffect(() => {
      console.log('use effect ran');
      console.log(blogs);
    })
  
    return (
      <div className="home">
        <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      </div>
    );
  }
 

