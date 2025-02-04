import React, { useCallback, useEffect, useState } from 'react'

import Card from './Card';

function Blogs() {
  const [data,setdata]=useState([]);
  const [like,setlike]=useState(false);
  const [dislike,setdislike]=useState(0);
  


  useEffect(()=>{
    const temp=JSON.parse(localStorage.getItem("storedarray"));
    setdata(temp);
  },[like,dislike])

  const handlelike = (index) => {
    let retrive=JSON.parse(localStorage.getItem("storedarray"))
    retrive[index].like+=1;
    localStorage.setItem("storedarray",JSON.stringify(retrive));
    setlike(!like)
  }
  
  function handledislike(index){
    let retrive=JSON.parse(localStorage.getItem("storedarray"))
    retrive[index].dislike+=1;
    localStorage.setItem("storedarray",JSON.stringify(retrive));
    setdislike(!dislike)
  }

  return (
    <>
        {
          !data ? (
            <p>No blogs added yet.</p>
          ) : 
          
          (
            <div>
          {data.map((item,index)=>(
            <Card title = {item.title} url = {item.url} content ={item.content} like={item.like} dislike={item.dislike} index={index} handlelike={handlelike} handledislike={handledislike}/>
          ))}
          </div>
        )
        }
    </>
  )
}

export default Blogs
