import React from 'react';
import './addBlog.css';

const AddBlog = () => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [author, setAuthor] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    content: content,
                    author: author
                })
            });
            if (response.ok) {
                alert('Blog added');
                setTitle('');
                setContent('');
                setAuthor('');
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    return (
        <div className="main-wrapper">
            <div className="form-wrapper">
                <h2 className="page-title">Create New Blog</h2>
                <form className="add-blog-form" onSubmit={handleSubmit}>
                    <input
                        className="input-field"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Blog title"
                        required
                    />
                    <input
                        className="input-field"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Blog content"
                        required
                    />
                    <input
                        className="input-field"
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Author"
                        required
                    />
                    <button className="submit-btn" type="submit">Post Blog</button>
                </form>
            </div>
        </div>
    );
};

export default addBlog;
