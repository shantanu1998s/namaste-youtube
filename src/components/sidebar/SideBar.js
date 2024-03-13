import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const SideBar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  //console.log(isMenuOpen)

  if(!isMenuOpen) return null;
  
  return (
    <div className='w-48 shadow-md '>
       <ul className='text-sm'>
       <Link to={'/'}> <li className='mx-4 p-2 mt-2 hover:bg-gray-200 rounded-xl '>Home</li></Link> 
         <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>Short</li>
         <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>Subscripstion</li>
       </ul>
       <h1 className='font-bold mt-4 mx-5'>You</h1>
       <ul>
         <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>Your channel</li>
         <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>History</li>
         <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>Your Videos</li>
         <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>Watch Later</li>
       </ul>
       <h1 className='font-bold mt-4 mx-5'>Subscriptions</h1>
       <ul>
       <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>Music</li>
       <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>Sports</li>
       <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>Gaming</li>
       <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>Movies</li>
     </ul>
     <h1 className='font-bold mt-4 mx-5'>Watch Later</h1>
     <ul>
     <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>Music</li>
     <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>Sports</li>
     <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>Gaming</li>
     <li className='mx-4 p-2 hover:bg-gray-200 rounded-xl '>Movies</li>
   </ul>
    </div>
  )
}

export default SideBar
