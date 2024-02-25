// import React from 'react'

import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { LuArrowBigRight } from "react-icons/lu";
import YouTube from 'react-youtube';

const Hero = () => {
    const opts = {
        height: '430',
        width: '700',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        //   autoplay: 1,
        },
    }
    return (
        <div className="flex pl-1 items-center w-full justify-center home hero p-1 gap-4 flex-wrap ">
            <div style={{
                width:'45%'
            }} className="hero-left  bg--300 rounded-lg w-full flex items- justify-center flex-col gap-7">
                <h1 className="text-6xl about-text text-red-600 font-bold">Welcome to Top PlanCare</h1>
                <p className="text-2xl text-white">We provide the best services in the UK</p>
                <p className='text-lg text-white '>We’ll work with you and your family to establish your needs and preferences, creating a
                    bespoke care package that’s completely
                    unique to you, from occasional visiting care to 24-hour live-in care.
                    We provides constant, round-the-clock care from a dedicated carer who lives with you in your home, offering a helping hand at a moment’s notice.
                </p>
                <Link to='/contact'>
                    <Button style={{
                        color: 'white'
                    }} className='flex bg-slate-600 items-center text-white btn2'>View Our Services <LuArrowBigRight size={34}/></Button>
                </Link>
            </div>
            <div style={{width:'50%'}} className=" abt1">
            <YouTube className='vid' videoId="UfoSv_MCRBo" opts={opts} />
            </div>    
        </div>
    )
}

export default Hero