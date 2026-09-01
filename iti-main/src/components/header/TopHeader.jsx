import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5"
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css";
import { CartContext } from "../context/CartContext";

function TopHeader() {
  const { cartItems = [], favorites = [] } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <div className='top_header'>
      <div className='container'>
        <Link className='logo' to="/">
          <TiShoppingCart className="logo_icon" />
          <span className="logo_text">ABY</span>
        </Link>

        <form onSubmit={handleSearch} className='search_box'>
          <input 
            type="text" 
            placeholder='Search here...' 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type='submit'><IoSearchOutline /></button>
        </form>

        <div className="header_icons">
          <Link className="icon" to="/favorites">
            <FaRegHeart />
            <span className="count">{favorites.length}</span>
          </Link>

          <Link className="icon" to="/cart">
            <TiShoppingCart />
            <span className="count">{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopHeader