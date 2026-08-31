import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../components/context/CartContext';
import './checkout.css';

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    card: ''
  });
  const [success, setSuccess] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    clearCart();
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (success) {
    return (
      <div className="checkout_page success">
        <div className="container">
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your purchase, {formData.name}. You will be redirected to the home page shortly.</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout_page empty">
        <div className="container">
          <h2>Your cart is empty.</h2>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout_page">
      <div className="container">
        <h2>Checkout</h2>
        <div className="checkout_content">
          <form className="checkout_form" onSubmit={handleSubmit}>
            <div className="form_group">
              <label>Full Name</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="form_group">
              <label>Shipping Address</label>
              <textarea name="address" required value={formData.address} onChange={handleChange}></textarea>
            </div>
            <div className="form_group">
              <label>Credit Card Number</label>
              <input type="text" name="card" required value={formData.card} onChange={handleChange} placeholder="XXXX-XXXX-XXXX-XXXX" />
            </div>
            <button type="submit" className="submit_order_btn">Complete Purchase - ${total.toFixed(2)}</button>
          </form>
          
          <div className="checkout_summary">
            <h3>Order Summary</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <span>{item.title} x {item.quantity || 1}</span>
                  <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="total">
              <strong>Total:</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
