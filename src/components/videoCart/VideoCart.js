import React from 'react'

const VideoCart = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle, title, thumbnails}=snippet;
  return (
    <div className='w-80 mx-3 shadow-md p-2 rounded-md cursor-pointer'>
      <img className='rounded-lg' alt='video'  src={thumbnails.standard.url}/>
      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{Math.round( statistics.viewCount/1000)}K</li>
      </ul>
    </div>
  )
}

export default VideoCart
