import React from 'react'
import kids from '../assets/images/kids.jpeg'
import men from '../assets/images/men.jpg'
import women from '../assets/images/women.jpeg'


const Categories=[
    {
        title:"men",
        imageUrl:men,
    },
    {
        title:"kids",
        imageUrl:kids,
    },
    {
        title:"women",
        imageUrl:women,
    },
]

export const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'> 
        {Categories.map((category,index)=>(
            <div key={index} className='relative h-64 hover:scale-105 transform transition-transform duration-300 cursor-pointer'>
                <img src={category.imageUrl} alt={category.title} className='w-full h-full object-cover rounded-lg shadow-md'/> 
                <div className='absolute top-20 left-12'>
                    <p className='text-xl font-bold'>{category.title}</p>
                    <p className='text-gray-600'>View All</p>
                </div>

            </div>
        ))}  
    </div>
  )
}
