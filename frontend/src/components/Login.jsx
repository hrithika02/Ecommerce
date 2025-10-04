// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import auth from "../config.jsx";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import decor from "../assets/decor.jpg";
import home from "../assets/home.png";
import google from "../assets/google.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const login = async () => {
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      console.log("Logged in user:", userCredential.user);
      navigate("/home");
    } catch (err) {
      if (err.code === "auth/user-not-found") setError("User does not exist. Please sign up.");
      else if (err.code === "auth/wrong-password") setError("Incorrect password.");
      else setError(err.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google login:", result.user);
      alert(`Welcome back, ${result.user.displayName}`);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex wrap items-center justify-center bg-gray-100">
      <div className="flex w-3/4 h-[80vh] shadow-lg rounded-lg overflow-hidden">
        {/* Left Panel */}
        <div className="md:basis-2/3 flex flex-col justify-center px-8 bg-white gap-10 basis-full">
          <div className="max-w-md w-full mx-auto gap-4 flex flex-col">
            <div className="flex items-center gap-2">
            <img src={home} className="h-10 w-10"></img>
            <p className="text-3xl font-bold">Casa&Aura</p>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Welcome Back - to your store</h2>
            <p className="text-gray-600 mb-2">Sign in with your email or Google</p>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />

            {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

            <button
              onClick={login}
              className="w-full py-3 mb-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Sign In
            </button>

            <button
              onClick={signInWithGoogle}
              className="w-full py-3 mb-4 bg-white text-black border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
              <img
                src={google}
                alt="Google Logo"
                className="w-5 h-5"
              />
              Sign In with Google
            </button>

            <p className="text-center text-gray-600">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-black font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="basis-1/3 bg-[#FEF6EB] md:flex flex-col justify-center items-center p-12 hidden">
          <h2 className="text-4xl font-bold mb-4">Explore. More.</h2>
          <p className="text-gray-700 mb-6 text-center">
            Discover the best home decor items at unbeatable prices.
          </p>
          <img
            src={decor}
            alt="Home Decor"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
