import React from 'react'
import '../Styles/NavbarStyle.css'
import img3 from '../Pictures/AvengersEndGame.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
            <nav className="navbar-avengers">
                <div className="flexbox-container">
                    <ul>
                        <img className="logo" src={img3}/>                       
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/character">Characters</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">About</Link></li>
                    </ul>
                </div>             
            </nav>
    )
}

export default Navbar
