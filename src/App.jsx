import { BrowserRouter, Route, Routes } from "react-router-dom"
import DrawerAppBar from "./components/Navbar"
import Contact from "./components/Contact"
// import StickyFooter from "./components/Footer"
import Home from "./pages/Home"
import About from "./components/About"
import Categories from "./pages/Categories"
import Services from "./pages/Services"

const App = () => {
  return (
    <div>        <BrowserRouter>

        <DrawerAppBar/>
        <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/services" element={<Services />} />
        </Routes>
        {/* <StickyFooter/> */}
        </BrowserRouter>
    </div>
  )
}

export default App