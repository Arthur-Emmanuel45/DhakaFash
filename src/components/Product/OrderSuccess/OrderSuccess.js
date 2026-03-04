import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";
import './OrderSuccess.css';

const OrderSuccess = () => {
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

    return (
        <div className="order-success-container">
            <h1> Order Placed Successful!</h1>
            <p>Thank you for your purchase.</p>
            <p>Your order ID: #{id}</p>

            {/*  Payment Section */}
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

            {/* Cancel Order */}
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
        </div>
    );
}

export default OrderSuccess;
