import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import empty from '../assets/images/empty.jpg'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../components/Modal'
import ChangeAddress from '../components/ChangeAddress'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [address, setAddress] = useState('main street, 0012')
  const [isModalOpen, setIsModalOpen]=useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-24 py-10">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">
            SHOPPING CART
          </h3>

          <div className="bg-white shadow-md rounded-lg p-6">
            {/* Header Row */}
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between text-gray-600 font-semibold">
                <p className="w-1/3">Products</p>
                <div className="flex justify-between w-2/3">
                  <p className="w-1/4 text-center">Price</p>
                  <p className="w-1/4 text-center">Quantity</p>
                  <p className="w-1/4 text-center">Subtotal</p>
                  <p className="w-1/4 text-center">Remove</p>
                </div>
              </div>
            </div>

            {/* Product List */}
            <div>
              {cart.products.map((product, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b py-4 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center w-1/3 space-x-4">
                    <img
                      src={product.image}
                      alt=""
                      className="w-20 h-20 object-cover rounded-md shadow-sm"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex justify-between items-center w-2/3 text-center">
                    <p className="w-1/4 text-gray-700 font-medium">
                      ${product.price}
                    </p>

                    <div className="w-1/4 flex items-center justify-center gap-2">
                      <button className="px-2 py-1 border rounded hover:bg-gray-200"
                       onClick={()=>dispatch(decreaseQuantity(product.id))}>

                        -
                      </button>
                      <p className="font-semibold text-gray-700">
                        {product.quantity}
                      </p>
                      <button className="px-2 py-1 border rounded hover:bg-gray-200"
                      onClick={()=>dispatch(increaseQuantity(product.id))}>
                        
                        +
                      </button>
                    </div>

                    <p className="w-1/4 font-semibold text-gray-800">
                      ${(product.quantity * product.price).toFixed(2)}
                    </p>

                    <button className="text-red-500 hover:text-red-700"
                    onClick={()=>dispatch(removeFromCart(product.id))}>
                    <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Total Section */}
            <div className="mt-10 border-t pt-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Cart Total
              </h3>

              <div className="flex justify-between text-gray-700 mb-3">
                <span className="font-medium">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="border rounded-lg p-4 bg-gray-50 mb-4">
                <p className="font-medium text-gray-800 mb-2">Shipping</p>
                <div className="flex justify-between text-gray-700">
                  <div>
                    <p className="text-sm">Shipping To:</p>
                    <span className="font-medium">{address}</span>
                  </div>
                  <button
                    className="text-blue-600 hover:underline font-medium"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Change address
                  </button>
                </div>
              </div>

              <div className="flex justify-between text-gray-700 text-lg font-semibold mb-6">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium text-lg"
              onClick={()=> navigate('/checkout')}>
                Proceed to Checkout
              </button>
            </div>
          </div>
          <Modal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}>
            <ChangeAddress  setAddress={setAddress} setIsModalOpen={setIsModalOpen}/>
          </Modal>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <img src={empty} alt="empty cart" className="h-96 mb-6" />
          <p className="text-gray-600 text-lg">No Item Found</p>
        </div>
      )}
    </div>
  )
}

export default Cart

