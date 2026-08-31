import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SlideProductLoading from '../../components/slideProducts/SlideProductLoading';
import SlideProduct from '../../components/slideProducts/SlideProduct';
import './search.css';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching search results", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    } else {
      setProducts([]);
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="search_page">
      <div className="container">
        <h2 className="search_title">Search Results for "{query}"</h2>
        {loading ? (
          <SlideProductLoading />
        ) : products.length > 0 ? (
          <SlideProduct data={products} title="" />
        ) : (
          <p className="no_results">No products found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
