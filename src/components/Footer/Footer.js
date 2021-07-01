import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="container" id="footer">
            <div className="row text-left">
                <div className="col-md-3">
                    <h2><b>BOOK TRAIN</b></h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, adipisci.</p>
                    <b>+800-0XXXX97655</b>
                </div>
                <div className="col-md-3">
                    <h2><b>COMPANY</b></h2>
                    <ul className="p-0">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Customer</li>
                        <li>Hire Us</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h2><b>FEATURES</b></h2>
                    <ul className="p-0">
                        <li>Press</li>
                        <li>Release Notes</li>
                        <li>Integrations</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h2><b>DOCUMENTATION</b></h2>
                    <ul className="p-0">
                        <li>Support</li>
                        <li>Docs</li>
                        <li>API References</li>
                        <li>Status</li>
                        <li>Tech Reference</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom-title pt-4">
                All rights reserved by | rony jackson {new Date().getFullYear()}
            </div>
        </div>
    );
};

export default Footer;