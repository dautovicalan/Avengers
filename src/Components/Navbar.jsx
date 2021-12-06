import React from 'react'
import '../Styles/NavbarStyle.css'
import img3 from '../Pictures/AvengersEndGame.png'
import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'

const Navbar = () => {

    const[show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
            <nav className="navbar-avengers">
                <div className="flexbox-container">
                    <ul>
                        <img className="logo" src={img3}/>                       
                        <li><a onClick={handleOpen}>Home</a></li>
                        <li><Link to="/character">Characters</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">About</Link></li>
                    </ul>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Error 404 Page Not Found</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={require(`../Pictures/Characters/hulk.png`).default} width="100%" height="100%"/>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>          
            </nav>
    )
}

export default Navbar
