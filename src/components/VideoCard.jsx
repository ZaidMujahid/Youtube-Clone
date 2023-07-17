import React from 'react'
import { Link } from 'react-router-dom'
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className=''>
      <Link to={`/video/${videoId}`}>
        <div className='flex flex-col cursor-pointer'>
          <img className='w-[325px] h-[182px] rounded-2xl object-cover' src={snippet?.thumbnails?.high?.url} alt="Thumbnail" />
          <p className='text-[.9rem] font-semibold px-2 pt-2 pb-1'>{snippet?.title.slice(0, 40) + "..."}</p>
      <Link to={`/channel/${snippet.channelId}`}>
          <p className='text-[.8rem] font-semibold text-gray-500 px-2 pb-2'>{snippet?.channelTitle}</p>
          </Link>
        </div>
      </Link>
    </div>
  )
}

export default VideoCard