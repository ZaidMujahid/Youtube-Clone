import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Videos from './Videos'
import { fetchData } from '../utils/fetchData'
import { Link, useParams } from 'react-router-dom'

const VideoDetail = () => {
const [videoDetail, setVideoDetail] = useState(null)
const [videos, setVideos] = useState(null)
const { id } = useParams()

useEffect(()=> {
    fetchData(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=> setVideoDetail(data.items[0]))

    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data)=> setVideos(data.items))
    }, [id])
    if(!videoDetail?.snippet) return <span className='text-xl text-red-500 text-center'>Loading...</span>

  return (
      <div className='flex sm:flex-row flex-col sm:gap:8  justify-center gap-4'>
        <div className='basis-3/4 flex flex-col gap-1 sm:gap-4 sm:mb-0 mb-4'>
            <ReactPlayer height={500} width url={`https://www.youtube.com/watch?v=${id}`} controls/>
            <h2 className='text-2xl font-semibold'>{videoDetail?.snippet?.title}</h2>
            <div className='flex align-center justify-between'>
              <Link to={`/channel/${videoDetail.snippet.channelId}`} className='text-[1rem] cursor-pointer'>{videoDetail?.snippet?.channelTitle}</Link>
              <div className='flex gap-1'>
              <p className='text-[1rem] mr-2'>{parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views</p>
              <p className='text-[1rem] mr-6'>{parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes</p>
              </ div>
            </div>
        </div>
        <div className='sm:w-[20vw]'>
          <Videos videos={videos}/>
        </div>
    </div>
  )
}


export default VideoDetail