import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Display = () => {
  const location = useLocation(); 
  const navigate= useNavigate();
  const index = location.state?.index; 

  const [ret,setret]=useState('');

useEffect(()=>{
    const temp1=JSON.parse(localStorage.getItem("storedarray"))
    setret(temp1);
},[])

const handledelete=(idx) => {
    let storedArray = JSON.parse(localStorage.getItem("storedarray")) || [];
    if (idx >= 0 && idx < storedArray.length) {
        storedArray.splice(idx, 1);
        localStorage.setItem("storedarray", JSON.stringify(storedArray)); 
        setret(storedArray);
        navigate('/')
    }
  };

const handleedit=(idx)=>{
    navigate("/edit", { state: { item: ret[idx], index: idx } }); 
}

if (!ret.length || index === undefined || !ret[index]) {
    return <p>Loading...</p>; 
}

  return (
    <div className="container m-5 border-2 p-4">
        <h1 className="uppercase text-4xl font-bold text-gray-500 text-center mb-2 underline">{ret[index].title}</h1>
        <div className="flex justify-center items-center my-4">
        <img className="w-240 h-120 rounded-lg my-5 " src={ret[index].url} alt="" />
        </div>
        <p className="">{ret[index].content}</p>
        <div className="flex gap-5 ml-auto w-fit mr-10 mt-10">
        <button onClick={()=>{handleedit(index)}} className="h-10 w-25 font-bold bg-blue-400 text-white rounded-md mr-10">Edit</button>
        <button onClick={()=>{handledelete(index)}} className="h-10 w-25 font-bold bg-red-400 text-white rounded-md mr-10">Delete</button>
        </div>
    </div> 
  )
    

      
  
  
};

export default Display;
