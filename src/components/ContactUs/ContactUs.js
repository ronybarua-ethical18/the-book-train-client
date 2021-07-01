import React from 'react';
import { Button } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div className="container p-5">
            <div className="contact-info pb-5">
                <h2><b>Got Confused? Don't Worry <br /> Just Contact Wtih Us</b></h2>
            </div>
            <div className="d-flex justify-content-center">
                <input className="form-control" id="search-form" type="text" placeholder="Email Us" />
                <Button id="buy">Email</Button>
            </div>
        </div >
    );
};

export default ContactUs;