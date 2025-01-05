import DevInfo from "./Components/DevInfo"
import MainImage from "./Components/MainImage"
import Menu from "./Components/Menu"
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"

export default function App(){
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