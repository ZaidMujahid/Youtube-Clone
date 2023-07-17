import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({ videos }) => {
  return (
    <div className='flex flex-wrap gap-4 items-center sm:justify-normal justify-center'>
      {videos?.map((item, idx)=>(
        <span key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </span>
      ))}
    </div>
  )
}

export default Videos