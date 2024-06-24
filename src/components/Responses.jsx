import React, { useEffect, useRef, useState } from 'react'

import logo from '../assets/logo.svg'
import { fetchDataFromApi } from '../api'
import { useSelector } from 'react-redux'


const Responses = () => {
  const prompt = useSelector((state) => state.prompt.value)
  
  const responseDiv = useRef();

  const formatResponse = (response) => {
    const formattedText = response?.replace(/^\*\s|\*\*/g, "");

    const trimmedText = formattedText?.trim();

    return trimmedText;

  }


  useEffect(() => {
    if (prompt !== '') {
      let promptDiv = document.createElement('div');
      promptDiv.className = 'text-white sm:max-w-[900px] sm:ml-7 sm:max-h-[500px] bg-blue-600 rounded-full p-4 mt-3';
      promptDiv.innerHTML = `User: ${prompt}`
      responseDiv.current.appendChild(promptDiv);

      //loader component
      const loaderDiv = document.createElement('div');
      loaderDiv.className = 'shadow rounded-md p-3  sm:w-[700px] w-[300px]  mt-4  pl-0 bg-blue-500';

    
      const div2 = document.createElement('div');
      div2.className = 'animate-pulse flex space-x-4 '
      loaderDiv.appendChild(div2)

      const imgLogo = document.createElement('img');
      imgLogo.src = logo;
      imgLogo.alt = 'logo';
      imgLogo.className = 'w-[80px] h-[80px]';
      div2.appendChild(imgLogo);

      const div3 = document.createElement('div');
      div3.className = 'flex-1 space-y-6 py-1';
      div2.appendChild(div3);

      const firstLineDiv = document.createElement('div');
      firstLineDiv.className = 'h-2 bg-slate-700 rounded p-3';
      div3.appendChild(firstLineDiv);

      const spaceY3Div = document.createElement('div');
      spaceY3Div.className = 'space-y-3';
      div3.appendChild(spaceY3Div);

      const gridDiv = document.createElement('div');
      gridDiv.className = 'grid grid-cols-3 gap-4 p-3';
      spaceY3Div.appendChild(gridDiv);

      const colSpan2Div = document.createElement('div');
      colSpan2Div.className = 'h-2 bg-slate-700 rounded col-span-2 p-3';
      gridDiv.appendChild(colSpan2Div);

      const lastLineDiv = document.createElement('div');
      lastLineDiv.className = 'h-2 bg-slate-700 rounded p-3';
      spaceY3Div.appendChild(lastLineDiv);


      let mainresDiv = document.createElement('div');
      mainresDiv.className = 'text-white flex flex-row overflow-auto flex-grow p-3 bg-blue-500 mt-4 rounded-xl pl-0';

      let imglogo = document.createElement('img');
      imglogo.src = logo
      imglogo.className = 'w-[80px] h-[80px]';

      let responsepara = document.createElement('p');
      responsepara.className = 'max-w-[1000px] ';

      responseDiv.current.appendChild(loaderDiv);
      loaderDiv.scrollIntoView({ behaviour: 'smooth' })

      fetchDataFromApi(prompt).then((res) => {
        if (res !== '' && res !== undefined && res !== null) {
          responsepara.innerText = formatResponse(res);
        }
        else {
          responsepara.innerText = "Sorry can't respond to your prompt :("
        }

        mainresDiv.appendChild(imglogo)
        mainresDiv.appendChild(responsepara)
        responseDiv.current.removeChild(loaderDiv);
        responseDiv.current.appendChild(mainresDiv);
        mainresDiv.scrollIntoView({ behavior: 'smooth' })
       
      }).catch((error)=>{
        responsepara.innerText = "An error occurred .Sorry can't respond to your prompt :("
      });


      promptDiv.scrollIntoView( { behavior: 'smooth' } )
     
    }

  }, [prompt])

  return (
    prompt !== '' ? (
      <div className='flex flex-col p-3 w-full  items-start pb-[120px] font-poppins' ref={responseDiv}>

      </div>
    ) : (
      <div className='m-7 relative'>
        <h2 className='text-gray-600 sm:text-[50px] text-[30px] font-semibold font-poppins slide-in fixed'>
          How can i help you today ?
        </h2>
      </div>






    )


  )
}

export default Responses;
