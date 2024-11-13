import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Header({ cart }) {
  const location = useLocation(); // Get current location
  const navigate = useNavigate()

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-green-600 font-semibold' // Active tab style
      : 'text-gray-600 hover:text-green-600'; // Inactive tab style
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove authToken on logout
    navigate("/"); // Redirect to login page
  };

  return (
    <header className="fixed top-0 z-50 bg-white/80 w-screen backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-800">Plant</span>
          <span className="text-green-600 text-2xl">🌱</span>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/products" className={getLinkClass('/products')}>
            Home
          </Link>
          <Link to="/about" className={getLinkClass('/about')}>
            About
          </Link>
          <Link to="/contact" className={getLinkClass('/contact')}>
            Contact
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
        {/* Cart Icon */}
         {(location.pathname=="/products" || location.pathname=="/cart") ?
         <div className="flex items-center">
          <Link to="/cart" className="relative text-gray-600 hover:text-green-600">
            <FaShoppingCart size={30} />
            {cart?.length > 0 && (
              <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-600 text-white text-xs font-bold rounded-full text-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>:<div></div>}
      </nav>
    </header>
  );
}
