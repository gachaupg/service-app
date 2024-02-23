// import React from 'react'

import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="flex pl-1 items-center w-full justify-center hero p-1 gap-4 flex-wrap ">
            <div style={{
                width:'45%'
            }} className="hero-left  bg--300 rounded-lg p-3 w-full flex items- justify-center flex-col gap-24">
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
                    }} className='flex bg-slate-600 text-white btn2'>Get Started</Button>
                </Link>
            </div>
            <div style={{width:'50%'}} className=" leee">
            <div className="flex items-center p-1 justify-center bg-slate-200    mt-10 mb-10 w-full ">
                <div  className="flex   items-center gap-7 flex-col w-full  relative shad p-2">
                    <img className="h24 w-64 left-80  absolute" src="https://res.cloudinary.com/pitz/image/upload/v1708689842/Capture-removebg-preview_vqwnb6.png" alt="" />
                    <h1 className="text-pink-700 a text-3xl pt-10">Our Mission & Vision</h1>
                    <p className="w-full text-lg">
                        Our aim is to provide Flexible Supported Living services with a focus on
                        the service users.
                        Topplancare Healthcare services aim to provide regulated activities of
                        personal care and nursing care in ways which have positive outcomes
                        for all service users and provide their active participation and personal
                        contribution.
                        To ensure that we are fit for purpose, we examine our operations and
                        facilities constantly to ensure that we are successfully achieving our
                        stated aims and objectives. In addition, we also welcome feedbacks from
                        our service users, friends and families. To work for a comprehensive
                        welfare of our service users, we aim to provide for each service user a
                        package of care that contributes to his /her personal and healthcare
                        needs and preferences.
                        We will co-operate with MDT Teams, local authorities, other services and
                        professionals to help maximise each service user’s independence and to
                        ensure as fully as possible the service user’s maximum participation in
                        the community.
                        In order to meet the assessed needs, before we provide the service, our
                        aim is to ensure that a potential service user’s needs and preferences
                        are thoroughly assessed and ensure that the care provided meets the
                        assessed needs of each service user. We shall carry frequent reassessment of care needs as necessary in line with any changing needs
                        or requirements
                    </p>
                </div>
            </div>
            </div>    
        </div>
    )
}

export default Hero