import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = (props) => {
    const loggedInUser = props.loggedInUser;
    return (
        <div className="pt-3 pb-3 container">
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Navbar.Brand href="/home">The Book Train</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id="nav-link" className="ml-auto d-flex justify-content-space-between">
                        <Link className="m-2 text-dark" to="/home">Home</Link>
                       {loggedInUser.email && <Link className="m-2 text-dark" to="/orders">Orders</Link>}
                        <Link className="m-2 text-dark" to="/adminPanel">Admin</Link>
                        <Link className="m-2 text-dark" to="/deals">Deals</Link>
                    </Nav>
                   {!loggedInUser.email && <Button variant="primary" className=" "> <Link className="m-2 text-dark" to="/login">Login</Link></Button>}
                   <span><b className="text-dark ml-2">{loggedInUser.displayName}</b></span>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;