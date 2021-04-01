import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Books from '../Books/Books';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() =>{
        const url = 'https://apricot-sundae-82080.herokuapp.com/books';
        fetch(url)
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div className="bg-light p-4">
           <Container>
               {
                   books.length === 0 && <Spinner animation="grow" />
               }
                <Row>
                    {
                        books.map(book => <Col lg={4} md={6} sm={6} xs={12} ><Books book={book}></Books></Col>)
                    }
                </Row>
           </Container>
        </div>
    );
};

export default Home;