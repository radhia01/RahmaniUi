
import './App.css'
import Templates from './pages/Templates'
import  Navbar from "./pages/Navbar"
import UIComponents from './pages/UIComponents'
function App() {
 

  return (
    <main className=" bg-white  w-screen h-screen  justify-center py-3 p-2 items-center  overflow-hidden  overflow-y-auto ">
      <Navbar/>
      <div className="mt-">
      <Templates/>
      <UIComponents/>
      </div>
     
      
     
    </main >
  )
}

export default App
