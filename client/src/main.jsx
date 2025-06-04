import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import AddBlog from './pages/addBlog.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {path:'/', element: <Home />},
      {path:'/addblog', element: <AddBlog />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)