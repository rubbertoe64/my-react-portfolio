import React from "react";
import Navbar from "./Navbar";
import '../styles.css'



function Header(){
    return (
        <div className='topnav'>
            <section className='name'>
                <a href='#'>Roberto Gonzalez</a>
            </section>
            <section className='topnav-right'>
                <a href='/About'>About me</a>
                <a href='/Portfolio'>Portfolio</a>
                <a href='/Contact'>Contact</a>
                <a href='/Resume'>Resume</a>
            </section>
            
        </div>
        
       
        
    )
}

export default Header;