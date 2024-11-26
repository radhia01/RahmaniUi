import React from 'react'
import image from "../assets/image.jpg"
import user from "../assets/user.jpg"
import food from "../assets/food.jpg"
import food1 from "../assets/food1.jpg"
import food2 from "../assets/food2.jpg"
import { Prism  } from 'react-syntax-highlighter';
import { useState } from 'react';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'; 

function Card() {
    const images=[{
        id:1,
        url:food1
    },
    {
        id:2,
        url:food
    },
    {
        id:3,
        url:food2
    }]
   const [imageToShow, setImageToShow] = useState(food)
    const codeString = `
  <div className="rounded-xl relative w-[300px] h-[300px] ">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className="font-bold text-2xl px-2 pt-4">Sac à Dos Urbain 25L</p>
              <p className="px-2">capacité (25L), les matériaux (résistant à l'eau)</p>
              <p className="px-2   font-bold text-xl  ">69,99€</p>
              <button className="border rounded-xl px-5 py-1 border-white bg-white text-black hover:bg-black/50 hover:text-white border-none mx-2 absolute bottom-4 right-10">
                Ajouter au panier 
              </button>
            </div>
            <img
              className="max-h-[300px]  w-full object-cover rounded-xl"
              src={image}
              alt="/"
            />
    </div>
  `;
  const codeString2=`<div className="  w-[300px]  flex flex-col  rounded-lg   bg-black  shadow ">
                  <div className=" relative h-56 overflow-hidden "><img src={image} className=''/></div>
                   <div className=" text-white "> 
                    <p className="font-bold text-xl px-2 pt-4">Sac à Dos Urbain 25L</p>
              <p className="px-2 text-sm">capacité (25L), les matériaux (résistant à l'eau)</p>
              <p className="px-2   font-bold text-xl  ">69,99€</p>
              <button className="border rounded-xl px-5 py-1 border-white bg-white text-black hover:bg-black/50 hover:text-white border-none mx-2 absolute bottom-4 right-10">
                Ajouter au panier 
              </button></div>
    </div>`
    const codeString3=`
 <div className="flex  w-full py-4  h-[400px] px-2 justify-center ">
            <div className="  w-[350px]    rounded-lg   bg-transparent   shadow ">
                <img src={imageToShow } className='hover:scale-125   w-full  h-full object-cover '/>
            </div>
            <div className="flex gap-2 px-3">
               
            {images.map(element=>{
                return  <img  key={element.id} src={element.url} className='w-20 h-20' onMouseEnter={()=>setImageToShow(element.url)}/>
            })}</div>
        </div>`
  return (
  <div className=" ">
    {/* : */}
    <div className="w-full border border-gray-200 flex flex-col    m-4  py-4 ">
        <div className="flex justify-center w-full ">
            <div className="rounded-xl relative w-[300px] h-[300px] ">
            {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Sac à Dos Urbain 25L</p>
                    <p className="px-2">capacité (25L), les matériaux (résistant à l'eau)</p>
                    <p className="px-2   font-bold text-xl  ">69,99€</p>
                    <button className="border rounded-xl px-5 py-1 border-white bg-white text-black hover:bg-black/50 hover:text-white border-none mx-2 absolute bottom-4 right-10">
                        Ajouter au panier 
                    </button>
                </div>
                <img
                className="max-h-[300px]  w-full object-cover rounded-xl"
                src={image}
                alt="/"
                />
            </div>
        </div>
   
        <div className="   mt-4  overflow-auto h-64 p-4 border  flex justify-center border-gray-300 rounded-lg">
          <Prism language="jsx" style={solarizedlight} >
            {codeString}
          </Prism>
        </div>
    </div>

    <div className="w-full border border-gray-200 flex flex-col    py-4 m-4 ">
        <div className="flex justify-center w-full ">
            <div className="  w-[300px]  flex flex-col  rounded-lg   bg-black  shadow ">
                <div className=" relative h-56 overflow-hidden "><img src={image} className=''/></div>
                <div className=" text-white "> 
                    <p className="font-bold text-xl px-2 pt-4">Sac à Dos Urbain 25L</p>
                    <p className="px-2 text-sm">capacité (25L), les matériaux (résistant à l'eau)</p>
                    <p className="px-2   font-bold text-xl  ">69,99€</p>
                    <button className="border rounded-xl px-5 py-1 border-white bg-white text-black hover:bg-black/50 hover:text-white border-none mx-2 absolute bottom-4 right-10">
                        Ajouter au panier 
                    </button>     
                </div>
            </div>
        </div>
   
        <div className="   mt-4  overflow-auto h-64 p-4 border  flex justify-center border-gray-300 rounded-lg">
          <Prism language="jsx" style={solarizedlight} >
            {codeString2}
          </Prism>
        </div>
    </div>

    <div className="w-full border border-gray-200 flex flex-col    py-4 m-4 ">
        <div className="flex justify-center w-full ">
            <div className="  w-[400px]  flex flex-col  rounded-lg   bg-transparent   shadow ">
                <div className=" relative h-40 overflow-hidden  flex justify-center py-4"><img src={user} className='rounded-full  w-32 h-32 '/></div>
                <div className="border-t border-gray-400"></div>
                <div className="   p-2  flex flex-col gap-4  "> 
                    <p className=" text-black font-bold text-xl px-2 pt-4">Anna Brinkon </p>
                    <p className="px-2 text-sm">Développeur Fullstack</p>
                   
                    <button className="border   rounded-xl px-5 py-1 border-white bg-black text-white hover:bg-black/50 hover:text-white border-none mx-2 ">
                        Voir profil  
                    </button></div>
                </div>
            </div>
   
        <div className="   mt-4  overflow-auto h-64 p-4 border  flex justify-center border-gray-300 rounded-lg">
          <Prism language="jsx" style={solarizedlight} >
            {codeString3}
          </Prism>
        </div>
    </div>
         

    <div className="w-full border border-gray-200 flex flex-col    py-4 m-4 ">
       
        <div className="flex  w-full py-4  h-[400px] px-2 justify-center ">
            <div className="  w-[350px]    rounded-lg   bg-transparent   shadow ">
                <img src={imageToShow } className='hover:scale-125   w-full  h-full object-cover '/>
            </div>
            <div className="flex gap-2 px-3">
               
            {images.map(element=>{
                return  <img  key={element.id} src={element.url} className='w-20 h-20' onMouseEnter={()=>setImageToShow(element.url)}/>
            })}</div>
        </div>
            
        <div className="   mt-4  overflow-auto h-64 p-4 border  flex justify-center border-gray-300 rounded-lg">
          <Prism language="jsx" style={solarizedlight} >
            {codeString3}
          </Prism>
        </div>
    </div>
    
  
  </div>
    
   

 
  )
}

export default Card