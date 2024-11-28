import React from 'react'
import { useState } from 'react'
import { Prism  } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'; 
function Form() {
    const codeString=`
import React from 'react'
import { useState } from 'react'

function Form() {
    const [password, setPassword] = useState("")
    const [showPassword, setshowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(password.length<8){
            setErrorMessage("votre mot de passe doit contenir au moins 8 caractéres ")
                               }
                     }
  return (
    <div className=' grid grid-cols-1 gap-10'>
        <div className="w-full border border-gray-200 py-4 ">
            <div className=""><h1 className='font-bold text-lg'>S'inscrire </h1>
            </div>
            <form className="" onSubmit={handleSubmit}>
                <input className='h-16  m-4    border border-gray-500  w-1/2 focus:outline-none px-2  rounded-lg'  type="text" required   placeholder='firstName'/>
                <input className='h-16  m-4  border border-gray-500 w-1/2 focus:outline-none px-2  rounded-lg' type="text"   required placeholder='LastName'/>
                <input className='h-16  m-4  border  border-gray-500 w-1/2 focus:outline-none px-2  rounded-lg' type="email" required placeholder='email'/>
                <input className='h-16  m-4  border  border-gray-500 w-1/2 focus:outline-none px-2  rounded-lg' type="password"  required  onChange={e=>setPassword(e.target.value)}placeholder='password'/>
                <div className='text-red-600'>{errorMessage}</div>
                <div className=""><button className='bg-blue-700 text-white rounded-lg  py-3 px-10 text-sm font-bold  hover:bg-black '>Envoyer</button></div>
            </form>
        </div>
    </div>
  )
}

export default Form
    `

    const codeString1=`
import React from 'react'
import { useState } from 'react'

function Form() {
    const [password, setPassword] = useState("")
    const [showPassword, setshowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(password.length<8){
            setErrorMessage("votre mot de passe doit contenir au moins 8 caractéres ")
                               }
                     }
  return (
       <div className="w-full border border-gray-200 py-4  flex flex-col justify-center ">
        <div className=""><h1 className='font-bold text-lg'>Se connecter </h1></div>
            <form className="" onSubmit={handleSubmit}>

                <div className="">
                    <input className='h-16  m-4  border  border-gray-500 w-1/2 focus:outline-none px-2  rounded-lg' type="email" required placeholder='email'/></div>
                 <  div className="relative ">
                  <input className='    h-16  m-4    border     border-gray-500 w-1/2 focus:outline-none px-2  rounded-lg' type={showPassword?"text":"password"}  required  onChange={e=>setPassword(e.target.value)}placeholder='password'/>
                 <button className='bg-white  absolute right-56 text-sm  font-bold top-9 text-black' type="button" onClick={()=>setshowPassword(!showPassword)}>{showPassword ? "hide" :"show"}</button>
               </div>
                <div className='text-red-600'>{errorMessage}</div>
                <div className=""><button className='  bg-indigo-600 text-white rounded-lg  py-3 px-10 text-sm font-bold  hover:bg-black '>Se connecter</button></div>
            </form>
           
        </div>
  )
}

export default Form
    `
    const codeString2=`
    import React from 'react'
    import { useState } from 'react'
    
    function Form() {
       
      return (
                <div className="w-full border border-gray-200  py-4  rounded-lg bg-gray-900  flex flex-col justify-center ">
                    <div className="text-white py-4 flex justify-center  items-center"><h1 className='text-xl font-bold'>Contact </h1></div>
                    <div className='border-t  border-white '></div>
                    <form>
                        <div className= " px-32 flex ">
                            <div className=" w-20 flex justify-end items-center "><label className="text-white ">Nom</label></div> 
                            <input className='h-16  m-4 w-2/3   border  bg-gray-800 border-gray-500 focus:outline-none px-2  rounded-lg text-white ' type="email" required />
                        </div>
                        <div className= " px-32 flex ">
                            <div className=" w-20 flex justify-end items-center "><label className="text-white ">Email</label></div> 
                            <input className='h-16  m-4 w-2/3   border  bg-gray-800 border-gray-500 focus:outline-none px-2  rounded-lg text-white ' type="email" required />
                        </div>
                        <div className= " px-32 flex ">
                            <div className=" w-20 flex justify-end items-center "><label className="text-white ">Sujet</label></div> 
                            <input className='h-16  m-4 w-2/3   border  bg-gray-800 border-gray-500 focus:outline-none px-2  rounded-lg text-white ' type="text" required />
                        </div>
                        <div className="px-32 flex ">
                            <div className=" w-20 flex mt-2 justify-end items-start "><label className="text-white ">Message</label></div> 
                            <textarea className='  m-4  border  bg-gray-800  border-gray-500 w-2/3 focus:outline-none px-2  rounded-lg' rows="15" required />
                        </div>
                        <div className="mb-4  py-8 relative"><button className='absolute left-56 w-1/2 bg-gray-500 text-white rounded-lg  py-3 px-10 text-sm font-bold  hover:bg-gray-200 hover:text-black '>Envoyer</button></div>
                    </form>
                </div>
      )
    }
    
    export default Form
        `
    const [password, setPassword] = useState("")
    const [showPassword, setshowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(password.length<8){
            setErrorMessage("votre mot de passe doit contenir au moins 8 caractéres ")
        }
    }
  return (
    <div className=' grid grid-cols-1 gap-10'>

        <div className="w-full border border-gray-200 py-4 ">
            <div className=""><h1 className='font-bold text-lg'>S'inscrire </h1></div>
          
            <form className="" onSubmit={handleSubmit}>
                <input className='h-16  m-4    border border-gray-500  w-1/2 focus:outline-none px-2  rounded-lg'  type="text" required   placeholder='firstName'/>
                <input className='h-16  m-4  border border-gray-500 w-1/2 focus:outline-none px-2  rounded-lg' type="text"   required placeholder='LastName'/>
                <input className='h-16  m-4  border  border-gray-500 w-1/2 focus:outline-none px-2  rounded-lg' type="email" required placeholder='email'/>
                <input className='h-16  m-4  border  border-gray-500 w-1/2 focus:outline-none px-2  rounded-lg' type="password"  required  onChange={e=>setPassword(e.target.value)}placeholder='password'/>
                <div className='text-red-600'>{errorMessage}</div>
                <div className=""><button className='bg-blue-700 text-white rounded-lg  py-3 px-10 text-sm font-bold  hover:bg-black '>Envoyer</button></div>
            </form>
            <div className="   mt-4  overflow-auto h-64 p-4   flex justify-center  rounded-lg">
                <Prism language="jsx" style={solarizedlight} >
                    {codeString}
                </Prism>
          </div>
        </div>
        <div className="w-full border border-gray-200 py-4  flex flex-col justify-center ">
        <div className=""><h1 className='font-bold text-lg'>Se connecter </h1></div>
            <form className="" onSubmit={handleSubmit}>

                <div className="">
                    <input className='h-16  m-4  border  border-gray-500 w-1/2 focus:outline-none px-2  rounded-lg' type="email" required placeholder='email'/></div>
                 <  div className="relative ">
                  <input className='    h-16  m-4    border     border-gray-500 w-1/2 focus:outline-none px-2  rounded-lg' type={showPassword?"text":"password"}  required  onChange={e=>setPassword(e.target.value)}placeholder='password'/>
                 <button className='bg-white  absolute right-56 text-sm  font-bold top-9 text-black' type="button" onClick={()=>setshowPassword(!showPassword)}>{showPassword ? "hide" :"show"}</button>
               </div>
                <div className='text-red-600'>{errorMessage}</div>
                <div className=""><button className='  bg-indigo-600 text-white rounded-lg  py-3 px-10 text-sm font-bold  hover:bg-black '>Se connecter</button></div>
            </form>
            <div className="   mt-4  overflow-auto h-64 p-4   flex justify-center  rounded-lg">
                <Prism language="jsx" style={solarizedlight} >
                    {codeString1}
                </Prism>
          </div>
        </div>

        <div className="w-full border border-gray-200  py-4  rounded-lg bg-gray-900  flex flex-col justify-center ">
            <div className="text-white py-4 flex justify-center  items-center"><h1 className='text-xl font-bold'>Contact </h1></div>
            <div className='border-t  border-white '></div>
            <form className="" onSubmit={handleSubmit}>
                <div className= " px-32 flex ">
                    <div className=" w-20 flex justify-end items-center "><label className="text-white ">Nom</label></div> 
                    <input className='h-16  m-4 w-2/3   border  bg-gray-800 border-gray-500 focus:outline-none px-2  rounded-lg text-white ' type="email" required />
                </div>
               <div className= " px-32 flex ">
                    <div className=" w-20 flex justify-end items-center "><label className="text-white ">Email</label></div> 
                    <input className='h-16  m-4 w-2/3   border  bg-gray-800 border-gray-500 focus:outline-none px-2  rounded-lg text-white ' type="email" required />
               </div>
               <div className= " px-32 flex ">
                    <div className=" w-20 flex justify-end items-center "><label className="text-white ">Sujet</label></div> 
                    <input className='h-16  m-4 w-2/3   border  bg-gray-800 border-gray-500 focus:outline-none px-2  rounded-lg text-white ' type="text" required />
               </div>
               <div className="px-32 flex ">
                    <div className=" w-20 flex mt-2 justify-end items-start "><label className="text-white ">Message</label></div> 
                    <textarea className='  m-4  border  bg-gray-800  border-gray-500 w-2/3 focus:outline-none px-2  rounded-lg' rows="15" required />
               </div>
                <div className='text-red-600'>{errorMessage}</div>
                    <div className="mb-4  py-8 relative"><button className='   absolute left-56 w-1/2 bg-gray-500 text-white rounded-lg  py-3 px-10 text-sm font-bold  hover:bg-gray-200 hover:text-black '>Envoyer</button></div>
            </form>
            <div className="   mt-4  overflow-auto h-64 p-4   flex justify-center  rounded-lg">
                <Prism language="jsx" style={solarizedlight} >
                    {codeString2}
                </Prism>
          </div>
        </div>

        


    </div>
  )
}

export default Form