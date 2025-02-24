import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    if (!email || !password) {
      setError('Both fields are required!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      if (response.data.success) {
        navigate('/main');
        sessionStorage.setItem("token", response.data.token);
      } else {
        setError(response.data.message || 'Login failed!');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">Welcome Back!</h1>
        <p className="text-sm text-center text-gray-500 mb-4">Please enter your credentials</p>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </button>
          </div>

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Remember me</span>
            </label>
            <button className="text-sm text-blue-600">Forgot password?</button>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Log In
          </button>
        </form>

        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">Don't have an account? </span>
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
