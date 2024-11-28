import {React,useState} from 'react'
import logo from "../assets/logo.png"
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
function Navbar({handleMode,dark}) {
  const [selectedItem, setselectedItem] = useState("")
  const handleSelectedItem=(item)=>{
    setselectedItem(item)
  }
  return (
    <div className='bg-black  shadow  dark:bg-gray-900  absolute    right-10  w-[95%]  top-0 py-2 px-10 flex   z-40  items-center     h-32 justify-between '>
        <div className="">
          <a href="#about" className='text-4xl  text-white flex  '>Rahmani <span className=' text-3xl mt-1 bg-yellow-600 text-white'>UI </span></a>
        </div>
        
            <ul className='text-white flex gap-10 text-xl '>
                <li className={`hover:text-yellow-500 hover:underline ${selectedItem==="accueil"?"text-yellow-500":""}`} onClick={()=>handleSelectedItem("accueil")}><a  href="#about">Accueil</a></li>
                <li  className={`hover:text-yellow-500 hover:underline ${selectedItem==="templates"?"text-yellow-500":""}`}  onClick={()=>handleSelectedItem("templates")}><a href="#templates"> TailwindCSS Templates</a></li>
                <li  className={`hover:text-yellow-500 hover:underline ${selectedItem==="composants"?"text-yellow-500":""}`} onClick={()=>handleSelectedItem("composants")}> <a  href="#components">ComposantsUI</a></li>
                {/* <li><a  href="#blog">Blog</a></li> */}
             
            </ul>
       
        <div className="flex gap-4">
             <input  className="bg-white border h-12 text-gray-900 py-2 px-1 rounded-lg  focus:outline-none" placeholder="Recherche " />
             <button  className='text-white text-2xl focus:outline-none' onClick={handleMode}>{dark ? <CiDark/>: <MdDarkMode/>  }</button>
        </div>


    </div>
  )
}

export default Navbar
