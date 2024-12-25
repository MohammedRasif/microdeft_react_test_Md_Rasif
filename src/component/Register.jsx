import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 via-green-400 to-green-500">
        <div className="lg:-ml-28 lg:-mt-16">
          <img
            src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1735125089/nrxfm506xze5gfehpypu.png"
            className="lg:h-[600px] "
            alt=""
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center w-11/12 max-w-md bg-green-400 shadow-xl rounded-lg overflow-hidden lg:py-20">
          {/* Right Section: Form */}
          <div className="w-full  p-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Create a New Account?J
            </h2>
            <p className="text-xl text-gray-500 mb-8">Please Register</p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <span
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-xl" />
                  ) : (
                    <FaEye className="text-xl" />
                  )}
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition duration-200"
              >
                Sign Up
              </button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-4">
              New Here ??
              <Link to="/login">
                <p className="text-blue-500 font-bold">Register</p>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
