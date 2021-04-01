import React from 'react';
import { Button, Form, Jumbotron} from 'react-bootstrap';
const SearchForm = () => {
    return (
        <div>
             <Jumbotron align="center" id="jumbotrons">
                <h1 className="title">The book train is arrived YAY!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div className="d-flex justify-content-center">
                    <Form.Control id="search-form" type="text" placeholder="search book" />
                    <Button variant="primary">Learn more</Button>
                </div>
            </Jumbotron>
        </div>
    );
};

export default SearchForm;