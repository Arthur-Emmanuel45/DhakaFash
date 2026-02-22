import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './product.css'
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const Product = ({cat}) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/products/?category=${cat}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [cat]);

    if (!products) return (
        <LoaderSpinner />
    );

    return (
        <div className="all-products">
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <Link to={`/product/${product.id}`} className="product-wrap">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
    
                            <p className='product-name'>{product.name}</p>
                            <p className="category">
                                category. {product.category.name}
                            </p>
                            <p className="price">
                                ${product.price}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product