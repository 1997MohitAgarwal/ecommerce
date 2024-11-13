import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Products from './components/Products';
import Cart from './components/Cart';
import About from './components/About';
import Contact from "./components/Contact";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route
        path="/products"
        element={<Products />}
      />
      <Route
        path="/cart"
        element={<Cart />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
    </Routes>
  );
}
