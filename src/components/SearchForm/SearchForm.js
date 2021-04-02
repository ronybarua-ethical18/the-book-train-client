import React from 'react';
import { Button, Form, Jumbotron } from 'react-bootstrap';
import './SearchForm.css'
const SearchForm = () => {
    return (
        <div>
            <Jumbotron align="center" id="jumbotrons">
                <h1 className="title text-white">The book train is arrived YAY!</h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div className="d-flex justify-content-center">
                    <Form.Control id="search-form" type="text" placeholder="search book" />
                    <Button id="learn-title">Search</Button>
                </div>
            </Jumbotron>
        </div>
    );
};

export default SearchForm;