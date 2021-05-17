import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOut from '../CheckOut/CheckOut';

const BookDetails = () => {
    const { bookId } = useParams();
    const [books, setBooks] = useState([]);
    console.log(books);
    useEffect(() => {
        fetch('https://gentle-refuge-69010.herokuapp.com/book/' + bookId)
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [bookId])
    return (
        <div>
            <CheckOut bookInfo={books}></CheckOut>
        </div>
    );
};

export default BookDetails;