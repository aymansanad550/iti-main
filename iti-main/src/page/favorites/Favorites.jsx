import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../components/context/CartContext'
import { FaTrashAlt, FaCartPlus } from "react-icons/fa";
import toast from 'react-hot-toast';
import "../cart/cart.css"
import "./favorites.css"

function Favorites() {
  const { favorites = [], removeFromFavorites, addToCart } = useContext(CartContext)

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.title} added to cart`);
  }

  const handleRemove = (id, title) => {
    removeFromFavorites(id);
    toast.error(`${title} removed from favorites`);
  }

  return (
    <div className='checkout favorites_page'>
      <div className="ordersummary">
        <h1>Your Favorites</h1>

        <div className="items">
          {favorites.length === 0 ? (
            <p>Your Favorites list is empty.</p>
          ) : (
            favorites.map((item, index) => (
              <div className="item_cart" key={item.id || index}>
                <div className="image_name">
                  <div className="img_item">
                    <img src={item.images?.[0]} alt={item.title} />
                  </div>

                  <div className="content">
                    <h4>{item.title}</h4>
                    <p className='price_item'>${item.price}</p>
                  </div>
                </div>

                <div className="actions">
                  <button onClick={() => handleAddToCart(item)} className='add_to_cart_btn' title="Add to Cart">
                    <FaCartPlus />
                  </button>
                  <button onClick={() => handleRemove(item.id, item.title)} className='delete_item' title="Remove">
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        
        {favorites.length > 0 && (
          <div className="bottom_summary">
            <div className="button_div">
              <Link to="/products"><button type='button'>Continue Shopping</button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Favorites;
