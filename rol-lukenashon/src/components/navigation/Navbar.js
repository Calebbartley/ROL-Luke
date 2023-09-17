import React from 'react'
import { Link } from'react-router-dom';

const Navbar = () => {

  return (
    <div>
        <li>
            <Link to="/">Home</Link>
        </li>
            <li>
                <Link to="/AboutUs">About</Link>
            </li>
            <li>
                <Link to="/ContactUs">Contact</Link>
            </li>
    </div>
  )
}

export default Navbar