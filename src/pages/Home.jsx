/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"
import Complex from "./Complex"
import Welcome from "./Welcome"
import WhyChooseUs from "./WhyChooseUs"
import Hero from "./hero"

const Home = ({ searchResults }) => {
    return (
        <div className="">
           {searchResults &&(
             <div className="text-black home-main flex flex-wrap items-center justify-center gap-6 w-full">
             {searchResults?.map((result, index) => (
                 <div style={{width:'25%'}}  className=" abt1 border rounded-lg bg-slate-100 pt-28 w-full" key={index}>                    
                  <img className="w-full" src={result.item.image} alt={result.item.title} />

                     <h3>{result.item.title}</h3>
                     <p>{result.item.description}</p>
                 </div>
             ))}
         </div>
           )}
            <Hero />
            <Welcome />
            <Complex />
            <WhyChooseUs />
            <Outlet />
        </div>
    )
}

export default Home