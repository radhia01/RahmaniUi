import React from 'react';
import { IoSend } from "react-icons/io5";
import { Prism  } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choisir un thème de coloration

function Button() {
  const codeString = `
  <button className='rounded-lg shadow bg-blue-600 w-28 text-white py-3 px-2'>Submit</button>
  <button className='rounded-lg shadow bg-red-200 w-32 text-white py-3 px-2 font-bold hover:bg-black hover:text-red-200'>Hover Button</button>
  <button className='rounded-lg shadow bg-yellow-500 w-auto text-white py-3 px-2 font-bold flex'>
    <IoSend className='mt-1 mr-2' />Button with icon
  </button>
  `;

  return (
    <div className='px-2 '> 
      <div className='flex  bg-white justify-center items-center gap-10 py-10  px-20'>
        <button className='rounded-lg shadow bg-blue-600  text-white py-3 px-2'>Submit</button>
        <button className='rounded-lg shadow bg-red-200 w-32 text-white py-3 px-2 font-bold hover:bg-black hover:text-red-200'>Hover Button</button>
        <button className='rounded-lg shadow bg-yellow-500 w-auto text-white py-3 px-2 font-bold flex'>
          <IoSend className='mt-1 mr-2' />Button with icon
        </button>
      </div>
      <hr />
      <div className="   mt-4  overflow-auto h-64 p-4 border  flex justify-center border-gray-300 rounded-lg">
          <Prism language="jsx" style={solarizedlight} >
            {codeString}
          </Prism>
        </div>
    </div>
  );
}

export default Button;
