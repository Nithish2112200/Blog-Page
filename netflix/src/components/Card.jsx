import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
const Card = ({title, content, url, index, like, handlelike}) => {
    console.log(index)
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
          
            <div className="flex gap-10 justify-center mt-4">
              <MdPreview />
              <AiFillLike onClick={()=>{handlelike(index)}} />{like}
              <AiTwotoneDislike />
              <FaShare />
            </div>
          </div>
    </>
  )
}

export default Card
