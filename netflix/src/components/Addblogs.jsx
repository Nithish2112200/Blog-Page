import React, { useEffect, useState } from 'react'
import { PiGitlabLogoSimpleFill } from "react-icons/pi";
function Addblogs() {
  const [title,settitle]=useState('')
    const [url,seturl]=useState('');
    const [content,setcontent]=useState('');
    const [blogdata,setblogdata]=useState([]);


    useEffect(()=>{
      const temp=JSON.parse(localStorage.getItem("storedarray")) || [];
      if (temp) {
        setblogdata(temp);
    }
  }, []);

    useEffect(() => {
      if (blogdata.length > 0) { 
          localStorage.setItem("storedarray", JSON.stringify(blogdata));
      }
  }, [blogdata]);

    function handleSubmit(e){
        e.preventDefault();
        const newdata={title,url,content};
        const updated=[...blogdata,newdata];
        setblogdata(updated);
        seturl('');
        setcontent('');
        
    }

  return (
    <div className='ml-15 mt-20'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-10'>
            <div className='flex flex-col gap-7'>
            <div className='flex items-center gap-3'>
            <label htmlFor="inputtitle" className='font-bold'>ENTER HEADING TITLE </label>
            <PiGitlabLogoSimpleFill />
            </div>
            <input type="text" className='w-200 border-2 pl-3' value={title} placeholder='Title' onChange={(e)=>settitle(e.target.value)}/>
            </div>
            <div className='flex flex-col gap-7'>
            <div className='flex items-center gap-3'>
            <label htmlFor="inputurl" className='font-bold'>ENTER IMAGE URL </label>
            <PiGitlabLogoSimpleFill />
            </div>
            <input type="text" className='w-200 border-2 pl-3' value={url} placeholder='Url' onChange={(e)=>seturl(e.target.value)}/>
            </div>
            <div className='flex flex-col gap-7 '>
            <div className='flex items-center gap-3'>
            <label htmlFor="inputurl" className='font-bold'>ENTER YOUR CONTENT TO DISPLAY </label>
            <PiGitlabLogoSimpleFill />
            </div>
            <textarea name="" id="" cols="120" rows="20" className='border-2 p-3' placeholder='Content' value={content} onChange={(e)=>setcontent(e.target.value)}></textarea>
            </div>
            <button type='submit' className='h-10 w-40 bg-red-600 text-white rounded-md'>CREATE BLOG</button>
        </form>
    </div>
  )
}

export default Addblogs
