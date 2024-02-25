/* eslint-disable react/no-unescaped-entities */
import { Call, Email, Facebook, WhatsApp } from "@mui/icons-material";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer w-full flex flex-col flex-wrap items-center p-5 pt-5 justify-center gap-5'>
            <h1 className="text-5xl mt-32 text-white">Let's Get in Touch</h1>
            <div className='footer w-full flex  flex-wrap items-center justify-center gap-3'>
                <div style={{ width: '28%' }} className="flex flex-col gap-6 abt1">
                    <h1 className="text-4xl text-white">About</h1>
                    <p className="text-white">We offer care & support options starting from a carer who can come in for as little as 30min a day upwards to a carer living with you providing care 24hrs a day.  Learn more.</p>
                    <a className="mt-5" href="https://www.facebook.com/Top-Notch-Healthcare-Services-102686901950365/?ref=pages_you_manage">
                        <FaFacebook size={46} color="blue" />
                    </a>
                    <div className="flex mt-7 text-white">
                        Copyright © {new Date().getFullYear()} Topplancare  Limited
                    </div>
                </div>
                <div style={{ width: '28%' }} className="flex flex-col gap-6  abt1">
                    <h1 className="text-4xl text-white">Site Navigation</h1>
                    <ul className="text-white">
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li>About</li>
                        </Link>
                        <Link to='/services'>
                            <li>Services</li>
                        </Link>
                        <Link to='/contact'>
                            <li>Contact</li>
                        </Link>
                    </ul>
                    <div className="flex mt-16 text-white">
                        <a href="mailto:info@topplancare.com">MailTo: info@topplancare.com</a>
                    </div>
                </div>
                <div style={{ width: '28%' }} className="flex flex-col gap-10 text-white  abt1">
                    <h1 className="text-4xl text-white">Contact</h1>
                    <p>Telephone: 02037402749</p>
                    <div className=" flex  justify gap-8">
                        <Facebook className="text-pink-500  text-2xl" fontSize="20" />

                        <Email className="text-pink-500  text-4xl" />
                        <WhatsApp className="text-pink-500  text-4xl" />
                        <a href="tel:02037402749">
                            <Call className="text-pink-500  text-4xl" />
                        </a>
                    </div>
                    <div className='mt-6 flex justify-around items-center '><Call size={38} /> 02037402749 </div>
                    <div className=" flex flex-col gap-4 mt-8 ml-12 justify-evenly">
                        <h4 className="text-2xl">Londoneast tttt UK.</h4>
                        <p>Business and Technical park</p>
                        <p>Yew tree Avenue Rm 10 7FN</p>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer