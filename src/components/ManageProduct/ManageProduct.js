import React from 'react';
import { Button } from 'react-bootstrap';

const ManageProduct = (props) => {
    const { _id, name, authorName, price } = props.book;
    const deleteBook = (id) => {
        console.log("i am touched")
        fetch(`/delete/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{authorName}</td>
            <td>${price}</td>
            <td><Button variant="warning">Update</Button>
                <Button variant="danger" onClick={() =>deleteBook(_id)}>Delete</Button></td>
        </tr>
    );
};

export default ManageProduct;