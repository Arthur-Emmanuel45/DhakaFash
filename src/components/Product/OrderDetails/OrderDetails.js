import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";
import "./OrderDetails.css";

const OrderDetail = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    const token = localStorage.getItem("access");

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/orders/${id}/`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
        .then(res => res.json())
        .then(setOrder);
    }, [id, token]);

    const markAsPaid = async () => {
        await fetch(`http://127.0.0.1:8000/api/orders/${id}/pay/`, {
            method: "PUT",
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });

        window.location.reload();
    };

    if (!order) return <p>Loading...</p>;

    return (
        <div className="order-detail-container">
            <h1>Order #{order.id}</h1>

            {/*  Order Info */}
            <div className="order-card">
                <h3>Shipping Information</h3>
                <p><strong>City:</strong> {order.city}</p>
                <p><strong>Paid:</strong> {order.is_paid ? "✅ Paid" : "❌ Not Paid"}</p>
                <p><strong>Delivered:</strong> {order.is_delivered ? "✅ Delivered" : "⏳ Processing"}</p>
            </div>

            {/*  Order Items */}
            <div className="order-card">
                <h3>Order Items</h3>
                {order.items.map(item => (
                    <div key={item.id} className="order-item">
                    <img src={item.product_image} alt={item.product_name} />
                    <div>
                        <p>{item.product_name}</p>
                        <p>{item.quantity} x ${item.price}</p>
                    </div>
                    <strong>${item.quantity * item.price}</strong>
                    </div>
                ))}
            </div>

            {/*  Summary */}
            <div className="order-card">
                <h3>Order Summary</h3>
                <p>Subtotal: ${order.subtotal}</p>
                <p>Shipping: ${order.shipping_fee}</p>
                <p>Discount: -${order.discount}</p>
                <h2>Total: ${order.total_price}</h2>
            </div>

            {/*  PayPal Section */}
            {!order.is_paid && (
                <div className="order-card">
                    <h3>Complete Payment</h3>
                    <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: order.total_price.toString(),
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then(() => {
                            markAsPaid();
                        });
                    }}
                    onError={(err) => {
                        console.error(err);
                        alert("Payment failed. Please try again.");
                    }}
                    onCancel={() => {
                        alert("Payment was cancelled.");
                    }}
                    />
                </div>
            )}

            {/* Cancel Order */}
            {!order.is_paid && !order.is_cancelled && (
                <button
                className="cancel-btn"
                onClick={async () => {
                    await fetch(`http://127.0.0.1:8000/api/orders/${id}/cancel/`, {
                    method: "PUT",
                    headers: { Authorization: `Bearer ${token}` },
                    });
                    window.location.reload();
                }}
                >
                    Cancel Order
                </button>
            )}

        </div>
    );
};

export default OrderDetail;
