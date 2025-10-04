import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../config.jsx";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import decor from "../assets/decor.jpg";
import google from "../assets/google.png";
import home from "../assets/home.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePassChange = (e) => setPass(e.target.value);

  const signup = async () => {
    setError("");
    if (!email || !pass) return setError("Email and password are required.");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      console.log("User created:", userCredential.user);
      alert("Signup successful! You can login now.");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google user:", result.user);
      alert(`Welcome, ${result.user.displayName}`);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-3/4 h-[80vh] shadow-lg rounded-lg overflow-hidden">
        {/* Left Panel */}
        <div className=" basis-full md:basis-2/3 flex flex-col justify-center px-12 bg-white gap-8">
          <div className="max-w-md w-full mx-auto">
            <div className="flex items-center gap-2 mb-4">
                        <img src={home} className="h-10 w-10"></img>
                        <p className="text-3xl font-bold">Casa&Aura</p>
                        </div>
            <h2 className="text-2xl font-semibold mb-4">Create Account - to explore more</h2>
            <p className="text-gray-600 mb-6">Sign up with your email or Google</p>

            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <input
              placeholder="Password"
              type="password"
              value={pass}
              onChange={handlePassChange}
              className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <button onClick={signup} className="w-full py-3 mb-4 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Sign Up
            </button>

            <button
              onClick={signUpWithGoogle}
              className="w-full py-3 mb-4 bg-white text-black border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
              <img
                src={google}
                alt="Google Logo"
                className="w-5 h-5"
              />
              Sign Up with Google
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <span onClick={() => navigate("/")} className="text-black font-medium hover:underline cursor-pointer">
                Login
              </span>
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="basis-1/3 bg-[#FEF6EB] md:flex flex-col justify-center items-center p-12 hidden">
          <h2 className="text-3xl font-bold mb-4">Start Decorating!</h2>
          <p className="text-gray-700 mb-6 text-center">
            Join us today and discover premium home decor items that fit your style.
          </p>
          <img src={decor} alt="Home Decor" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
