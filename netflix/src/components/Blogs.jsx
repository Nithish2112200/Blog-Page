import React, { useEffect, useState } from 'react'

function Blogs() {
  const [data,setdata]=useState([]);

  useEffect(()=>{
    const temp=JSON.parse(localStorage.getItem("storedarray"));
    setdata(temp);
  },[])

  return (
    <>
        {
          data.length === 0 ? (
            <p>No blogs added yet.</p>
          ) : 
          
          (
            <div>
          {data.map((item,index)=>(
            
           <div key={index} className=' p-3 flex container mt-2 border-b-2'>
            {item.url && <img src={item.url} alt="Blog"  className='h-100 w-800'/> }
            <p className='pl-10 pr-8'>{item.content}</p>
           </div>
          ))}
          </div>
        )
        }
    </>
  )
}

export default Blogs