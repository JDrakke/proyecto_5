import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Product from './pages/Product';
import ProductsList from './pages/ProductsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </Router>
  );
}

export default App;
