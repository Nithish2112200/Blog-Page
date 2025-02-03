import React from 'react'
import { BsFillSearchHeartFill  } from "react-icons/bs";
import { FaBell } from "react-icons/fa";

function Header() {
  return (
    <div className='h-20 bg-black flex items-center justify-between sticky top-0'>
        <img className='h-20 pl-10' src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png" alt="Logo Loading" />
        <div className='text-white flex gap-15'>
        <p className='text-red-500'>JMAN Blogs</p>
        <p>Profile</p>
        </div>
        <div className='flex items-center gap-5 text-white'>
            <BsFillSearchHeartFill/>
            <input className='border-white-500 w-100' type="text" placeholder='Search Here' />
            <FaBell />
        </div>
        <button className=' h-10 w-20 bg-red-600 text-white rounded-md mr-10'>Sign In</button>
    </div>
  )
}

export default Header