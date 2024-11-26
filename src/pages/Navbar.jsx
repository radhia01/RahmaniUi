import React from 'react'
import logo from "../assets/logo.png"
import { MdDarkMode } from "react-icons/md";
function Navbar() {
  return (
    <div className='bg-black  fixed  top-0 py-2 px-1 flex  z-10  items-center  w-[99%]  h-32 justify-between '>
        <div className="">
          <h1 className='text-4xl  text-white flex  '>Rahmani <span className=' text-3xl mt-1 bg-yellow-600 text-white'>UI </span></h1>
        </div>
        <div className="">
            <ul className='text-white flex gap-4 text-xl '>
                <li ><a href="#templates">Templates</a></li>
                <li> <a  href="#composants">ComposantsUI</a></li>
                <li>Blog</li>
                <li>A Propos</li>
            </ul>
        </div>
        <div className="flex gap-4">
             <input  className="bg-white border h-12 text-gray-900 py-2 px-1 rounded-lg  focus:outline-none" placeholder="Recherche " />
             <button className='bg-black  py-2 border-none  '><MdDarkMode className='text-3xl text-white'/> </button>
        </div>


    </div>
  )
}

export default Navbar
