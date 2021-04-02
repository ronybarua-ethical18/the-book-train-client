import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Books.css'
const Books = (props) => {
    const { _id, name, authorName, price, imageURL } = props.book;
    const history = useHistory();
    const handleClick = (id) => {
        const url = `BookDetails/${id}`;
        history.push(url);
    }
    return (
        <div className="h-100 pb-4">
            <Card id="single-card" className="h-100 shadow p-3 mb-4">
                <div className="bg-light p-3 rounded-lg"> <Card.Img variant="top" id="book-image" src={imageURL} /></div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{authorName}</Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <b className="price-title text-dark">${price}</b>
                    <Button id="buy" onClick={() => handleClick(_id)}>Buy Now</Button>
                </div>
            </Card>
        </div>
    );
};

export default Books;