import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

export default function Login() {
  const [error, setError] = useState("");
  const [isLogin,setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const initialFormData = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  // Clear formData on component mount and when switching modes
  useEffect(() => {
    setFormData(initialFormData);
    setError(""); // Clear error when switching between login and signup
  }, [isLogin]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Email validation
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      if (isLogin) {
        // **Login**
        const user = storedUsers.find(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );
        if (user) {
          // Set authToken only when login is successful
          localStorage.setItem(
            "authToken",
            JSON.stringify({ email: user.email })
          );
          navigate("/products");
        } else {
          throw new Error("Invalid login credentials or No user found");
        }
      } else {
        // **Signup**
        const userExists = storedUsers.some(
          (user) => user.email === formData.email
        );
        if (userExists) {
          throw new Error("A user with this email already exists");
        }
        const newUser = { ...formData };
        storedUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(storedUsers));
        alert("Account Created Successfully. Login to continue");
        setIsLogin(true)
      }
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-100 flex items-center justify-center bg-gray-50 overflow-hidden">
      <div className="w-full flex rounded-xl overflow-hidden shadow-xl">
        <div className="w-full md:w-full p-8 bg-white">
          <div className="mb-8">
            <div className="flex items-center mb-12">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              <span className="ml-2 font-semibold">Anywhere app</span>
            </div>
            <div className="text-sm text-gray-500 mb-1">START FOR FREE</div>
            <h1 className="text-3xl font-bold mb-2">
              {isLogin ? "Log in" : "Create new account"}
              <span className="text-blue-500">.</span>
            </h1>
            <p className="text-gray-500">
              {isLogin ? "Not a member yet?" : "Already a Member?"}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError(""); // Clear error when toggling login/signup
                }}
                className="text-blue-500 hover:underline ml-6 text-sm"
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="space-y-4"
          >
            {!isLogin && (
              <div className="flex space-x-4">
                <div className="flex-1">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
            )}

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                required
                autoComplete="off"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle type based on showPassword
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Toggle showPassword on click
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 bg-transparent border-none focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {loading
                ? "Processing..."
                : isLogin
                ? "Log in"
                : "Create account"}
            </button>
          </form>
        </div>
        <div className="md:block w-full relative overflow-hidden">
          <img
            src="/assetts/images/Bg.png"
            alt="Scenic mountain lake view"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
