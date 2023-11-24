import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie"; // Import the js-cookie library

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Check if user_name and user_email cookies are not set
    const userName = Cookies.get("user_name");
    const userEmail = Cookies.get("user_email");

    if (userName || userEmail) {
      // Redirect to the login page if cookies are not set
      navigate("/dashboard");
    }
  }, [navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        // Store user data in cookies
        Cookies.set("user_email", email);
        Cookies.set("user_name", response.data.user.name);

        navigate("/Dashboard");
      } else {
        // Handle unexpected status code
        setErrorMessage("An unexpected error occurred");
      }
    } catch (error) {
      // Handle errors that occurred during the API call
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setErrorMessage(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        setErrorMessage("No response from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setErrorMessage("An unexpected error occurred");
      }
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
                setEmail(e.target.value.toLowerCase());
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
                className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
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
