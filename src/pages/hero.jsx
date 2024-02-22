// import React from 'react'

import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="flex items-center w-full justify-around hero p-3  flex-wrap ">
            <div className="hero-left flex flex-col gap-16">
                <h1 className="text-6xl about-text text-slate-600 font-bold">Welcome to Top PlanCare</h1>
                <p className="text-2xl">We provide the best services in the UK</p>
                <p className='text-lg text-slate-800 '>We’ll work with you and your family to establish your needs and preferences, creating a
                    bespoke care package that’s completely
                    unique to you, from occasional visiting care to 24-hour live-in care.!
                    We provides constant, round-the-clock care from a dedicated carer who lives with you in your home, offering a helping hand at a moment’s notice.
                </p>
                <Link to='/contact'>
                    <Button style={{
                        color: 'white'
                    }} className='flex bg-slate-600 text-white btn2'>Get Started</Button>
                </Link>


            </div>
            <div className="w-96 leee">
                <img className="h-96 ob" src="https://res.cloudinary.com/pitz/image/upload/v1707233859/WhatsApp_Image_2024-02-06_at_17.00.20-removebg-preview_rpte6g.png" alt="" />

            </div>
          
        </div>
    )
}

export default Hero