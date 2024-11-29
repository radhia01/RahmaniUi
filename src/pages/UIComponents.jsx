
import { React,useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Form from "../components/Form"
import Modal from '../components/Modal'
import Nav from '../components/Nav'
function UIComponents() {
  const [showButtons, setshowButtons] = useState(true)
  const [showCards, setshowCards] = useState(false)
  const [showForms, setshowForms] = useState(false)
  const [showModals, setshowModals] = useState(false)
  const [showNav, setshowNav] = useState(false)
  const [selectedItem, setSelectedItem] = useState("")
  const handleSelectedItem=(item)=>{
    setSelectedItem(item)
  }
  const handleShowButtons=()=>{
    setshowButtons(true)
    setshowCards(false)
    setshowModals(false)
    setshowNav(false)
    setshowForms(false)
    setSelectedItem("button")
  }
  const handleShowCards=()=>{
    setshowButtons(false)
    setshowCards(true)
    setshowModals(false)
    setshowNav(false)
    setshowForms(false)
    handleSelectedItem("card")
  }
  const handleShowForms=()=>{
    setshowButtons(false)
    setshowCards(false)
    setshowModals(false)
    setshowNav(false)
    setshowForms(true)
    handleSelectedItem("form")
  }
  const handleShowModals=()=>{
    setshowButtons(false)
    setshowCards(false)
    setshowModals(true)
    setshowNav(false)
    setshowForms(false)
    handleSelectedItem("modal")
  }
  const handleShowNav=()=>{
    setshowButtons(false)
    setshowCards(false)
    setshowModals(false)
    setshowNav(true)
    setshowForms(false)
    setSelectedItem("nav")
  }
      
      
  return (
    <section className=' relative min-h-screen w-full  flex  flex-col  bg-gray-200   py-40  dark:bg-black ' id="components">
      
<div className="w-64  absolute left-2   bg-white py-10 px-2 shadow  "><ul>
  <li  className={`py-4 mx-2 bg-gray-200 m-2 text-bold hover:bg-yellow-500 hover:text-white ${selectedItem==="button"?"text-yellow-500":""}`}>  <button onClick={handleShowButtons}>Bouton</button>
    </li>
    <li className={`py-4 mx-2 bg-gray-200 m-2 text-bold hover:bg-yellow-500 hover:text-white ${selectedItem==="card"?"text-yellow-500":""}`}> <button  onClick={handleShowCards}>Carte</button> 
    </li>
    <li className={`py-4 mx-2 bg-gray-200 m-2 text-bold hover:bg-yellow-500 hover:text-white ${selectedItem==="form"?"text-yellow-500":""}`}>  <button onClick={handleShowForms}>Formulaire</button> 
    </li>
    <li className={`py-4 mx-2 bg-gray-200 m-2 text-bold hover:bg-yellow-500 hover:text-white ${selectedItem==="modal"?"text-yellow-500":""}`}> <button onClick={handleShowModals}> Modal</button> 
    </li>
    <li className={`py-4 mx-2 bg-gray-200 m-2 text-bold hover:bg-yellow-500 hover:text-white ${selectedItem==="nav"?"text-yellow-500":""}`}>  <button onClick={handleShowNav}>Barres de Navigation</button>
    </li>
    
    </ul></div>
    <div className=" ml-80 w-[70%]     justify-center ">
    <div className=' flex justify-center   '>
        <div className="bg-black w-full py-3 flex  justify-start px-2 "><button className=" font-bold bg-dark p-2 text-yellow-500 text-sm rounded-sm shadow  border  dark:text-gray-400">
      TailwindCSS et React
         </button></div>
      </div>
         <p className="text-gray-600 dark:text-gray-400 mb-24">
      Il est recommandé d'installer <span className="font-semibold text-yellow-500"><a href="https://tailwindcss.com/docs/installation">TailwindCSS</a></span> avec <span className="font-semibold text-yellow-500">ReactJS</span> pour pouvoir utiliser ces composants.
    </p>
      
      {showButtons && <Button/>}
    {showCards && <Card/>}
    {showForms && <Form/>}
    {showModals && <Modal/>}
    {showNav && <Nav/>}
    
      
    </div>

    </section>
  )
}

export default UIComponents