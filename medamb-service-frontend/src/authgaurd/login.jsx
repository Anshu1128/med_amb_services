import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/login', formData);
            setMessage('Login successful');
            navigate('/home')
            console.log(res.data);
        } catch (err) {
            setMessage('Invalid credentials');
            console.log(err);
        }
    };


    return (
        <div className="container bg-info-subtle w-50 border-1-dark-subtle d-lg-flex">
            <div className="container mt-5 p-2">
                <h2 className="mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-warning px-5">Submit</button>
                </form>
                <p>{message}</p>
                <p className="mt-3">
                    Haven't an account? <Link to="/signup">Create</Link>
                </p>
            </div>
        </div>
    )
}

export default Login