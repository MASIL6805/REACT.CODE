import React from 'react'

const Login = ({ openSiginUp }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Remember + Forget */}
          <div className="flex items-center justify-between text-sm mb-3">
            <label className="flex items-center space-x-2 text-gray-600">
              <input
                type="checkbox"
                className="accent-blue-600 w-4 h-4 rounded"
              />
              <span>Remember me</span>
            </label>
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Signup Section */}
        <div className="text-center mt-6 text-gray-600">
          <span>Don't have an account? </span>
          <button
            className="text-blue-600 font-semibold hover:underline"
            onClick={openSiginUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login