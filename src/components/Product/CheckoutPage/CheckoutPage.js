import { useEffect, useState, useCallback  } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../Context/CartContext";
import "./CheckoutPage.css";

const CheckoutPage = () => {
    const { cartItems } = useCart();
    const navigate = useNavigate();
    const [preview, setPreview] = useState(null);
    const [couponCode, setCouponCode] = useState("");
    const [couponStatus, setCouponStatus] = useState(null);

    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: "",
    });


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const previewOrder = useCallback(async () => {
        const token = localStorage.getItem("access");
        setLoading(true);

        const res = await fetch(
            "http://127.0.0.1:8000/api/orders/preview/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    items: cartItems.map(i => ({
                        product: i.id,
                        quantity: i.quantity,
                    })),
                    city,
                    coupon_code: couponCode,
                }),
            }
        );

        const data = await res.json();
        setPreview(data);

        setLoading(false);
    }, [cartItems, city, couponCode]);

    useEffect(() => {
        if (cartItems.length > 0 && city) {
            previewOrder();
        }
    }, [cartItems, city, previewOrder]);

    const handleSubmit = () => {
        navigate("/order-review", {
            state: {
                form,
                cartItems,
                city,
                pricing: {
                    subtotal: preview.subtotal,
                    shipping: preview.shipping_fee,
                    discount: preview.coupon_discount_amount,
                    finalTotal: preview.total_price,
                },
            },
        });
    };

    const applyCoupon = async () => {
        if (!couponCode) {
            setCouponStatus({ type: "error", message: "Enter coupon code" });
            return;
        }

        try {
            const res = await fetch(
                "http://127.0.0.1:8000/api/shop/validate/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ code: couponCode }),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                setCouponStatus({
                    type: "error",
                    message: data.error,
                });
                return;
            }

            setCouponStatus({
                type: "success",
                message: data.success,
            });

            previewOrder();

        } catch {
            setCouponStatus({
                type: "error",
                message: "Server error",
            });
        }
    };

    return (
        <div className="checkout-main-container">
            <h2>Checkout</h2>
            <div className="checkout-container">
                <div className="form-container">
                    <form>
                        <input name="full_name" placeholder="Full Name" onChange={handleChange} required />
                        <input name="email" placeholder="Email" onChange={handleChange} required />
                        <input name="phone" placeholder="Phone" onChange={handleChange} required/>
                        <textarea name="address" placeholder="Address" onChange={handleChange} required/>
                    </form>

                    <select
                        value={city}
                        onChange={(e) => {
                            setCity(e.target.value);
                        }}
                    >
                        <option value="">Select City</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>

                    <div className="coupon-box">
                        <input
                            type="text"
                            placeholder="Enter coupon code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button onClick={applyCoupon}>Apply Coupon</button>
                        {couponStatus && (
                            <p
                                style={{
                                    color: couponStatus.type === "error" ? "red" : "green",
                                }}
                            >
                                {couponStatus.message}
                            </p>
                        )}
                    </div>
                    <button className="checkout-button" onClick={handleSubmit}>Continue Checkout</button> 
                </div>
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    {loading && <p className="summary-total">Calculating totals...</p>}

                    {preview?.items && (
                        <div>
                            {preview.items.map(item => (
                                <p key={item.product_id}>
                                    {item.name} x {item.quantity}
                                </p>
                            ))}

                            <p>Subtotal: ${preview.subtotal}</p>
                            <p>Shipping: ${preview.shipping_fee}</p>
                            <p>Discount: -${preview.coupon_discount_amount}</p>
                            <h2>Total: ${preview.total_price}</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;