import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
const Header = (props) => {
    const loggedInUser = props.loggedInUser;
    return (
        <div className="pb-2 container">
            <Navbar collapseOnSelect expand="lg" className="d-flex align-items-center" variant="light">
                <Navbar.Brand href="/home" id="brand-title"><FontAwesomeIcon icon={faBookReader} className="mr-3"></FontAwesomeIcon>The <span className="bold-text">B</span>ook Train</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id="nav-link" className="ml-auto d-flex justify-content-space-between">
                        <Link className="m-2 text-white" to="/home">Home</Link>
                       <Link className="m-2 text-white" to="/orders">Orders</Link>
                        <Link className="m-2 text-white" to="/adminPanel">Admin</Link>
                        <Link className="m-2 text-white" to="/">Deals</Link>
                    </Nav>
                   {!loggedInUser.email && <Button id="login-title"> <Link className="m-2 text-dark" to="/login">Login</Link></Button>}
                   <span><b className="text-white ml-2">{loggedInUser.displayName}</b></span>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;