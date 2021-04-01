import React from 'react';
import { Button } from 'react-bootstrap';

const ManageProduct = (props) => {
    const { _id, name, authorName, price } = props.book;

    const deleteBook = (id) => {
        console.log("i am touched")
        console.log(id)
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Data deleted successfully from database')
                }
            })
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{authorName}</td>
            <td>${price}</td>
            <td><Button variant="warning">Update</Button>
                <Button variant="danger" 
                onClick={(e) => {
                    deleteBook(_id)
                    e.target.parentNode.parentNode.style.display = 'none'
                }}>Delete</Button></td>
        </tr>
    );
};

export default ManageProduct;