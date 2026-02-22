import { useCart } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpster, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
    const { cartItems, updateQuantity, removeFromCart, cartCount } = useCart();

    let totalCartPrice  = 0;
    let totalPrice = 0;

    cartItems.map(item => (
        totalPrice = (item.price || 0) * (item.quantity || 1)
    ));
    totalCartPrice = totalCartPrice + totalPrice;


    return (
        <div>
            <h2 className="cart-header">Your Cart ({cartCount > 0 && <span className="badge">{cartCount}</span>})</h2>

            {cartItems.length === 0 && 
                <div className="cart-empty">
                    <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                    <span>Your cart is empty</span>
                </div>
            }

            <div className="cart-main-container">
                <div className="cart-main">     
                    {cartItems.map(item => (
                        <div className="cart-container" key={item.id}>
                            <img className="cart-image" src={item.image} alt={item.name} />

                            <div className="cart-details">
                                <p>{item.name}</p>
                                <p>Total: ${(item.price || 0) * (item.quantity || 1)}</p>
                                <button onClick={() => removeFromCart(item.id)}><FontAwesomeIcon icon={faDumpster} /> Remove</button>
                            </div>
                            

                            <div className="quantity-control product-quantity">
                                <button
                                    onClick={() =>
                                        updateQuantity(
                                            item.id,
                                            Math.max(1, item.quantity - 1)
                                        )
                                    }
                                >
                                    -
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                    onClick={() =>
                                        updateQuantity(
                                            item.id,
                                            item.quantity + 1
                                        )
                                    }
                                >
                                    +
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <h3>Cart Summary</h3>
                    {cartItems.length >= 1 && 
                        <p> Cart Total: {totalCartPrice}</p>
                    }

                    <Link to="/checkout">
                        <button disabled={cartItems.length === 0}>Proceed to Checkout</button>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default CartPage;