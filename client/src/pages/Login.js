import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill in all the details");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/api/v1/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        navigate("/Dashboard");
      } else {
        // Display an error message (customize this based on your API response)
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error("Error during login:", error.message);
      setErrorMessage("An unexpected error occurred");
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen py-2">
      <div className="min-w-1/2">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-center text-gray-800 text-2xl font-semibold uppercase">
            Login
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-600 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-red-600 pb-4 pt-0">{errorMessage}</div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-300"
              href="login"
            >
              Forgot Password?
            </a>
          </div>
          <hr className="mt-4 border-b-1 border-gray-400" />
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-blueGray-500 text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <div className="btn-wrapper text-center">
              <button
                className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img
                  alt="..."
                  className="w-5 mr-1"
                  src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                />
                Github
              </button>
              <button
                className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img
                  alt="..."
                  className="w-5 mr-1"
                  src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                />
                Google{" "}
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2 py-5">
            <h4 className="text-gray-800">Don't have an account</h4>
            <Link
              className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-300"
              to="/signup"
            >
              Signup now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
