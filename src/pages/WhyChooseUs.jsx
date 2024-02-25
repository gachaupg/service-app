import { RiTeamFill } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdEditSquare } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";



const WhyChooseUs = () => {
    const data = [
        {
            icon: <RiTeamFill />,
            title: "QUALITY MANAGEMENT TEAM",
            desc: "TopPlan Healthcare Services management team are there to professionally guide and support our Complex Care teams so that they deliver the best care to you. Our management assist Carers with training, supervision and appraisals to ensure that you get bespoke tailored care service. In addition, they monitor our care services and act upon feedback received from you, your family and Carer to improve the quality of service provided to you"
        },
        {
            icon: <SiHomeassistantcommunitystore />,
            title: "Community care",
            desc: "At TopPlan Healthcare Services, we pride ourselves on providing a professional, tailored complex care service that meets your personal needs. Our relationship with you is key hence we try to maintain the Carers providing care to you to remain the same as we continue to support you or your loved one. This is done to create a mutual genuine bond with you."
        }, {
            icon: <MdEditSquare />,
            title: "OUR DEDICATED CARERS",
            desc: "We carefully select our Carers through their experience, personality and they go through DBS checking. In addition, we train them through industry approved qualifications to competently care and support you, whether as an individual Carer or working in pairs. If need be, multi-disciplinary teams, will be involved in delivering your care depending on your care needs. Our Carers take time to know you and your family in order to give you the support and care you need hence enabling you or your loved one to stay in control of your lives."
        }, {
            icon: <GrUserExpert />,
            title: "EXPERT AND SPECIALISED CARE",
            desc: "Your Complex Carer is often the best option in dealing with more serious health issues like when you have been diagnosed with Parkinson’s disease or Alzheimer’s. You will get a complex carer with the right working experience in these health conditions who can demonstrate a comprehensive understanding of how to care for and support you. Your complex carer as a trained person will be a source of reassurance to you and your loved ones as they can handle complications and any issues that might come up during your day.  We are proud of our complex carers as they have proven time after time our clients can rely on them and are a great source of comfort, care and support in difficult times."
        },
    ]
    return (
        <div className="flex flex-col items-center pb-4 justify-center gap-3">
            <h1 className="text-3xl text-red-600">Why Choose us</h1>
            <div className="flex w-full crd flex-wrap pt-4 justify-center items-center gap-12">
                {data.map((item, index) => {
                    return (
                        <div style={{ width: '37%' }} key={index} className="p-4 abt1 crdd flex flex-col items-center justify-  gap-2 bg-white shadow-2xl rounded-md">
                            <div className="flex items-center justify-center gap-3">
                                <div className="p-4 text-center  bg-red-600 text-white rounded-full">
                                    {item.icon}
                                </div>
                                <h1 className="text-xl font-bold">{item.title}</h1>
                            </div>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    )
                }

                )}


            </div>
        </div>
    )
}

export default WhyChooseUs