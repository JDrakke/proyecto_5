import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products data", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map(product => (
          <div key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
