import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import DrawerAppBar from "./components/Navbar"
import Footer from "./components/Footer"
import HomeCare from "./pages/HomeCare"
import ComplexCrae from "./pages/ComplexCrae"
import Contact from "./components/Contact"
import About from "./components/About"
import Services from "./pages/Services"
import React from "react"
import Fuse from 'fuse.js';
import { Data } from "./utils/data"

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const options = {
    keys: ['title'],
  }
  const fuse = new Fuse(Data, options);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const results = fuse.search(term);
    setSearchResults(results);
  };
  return (
    <div>  
           
       <BrowserRouter>
       {/* hh */}
       {/* <Topbar/> */}
       {/* <hr /> */}
       <DrawerAppBar handleSearch={handleSearch} searchTerm={searchTerm} />
        <Routes>
        <Route path="/" element={<Home searchResults={searchResults} />} />
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