import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="pb-2 container header">
            <Navbar collapseOnSelect expand="lg" className="d-flex align-items-center" variant="light">
                <Navbar.Brand href="/home" id="brand-title"><FontAwesomeIcon icon={faBookReader} className="mr-3"></FontAwesomeIcon><span className="bold-text">B</span>ook Train</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id="nav-link" className="ml-auto d-flex justify-content-space-between">
                        <Link className="m-2 text-white" to="/home">Home</Link>
                        <Link className="m-2 text-white" to="/orders">Orders</Link>
                        <Link className="m-2 text-white" to="/adminPanel">Admin</Link>
                        <Link className="m-2 text-white" to="/">Deals</Link>   
                    </Nav>
                    {!loggedInUser.email ? <Button id="login-title">
                    <Link className="m-2 text-dark" to="/login">Login</Link></Button>
                    :<span><b className="text-white m-3">{loggedInUser.displayName}</b></span>
                    
                    }
                    {
                        loggedInUser.email && <Button id="login-title" onClick={() => setLoggedInUser({})} className="text-dark">
                        Sign Out</Button>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;