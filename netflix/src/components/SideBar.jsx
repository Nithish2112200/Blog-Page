import React from 'react'
import { PiGitlabLogoSimpleFill } from "react-icons/pi";
import { LiaBlogSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className='bg-black h-screen w-60 overflow-y-auto'>
        <div>
            <ul className='text-white flex flex-col gap-15 font-bold items-center mt-35'>
            <LiaBlogSolid className='scale-200'/>
                <li className='text-red-500'><Link to="/">BLOGS</Link></li>
                <li><Link to="/addblogs">ADD BLOG</Link></li>
                <li>INTERVIEWS</li>
                <li>STATISTICS</li>
                <li>BUISNESS IDEAS</li>
                <PiGitlabLogoSimpleFill className='scale-170'/>
            </ul>
        </div>
    </div>
  )
}

export default SideBar