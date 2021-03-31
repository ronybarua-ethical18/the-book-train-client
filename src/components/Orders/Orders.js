import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://apricot-sundae-82080.herokuapp.com/orders?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h1>You have {orders.length} booking</h1>
            {
                orders.map(order => <li>{order.email} orderItem: {order.name} AuthorName: {order.authorName} price: {order.price} </li>)
            }
        </div>
    );
};

export default Orders;