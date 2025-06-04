import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="main-section">
            <h2 className="section-heading">All Blog Posts</h2>
            {blogs.length === 0 ? (
                <p>No blogs available.</p>
            ) : (
                <div className="cards-wrapper">
                    {blogs.map((blog) => (
                        <div className="blog-preview" key={blog.id}>
                            <h3>{blog.title}</h3>
                            <p>{blog.content}</p>
                            <p><strong>Author:</strong> {blog.author}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default home;
