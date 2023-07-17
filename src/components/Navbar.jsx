import React, { useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {ImYoutube2} from "react-icons/im"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e)=> {
    e.preventDefault()
    if(searchTerm){
      navigate(`search/${searchTerm}`)

      setSearchTerm('')
    }
  }
  return (
    <div className='navbar flex justify-between w-[100%] text-red-500'>
      <Link to="/">
        <div className='flex items-center gap-1'>
            <ImYoutube2 className='text-5xl sm:text-7xl ml-2 sm:ml-8'/>
            <p className='text-[1.1rem] sm:text-2xl font-semibold'>2.0</p>
        </div>
      </Link>
        <div className='flex items-center'>
          <form onSubmit={handleSubmit} className='bg-gray-200 flex items-center mr-2 sm:mr-8 sm:gap-20 sm:p-1 rounded-3xl px-2 sm:px-3'>
            <input type="text" placeholder='Search' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} className='text-[1rem] p-[.2em] rounded-lg outline-none bg-gray-200'/>
            <AiOutlineSearch onClick={handleSubmit} className='text-[1rem] hover:cursor-pointer'/>
          </form>
        </div>
    </div>
  )
}

export default Navbar