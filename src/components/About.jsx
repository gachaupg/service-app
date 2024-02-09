import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { Data, Data1 } from "../utils/data"

const About = () => {
    return (
        <div className='flex w-full  justify-center p-5 flex-col'>
            <h1 className='text-5xl  mb-10 ml-12 text-pink-400'>About Us</h1>

            <div className='flex w-full items-center justify-center gap-7 flex-wrap'>
                <div className="about-lef">
                    <h1 className="text-1xl abt  text-slate-600 font-semibold"> Top PlanCare An internatinal Hospitality and care services provider based in Uk</h1>
                    <hr />
                    <h1 className="text-2xl text-pnk-300 mb-3 mt-3">Directors</h1>
                    
                    <ul>
                        <li>Joseph Wagura</li>
                        <li>Jacckie  Chombo</li>
                        <li>Immaculate Nderity</li>
                    </ul>
                </div>
                <div className="about-lef">
                    <p className='text-lg w-full text-slate-600'>Hospitality services play a profound role in palliative care. Hospitality services contribute to dignity, compassion and respect.
                        A service ecosystems lens is a useful means of organising knowledge.
                        Knowledge, emotions, amenities, social, and holistic are dominant theme
                        omnis sed doloremque harum modi quod ex, dolores voluptate commodi!</p>
                    <Link to='/contact'>
                        <Button style={{
                            color: 'white'
                        }} className='flex bg-slate-600 text-white btn2'>Contact us</Button>

                    </Link>
                </div>
            </div>
            <div className="flex gap-6 mb-12 flex-wrap w-full">
            {Data.map((item, index) => {
                return (
                    <div key={item.title} className="flex flex-col bg-slate-100 h-84 w-96 rounded-lg mt-2">
                       <img src={item.image} alt="" />
                        <button className="rounded-lg ml-2  p-2 flex  bg-yellow-400 w-32">
                            Find out more
                        </button>
                    </div>
                )

            }
            )}
            </div>

        </div>
    )
}

export default About




// const About = () => {
//     return (
//         <div className=' about w-full flex  justify-around bg-slate-200 gap-5 '>

//             <div className="flex items-center left flex-col gap-6 w-full">
//                 <h1 className='text-5xl text-pink-400'>About Us</h1>
//                 <p className='text-2xl'>We provide the best services in the UK</p>
//                 <div className="flex flex-col gap-4">
//                     <h3 className='text-1xl text-slate-400'>Our Mission</h3>
//                     <p>

//                         At  our mission is to enhance the quality of life for our clients by offering personalized care solutions tailored to their unique needs.
//                         We are committed to promoting independence, dignity
//                         , and well-being while fostering a sense of community and belonging.
//                     </p>
//                     <h3> Services We Offer:</h3>
//                     <ul>
//                         <li>


//                             Accommodation: Our comfortable and well-equipped facilities provide a safe and welcoming environment for individuals requiring temporary or long-term accommodation.
//                             Care Services: Our team of trained professionals offers a range of care services, including personal care assistance, medication management, and specialized care for individuals with specific medical or mobility needs.
//                             Support Services: We understand that every individual has unique requirements, which is why we offer personalized support services to assist with daily activities, transportation, meal preparation, and more.
//                             Community Engagement: We believe in the power of community and offer various social and recreational activities to promote socialization, mental stimulation, and overall well-being.
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="flex flex-col gap-5">
//                     <h3 className='text-1xl text-slate-400'>Our Directors</h3>
//                     <div className="flex flex-col.gap-6">
//                         <ul>
//                             <li>Joseph Wagura</li>
//                             <li>Jacckie  Chombo</li>
//                             <li>Immaculate Nderity</li>
//                         </ul>
//                     </div>
//                     <p>Hospitality services play a profound role in palliative care. Hospitality services contribute to dignity, compassion and respect.
//                         A service ecosystems lens is a useful means of organising knowledge.
//                         Knowledge, emotions, amenities, social, and holistic are dominant theme
//                         omnis sed doloremque harum modi quod ex, dolores voluptate commodi!</p>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default About