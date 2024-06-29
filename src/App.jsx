import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Main from "./Pages/Main"
import About from "./Pages/About"
import Gallery from "./Pages/Gallery"


function App() {
 
  return (

    <>
    <Header />
  <Routes >   
<Route path="/" element={<Main/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/galery" element={<Gallery/>}/>
   </Routes>
   
    <Footer />
      
   </>
  )
}

export default App
