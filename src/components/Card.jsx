import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { Link } from 'react-router-dom';
const Card = ({title, content, url, index, like,dislike, handlelike,handledislike}) => {
  return (
    <>
        <div key={index} className="p-3 flex flex-col container mt-2 border-b-2">
            
            {url && (
              <img 
                src={url} 
                alt="Blog" 
                className="h-100 w-full object-cover rounded-lg mb-4"
              />
            )}
          
            <p className="font-bold text-3xl text-center mb-5 text-gray-500 uppercase">{title}</p>
          
            <div className="pl-10 pr-8 mb-4">
              <p>{content}</p>
            </div>
          
            <div className="flex gap-10 ml-auto w-fit mr-10 mt-4 scale-110">
              <div className='flex flex-col items-center gap-2 mr-2' >
              <Link to="/display" state={{index}}><MdPreview className='scale-150'/></Link> 
              <p>VIEW</p>
              </div>
              <div className='flex flex-col items-center gap-2'>
              <AiFillLike onClick={()=>{handlelike(index)}} />{like}
              </div>
              <div className='flex flex-col items-center gap-2'>
              <AiTwotoneDislike onClick={()=>{handledislike(index)}}/>{dislike}
              </div>
              <div className='flex flex-col items-center gap-2'>
              <FaShare />
              <p>Share</p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Card
