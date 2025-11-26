import React from 'react'

const Register = ({ openLogin }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

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

          {/* Terms checkbox */}
          <div className="flex items-center text-sm mb-3">
            <input
              type="checkbox"
              className="accent-blue-600 w-4 h-4 rounded mr-2"
            />
            <span className="text-gray-600">
              I agree to the{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Login link */}
        <div className="text-center mt-6 text-gray-600">
          <span>Already have an account? </span>
          <button
            className="text-blue-600 font-semibold hover:underline"
            onClick={openLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register