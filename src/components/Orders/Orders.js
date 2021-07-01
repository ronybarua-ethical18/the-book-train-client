import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import { Spinner, Table } from 'react-bootstrap';
import './Orders.css';
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://honest-backbacon-70549.herokuapp.com/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="bg-white" >
            <div className="container shadow p-5" >
                <div className="row no-gutters">
                    <div className="col">
                        <h1 className="text-uppercase">You have ordered <span className="order-item">{orders.length}</span> books</h1>
                        <hr></hr>
                        <div className="d-flex flex-wrap justify-content-between">
                            <span className="mr-3"><b>User Email:</b> {loggedInUser.email}</span>
                            <span><b>User Name:</b> {loggedInUser.displayName}</span>
                        </div>

                        {
                            orders.length === 0 && <Spinner animation="grow" />
                        }
                        <div className="order-list mt-4" id="orders-table">
                            <Table striped bordered hover size="sm" className=" shadow" id="order-table">
                                <thead>
                                    <tr>
                                        <th className="p-3">Book Name</th>
                                        <th className="p-3">Author Name</th>
                                        <th className="p-3">Price</th>
                                        <th className="p-3">Quantity</th>
                                        <th className="p-3">Order Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map(order => <tr>
                                            <td>{order.name}</td>
                                            <td>{order.authorName}</td>
                                            <td>${order.price}</td>
                                            <td>1</td>
                                            <td>{order.orderTime}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;