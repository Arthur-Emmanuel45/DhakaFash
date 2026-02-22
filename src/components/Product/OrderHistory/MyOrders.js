import React, {useState, useEffect } from 'react';

const MyOrders = () => {
    const [orders, setOrders] = useState();
    useEffect(() => {
        fetch("/api/orders/my/", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(res => res.json())
            .then(setOrders);
    }, []);


    return (
        <div>

            {orders.map(order => (
                <div key={order.id}>
                    <p>Order #{order.id}</p>
                    <p>Total: ${order.total_price}</p>
                    <p>status: {order.status}</p>
                </div>
            ))}

        </div>
    );
}

export default MyOrders;
