import React from 'react';
import { Link } from 'react-router-dom';
import '../Navber/Navber.css'
import './images.png'
const Navbar = () => {
    return (
        <div>

            <div className="navber">
                <img className ="logu" src="./images.png" alt="" />
                <br />
          <Link to="/home">Home</Link>
           <Link to="/services">Services</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
           </div>
           
        </div>
    );
};

export default Navbar;