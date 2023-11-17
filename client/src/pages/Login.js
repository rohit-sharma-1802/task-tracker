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
      setErrorMessage("Please fill all the details");
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
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center min-h-screen py-2">
      <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center text-white text-2xl font-semibold uppercase">
          Login
        </h1>
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
        <div className="text-[#f5d2d2] pb-4 pt-0">{errorMessage}</div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-300"
            href="login"
          >
            Forgot Password?
          </a>
        </div>
        <div className="space-y-4 mt-8">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center gap-2 justify-center shadow-md"
            type="button"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1156_824)">
                <path
                  d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z"
                  fill="#34A853"
                ></path>
                <path
                  d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z"
                  fill="#FBBC04"
                ></path>
                <path
                  d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z"
                  fill="#EA4335"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1156_824">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.5)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <span>Sign in With Google</span>
          </button>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center gap-2 justify-center shadow-md"
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.578 0-.286-.01-1.04-.015-2.04-3.312.72-4.003-1.61-4.003-1.61-.542-1.37-1.324-1.74-1.324-1.74-1.083-.743.082-.727.082-.727 1.197.085 1.827 1.227 1.827 1.227 1.065 1.826 2.794 1.297 3.48.992.108-.773.415-1.297.754-1.597-2.65-.302-5.42-1.324-5.42-5.89 0-1.302.465-2.367 1.227-3.207-.123-.303-.532-1.52.117-3.17 0 0 1.005-.322 3.3 1.23.957-.267 1.98-.4 3-.405 1.02.005 2.043.138 3 .405 2.293-1.552 3.297-1.23 3.297-1.23.65 1.65.24 2.867.117 3.17.765.84 1.225 1.905 1.225 3.207 0 4.578-2.775 5.584-5.432 5.878.428.367.81 1.095.81 2.207 0 1.594-.015 2.874-.015 3.27 0 .32.192.694.8.577C20.562 21.798 24 16.303 24 12c0-6.63-5.373-12-12-12z"
                fill="#000000"
              />
            </svg>

            <span>Sign in With Gihub</span>
          </button>
        </div>
        <div className="flex items-center space-x-2 py-5">
          <h4 className="text-white">Don't have account</h4>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-300"
            to="/signup"
          >
            signup now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
