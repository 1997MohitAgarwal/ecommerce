import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Handle removing items from cart
  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <Header cart={cart} />
      <div className="w-screen bg-[#f8faf8]">
        <section className="w-full px-4 py-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Cart Items</h2>

            {/* Check if cart is empty */}
            {cart.length === 0 ? (
              <p className="text-lg text-gray-600">Your cart is empty.</p>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-green-600 font-medium">
                          $ {item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <FaTrashAlt size={20} />
                    </button>
                  </div>
                ))}
                <div className="flex justify-between mt-8">
                  <p className="text-lg font-semibold text-gray-800">
                    Total: ${totalPrice.toFixed(2)}
                  </p>
                  <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
