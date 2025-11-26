import React from 'react'
import { FaStar } from 'react-icons/fa'
import{addToCart} from '../redux/cartSlice'
import{useDispatch} from 'react-redux'


const ProductCard=({product})=> {
  const dispatch=    useDispatch();

  const handleAddToCart=(e,product)=>{
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product added to cart")
  }
  return (
    <div className='bg-white p-4 rounded relative border transform hover:scale-105 transition-transform duration-300'>
        <img src={product.image} alt={product.name}/>
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p className='text-gray-500'>${product.price}</p>
        <div className='flex items-center mt-2'>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>


        </div>
        <div className='absolute bottom-4 right-2 bg-red-600 text-white rounded-fill flex items-center hover:bg-red-700 justify-center w-8 h-8 group text-sm hover:w-32 transition-all duration-300 overflow-hidden cursor-pointer'
        onClick={(e)=>{handleAddToCart(e,product)}}>
        <span className="group-hover:hidden">+</span>
        <span className="hidden group-hover:block">Add to cart</span>
        </div>
    </div>
  )
}

export default ProductCard