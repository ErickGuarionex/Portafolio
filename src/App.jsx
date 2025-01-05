import DevInfo from "./Components/DevInfo"
import MainImage from "./Components/MainImage"
import Menu from "./Components/Menu"
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"
import { useEffect } from "react"



export default function App(){

  useEffect(() =>{
    ScrollReveal().reveal('.container')
  }, [])
  
  return(
    <>
      <div className="container bg-black h-screen">
        <Menu />
        <MainImage />
        <DevInfo />     
      </div>

      <div>
        <MainContent />
      </div>

      <Footer />
    </>
  )
}