import React, { useEffect, useState, useContext } from 'react'
import { IoMdMenu } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold, PiSignOutBold } from "react-icons/pi";
import { FaUserPlus, FaUser } from "react-icons/fa6";
import { AuthContext } from './context/AuthContext';


const NavLinks = [
  {title: "Home" , link : "/"},
  { title: "About", link: "/about" },
  { title: "All Products", link: "/products" },
  { title: "Contact", link: "/contact" },
]

function BtmHeader() {

  const location = useLocation()
  const [categories, setCategories] = useState([]);

  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    setIsCategoryOpen(false)
  },[location])

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
    .then((res) => res.json())
    .then((data) => setCategories(data))
  }, [])

  

  return (
    <div className='btm_header'>
      <div className="container">
        <nav className="nav">


          <div className="category_nav">
            <div className="category_btn" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
            <IoMdMenu />
            <p>Browse Category</p>
            <MdOutlineArrowDropDown />
            </div>

            <div className={`category_nav_list ${isCategoryOpen ? "active" : ""}`} >
                {categories.map((category) => (
                  <Link key={category.slug} to={`/category/${category.slug}`}>{category.name}</Link>
                ))}
            </div>

          </div>


          <div className="nav_links">

            {NavLinks.map((item) => (

             <li key={item.link} className={location.pathname === item.link ? "active" : ""}><Link to={item.link}>{item.title}</Link></li>

            ))}
          </div>


        </nav>

        <div className="sign_regs_icon">
          {user ? (
            <>
              <div className="user_greeting">
                <FaUser style={{marginRight: '8px', color: 'var(--main_color)'}}/>
                <span>Hi, {user.name.split(' ')[0]}</span>
              </div>
              <button onClick={logout} className="logout_btn" style={{background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center'}} title="Logout">
                <PiSignOutBold style={{fontSize: '22px'}}/>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" title="Login"><PiSignInBold /></Link>
              <Link to="/register" title="Register"><FaUserPlus /></Link>
            </>
          )}
        </div>
      </div>
      
    </div>
  )
}

export default BtmHeader