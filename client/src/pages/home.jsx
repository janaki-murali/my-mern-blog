import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Home.css'

const Home = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blogs')
                setBlogs(response.data)
            } catch (error) {
                console.error("Error fetching blogs:", error)
            }
        }
        fetchBlogs()
    }, [])

    return (
        <>
        
        <div className='home-container'>
            <h2 id="heading">Blogs</h2>
            {blogs.length === 0 ? (
                <p>No blogs available</p>
            ) : (
                <div className='blog-grid'>
                    {blogs.map((blog) => (
                        <div className='blog-card' key={blog.id}>
                            <h3>{blog.title}</h3>
                            <p>{blog.content}</p>
                            <p><strong>Author:</strong>{blog.author}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
        
    );
}
export default Home