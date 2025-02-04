import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PiGitlabLogoSimpleFill } from "react-icons/pi";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [item, setItem] = useState({
    title: "",
    content: "",
    url: ""
  });
  const [index, setIndex] = useState(null);

  useEffect(() => {
    if (location.state) {
      setItem(location.state.item);
      setIndex(location.state.index);
    }
  }, [location]);

  const handleUpdate = () => {
    let storedArray = JSON.parse(localStorage.getItem("storedarray")) || [];
    if (index >= 0 && index < storedArray.length) {
      storedArray[index] = item; 
      localStorage.setItem("storedarray", JSON.stringify(storedArray));
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  return (
    <div className="ml-15 mt-15 flex flex-col items-center gap-5">
      <div className='flex flex-col gap-7  items-center'>
      <div className='flex items-center gap-3 '>
        <label htmlFor="inputtitle" className='font-bold'>EDIT HEADING TITLE </label>
        <PiGitlabLogoSimpleFill />
        </div>
        <input
          type="text"
          name="title"
          value={item.title}
          onChange={handleChange}
          className='w-200 border-2 pl-3'
        />
      </div>
      
      <div className='flex flex-col gap-7 items-center'>
      <div className='flex items-center gap-3'>
        <label htmlFor="inputtitle" className='font-bold'>EDIT IMAGE URL </label>
        <PiGitlabLogoSimpleFill />
        </div>
        <input
          type="text"
          name="url"
          value={item.url}
          onChange={handleChange}
          className='w-200 border-2 pl-3'
        />
      </div>

        <div className='flex flex-col gap-7 mt-7 items-center'>
        <div className='flex items-center gap-3'>
        <label htmlFor="inputurl" className='font-bold'>ENTER YOUR CONTENT TO DISPLAY </label>
        <PiGitlabLogoSimpleFill />
        </div>
        <textarea
        cols="120" rows="20" 
        className='border-2 p-3'
         placeholder='Content'
          name="content"
          value={item.content}
          onChange={handleChange}
        />
      </div>
      <button
        onClick={handleUpdate}
        className="h-10 w-25 font-bold bg-red-400 text-white rounded-md my-10 ml-20">
        Update
      </button>
    </div>
  );
};

export default Edit;
