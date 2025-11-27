import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileLogo from "../assets/sidebar/profile.png";

function Login() {
  const navigate = useNavigate();
  const [slideDown, setSlideDown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSlideDown(true), 100);
    return () => clearTimeout(timer);
  }, []);

  function handleLogin() {
    navigate("/Dashboard");
  }

  return (
    <div
      className="relative flex items-center justify-center min-h-screen
        bg-gradient-to-br from-purple-100 to-white overflow-hidden px-4"
    >
      {/* 🌟 Floating Blobs */}
      <div className="absolute w-72 h-72 bg-purple-300/30 rounded-full top-[-10%] left-[-10%] mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute w-96 h-96 bg-pink-300/30 rounded-full bottom-[-20%] right-[-20%] mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>

      {/* 🔝 Sliding Welcome Text */}
      <div className="absolute top-8 w-full text-center">
        <h1
          className="text-purple-700 font-bold text-xl md:text-2xl"
          style={{ animation: "slideInTop 1s ease-out forwards" }}
        >
          Welcome to ALPHA SOLUTIONS
        </h1>
      </div>

      {/* Inline CSS for slide-in */}
      <style>
        {`
          @keyframes slideInTop {
            0% { transform: translateY(-40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>

      {/* 🔹 Login Card */}
      <div
        className={`
          relative w-full max-w-md p-12 rounded-3xl
          bg-white/70 backdrop-blur-lg border border-gray-200
          shadow-2xl text-center transition-all duration-700 ease-in-out
          ${
            slideDown
              ? "opacity-100 scale-100 blur-0 translate-y-0"
              : "opacity-0 scale-90 blur-sm translate-y-10"
          }
        `}
      >
        {/* 🔵 Centered Bouncing Logo */}
        <div
          className="
            w-24 h-24 mx-auto rounded-full bg-white
            shadow-xl shadow-purple-300/50 border border-gray-200
            flex items-center justify-center animate-bounce
          "
        >
          <img
            src={profileLogo}
            alt="logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mt-8 mb-8 text-gray-800">
          Admin Login
        </h2>

        {/* Username Input */}
        <input
          type="text"
          placeholder="Enter Username"
          className="
            w-full py-4 mb-6 px-4 rounded-lg bg-white border border-gray-300
            placeholder-gray-400 text-gray-800 shadow-md
            focus:outline-none focus:ring-2 focus:ring-purple-300
            transition-all duration-300
          "
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter Password"
          className="
            w-full py-4 mb-6 px-4 rounded-lg bg-white border border-gray-300
            placeholder-gray-400 text-gray-800 shadow-md
            focus:outline-none focus:ring-2 focus:ring-purple-300
            transition-all duration-300
          "
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="
            w-full py-3 rounded-lg font-semibold text-lg text-white
            bg-gradient-to-r from-purple-600 to-purple-700
            active:scale-95 active:from-purple-700 active:to-purple-800
            transition-all duration-300
            focus:outline-none focus:ring-4 focus:ring-purple-300
          "
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
