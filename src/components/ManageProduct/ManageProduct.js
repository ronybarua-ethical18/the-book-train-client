import React from 'react';
import { Button } from 'react-bootstrap';

const ManageProduct = (props) => {
    const { _id, name, authorName, price } = props.book;
    
    const deleteBook = (id) => {
        console.log("i am touched")
        console.log(id)
        fetch(`https://honest-backbacon-70549.herokuapp.com/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Data deleted successfully from database')
                }
            })
    }
    console.log(props)
    return (
        <tr>
            <td className="pr-3 pl-3">{name}</td>
            <td className="pr-3 pl-3">{authorName}</td>
            <td className="pr-3 pl-3">${price}</td>
            <td className="pr-3 pl-3"><Button variant="warning mr-2 text-white">Update</Button>
                <Button variant="danger"
                    onClick={(e) => {
                        deleteBook(_id)
                        e.target.parentNode.parentNode.style.display = 'none'
                    }}>Delete</Button></td>
        </tr>
    );
};

export default ManageProduct;