import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Books from '../Books/Books';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() =>{
        const url = 'http://localhost:5000/books';
        fetch(url)
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div className="bg-light p-4">
           <Container>
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