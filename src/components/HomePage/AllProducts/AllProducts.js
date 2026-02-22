import React, {useState, useEffect} from 'react';
import '../../Product/product.css';
import { fetchProducts } from '../../../Api/apiService';
import { Link } from 'react-router-dom';
import LoaderSpinner from '../../LoaderSpinner/LoaderSpinner';

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();


    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(Array.isArray(data) ? data : data.results || []);
            } catch (err) {
                setError("Failed to fetch products");
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    if (loading) {
        return (
            <LoaderSpinner />
        );
    }
       if (error) {
        return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
    }
  return (
    
    <div className="all-products">
        <div className="product-grid">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <Link to={`/product/${product.id}`}>
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
                    {console.log(product.image)}
                </div>
            ))}
        </div>
    </div>
  )
}

export default AllProducts