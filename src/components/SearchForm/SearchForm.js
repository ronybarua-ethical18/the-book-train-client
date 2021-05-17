import React from 'react';
import { Form, Jumbotron } from 'react-bootstrap';
import './SearchForm.css'
const SearchForm = ({handleSearch}) => {
    return (
        <div className="">
            <Jumbotron align="center" id="jumbotrons">
                <h1 className="title text-white">The book train is arrived YAY!</h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div className="d-flex justify-content-center">
                    <Form.Control id="search-form" onChange={handleSearch} type="text" placeholder="search book" />
                </div>
            </Jumbotron>
        </div>
    );
};

export default SearchForm;