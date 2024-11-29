import React from 'react'
import { useState } from 'react'
import { Prism  } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'; 
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";

import login from "../assets/login.jpg"

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import registerImage from "../assets/register.jpg"
function Form() {
    const codeString=`
import React from 'react'
import { useState } from 'react'
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";
import registerImage from "../assets/register.jpg"
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
            <div className="w-full py-4 ">
                    <div className=" grid grid-cols-2 ">
                    <div className=""><img  className="w-full h-full object-cover"src={registerImage}/>
                    </div>
                    <div className="shadow rounded relative flex flex-col py-5 px-10 bg-gray-50 container mx-auto">
                        <div>
                            <h1 className="font-bold text-3xl">Créez votre compte</h1>
                        </div>
                        <form className="py-10" onSubmit={handleSubmit}>
                            <div className="flex w-full space-x-4">
                                <div className="w-full">
                                    <input
                                            className="h-12 text-sm border border-gray-500 w-full focus:outline-none px-2 rounded-lg"
                                            type="text"
                                            required
                                            placeholder="Nom"
                                                                            />
                                </div>
                                <div className="w-full">
                                    <input
                                        className="h-12 text-sm border border-gray-500 w-full focus:outline-none px-2 rounded-lg"
                                        type="text"
                                        required
                                        placeholder="Prénom"
                                                />
                                </div>
                            </div>
                            <div className="w-full mt-4">
                                <input
                                        className="h-12 text-sm border border-gray-500 w-full focus:outline-none px-2 rounded-lg"
                                        type="email"
                                        required
                                        placeholder="Email"
                                            />
                            </div>
                            <div className="relative w-full mt-4">
                                <button
                                    type="button"
                                    className="text-sm font-bold absolute right-2 top-4 hover:outline-none"
                                    onClick={() => setShowPasswordForm(!showPasswordForm)}
                                >
                                    {showPasswordForm ? (
                                    <BiShow className="text-xl" />
                                    ) : (
                                    <GrHide className="text-xl" />
                                    )}
                                </button>
                            <input
                                className="h-12 border text-sm border-gray-500 w-full focus:outline-none px-2 rounded-lg"
                                type={showPasswordForm ? "text" : "password"}
                                required
                                placeholder="Mot de passe"
                                        />
                            </div>
                        <div className="text-red-600 mt-4">{errorMessage}</div>
                            <div className="mt-4">
                                    <button
                                            style={{ backgroundColor: "#CC8D1A" }}
                                            className="text-white rounded-sm w-full py-3 text-sm font-bold hover:bg-black"
                                        >
                                        Envoyer
                                </button>
                            </div>
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
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";
import login from "../assets/login.jpg"
function Form() {
    const [password, setPassword] = useState("")
    const [showPasswordForm, setShowPasswordForm] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(password.length<8){
            setErrorMessage("Votre mot de passe doit contenir au moins 8 caractéres ")
                               }
                     }
     return (
     <div className="grid grid-cols-2 bg-white">
        <div className="bg-white py-5 shadow rounded">
            <form className="py-4" onSubmit={handleSubmit}>
                <input className='h-16 m-4 border text-sm border-gray-500 w-2/3 focus:outline-none px-2 rounded-lg' type="email" required placeholder="nom d'utilisateur ou email "/>
                <div className="relative ">
                    <input className=' text-sm h-16 m-4 border border-gray-500 w-2/3 focus:outline-none px-2 rounded-lg' type={showPassword?"text":"password"}  required  onChange={e=>setPassword(e.target.value)}placeholder=' mot de passe  '/>
                    <button className='bg-white absolute  text-sm  font-bold top-9 text-black' type="button" onClick={()=>setshowPassword(!showPassword)}>{showPassword ? <BiShow className='text-xl' /> :<GrHide className='text-xl'/>}</button>
                </div>
                <div className='text-red-600'>{errorMessage}
                </div>
                <div className="flex  mt-4  flex-col justify-center items-center"><button className=' w-2/3bg-gray-300text-white font-semibold py-3 px-10hover:bg-gray-400'>Se connecter</button>
                    <a href="" className='text-gray-400  mt-2 underline'>Mot de passe oublié ?</a>
                </div>
                <div className="mt-2"><a href="#" className='text-gray-500'>Tu n'a pas encore du compte ? Créez le maintenant </a></div>
            </form>
                  
             <div className="flex items-center justify-center my-6">
                <div className="h-px w-full bg-gray-300"></div>
                <span className="mx-4 text-gray-500 font-medium">ou</span>
                <div className="h-px w-full bg-gray-300"></div>
            </div>
            <div className="flex flex-col py-4 px-2 justify-center items-center gap-5">
                <button className='flex gap-3 bg-blue-900 w-2/3 p-3 rounded  text-white items-center'> <FaFacebook className='mt-1'/>Se connecter avec Facebook </button>
                <button className='flex gap-3 bg-black w-2/3 p-3 rounded  text-white items-center'> <FaGoogle className='mt-1'/>Se connecter avec Google </button>
                <button className='flex gap-3 bg-blue-500 p-3 w-2/3 rounded  text-white items-center'> <FaLinkedin className='mt-1'/>Se connecter avec Linkedin </button>
            </div>
        </div>
        <div className=""><img src={login} className='w-full h-full object-cover'/></div>
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
            <div className="flex justify-center">
                <div className="w-1/2 rounded-3xl " style={{backgroundColor:"#F2F2F2"}}> 
                    <div className="text-white py-4 flex justify-center  archivo  items-center"><h1 className='text-4xl  text-black'>Contactez Nous </h1></div>
                    <form className="px-10 mt-4" onSubmit={handleSubmit}>
                        <div className="px-10">
                            <div className="  flex justify-center items-center w-full  ">
                                <label className="text-black ">Nom</label>
                            </div> 
                            <input className='h-12  m-4 w-full  border  bg-white border-gray-300 focus:outline-none px-2  rounded-sm text-white ' type="email" required placeholder='nom' />
                        </div>
                        <div className= "px-10  ">
                            <div className="  flex justify-center items-center w-full  "><label className="text-black ">Email</label></div> 
                            <input className='h-12  m-4 w-full   border  bg-white border-gray-300 focus:outline-none px-2  rounded-sm text-black ' type="email" required  placeholder='example@example.com'/>
                        </div>
                        <div className= "px-10  ">
                            <div className="  flex justify-center items-center w-full  "><label className="text-black ">Télephone</label></div> 
                            <input className='h-12  m-4 w-full   border  bg-white border-gray-300 focus:outline-none px-2  rounded-sm text-black ' type="text" required placeholder='telephone  ' />
                        </div>
                        <div className='text-red-600'>{errorMessage}</div>
                        <div className="px-10"><button className='  w-full bg-blue-950 text-white rounded-lg py-2 px-10 m-4 text-lg hover:bg-gray-200 hover:text-black'>Envoyer</button></div>
                    </form>
                </div>
            </div>
      )
    }
    
    export default Form
        `
    const [password, setPassword] = useState("")
    const [showPassword, setshowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [showPasswordForm, setShowPasswordForm] = useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(password.length<8){
            setErrorMessage("votre mot de passe doit contenir au moins 8 caractéres ")
        }
    }
  return (
    <div className=' grid grid-cols-1 gap-10'>

        <div className="w-full py-4 bg-gray-100 px-5 ">
            <div className=" grid grid-cols-2 shadow  ">
            <div className=""><img  className="w-full h-full object-cover"src={registerImage}/>
            </div>
            <div className="shadow rounded relative flex flex-col py-5 px-10 bg-gray-50 container mx-auto">
                <div>
                    <h1 className="font-bold text-3xl">Créez votre compte</h1>
                </div>
                <form className="py-10" onSubmit={handleSubmit}>
                    <div className="flex w-full space-x-4">
                        {/* Champ Nom */}
                        <div className="w-full">
                            <input
                                    className="h-12 text-sm border border-gray-500 w-full focus:outline-none px-2 rounded-lg"
                                    type="text"
                                    required
                                    placeholder="Nom"
                                                                     />
                        </div>
                       {/* Champ Prénom */}
                        <div className="w-full">
                             <input
                                className="h-12 text-sm border border-gray-500 w-full focus:outline-none px-2 rounded-lg"
                                type="text"
                                required
                                placeholder="Prénom"
                                         />
                        </div>
                    </div>
                    {/* Champ Email */}
                    <div className="w-full mt-4">
                        <input
                                className="h-12 text-sm border border-gray-500 w-full focus:outline-none px-2 rounded-lg"
                                type="email"
                                required
                                placeholder="Email"
                                    />
                    </div>
                    {/* Champ Mot de passe */}
                    <div className="relative w-full mt-4">
                        <button
                            type="button"
                            className="text-sm font-bold absolute right-2 top-4 hover:outline-none"
                            onClick={() => setShowPasswordForm(!showPasswordForm)}
                        >
                            {showPasswordForm ? (
                            <BiShow className="text-xl" />
                            ) : (
                            <GrHide className="text-xl" />
                            )}
                        </button>
                       <input
                        className="h-12 border text-sm border-gray-500 w-full focus:outline-none px-2 rounded-lg"
                        type={showPasswordForm ? "text" : "password"}
                        required
                        placeholder="Mot de passe"
                                />
                    </div>
 
                   <div className="text-red-600 mt-4">{errorMessage}</div>
    
                    <div className="mt-4">
                            <button
                                    style={{ backgroundColor: "#CC8D1A" }}
                                    className="text-white rounded-sm w-full py-3 text-sm font-bold hover:bg-black"
                                >
                                Envoyer
                        </button>
                    </div>
               </form>
            </div>

         
            </div>
            
            <div className="   mt-4  overflow-auto  h-80 p-4   flex justify-center  rounded-lg">
                <Prism language="jsx" style={solarizedlight} >
                    {codeString}
                </Prism>
          </div>
        </div>
        <div className="w-full shadow     flex flex-col justify-center ">
           <div className="  grid grid-cols-2 bg-white  ">
                <div className=" bg-white  py-5 shadow rounded">
                        <form className="py-4  " onSubmit={handleSubmit}>
                            <input className='h-16  m-4  border  text-sm border-gray-500 w-2/3 focus:outline-none px-2  rounded-lg' type="email" required placeholder="nom d'utilisateur ou email "/>
                            <div className="relative ">
                                <input className='    text-sm  h-16  m-4    border     border-gray-500 w-2/3 focus:outline-none px-2  rounded-lg' type={showPassword?"text":"password"}  required  onChange={e=>setPassword(e.target.value)}placeholder=' mot de passe  '/>
                                    <button className='bg-white absolute  text-sm  font-bold top-9 text-black' type="button" onClick={()=>setshowPassword(!showPassword)}>{showPassword ? <BiShow className='text-xl' /> :<GrHide className='text-xl'/>}</button>
                            </div>
                            <div className='text-red-600'>{errorMessage}
                            </div>
                            <div className="flex  mt-4  flex-col justify-center items-center"><button className='  w-2/3 bg-gray-300  text-white font-semibold   py-3 px-10    hover:bg-gray-400 '>Se connecter</button>
                                <a href="" className='text-gray-400  mt-2 underline'>Mot de passe oublié ?</a>
                            </div>
                            <div className="mt-2"><a href="" className='text-gray-500'>Tu n'a pas encore du compte ? Créez le maintenant </a></div>
                        </form>
                  
                    <div className="flex items-center justify-center my-6">
                            <div className="h-px w-full bg-gray-300"></div>
                            <span className="mx-4 text-gray-500 font-medium">ou</span>
                            <div className="h-px w-full bg-gray-300"></div>
                    </div>
                    <div className="flex flex-col py-4 px-2 justify-center items-center gap-5">
                        <button className='flex gap-3 bg-blue-900 w-2/3 p-3 rounded  text-white  items-center '> <FaFacebook className='mt-1'/>Se connecter avec Facebook </button>
                        <button className='flex gap-3 bg-black w-2/3 p-3 rounded  text-white  items-center '> <FaGoogle className='mt-1'/>Se connecter avec Google </button>
                        <button className='flex gap-3 bg-blue-500 p-3 w-2/3 rounded  text-white  items-center '> <FaLinkedin className='mt-1'/>Se connecter avec Linkedin </button>
                    </div>
                </div>
                <div className=""><img src={login} className='w-full h-full object-cover'/></div>
           </div>
        
            <div className="   mt-4  overflow-auto h-80 p-4   flex justify-center  rounded-lg">
                <Prism language="jsx" style={solarizedlight} >
                    {codeString1}
                </Prism>
          </div>
        </div>

        <div className="w-full border  border-gray-400 py-4  bg-white  rounded-lg   flex flex-col justify-center ">
        <div className="flex justify-center">
            <div className="w-1/2 rounded-3xl " style={{backgroundColor:"#F2F2F2"}}> 

            <div className="text-white py-4 flex justify-center  archivo  items-center"><h1 className='text-4xl  text-black'>Contactez Nous </h1></div>
           
           <form className="px-10 mt-4" onSubmit={handleSubmit}>
               <div className= " px-10  ">
                   <div className="  flex justify-center items-center w-full  "><label className="text-black ">Nom</label></div> 
                   <input className='h-12  m-4 w-full  border  bg-white border-gray-300 focus:outline-none px-2  rounded-sm text-white ' type="email" required placeholder='nom' />
               </div>
              <div className= "px-10  ">
                   <div className="  flex justify-center items-center w-full  "><label className="text-black ">Email</label></div> 
                   <input className='h-12  m-4 w-full   border  bg-white border-gray-300 focus:outline-none px-2  rounded-sm text-black ' type="email" required  placeholder='example@example.com'/>
              </div>
              <div className= "px-10  ">
                   <div className="  flex justify-center items-center w-full  "><label className="text-black ">Télephone</label></div> 
                   <input className='h-12  m-4 w-full   border  bg-white border-gray-300 focus:outline-none px-2  rounded-sm text-black ' type="text" required placeholder='telephone ' />
              </div>
              {/* <div className="px-10  ">
              <div className="  flex justify-center items-center w-full  "><label className="text-black ">Message</label></div> 
                   <textarea className='  m-4  border  bg-white  border-gray-300 w-full focus:outline-none px-2  rounded-lg' rows="15" required />
              </div> */}
               <div className='text-red-600'>{errorMessage}</div>
                   <div className="px-10"><button className='  w-full bg-blue-950 text-white rounded-lg  py-2 px-10 m-4  text-lg    hover:bg-gray-200 hover:text-black '>Envoyer</button></div>
           </form>
            </div>
       
        </div>
         
            <div className="   mt-4  overflow-auto h-80 p-4   flex justify-center  rounded-lg">
                <Prism language="jsx" style={solarizedlight} >
                    {codeString2}
                </Prism>
          </div>
        </div>

        


    </div>
  )
}

export default Form