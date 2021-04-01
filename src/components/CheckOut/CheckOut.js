import React from 'react';
import { Button, Table } from 'react-bootstrap';
import './CheckOut.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
const CheckOut = (props) => {
    const {name, authorName, price} = props.bookInfo;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleProceedOrder = () =>{
        const orderDetails = {email:loggedInUser.email, Quantity: 1, userName:loggedInUser.displayName, orderTime: new Date(), name:name, authorName:authorName, price:price};
        console.log(orderDetails);
        fetch('https://apricot-sundae-82080.herokuapp.com/addOrder', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className="container text-left shadow p-4">
            <div className="checkout-details">
                <h3 className="pb-4">Check Out</h3>
                <Table striped bordered hover size="sm" className="p-4 shadow">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Author Name</th>
                            <th>Quantity</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{authorName}</td>
                            <td>1</td>
                            <td>${price}</td>
                        </tr>
                    </tbody>
                </Table>
                <Link to="/orders"><Button variant="primary" onClick={handleProceedOrder} className="mt-4">Check Out</Button></Link>
            </div>
        </div>
    );
};

export default CheckOut;