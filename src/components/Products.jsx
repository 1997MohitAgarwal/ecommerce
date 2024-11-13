import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Component() {
  const [cart, setCart] = useState([]);
  const newArrivals = [
    { id: 1, name: "Indoor Plant", price: 24.99, image: "/assetts/images/Bg.png" },
    { id: 2, name: "Succulent", price:19.99, image: "/assetts/images/Bg.png" },
    { id: 3, name: "Cactus", price: 29.99, image: "/assetts/images/Bg.png" },
    { id: 4, name: "Snake Plant", price: 19.99, image: "/assetts/images/Bg.png" },
  ];

  const organicStore = [
    { id: 5, name: "Organic Plant", price: 29.99, image: "/assetts/images/Bg.png" },
    { id: 6, name: "Herbs", price: 14.99, image: "/assetts/images/Bg.png" },
    { id: 7, name: "Flowering Plant", price: 34.99, image: "/assetts/images/Bg.png" },
  ];

  const popularPlants = [
    { id: 8, name: "Ficus", price: 29.99, image: "/assetts/images/Bg.png" },
    { id: 9, name: "Aloe Vera", price: 18.99, image: "/assetts/images/Bg.png" },
    { id: 10, name: "Peace Lily", price: 25.99, image: "/assetts/images/Bg.png" },
    { id: 11, name: "Spider Plant", price: 19.99, image: "/assetts/images/Bg.png" },
  ];

  // Handle adding items to cart
  const handleAddToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);


  return (
    <>
      <Header cart={cart} />
      <div className="min-h-screen bg-[#f8faf8] mt-20">
        {/* Hero Section */}
        <section className="relative bg-[#edf3ed]">
          <div className="mx-auto px-4 grid md:grid-cols-2 h-[600px] overflow-hidden">
            <div className="mt-40 px-6">
              <h1 className="text-5xl font-bold text-gray-800">
                Beautify Your Home With Plants
              </h1>
              <p className="text-gray-600 mb-8">
                Transform your living space with our collection of beautiful
                indoor plants
              </p>
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
                Shop Now
              </button>
              <div className="mt-8 flex items-center space-x-4 mb-4">
                <div className="bg-white rounded-full p-2">
                  <span className="text-emerald-600">🌿</span>
                </div>
                <span className="text-sm text-gray-600">
                  100% Organic Plants
                </span>
              </div>
            </div>

            <div className="flex">
              <img
                src="/assetts/images/Bg.png"
                alt="Featured plant"
                className="rounded-lg shadow-xl transform rotate-[345deg] h-64 w-64 mt-64 ml-10"
              />
              <img
                src="/assetts/images/Bg.png"
                alt="Featured plant"
                className="rounded-lg shadow-xl transform rotate-[345deg] h-[900px]"
              />
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              New Arrivals
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {newArrivals.map((item) => (
                <div key={item} className="bg-emerald-100 p-4 rounded-lg shadow-sm">
                  <img
                    src="/assetts/images/Bg.png"
                    alt={`Plant ${item}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-emerald-600 font-medium">$ {item.price}</p>
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image:item.image,
                      })
                    }
                    className="bg-emerald-600 text-sm text-white px-6 py-2 rounded-full mt-4 hover:bg-emerald-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collection Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto pl-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  We've Unlimited Plant Collection
                </h2>
                <p className="text-gray-600 mb-8">
                  Discover our vast selection of indoor plants perfect for any
                  space
                </p>
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
                  View Collection
                </button>
                <img
                  src="/assetts/images/Bg.png"
                  alt="Plant collection"
                  className="rounded-lg shadow-xl w-46 h-64 pr-8 pb-8 border-r border-b border-gray-700 bg-gray-200 mt-6"
                />
              </div>
              <div className="w-[500px] flex flex-col justify-center items-center">
              <p className=" w-80 text-center text-xl font-bold">Beautiful</p>
              <p className=" w-80 text-center text-xl font-bold">Indoor Plants</p>
                <img
                  src="/assetts/images/Bg.png"
                  alt="Plant collection"
                  className="rounded-lg shadow-xl h-96 w-80"
                />
                <p className=" mt-6 w-80 text-center text-3xl font-bold">ORGANIE</p>
                <p className=" w-80 text-center text-xl font-bold">STORE</p>
                <button className="bg-emerald-600 mt-4 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
                Shop Now
              </button>
              </div>
            </div>
          </div>
        </section>

        {/* Organic Store */}
        <section className="py-16 bg-[#edf3ed]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ORGANIC STORE
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              All our plants are grown using organic methods to ensure healthy
              and sustainable growth
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {organicStore.map((item) => (
                <div key={item} className="bg-emerald-100 p-6 rounded-lg shadow-sm">
                  <img
                    src="/assetts/images/Bg.png"
                    alt={`Organic plant ${item}`}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-emerald-600 font-medium">$ {item.price}</p>
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image:item.image
                      })
                    }
                    className="bg-emerald-600 text-sm text-white px-6 py-2 rounded-full mt-4 hover:bg-emerald-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Plants */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Most Popular Plants
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {popularPlants.map((item) => (
                <div key={item} className="bg-emerald-100 p-4 rounded-lg shadow-sm">
                  <img
                    src="/assetts/images/Bg.png"
                    alt={`Popular plant ${item}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                 <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-emerald-600 font-medium">$ {item.price}</p>
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id:item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image
                      })
                    }
                    className="bg-emerald-600 text-sm text-white px-6 py-2 rounded-full mt-4 hover:bg-emerald-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              #instagramplant
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item}>
                  <img
                    src="/assetts/images/Bg.png"
                    alt={`Instagram post ${item}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Buy */}
        <section className="py-16 bg-[#edf3ed]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Where To Buy Plants Online
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Choose Your Plant",
                "Place Your Order",
                "Get Plants Delivered",
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{step}</h3>
                    <p className="text-gray-600">
                      Simple and easy process to get your favorite plants
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}


