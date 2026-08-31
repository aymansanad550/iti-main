import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SlideProductLoading from '../../components/slideProducts/SlideProductLoading';
import SlideProduct from '../../components/slideProducts/SlideProduct';
import './products.css';

function Products() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url = slug 
          ? `https://dummyjson.com/products/category/${slug}`
          : 'https://dummyjson.com/products?limit=100'; // fetch more products if all
        
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug]);

  const title = slug ? slug.replace("-", " ") : "All Products";

  return (
    <div className="products_page">
      <div className="container">
        {loading ? (
          <SlideProductLoading />
        ) : products.length > 0 ? (
          <SlideProduct data={products} title={title} />
        ) : (
          <p className="no_results">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
