import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = ({ order }) => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-green-600 text-center mb-2">
          🎉 Thank you for your Order!
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Your order has been placed successfully. You’ll receive a confirmation email shortly.
        </p>

        {/* Order Summary */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Summary</h3>
          <p className="text-gray-700 mb-4">
            <span className="font-medium">Order Number:</span> {order.orderNumber}
          </p>

          {/* Shipping Info */}
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-800">Shipping Information</h4>
            <p className="text-gray-600">{order.shippingInformation.address}</p>
            <p className="text-gray-600">{order.shippingInformation.city}</p>
            <p className="text-gray-600">{order.shippingInformation.zip}</p>
          </div>

          {/* Products */}
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">Products Ordered</h4>
            {order.products.map((product) => (
              <div
                key={product.name}
                className="flex justify-between items-center border-b border-gray-100 py-2"
              >
                <p className="text-gray-700">
                  {product.name} × {product.quantity}
                </p>
                <p className="text-gray-800 font-medium">
                  ${product.price * product.quantity}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center text-lg font-semibold text-gray-800 border-t border-gray-200 pt-3">
            <span>Total Price</span>
            <span>${order.totalPrice}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => navigate('/order-tracking')}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-200"
          >
            Track Order
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg shadow-md transition duration-200"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default Order
