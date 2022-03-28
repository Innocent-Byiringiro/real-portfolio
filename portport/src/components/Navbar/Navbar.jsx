import React from 'react';
import './Navbar.css';

import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About Me</Link></li>
          <li><Link to="/ProductList">Projects</Link></li>
          <li><Link to="/Contact">Contact Me</Link></li>
          <li><Link to="/Admin">Admin</Link></li>
          <li><Link to="/Articles">Blog</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
