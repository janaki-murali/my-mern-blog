import React from 'react'
import './AddBlog.css';


const AddBlog = () => {
    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')
    const [author, setAuthor] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:5000/blogs',{
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
            if(response.ok){
                alert('Blog added');
                setTitle('');
                setContent('');
                setAuthor('');
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    return(
        <div className="blog-container">
            <div className="form-wrapper">
                <h2 className="add-blog-title">Add blog</h2>
                <form className="add-blog-form" onSubmit={handleSubmit}>
                    <input className="title" type="text" name="" value={title} onChange={(e) => setTitle(e.target.value)} id="title" placeholder="Enter title" required/>
                    <input className='content' type="text" name="" value={content} onChange={(e) => setContent(e.target.value)} id="content" placeholder="Add content" required/>
                    <input className='title' type="text" name="" value={author} onChange={(e) => setAuthor(e.target.value)} id="author" placeholder="Author name" required/>
                    <button className="submit" type="submit">Add Blog</button>
                </form>
            </div>
        </div>
    )
}
export default AddBlog;