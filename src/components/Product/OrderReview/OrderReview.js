import { useLocation, useNavigate } from "react-router-dom";

const OrderReview = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) return <p>Invalid access</p>;

    const { form, cartItems, pricing } = state;
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
                    quantity: i.qty,
                    price: i.price,
                })),
                subtotal,
                shipping_fee: shipping,
                discount,                                                                                    
                total_price: finalTotal,
                city: form.city,
                address: form.address,
            }),
        });

        const data = await res.json();
        navigate(`/order-success/${data.order_id}`);
    };

    return (
        <div>
            <h2>Review Order</h2>

            {cartItems.map(i => (
                <p key={i.id}>{i.name} x {i.quantity}</p>
            ))}

            <p>{form.address}</p>
            <p>Total: ${finalTotal}</p>
            <button onClick={placeOrder}>Place Order</button>
        </div>
    );
};

export default OrderReview;
