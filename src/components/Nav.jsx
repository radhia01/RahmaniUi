import {React,useState} from 'react'
import { Prism  } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'; 
import { CiHome } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { FaThList } from "react-icons/fa"
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { BiSolidArrowToBottom } from "react-icons/bi";
function Nav() {
    const navLinks=[{
        id:1,
        name:"Home",
        href:"#",
        icon:<CiHome/>}
    ,
    {
        id:2,
        name:"Products",
        href:"#",
        icon:<CiBoxList/>
    },
    {
        id:3,
        name:"Customers",
        href:"#",
        icon:<FaUserFriends/>
    },
    {
        id:4,
        name:"Orders",
        href:"#",
        icon:<FaThList/>
    }]
    const [showLeftSidebar, setshowLeftSidebar] = useState(true)
    const [showTopSidebar, setshowTopSidebar] = useState(false)
  
    const codeString=`
    import React from 'react'

    function Nav() {
    
        return (
            <div className='w-full h-full '>
                <div className=" flex justify-between bg-blue-900 text-white py-4 px-2 items-center  ">
                    <a href="" className='text-3xl font-bold  text-yellow-400'><FaShoppingCart/></a>
                    <ul className='flex gap-4 '>
                        <li className='hover:text-yellow-300  hover:text-2xl'><a href="#" aria-label="Home">Home</a></li>
                        <li className='hover:text-yellow-300  hover:text-2xl'> <a href="#" aria-label="Products">Products</a></li>
                        <li className='hover:text-yellow-300  hover:text-2xl'> <a href="#" aria-label="Contacts">Contact</a></li>
                    </ul>
                    <div className="flex gap-2 ">
                        <input type="text" className=' h-10 border border-gray-200  w-full  bg-blue-800 border-none shadow rounded-lg p-2  focus:bg-white focus:outline-none focus:text-black ' placeholder='Search '/>
                    </div>
                </div>
            </div>
        )
                     }

export default Nav
    `
    const codeString1=`
import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { FaThList } from "react-icons/fa"
function Nav() {
    const navLinks=[{
        id:1,
        name:"Home",
        href:"#",
        icon:<CiHome/>}
    ,
    {
        id:2,
        name:"Products",
        href:"#",
        icon:<CiBoxList/>
    },
    {
        id:3,
        name:"Customers",
        href:"#",
        icon:<FaUserFriends/>
    },
    {
        id:4,
        name:"Orders",
        href:"#",
        icon:<FaThList/>
    }]
   
        return (
    <div className='w-full h-full'>
        <div className="   mt-20 flex flex-col   bg-indigo-950 shadow   text-black   py-10   w-64 px-10 items-center  rounded-lg  ">
            <a href="" className='text-3xl font-bold  text-yellow-400  mb-2'> Admin Dashboard</a>
            <div className=' border  w-full border-t border-white'></div>
            <ul className='flex gap-4 flex-col w-full py-8 '>
                {navLinks.map(link=>{
                    return     <li  key={link.id} className=  ' text-gray-400  p-1 text-lg   hover:bg-gray-700   hover:text-white'><a    aria-label={link.name} className ="flex" href="#"><span className='mt-1 mr-2'>{link.icon}</span>{link.name}</a></li>
                
                })}
            </ul> 
        </div>
    </div>
)}
    `


    const codeString2=`
import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { FaThList } from "react-icons/fa"
    const [showLeftSidebar, setShowLeftSidebar] = useState(false)
    const [showTopSidebar, setShowTopSidebar] = useState(false)
function Nav() {
    const navLinks=[{
        id:1,
        name:"Home",
        href:"#",
        icon:<CiHome/>}
    ,
    {
        id:2,
        name:"Products",
        href:"#",
        icon:<CiBoxList/>
    },
    {
        id:3,
        name:"Customers",
        href:"#",
        icon:<FaUserFriends/>
    },
    {
        id:4,
        name:"Orders",
        href:"#",
        icon:<FaThList/>
    }]
   
        return (
    <div className="  relative  h-[500px] border  mt-20 py-4 ">  
                {showLeftSidebar && 
                        <div className=" flex flex-col  mt-2  bg-indigo-950 shadow  h-full  text-black   py-10   w-60 px-10 items-center  rounded-lg  ">
                            <a href="" className='text-3xl font-bold  text-yellow-400  mb-2'> <FaShoppingCart/></a>
                            <div className=' border  w-full border-t border-white'>
                            </div>
                            <ul className='flex gap-4 flex-col w-full    py-8 '>
                                {navLinks.map(link=>{
                                return     <li  key={link.id} className=  ' text-gray-400  p-1 text-lg   hover:bg-gray-700   hover:text-white'><a    aria-label={link.name} className ="flex" href="#"><span className='mt-1 mr-2'>{link.icon}</span>{link.name}</a></li>
                            
                                    })}
                            </ul>
                        </div>               }
                {showTopSidebar && 
                        <div className=" flex  h-20 w-full justify-between bg-blue-900 text-white py-4 px-2 items-center   rounded ">
                            <a href="" className='text-3xl font-bold  text-yellow-400'><FaShoppingCart/></a>
                            <ul className='flex gap-4 '>
                                {navLinks.map(link=>{
                                    return <li  key={link.id} className='hover:text-yellow-300  hover:text-2xl'><a href="#" aria-label="Home">{link.name}</a></li>
                                                 })}
                            </ul>
                            <div className="flex gap-2 ">
                                <input type="text" className=' h-10 border border-gray-200  w-full  bg-blue-800 border-none shadow rounded-lg p-2  focus:bg-white focus:outline-none focus:text-black ' placeholder='Search '/>
                            </div>
                        </div>}
                <div className=" w-full flex   absolute  top-[50%] gap-4 justify-center"> 
                      <button  className=" bg-black py-2  text-white  rounded  px-4" onClick={()=>{setShowTopSidebar(true), setShowLeftSidebar(false)}}>Top</button>
                      <button  className=" bg-black py-2  text-white  rounded  px-4"  onClick={()=>{setShowLeftSidebar(true),setShowTopSidebar(false)}}>Left</button>
                </div>
        </div>
)}
    
    `
  return (
    <div className='w-full h-full py-20  '>
         <div className=" flex justify-between bg-blue-900 text-white py-4 px-2 items-center  ">
            <a href="" className='text-3xl font-bold  text-yellow-400'><FaShoppingCart/></a>
            <ul className='flex gap-4 '>
                <li className='hover:text-yellow-300  hover:text-2xl'><a href="#" aria-label="Home">Home</a></li>
                <li className='hover:text-yellow-300  hover:text-2xl'> <a href="#" aria-label="Products">Products</a></li>
                <li className='hover:text-yellow-300  hover:text-2xl'> <a href="#" aria-label="Contacts">Contact</a></li>
            </ul>
            <div className="flex gap-2 ">
               <input type="text" className=' h-10 border border-gray-200  w-full  bg-blue-800 border-none shadow rounded-lg p-2  focus:bg-white focus:outline-none focus:text-black ' placeholder='Search '/>
               {/* <button className=' p-2  text-yellow-400 text-sm bg-black  rounded hover:bg-white hover:text-black'>SignOut</button> */}
            </div>
        </div>
         <div className="   mt-4  overflow-auto h-64 p-4 border  flex justify-center border-gray-300 rounded-lg">
                <Prism language="jsx" style={solarizedlight} >
                    {codeString}
                </Prism>
          </div>
    <div className='border-b border-gray-800 w-full  h-10 py-7'></div>
     <div className="bg-white"></div>
          <div className="   mt-20 flex flex-col   bg-indigo-950 shadow   text-black   py-10   w-64 px-10 items-center  rounded-lg  ">
            <a href="" className='text-3xl font-bold  text-yellow-400  mb-2'> Admin Dashboard</a>
            <div className=' border  w-full border-t border-white'></div>
            <ul className='flex gap-4 flex-col w-full    py-8 '>
                {navLinks.map(link=>{
                    return     <li  key={link.id} className=  ' text-gray-400  p-1 text-lg   hover:bg-gray-700   hover:text-white'><a    aria-label={link.name} className ="flex" href="#"><span className='mt-1 mr-2'>{link.icon}</span>{link.name}</a></li>
                
                })}
              
            </ul>
            
            
        </div>
         <div className="   mt-4  overflow-auto h-64 p-4 border  flex justify-center border-gray-300 rounded-lg">
                <Prism language="jsx" style={solarizedlight} >
                    {codeString1}
                </Prism>
          </div>


          <div className='border-b border-gray-800 w-full  h-10 py-7'></div>
        <div className="  relative  h-[500px] border  mt-20 py-4 ">  
                {showLeftSidebar && 
                        <div className=" flex flex-col  mt-2  bg-indigo-950 shadow  h-full  text-black   py-10   w-60 px-10 items-center  rounded-lg  ">
                            <a href="" className='text-3xl font-bold  text-yellow-400  mb-2'> <FaShoppingCart/></a>
                            <div className=' border  w-full border-t border-white'>
                            </div>
                            <ul className='flex gap-4 flex-col w-full    py-8 '>
                                {navLinks.map(link=>{
                                return     <li  key={link.id} className=  ' text-gray-400  p-1 text-lg   hover:bg-gray-700   hover:text-white'><a    aria-label={link.name} className ="flex" href="#"><span className='mt-1 mr-2'>{link.icon}</span>{link.name}</a></li>
                            
                                    })}
                            </ul>
                        </div>               }
                {showTopSidebar && 
                        <div className=" flex  h-20 w-full justify-between bg-blue-900 text-white py-4 px-2 items-center   rounded ">
                            <a href="" className='text-3xl font-bold  text-yellow-400'><FaShoppingCart/></a>
                            <ul className='flex gap-4 '>
                                {navLinks.map(link=>{
                                    return <li  key={link.id} className='hover:text-yellow-300  hover:text-2xl'><a href="#" aria-label="Home">{link.name}</a></li>
                                                 })}
                            </ul>
                            <div className="flex gap-2 ">
                                <input type="text" className=' h-10 border border-gray-200  w-full  bg-blue-800 border-none shadow rounded-lg p-2  focus:bg-white focus:outline-none focus:text-black ' placeholder='Search '/>
                            </div>
                        </div>}
                <div className=" w-full flex   absolute  top-[50%] gap-4 justify-center"> 
                      <button  className=" bg-black py-2  text-white  rounded  px-4
                     "onClick={()=>{setshowTopSidebar(true), setshowLeftSidebar(false)}}>Top</button>
                      <button  className=" bg-black py-2  text-white  rounded  px-4" onClick={()=>{setshowLeftSidebar(true),setshowTopSidebar(false)}}>Left</button>
                </div>
        </div>
     
         <div className="   mt-4  overflow-auto h-64 p-4 border  flex justify-center border-gray-300 rounded-lg">
                <Prism language="jsx" style={solarizedlight} >
                    {codeString2}
                </Prism>
          </div>


    </div>
  )
}

export default Nav