const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
require('dotenv').config();

const app = express()
app.use(cors())
const port = 5000
const path = require('path')

app.use(express.json())

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
})
const Blog = mongoose.model('Blog', blogSchema)

app.get('/blogs', async (req, res) => {
    const blogs = await Blog.find()
    res.json(blogs)
})

app.post('/blogs', async (req, res) => {
    const newBlog = new Blog(req.body)
    await newBlog.save()
    res.status(201).json(newBlog)
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB')

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`)
        })
    })
    .catch(error =>{
        console.error('Error connecting to MongoDB:', error)
    })