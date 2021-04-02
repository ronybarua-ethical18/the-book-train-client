import { faBookReader, faCog, faHome, faMarker, faPlusCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';
import './AdminPanel.css';
const AdminPanel = () => {
    const { handleSubmit, register } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [navigation, setNavigation] = useState(false);
    const [disableState, setDisableState] = useState(true);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const url = 'https://apricot-sundae-82080.herokuapp.com/books';
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

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
                .then(data => {
                    alert('book added successfully');
                })
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
                if(response){
                    setDisableState(false);
                }
                setImageURL(response.data.data.display_url);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="row no-gutters text-left">
            <div id="sidebar" className="col-md-3 p-4 book-container">
                <h3 className="mb-5 text-white title text-center"><FontAwesomeIcon icon={faBookReader} className="mr-4"></FontAwesomeIcon>The Book Train</h3>
                <div className="handle-books">
                    <Link className="book-link" onClick={() => setNavigation(true)}> <FontAwesomeIcon icon={faCog} className="mr-4 fa-2x"></FontAwesomeIcon>Manage Books</Link>
                    <Link className="book-link" onClick={() => setNavigation()}><FontAwesomeIcon icon={faPlusCircle} className="mr-4 fa-2x"></FontAwesomeIcon>Add Books</Link>
                    <Link className="book-link"><FontAwesomeIcon icon={faMarker} className="mr-4 fa-2x"></FontAwesomeIcon>Edit Books</Link>
                    <Link className="book-link" to="/home"><FontAwesomeIcon icon={faHome} className="mr-4 fa-2x"></FontAwesomeIcon>Go Home</Link>
                </div>
            </div>
            <div className="col-md-9 bg-light book-container">

                <div className="header-tite bg-white p-4">
                    {
                        !navigation ? <h3 className="text-dark book-title">Add Book</h3> : <h3 className="text-dark book-title">Manage Books</h3>
                    }
                </div>
                <div  className="manage-books p-3 bg-light" id="manages-table">
                    {
                        navigation && <Table striped bordered hover size="sm" className=" shadow" id="manage-table">
                            <thead>
                                <tr>
                                    <th className="p-3">Book Name</th>
                                    <th className="p-3">Author Name</th>
                                    <th className="p-3">price</th>
                                    <th className="p-3">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books.map(book => <ManageProduct book={book}></ManageProduct>)
                                }
                            </tbody>
                        </Table>
                    }
                </div>
                {!navigation && <div className="addBookForm bg-dark m-4">
                    <Form onSubmit={handleSubmit(onSubmit)} className="p-3 bg-white rounded-lg">
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Book Name</Form.Label>
                            <Form.Control type="text" ref={register} id="input-book" name="bookName" placeholder="Enter Book Name" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicAuthor">
                            <Form.Label>Author Name</Form.Label>
                            <Form.Control type="text" ref={register} id="input-author" name="authorName" placeholder="Enter Author Name" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicPrice">
                            <Form.Label>Book Price</Form.Label>
                            <Form.Control type="number" ref={register} id="input-price" name="price" placeholder="Price" required />
                        </Form.Group>
                        <Form.Group>
                            {/* <Form.File onChange={handleImageUpload} id="input-file" label="Add Book Cover" /> */}
                            <input type="file" onChange={handleImageUpload} name="" id="input-file" />
                            <label htmlFor="input-file" id="file-label"><FontAwesomeIcon icon={faUpload} className="mr-3"></FontAwesomeIcon>Upload Image</label>
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button type="submit" id="add-book" disabled={disableState}>Add Book</Button>
                        </div>
                    </Form>
                </div>}
            </div>
        </div>
    );
};

export default AdminPanel;