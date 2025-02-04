import React, { useCallback, useEffect, useState } from 'react'

import Card from './Card';

function Blogs() {
  const [data,setdata]=useState([]);
  const [like,setlike]=useState(false);
  const [dislike,setdislike]=useState(0);
  


  useEffect(()=>{
    const temp=JSON.parse(localStorage.getItem("storedarray"));
    setdata(temp);
  },[like])

  const handlelike = (index) => {
    let retrive=JSON.parse(localStorage.getItem("storedarray"))
    retrive[index].like+=1;
    console.log(retrive[index])
    localStorage.setItem("storedarray",JSON.stringify(retrive));
    setlike(!like)
  }
  
  function handledislike(){
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
            <Card title = {item.title} url = {item.url} content ={item.content} like={item.like} index={index} handlelike={handlelike}/>
          ))}
          </div>
        )
        }
    </>
  )
}

export default Blogs
