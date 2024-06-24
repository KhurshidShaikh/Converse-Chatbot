import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaPaperPlane } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { updatePrompt} from '../redux/promptSlice';

const Footer = () => {
   
  
  const [localPrompt,setLocalPrompt]=useState("")
  const textareaRef=useRef(null);
  const dispatch = useDispatch()

  const adjustBox=(e)=>{
    setLocalPrompt(e.target.value);
  
  }
   
  useEffect(()=>{
    textareaRef.current.style.height="auto";
    textareaRef.current.style.height=textareaRef.current.scrollHeight+"px";
  },[localPrompt])

  const handlePrompt=()=>{
    if(localPrompt==""){
    alert("Enter a Prompt")
    }
    else{
      // setPrompt(localPrompt)
      setLocalPrompt("")
      textareaRef.current.value=""
    }

  }

  const handleKey=(e)=>{
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (!isMobileDevice && e.key==="Enter"){
        if(localPrompt.trim()!==''){
          e.preventDefault();
          dispatch(updatePrompt(localPrompt))
          console.log("updated")
      
          
          textareaRef.current.value=""
        }
      }
    }
  

  return (
    <div className='flex flex-col justify-center bottom-0 fixed items-center'>
          <div className={`sm:w-[600px] sm:min-h-[70px] flex flex-row
    items-center justify-center bg-blue-600 rounded-full sm:p-4  w-[350px] p-3`}>
    <textarea name="text"
        rows="1"
        cols="40"
        id="prompt"
        placeholder='Enter your prompt here..'
        className='outline-none resize-none 
        rounded-full bg-blue-600 text-white
        font-poppins sm:min-h-[30px] sm:max-h-[70px] sm:w-[600px] max-h-[40px] h-[33px] p-2 m-1' 
        value={localPrompt}
        onChange={adjustBox}
        ref={textareaRef}
        required
        onKeyDown={handleKey}
        ></textarea>
      <FaPaperPlane 
      onClick={()=>{
        if (localPrompt === '') {
          alert("Please enter a prompt");
        } else {
          console.log("clicked")
          dispatch(updatePrompt(localPrompt))
          textareaRef.current.value=''

        }
      }} 
      className='sm:text-[25px] text-[35px] text-white' />
   </div>
      
      <span className='text-center font-poppins font-normal text-neutral-800'>Start a conversation with converse</span>
    </div>
  

  )
}


export default Footer;

