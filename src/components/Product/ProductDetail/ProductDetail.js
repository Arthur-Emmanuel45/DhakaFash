import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../../Context/CartContext";
import { useAuth } from "../../../Context/AuthContext";
import Ratings from "../Ratings/Ratings";
import "./ProductDetails.css";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1)
    const [reviews, setReviews]  = useState([]);
    const [rating, setRating] = useState();
    const [comment, setComment] = useState();
    const [selectSize, setSelectedSize] = useState();

    const { addToCart } = useCart();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/products/${id}/`)
            .then(res => res.json())
            .then(data => setProduct(data));

        fetch(`http://127.0.0.1:8000/api/products/${id}/reviews/`)
            .then(res => res.json())
            .then(setReviews);
    }, [id]);

    const submitReview = async (e) => {
        e.preventDefault();

        const response = await fetch(`/api/products/${id}/reviews/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
            body: JSON.stringify({
                rating,
                comment,
            }),
        });
        
        if (response.ok) {
            const newReview = await response.json();
            setReviews(prev => [...prev, newReview]);
            setRating("");
            setComment("");
        } else {
            alert("Failed to submit review");
        }
    };

    if (!product) return (
        <LoaderSpinner />
    )

    return (
        <div className="product-container">
            <h2>Product Details</h2>
            <div className="product-details-container">
                <div className="product-details-image">
                    <img className="product-main-image" src={product.image} alt={product.name}></img>
                    <div className="image-gallary">
                        {product.images.map(img => (
                            <img key={img.id} src={img.images} alt={img.alt_text} />
                        ))}
                    </div>
                </div>
                <div className="product-details">
                    <h3>{product.name}</h3>
                    <p className="product-details-price">$ {product.price}</p>
                    <div className="stock-size-container">
                        <p>{product.total_stock} in Stock</p>
                        <p>Please select your size</p>
                        {product.sizes.map(size => (
                            <div className="stock-size">
                                <button
                                    className="stock-size-button"
                                    key={size.id}
                                    disabled={size.stock === 0}
                                    onClick={() => {
                                        setSelectedSize(size.size);
                                        // {style={backgroundColor: "red"}}
                                    }}
                                >
                                    {size.size} : {size.stock} in stock
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    <p>{selectSize}</p>

                    <div className="product-quantity">
                        <span>Quantity: </span>
                        <button onClick={() => setQty(prevQty => Math.max(1, prevQty - 1))}>-</button>
                        <span>{qty}</span>
                        <button onClick={() => setQty(prevQty => prevQty + 1)}>+</button>
                    </div>

                    <button
                        className="add-to-cart"
                        disabled={product.stock === 0}
                        onClick={() => addToCart(product, qty)}
                    >
                        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                    </button>

                </div>
                <div className="product-description-container">
                    <h3>Product Description</h3>
                    <p className="product-description">{product.description}</p>
                </div>
            </div>

            {reviews.map((review) => (
                <div key={review.id} className="review">
                    <strong>{review.user_name}</strong>
                    <Ratings value={review.rating} />
                    <p>{review.comment}</p>
                </div>
            ))}


            {user && (
                <form onSubmit={submitReview}>
                    <select value={rating} onChange={e => setRating(e.target.value)}>
                        {[1,2,3,4,5].map(n => (
                        <option key={n} value={n}>{n}</option>
                        ))}
                    </select>

                    <textarea
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />

                    <button type="submit">Submit Review</button>
                </form>
            )}
            
            <div>
                <h3>Customer Feedback</h3>
                <div>
                    <h4>Ratings (Total number of customer ratings)</h4>
                    <p>total overall rating / 5</p>
                    <p> 5 start rating: number of 5 star rating</p>
                    <p> 4 start rating: number of 4 star rating</p>
                    <p> 3 start rating: number of 3 star rating</p>
                    <p> 2 start rating: number of 2 star rating</p>
                    <p> 1 start rating: number of 1 star rating</p>
                </div>
                <div>
                    <h4>Customer comment</h4>
                    <p>customer comment goes here</p>
                </div>
                
            </div>            
            
            

        </div>
    );
};

export default ProductDetail;
