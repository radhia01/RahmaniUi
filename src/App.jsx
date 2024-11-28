
import './App.css'
import Templates from './pages/Templates'
import  Navbar from "./pages/Navbar"
import UIComponents from './pages/UIComponents'
import About from './pages/About'
import Footer from './pages/Footer'
import { useState,useEffect } from 'react'
function App() {
 
  const [dark, setdark] = useState(false)
  console.log(dark)
  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    
  }, [dark]);
  const handleMode = () => setdark(!dark);
  return (
    <main className=" bg-white  w-screen h-screen  justify-center py-3  items-center  overflow-hidden  overflow-y-auto  container mx-auto">
      <Navbar dark={dark} setdark={setdark} handleMode={handleMode}/>
      <About/>
      <Templates/>
      <UIComponents/>
      <Footer/>
    
    
     
      
     
    </main >
  )
}

export default App
