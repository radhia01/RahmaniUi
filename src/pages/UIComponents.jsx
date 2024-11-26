import React from 'react'
import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

function UIComponents() {
  const [showButtons, setshowButtons] = useState(false)
  const [showCards, setshowCards] = useState(false)
  const [showForms, setshowForms] = useState(false)
  const [showModals, setshowModals] = useState(false)
  const [showNav, setshowNav] = useState(false)
  const handleShowButtons=()=>{
    setshowButtons(true)
    setshowCards(false)
    setshowModals(false)
    setshowNav(false)
  }
  const handleShowCards=()=>{
    setshowButtons(false)
    setshowCards(true)
    setshowModals(false)
    setshowNav(false)
  }

  return (
    <section className=' relative min-h-screen w-full  flex  py-40 ' id="composants">

<div className="w-64  absolute left-0    "><ul>
  <li  className='py-4 mx-2 bg-gray-100 m-2 hover:bg-yellow-500 hover:text-white '>  <button onClick={handleShowButtons}>Button</button>
    </li>
    <li className='py-4 mx-2 bg-gray-100 m-2 hover:bg-yellow-500 hover:text-white'> <button  onClick={handleShowCards}>Cartes</button> 
    </li>
    <li className='py-4 mx-2 bg-gray-100 m-2 hover:bg-yellow-500 hover:text-white'>  <button>Formulaires</button> 
    </li>
    <li className='py-4 mx-2 bg-gray-100 m- hover:bg-yellow-500 hover:text-white'> <button>Modales</button> 
    </li>
    <li className='py-4 mx-2 bg-gray-100 m-2 hover:bg-yellow-500 hover:text-white '>  <button>Barres de Navigation</button>
    </li>
    
    </ul></div>
    <div className=" ml-80 w-[70%]    justify-center ">{showButtons && <Button/>}
    {showCards && <Card/>}</div>

    </section>
  )
}

export default UIComponents