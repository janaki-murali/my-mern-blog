import React from "react"
import {Outlet, Link} from 'react-router-dom'
import './pages/AddBlog.css';

const App = () => {
  return(
    <div className="nav-container">
      <nav className="navbar">
        <h2 id="logo">My Blog</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/addblog">Add Blog</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
export default App
