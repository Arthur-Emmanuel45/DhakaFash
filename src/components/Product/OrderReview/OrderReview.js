import { useLocation, useNavigate } from "react-router-dom";
import "./OrderReview.css";

const OrderReview = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) return <p>Invalid access</p>;

    const { form, city, cartItems, pricing } = state;
    const { subtotal, shipping, discount, finalTotal } = pricing;
    const token = localStorage.getItem("access");

    const placeOrder = async () => {
        const res = await fetch("http://127.0.0.1:8000/api/orders/create/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                items: cartItems.map(i => ({
                    product: i.id,
                    quantity: i.quantity,
                    price: i.price,
                })),
                subtotal,
                shipping_fee: shipping,
                discount,                                                                                    
                total_price: finalTotal,
                city: city,
                address: form.address,
            }),
        });

        const data = await res.json();
        if (!res.ok) {
            console.log(data);
            alert(data.error || "Order failed");
            return;
        }
        navigate(`/order-success/${data.order_id}`);
    };

    return (
        <div className="review-main-container">
            <div className="review-container">
                <h2>Review Order</h2>
                {cartItems.map(i => (
                    <p className="review-items" key={i.id}>{i.name} x {i.quantity}</p>
                ))}

                <p>{form.address}</p>
                <p>{city}</p>
                <p className="final-total">Total: ${finalTotal}</p>
                <button onClick={placeOrder}>Place Order</button>
            </div>
        </div>
    );
};

export default OrderReview;
