import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/context/AuthContext';
import './auth.css';

function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = register(formData.name, formData.email, formData.password);
    if (success) {
      navigate('/');
    } else {
      setError('User with this email already exists');
    }
  };

  return (
    <div className="auth_page">
      <div className="auth_container">
        <h2>Register</h2>
        {error && <p className="error_msg">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label>Full Name</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="form_group">
            <label>Email Address</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="form_group">
            <label>Password</label>
            <input type="password" name="password" required value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit" className="auth_btn">Register</button>
        </form>
        <p className="auth_redirect">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
