import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/signup", {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        navigate("/Dashboard");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.log("Something went wrong" + error.message);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center min-h-screen py-2">
      <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center text-white text-2xl font-semibold uppercase">
          Signup
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
            id="name"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-[#fff]"> {errorMessage}</div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignup}
          >
            Create Account
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-300"
            to="/login"
          >
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;