import React from 'react'
import { Link } from 'react-router-dom'
const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail);
  return (
    <div>
      <div className='cursor-pointer w-[325px] h-[182px]'>
      <Link className='grid place-items-center' to={`/channel/${channelDetail?.id?.channelId}`}>
        <img className='w-[150px] h-[150px] rounded-[50%] mb-2' src={channelDetail?.snippet?.thumbnails?.high?.url} alt="Thumbnail" />
        <p className='text-[1rem] font-semibold px-2 pb-2'>{channelDetail?.snippet?.channelTitle}</p>
        {channelDetail?.statictics?.subscriberCount && 
        <p>{parseInt(channelDetail?.statistics?.subscriberCount
          ).toLocaleString()}</p>
        }
      </Link>
      </div>
    </div>
  )
}

export default ChannelCard