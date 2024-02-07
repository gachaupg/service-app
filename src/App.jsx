import { BrowserRouter, Route, Routes } from "react-router-dom"
import DrawerAppBar from "./components/Navbar"
import Contact from "./components/Contact"
import StickyFooter from "./components/Footer"
import Home from "./pages/Home"
import About from "./components/About"

const App = () => {
  return (
    <div>        <BrowserRouter>

        <DrawerAppBar/>
        <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        </Routes>
        <StickyFooter/>
        </BrowserRouter>
    </div>
  )
}

export default App