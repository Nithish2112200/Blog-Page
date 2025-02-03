import React, { useEffect, useState } from 'react'
import { PiGitlabLogoSimpleFill } from "react-icons/pi";
function Addblogs() {
    const [url,seturl]=useState('');
    const [content,setcontent]=useState('');


    // useEffect(()=>{
    //     const blog_data=JSON.parse(localStorage.getItem('myarray')) || []
    //     setArray(blog_data);
    // },[])

    function handleSubmit(e){
        e.preventDefault();

        console.log(url,content);
        seturl('');
        setcontent('');
        // sessionStorage.setItem()
    }

  return (
    <div className='ml-15 mt-20'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-10'>
            <div className='flex flex-col gap-7'>
            <div className='flex items-center gap-3'>
            <label htmlFor="inputurl" className='font-bold'>ENTER IMAGE URL </label>
            <PiGitlabLogoSimpleFill />
            </div>
            <input type="text" className='w-200 border-2' value={url} onChange={(e)=>seturl(e.target.value)}/>
            </div>
            <div className='flex flex-col gap-7 '>
            <div className='flex items-center gap-3'>
            <label htmlFor="inputurl" className='font-bold'>ENTER YOUR CONTENT TO DISPLAY </label>
            <PiGitlabLogoSimpleFill />
            </div>
            <textarea name="" id="" cols="120" rows="20" className='border-2' value={content} onChange={(e)=>setcontent(e.target.value)}></textarea>
            </div>
            <button type='submit' className='h-10 w-40 bg-red-600 text-white rounded-md'>CREATE BLOG</button>
        </form>
    </div>
  )
}

export default Addblogs