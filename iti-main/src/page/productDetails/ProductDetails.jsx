import React, { useEffect, useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart, FaRegStarHalfStroke, FaShare, FaHeart } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";
import "./productdetails.css";
import { TiShoppingCart } from "react-icons/ti";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import ProductDetailsLoading from "./ProductDetailsLoading";
import { CartContext } from "../../components/context/CartContext";
import toast from 'react-hot-toast';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

  const {
    cartItems = [],
    addToCart,
    addToFavorites,
    favorites = [],
    removeFromFavorites
  } = useContext(CartContext) || {};
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingRelatedProducts(false));
  }, [product?.category]);

  console.log(product);
  console.log(relatedProducts);

  if (loading)  return <ProductDetailsLoading />;
  if (!product) return <p>Product Not Found</p>;

  const isInCart = cartItems.some(i => i.id === product.id);
  const isInFav = favorites.some(i => i.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(
      <div className='toast-wrapper'>
        <img src={product.images[0]} alt="" className='toast-img'/>
        <div className="toast-content">
          <strong>{product.title}</strong> added to Cart
          <div>
            <button className='btn' onClick={() => navigate('/cart')}> View Cart</button>
          </div>
        </div>
      </div>,
      { duration: 3500 }
    );
  };

  const handleAddToFav = () => {
    if (isInFav) {
      removeFromFavorites(product.id);
      toast.error(`${product.title} Removed from favorites`);
    } else {
      addToFavorites(product);
      toast.success(`${product.title} added To favorites`);
    }
  };

  return (
   
    <div>
      <div className="item_details">
        <div className="container">
          <div className="imgs_item">
            <div className="big_img">
              <img id="big_img" src={product.images[0]} alt={product.title} />
            </div>

            <div className="sm_img">
              {product.images.map((img, index) => (
               <div className="img_div_sm">

                 <img
                  key={index}
                  src={img}
                  alt={product.title}
                  onClick={() => (document.getElementById("big_img").src = img)}
                />
               </div>
              ))}
            </div>
          </div>

          <div className="details_item">
            <h1 className="name">{product.title}</h1>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>

            <p className="price">$ {product.price}</p>

            <h5>
              Availability: <span>{product.availabilityStatus}</span>
            </h5>
            <h5>
              Brand: <span>{product.brand}</span>
            </h5>
            <p className="desc">{product.description}</p>
            <h5>
              <span>
                Hurry Up! Only {product.stock} products left in stock.
              </span>
            </h5>

            <button className={`btn ${isInCart ? 'in-cart' : ''}`} onClick={handleAddToCart}>
              {isInCart ? 'Added to cart' : 'Add to cart'} <TiShoppingCart />
            </button>

            <div className="icons">
              <span className={isInFav ? "in-fav" : ""} onClick={handleAddToFav} style={{ cursor: "pointer", color: isInFav ? "red" : "inherit" }}>
                {isInFav ? <FaHeart color="red" /> : <FaRegHeart />}
              </span>
              <span style={{ cursor: "pointer" }}>
                <FaShare />
              </span>
            </div>
          </div>
        </div>
      </div>


      {loadingRelatedProducts ? (
  <p>Loading...</p>
) : (
  <SlideProduct key={product.category} data={relatedProducts} title={product.category.replace("-", " ")} />
)}

    </div>
  );
}

export default ProductDetails;
