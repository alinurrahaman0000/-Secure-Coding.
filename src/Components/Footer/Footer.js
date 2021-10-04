import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Footer/Footer.css'
const Footer = () => {
    return (
        <div className="row footer">
            <div className="col-md-4">
            <h3 className="letest">Our Services</h3>
             <NavLink to="/">Web Desing</NavLink> <br />
             <NavLink to="/">Web Development</NavLink><br />
             <NavLink to="/">Product Managment</NavLink><br />
             <NavLink to="/">App Development</NavLink><br />
          
            </div>
            <div className="col-md-4">
               <h3 className="letest">Useful Links</h3>
               <NavLink to="/">Home</NavLink><br />
               <NavLink to="/">About us</NavLink><br />
               <NavLink to="/">Services</NavLink><br />
               <NavLink to="/">Contact</NavLink><br />
              
            </div>
            <div className="col-md-4 under">
               <h3 className="letest">Desing</h3>
                 <p>United States</p>
               <p>Phone: + 123463564</p>
               <p>Email: alinurrahaman0000@gmail.com</p>
            </div>
           <p><small className="letest">All Right Recived By @Alinur Rahaman</small></p>
        </div>
    );
};

export default Footer;