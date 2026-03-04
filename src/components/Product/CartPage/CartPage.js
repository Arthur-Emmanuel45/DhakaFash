import { useCart } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpster, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
    const { cartItems, updateQuantity, removeFromCart, cartCount } = useCart();
    const totalCartPrice = cartItems.reduce((total, item) => {

        return total + (item.price || 0) * (item.quantity || 1);
    }, 0);


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
                        <div className="cart-container" key={item.cartKey}>
                            <img className="cart-image" src={item.image} alt={item.name} />

                            <div className="cart-details">
                                <p>{item.name}</p>
                                <p>{item.total_stock} left</p>
                                {item.size && <p>Size: {item.size}</p>}
                                <p> ${(item.price || 0) * (item.quantity || 1)}</p>
                                <button onClick={() => removeFromCart(item.cartKey)}><FontAwesomeIcon icon={faDumpster} /> Remove</button>
                            </div>
                            

                            <div className="quantity-control product-quantity">
                                <button
                                    onClick={() =>
                                        updateQuantity(
                                            item.cartKey,
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
                                            item.cartKey,
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
                        <p> Cart Total: {totalCartPrice.toFixed(2)}</p>
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