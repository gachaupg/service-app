// import React from 'react'

import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="flex pl-44 items-center w-full justify-center hero p-3  flex-wrap ">
            <div className="hero-left border bg-slate-300 rounded-lg p-3 w-full flex items- justify-center flex-col gap-16">
                <h1 className="text-6xl about-text text-slate-600 font-bold">Welcome to Top PlanCare</h1>
                <p className="text-2xl">We provide the best services in the UK</p>
                <p className='text-lg text-slate-800 '>We’ll work with you and your family to establish your needs and preferences, creating a
                    bespoke care package that’s completely
                    unique to you, from occasional visiting care to 24-hour live-in care.
                    We provides constant, round-the-clock care from a dedicated carer who lives with you in your home, offering a helping hand at a moment’s notice.
                </p>
                <Link to='/contact'>
                    <Button style={{
                        color: 'white'
                    }} className='flex bg-slate-600 text-white btn2'>Get Started</Button>
                </Link>


            </div>
            <div style={{width:'45%'}} className=" leee">
            </div>    
        </div>
    )
}

export default Hero