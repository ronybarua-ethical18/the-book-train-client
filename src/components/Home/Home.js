import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import AboutUs from '../AboutUs/AboutUs';
import Books from '../Books/Books';
import ContactUs from '../ContactUs/ContactUs';
import SearchForm from '../SearchForm/SearchForm';
const Home = () => {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);
    console.log(books)
    useEffect(() => {
        const url = ('https://damp-peak-34954.herokuapp.com/books?search=' + search);
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [search])
    const handleSearch = event => {
        setSearch(event.target.value);
    }
    return (
        <div className="bg-light p-0">
            <SearchForm handleSearch={handleSearch}></SearchForm>
            <Container>
                {
                    books.length === 0 && <Spinner animation="grow" />
                }
                <Row>
                    {
                        books.map(book => <Col lg={4} md={6} sm={6} xs={12} ><Books book={book}></Books></Col>)
                    }
                </Row>
                <AboutUs />
                <ContactUs />
            </Container>
        </div>
    );
};

export default Home;