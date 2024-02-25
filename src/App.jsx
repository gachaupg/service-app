import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import DrawerAppBar from "./components/Navbar"
import Footer from "./components/Footer"
import HomeCare from "./pages/HomeCare"
import ComplexCrae from "./pages/ComplexCrae"
import Contact from "./components/Contact"
import About from "./components/About"
import Services from "./pages/Services"


const App = () => {
  return (
    <div>  
           
       <BrowserRouter>
       {/* hh */}
       {/* <Topbar/> */}
       {/* <hr /> */}
       <DrawerAppBar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-care" element={<HomeCare />} />
        <Route path="/complex" element={<ComplexCrae />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        </Routes>
        <Footer/>

       </BrowserRouter>
    </div>
  )
}

export default App