import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const SearchResults = () => {
    const [products, setProducts] = useState([]);
    const [params] = useSearchParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/products/?search=${params.get("q")}`)
            .then(res => res.json())
            .then(setProducts);
    }, [params]);

    return (
        <div>
            <h2>Search Results</h2>

            {products.map(p => (
            <Link key={p.id} to={`/product/${p.id}`}>
                <img src={p.image} alt={p.name} width="120" />
                <p>{p.name}</p>
            </Link>
            ))}
        </div>
    );
};

export default SearchResults;

