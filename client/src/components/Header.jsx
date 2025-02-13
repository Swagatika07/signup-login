import React, { useContext } from "react";
import { assets } from "../assets/assets";
import App from "../App";
import { AppContent } from "../context/AppContext";

const Header = () => {
  const { userData } = useContext(AppContent);
  console.log(userData);
  return (
    <div className="flex flex-col items-center mt-20 px-4 text-center text-gray-800">
      <img
        src={assets.girl}
        alt="header"
        className="w-36 h-36 rounded-full mb-6"
      />
      <h1 className="text-2xl font-semibold mb-4">
        Hey {userData ? userData.name : "Developer"}
        <img src={assets.hand_wave} alt="" className="w-8 aspect-square" />
      </h1>
      <h2 className="text-3xl sm:text-5xl font-semibold mb-4">
        Welcome to our ecommerce app
      </h2>
      <p className="mb-8 max-w-md">
        Your one-stop destination for all your shopping needs. Discover a wide range of products from top brands, including the latest in fashion, electronics, home essentials, and more. 
      </p>
      <button className="border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all">
        Get Started
      </button>
    </div>
  );
};

export default Header;
