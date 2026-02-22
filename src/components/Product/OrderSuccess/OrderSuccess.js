import React from 'react';
import { Link, useParams } from 'react-router-dom';

const OrderSuccess = () => {
    const { orderId } = useParams();
    return (
        <div className="order-success">
            <h1> Order Placed Successful!</h1>
            <p>Thank you for your purchase.</p>
            <p>Your order ID: #{orderId}</p>
            <Link to="/orders-details">Order Details</Link>
        </div>
    );
}

export default OrderSuccess;
