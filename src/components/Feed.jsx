import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import Leftbar from '../components/Leftbar'
import {fetchData} from '../utils/fetchData'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchData(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=> setVideos(data.items))
  },[selectedCategory])
  return (
    <>
    <div className='sm:flex-row flex-col flex gap-8'>
      <Leftbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <div className=''>
        <p className='text-2xl font-semibold text-red-500 mb-4 sm:ml-0 ml-2'>{selectedCategory}</p>
        <Videos className='flex items-center justify-center' videos={videos}/>
      </div>
    </div>
    
    </>
  )
}

export default Feed