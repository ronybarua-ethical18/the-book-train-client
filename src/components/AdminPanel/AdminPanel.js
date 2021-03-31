import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './AdminPanel.css';
const AdminPanel = () => {
    const { handleSubmit, register } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const bookData = {
            name: data.bookName,
            authorName: data.authorName,
            price: data.price,
            imageURL: imageURL
        }
        console.log(bookData)
        if (bookData.imageURL !== null) {
            const url = 'https://apricot-sundae-82080.herokuapp.com/addBook';
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData)
            })
                .then(res => console.log('server side response', res))
        }
        else {
            console.log('Image url is null')
        }
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const bookImage = new FormData();
        bookImage.set('key', 'f7bff2bc732c350dd2aed72fdcb8156b');
        bookImage.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', bookImage)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="row no-gutters text-left">
            <div className="col-md-3 text-center p-4 bg-primary book-container">
                <h3 className="mb-5 text-white">The Book Train</h3>
                <div className="handle-books border">
                    <Link className="book-link">Manage Books</Link>
                    <Link className="book-link">Add Books</Link>
                    <Link className="book-link">Edit Books</Link>
                </div>
            </div>
            <div className="col-md-9 bg-light book-container ">
                <div className="header-tite bg-white p-4">
                    <h3>Add Book</h3>
                </div>
                <div className="addBookForm bg-dark m-4">
                    <Form onSubmit={handleSubmit(onSubmit)} className="p-3 bg-white rounded-lg">
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Book Name</Form.Label>
                            <Form.Control type="text" ref={register} name="bookName" placeholder="Enter Book Name" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicAuthor">
                            <Form.Label>Author Name</Form.Label>
                            <Form.Control type="text" ref={register} name="authorName" placeholder="Enter Author Name" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicPrice">
                            <Form.Label>Book Price</Form.Label>
                            <Form.Control type="number" ref={register} name="price" placeholder="Price" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.File onChange={handleImageUpload} id="exampleFormControlFile1" label="Add Book Cover" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;