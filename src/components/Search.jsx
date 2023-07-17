import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import Leftbar from '../components/Leftbar'
import {fetchData} from '../utils/fetchData'
import { useParams } from 'react-router-dom'
const Search = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home")
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(()=>{
    fetchData(`search?part=snippet&q=${searchTerm}`)
      .then((data)=> setVideos(data.items))
  },[searchTerm])
  return (
    <>
    <div className='sm:flex-row flex-col flex gap-8'>
      <Leftbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <div className=''>
        <p className='text-2xl font-semibold text-red-500 mb-4 sm:ml-0 ml-2'><span className='text-black'>Search results for:</span> {searchTerm} </p>
        <Videos className='flex items-center justify-center' videos={videos}/>
      </div>
    </div>
    
    </>
  )
}

export default Search