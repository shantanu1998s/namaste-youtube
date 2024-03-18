import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { chatMessage } from '../redux/chatSlice'
import { generateRandomName } from '../../utils/helper'


const LiveChat = () => {
   
  const dispatch=useDispatch()
  const chatMessages=useSelector((store)=>store.chat.message)
  useEffect(()=>{
     const i=setInterval(() => {
         // api call
         dispatch(chatMessage({
          name:generateRandomName(),
          message:"namste react ❤"
         }))
     }, 500);

     return ()=>clearInterval(i);

  },[])

  return (
    <div className='w-full rounded-lg flex flex-col-reverse '>

    {
      chatMessages.map((c,indx)=> <ChatMessage key={indx} name={c.name} message={c.message}/>)
    }
      
    </div>
  )
}

export default LiveChat
