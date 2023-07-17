import React from 'react'
import { categories } from '../utils/constants'
const Leftbar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className='sm:w-[15%]'>
      <div>
        <p className='text-xl ml-2 font-medium mb-4 sm:block hidden'>Explore</p>
      </div>
      <div className='flex sm:flex-col gap-1 overflow-x-scroll sm:overflow-x-auto cursor-pointer sm:mt-0 mt-2'>
        {categories.map((category) => (
          <div className={`${category.name === selectedCategory && "bg-red-500 rounded-2xl"}
          'flex ml-3 p-1 px-2 mb-2 sm:mb-0 sm:p-2 hover:bg-red-500 rounded-2xl`} onClick={()=> setSelectedCategory(category.name)}>

            <button className='flex gap-1 sm:gap-2' key={category.name}>
              <p className='text-xl'>{category.icon}</p>
              <p className='text-[.9rem]'>{category.name}</p>
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Leftbar  