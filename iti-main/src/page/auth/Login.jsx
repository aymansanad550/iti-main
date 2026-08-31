import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/context/AuthContext';
import './auth.css';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(formData.email, formData.password);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth_page">
      <div className="auth_container">
        <h2>Login</h2>
        {error && <p className="error_msg">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label>Email Address</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="form_group">
            <label>Password</label>
            <input type="password" name="password" required value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit" className="auth_btn">Login</button>
        </form>
        <p className="auth_redirect">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
