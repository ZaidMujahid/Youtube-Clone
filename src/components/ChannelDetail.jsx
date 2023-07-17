import React, { useEffect, useState } from 'react'
import ChannelCard from './ChannelCard'
import Videos from './Videos'
import { fetchData } from '../utils/fetchData'
import { useParams } from 'react-router-dom'


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState('null')
  const [videos, setVideos] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const fetchResults = async ()=> {
      const data = await fetchData(`channels?part=snippet&id=${id}`)
      setChannelDetail(data?.items[0])

      const videosData = await fetchData(`search?channelId=${id}&part=snippet&order=date`)
      setVideos(videosData?.items)
    }
    fetchResults()
  }, [id])


  return (
    <>
    <div className='flex items-center justify-center'>
      <ChannelCard channelDetail={channelDetail}/>
    </div>
    <div className='w-[100vw] px-2'>
      <Videos videos={videos}/>
    </div>
    </>
  )
}

export default ChannelDetail