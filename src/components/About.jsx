/* eslint-disable no-unused-vars */
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

                    <p>
                        Your live-in carer is there to provide the type and level of support that you specifically want.

                        Welcoming a new person into your home can be quite daunting. It may be the first time you’ve ever lived with someone else, or you might not have lived with someone since your partner passed or your children left home.
                    </p>
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

            <div className="flex items-center justify-center flex-wrap abt1 gap-7">
                <img src="https://res.cloudinary.com/pitz/image/upload/v1708632398/Capture_w402mx.png" alt="" />
                <div style={{ width: '45%' }} className="flex abt1 flex-col gap-5">
                    <h1 className="text-red-600 abt1">Nurses</h1>
                    <p className="text-lg">Our registered nurses work closely with the individuals and their families,
                        carers and partners to promote independence and prevent ill health.
                        Their aim is to improve quality of life for individuals and get the best
                        possible outcomes and experience of care holistically.
                    </p>
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
            </div>
            <div className="flex items-center p-1 justify-center bg-slate-200    mt-10 mb-10 w-full ">
                <div  className="flex   items-center gap-7 flex-col w-full  relative shad p-2">
                    {/* <img className="h24 w-64 left-80  absolute" src="https://res.cloudinary.com/pitz/image/upload/v1708689842/Capture-removebg-preview_vqwnb6.png" alt="" /> */}
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