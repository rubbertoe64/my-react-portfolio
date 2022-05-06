import React from 'react';
import { Link } from "react-router-dom"
import '../styles.css'


function Navbar(){
     return(
          <div className='topnav'>
          <section className='name'>
              <Link to='/About'>Roberto Gonzalez</Link>
          </section>
          <section className='topnav-right'>
              <Link to='/About'>About me</Link>
              <Link to='/Portfolio'>Portfolio</Link>
              <Link to='/Contact'>Contact</Link>
              <Link to='/Resume'>Resume</Link>
          </section>
          
      </div>
     )
};



export default Navbar;