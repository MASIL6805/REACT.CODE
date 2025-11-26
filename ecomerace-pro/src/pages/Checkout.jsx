import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaTrashAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(false)
  const [shippingToggle, setShippingToggle] = useState(false)
  const [paymentToggle, setPaymentToggle] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: ''
  })



  const cart = useSelector(state => state.cart)
  const navigate=useNavigate()

  const handleOrder=()=>{
    const newOrder={
      products: cart.products,
      orderNumber:12343,
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    }
    setOrder(newOrder)
    navigate('/order-confirmation')
  }

  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-24 py-10">
      <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        CHECKOUT
      </h3>

      <div className="bg-white shadow-lg rounded-xl p-6 space-y-8">
        {/* Billing Information */}
        <div className="border-b pb-6">
          <div
            onClick={() => setBillingToggle(!billingToggle)}
            className="flex justify-between items-center cursor-pointer mb-4"
          >
            <h3 className="text-xl font-semibold text-gray-800">Billing Information</h3>
            {billingToggle ? <FaAngleUp className="text-gray-600" /> : <FaAngleDown className="text-gray-600" />}
          </div>

          <div className={`space-y-4 transition-all ${billingToggle ? 'block' : 'hidden'}`}>
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="border-b pb-6">
          <div
            onClick={() => setShippingToggle(!shippingToggle)}
            className="flex justify-between items-center cursor-pointer mb-4"
          >
            <h3 className="text-xl font-semibold text-gray-800">Shipping Information</h3>
            {shippingToggle ? <FaAngleUp className="text-gray-600" /> : <FaAngleDown className="text-gray-600" />}
          </div>

          <div className={`space-y-4 transition-all ${shippingToggle ? 'block' : 'hidden'}`}>
            <div>
              <label className="block text-gray-700 mb-1">Address</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your address"
                onChange={(e)=> setShippingInfo({...shippingInfo,address: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">City</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your city"
                 onChange={(e)=> setShippingInfo({...shippingInfo, city: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Zip Code</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter zip code"
                 onChange={(e)=> setShippingInfo({...shippingInfo, zip: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="border-b pb-6">
          <div
            onClick={() => setPaymentToggle(!paymentToggle)}
            className="flex justify-between items-center cursor-pointer mb-4"
          >
            <h3 className="text-xl font-semibold text-gray-800">Payment Information</h3>
            {paymentToggle ? <FaAngleUp className="text-gray-600" /> : <FaAngleDown className="text-gray-600" />}
          </div>

          <div className={`space-y-4 transition-all ${paymentToggle ? 'block' : 'hidden'}`}>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
              />
              <label className="text-gray-700">Cash on Delivery</label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'dc'}
                onChange={() => setPaymentMethod('dc')}
              />
              <label className="text-gray-700">Debit Card</label>
            </div>

            {paymentMethod === 'dc' && (
              <div className="border rounded-xl p-4 bg-gray-50 space-y-3">
                <h4 className="font-semibold text-gray-800 mb-2">Debit Card Information</h4>
                <div>
                  <label className="block text-gray-700 mb-1">Card Number</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Card Holder Name</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="Name on card"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">CVV</label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-blue-500"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="pt-4">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="font-medium text-gray-800">{product.name}</h4>
                    <p className="text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <FaTrashAlt className="text-gray-400 cursor-pointer hover:text-red-500" />
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4 font-semibold text-gray-800 text-lg">
            <span>Total Price:</span>
            <span>${cart.totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium text-lg hover:bg-blue-700 transition mt-6"
        onClick={handleOrder}>
          Place Order
        </button>
      </div>
    </div>
  )
}

export default Checkout

