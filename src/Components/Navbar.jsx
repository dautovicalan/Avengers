import React from 'react'
import '../Styles/NavbarStyle.css'
import img3 from '../Pictures/AvengersEndGame.png'

const Navbar = () => {
    return (
            <nav className="navbar-avengers">
                <div className="flexbox-container">
                    <ul>
                        <img className="logo" src={img3}/>                       
                        <li><a href="default.asp">Home</a></li>
                        <li><a href="news.asp">News</a></li>
                        <li><a href="contact.asp">Contact</a></li>
                        <li><a href="about.asp">About</a></li>
                    </ul>
                </div>             
            </nav>
    )
}

export default Navbar
