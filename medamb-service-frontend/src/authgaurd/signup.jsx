import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/signup', formData);
      setMessage('Signup successful');
      navigate('/login')
      console.log(res.data);
    } catch (err) {
      setMessage('Email already exists');
      console.log(err);
    }
  };

  return (
    <div className="container justify-content-center bg-info-subtle w-50 border-1-dark-subtle d-lg-flex">
    <div className="container mt-5 p-2">
       <center> <h2 className="mb-4">Sign UP</h2></center>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">

                <input
                    type="text"
                    className="form-control"
                    id="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />
            </div>
            <div className="mb-3">

                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className="mb-3">

                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                />
            </div>
            <button type="submit" className="btn btn-warning btn-lg px-5 object-fit-contain"><strong>SIGN UP</strong></button>
        </form>
        <p>{message}</p>
    </div>
</div>
  )
}

export default signup