import React from 'react'
import { useState } from 'react'
import { Prism  } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'; 
   const ModalComponent=({closeModal})=>{
    
   
    return ( 
        <div className="absolute inset-0  bg-black bg-opacity-50 flex   items-center  justify-center ">
            <button onClick={closeModal} className="absolute  top-2 right-2 text-white hover:text-gray-700">
                  X
            </button> 
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-1/2  ">
                <div className="h-16"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, cupiditate.</h1></div>
                <div className="border border-gray-600"></div>
                <div className="flex mt-4 justify-center gap-10 ">
                    <button className='p-2 bg-green-800 text-white  border border-gray-800 hover:bg-white hover:text-gray-800 '>confirmer</button>
                    <button className='p-2 bg-gray-600 text-white  border border-gray-800 hover:bg-white hover:text-gray-800 ' onClick={closeModal}>annuler</button>
                </div>
                    
            </div>
            
        </div>
    )
   }
function Modal() {
  const [showModal, setshowModal] = useState(false)
  const closeModal=()=>{
    setshowModal(false)
  }
  const codeString=`
    import React from 'react'
    import { useState } from 'react'
    import { Prism  } from 'react-syntax-highlighter';
    import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'; 
    const ModalComponent=({closeModal})=>{
        return ( 
            <div className="absolute inset-0  bg-black bg-opacity-50 flex   items-center  justify-center">
                <button onClick={closeModal} className="absolute  top-2 right-2 text-white hover:text-gray-700">
                    X
                </button> 
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg h-1/2  w-1/2  ">
                    <div className="h-16"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, cupiditate.</h1></div>
                    <div className="border border-gray-600"></div>
                    <div className="flex mt-4 justify-center gap-10">
                        <button className='p-2 bg-green-800 text-white  border border-gray-800 hover:bg-white hover:text-gray-800 '>confirmer</button>
                        <button className='p-2 bg-gray-600 text-white  border border-gray-800 hover:bg-white hover:text-gray-800 '>annuler</button>
                    </div>
                </div>
            </div>
        )
   }
    function Modal() {
        const [showModal, setshowModal] = useState(false)
        const closeModal=()=>{
            setshowModal(false)
        }
            return ( 
                <div className='w-full relative bg-gray-300 h-full flex justify-center items-center '>
                    <div className=""> <button className='bg-stone-700 py-4 px-8 rounded-sm  text-white  hover:bg-white hover:text-gray-700' onClick={()=>setshowModal(true)}>Ouvrir </button></div>
            {showModal && <ModalComponent closeModal={closeModal}/>}
                </div>
            )
                      }
    export default Modal
    `
  return ( 

    <div className="  w-full  ">
        <div className='w-full relative  h-72  bg-gray-300    flex justify-center items-center '>
          <div className=""> <button className='bg-stone-700 py-4 px-8 rounded-sm  text-white  hover:bg-white hover:text-gray-700' onClick={()=>setshowModal(true)}>Ouvrir </button></div>
         {showModal && <ModalComponent closeModal={closeModal}/>}
         
       </div>
       <div className="   mt-4  overflow-auto h-64 p-4 border  flex justify-center border-gray-300 rounded-lg">
            <Prism language="jsx" style={solarizedlight} >
                {codeString}
            </Prism>
         </div>
    
    </div>
    
  )
}

export default Modal