import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); 

    const userData = { name, email, password };

    try {
      const response = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        // Save user info to local storage
        localStorage.setItem("user-info", JSON.stringify(result));
        alert("Registration successful! Redirecting to login...");
        navigate("/login");
      } else {
        alert(result.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 via-green-400 to-green-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10">
          {/* Left Section: Image */}
          <div className="hidden lg:block lg:-ml-20">
            <img
              src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1735125089/nrxfm506xze5gfehpypu.png"
              className="h-80 lg:h-[600px] object-contain"
              alt="Register Illustration"
            />
          </div>

          {/* Right Section: Form */}
          <div className="w-full max-w-md bg-green-400 shadow-xl rounded-lg overflow-hidden p-6 lg:p-10">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
              Create a New Account
            </h2>
            <p className="text-lg text-gray-500 mb-8 text-center">
              Please Register
            </p>
            <form className="space-y-4" onSubmit={handleRegister}>
              {/* Full Name Input */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition duration-200"
              >
                Sign Up
              </button>
            </form>
            {/* Already have an account */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 font-bold">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
