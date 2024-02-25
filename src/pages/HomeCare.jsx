import { Medication, People } from '@mui/icons-material'
import { Data } from '../utils/data'

const HomeCare = () => {
    const truncateDescription = (text, limit) => {
        const words = text.split(' ');
        const truncated = words.slice(0, limit).join(' ');
        return truncated + (words.length > limit ? '...' : '');
    };
    return (
        <div className='flex flex-col w-full justify-center items-center pt-16 '>
            <div className='home-care w-full flex flex-col items-center justify-center'>
                <h1 className='text-white text-2xl'>Our Services</h1>
                <p style={{ width: '45%' }} className='text-white abt1 mt-2 text-xl'>We are intentional in our service delivery  through a well trained and experienced team of carers who will provide care and support to suit your preferences, condition, and needs</p>
            </div>
            <div>
                <h1 className='text-white text-2xl'>Featured Services</h1>
                <div className="flex flex-wrap w-full justify-evenly gap-2 pt-5">
                    <iframe style={{ width: "45%", height: '22rem' }} className='abt1' src="https://www.youtube.com/embed/2qUcIQvnBC0" title="Personalisation: Promoting independence in care homes" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    <h1 style={{ width: "45%" }} className="text-xl text-black abt1">
                        Top-Notch Healthcare Services offers a range of home care services that <br /> are completely flexible to address your care needs <br /> and retain your independence. We offer options starting from a carer who can come in for <br /> as little as 30min a day upwards to carers living with you providing care 24hrs a day. <br /> This provides the much-needed care and support around your day-to-day activities <br /> enabling you to live independently as much as possible in your home and community for as long as possible.
                    </h1>
                </div>
            </div>
            <div className="flex flex-wrap w-full justify-evenly gap-2 pt-5">
                <img style={{ width: "45%" }} className=" abt1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpeJ4tm271-F2rKSrVhL07DI4O_Vk3zUgug&usqp=CAU" alt="" />
                <div style={{ width: "45%" }} className='flex abt1 gap-6 flex-col '>
                    <h1 className="text-3xl">Specialisms / services</h1>
                    <h1 style={{ width: "45%" }} className="text-xl text-black flex items-center gap-3 abt1">
                        <People />   Personal care
                    </h1>
                    <h1 style={{ width: "45%" }} className="text-xl text-black flex items-center gap-3 abt1">
                        <Medication />  Treatment of disease, disorder or injury.
                    </h1>  <h1 style={{ width: "45%" }} className="text-xl text-black flex items-center gap-3 abt1">
                        <People />   Caring for adults over 65 yr.
                    </h1>  <h1 style={{ width: "45%" }} className="text-xl text-black flex items-center gap-3 abt1">
                        <People />
                        Caring for adults under 65 yrs.
                    </h1>  <h1 style={{ width: "45%" }} className="text-xl text-black flex items-center gap-3 abt1">
                        <People />   Caring for children (0 - 18yrs)Dementia
                    </h1>
                </div>
            </div>
            <div className="flex flex-wrap w-full justify-evenly gap-2 pt-5">
                <div style={{ width: "45%" }} className='flex abt1 gap-6 flex-col '>
                    <h1 className="text-3xl">Specialisms / services</h1>
                    <h1 style={{ width: "45%" }} className="text-xl text-black flex items-center gap-3 abt1">
                        <People />   Eating disorders.
                    </h1>
                    <h1 style={{ width: "45%" }} className="text-xl text-black flex items-center gap-3 abt1">
                        <Medication /> Learning disabilities.
                    </h1>  <h1 style={{ width: "45%" }} className="text-xl text-black flex items-center gap-3 abt1">
                        <People />Mental health conditions.
                    </h1>  <h1 style={{ width: "45%" }} className="text-xl text-black flex items-center gap-3 abt1">
                        <People />
                        Physical Disabilities
                    </h1>  <h1 style={{ width: "45%" }} className="text-xl text-black flex items-center gap-3 abt1">
                        <People />   Sensory impairments.
                    </h1>
                    <h1 style={{ width: "45%" }} className="text-xl text-black flex items-center gap-3 abt1">
                        <People />   Substance misuse problems.
                    </h1>
                </div>
                <img style={{ width: "45%" }} className=" abt1" src="https://usercontent.one/wp/www.top-notchhealthcareservices.com/wp-content/uploads/2020/10/online-coding-course-team-video-img-bg.jpg" alt="" />

            </div>
            <div className='flex w-full items-center flex-wrap pt-7 justify-center gap-8 abt1'>
                {Data.map((item, index) => {
                    return (
                        <div key={index} className='flex w-96 border  mt-5 p-3 flex-col gap-4 items-center justify-center '>
                            <img style={{ width: '100%', height: '10rem' }} src={item.image} alt="" />
                            <h1 className='text-xl'>{item.title}</h1>
                            <p className='text-center'>{truncateDescription(item.description, 20)}</p>
                            {/* <h1 className='text-xl'>{item.price}</h1> */}
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-wrap w-full justify-evenly gap-2 pt-5">
            <video style={{ width: "25%" }} className="abt1" width="640" height="360" controls>
                    <source src="https://usercontent.one/wp/www.top-notchhealthcareservices.com/wp-content/uploads/2021/11/Help-with-feedingV2.mp4" type="video/mp4" />
                    <source src="your-video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <h1 style={{ width: "25%" }} className="text-4xl text-black abt1">
                    Our Care Process
                    Steps from initial contact to getting your Carer.
                </h1>
            </div>
            <div className='flex w-full items-center flex-wrap pt-7 justify-center gap-8 abt1'>
                <div style={{ width: '20%' }} className='flex flex-col items-center p-1 border rounded-lg'>
                    <h1 className="text-4xl w-full">Step I</h1>
                    <p className="text-lg w-full">
                        Get in touch <br />

                        You can get hold of us by either calling on the office number or filling our website form. Also, you can send us an email and we will respond within 24 hours.
                    </p>
                </div>
                <div style={{ width: '20%' }} className='flex flex-col items-center p-1 border rounded-lg'>
                    <h1 className="text-4xl w-full">Step II</h1>
                    <p className="text-lg w-full">
                        Care Assessment <br />
                        Our Team will carry out a detailed assessment to create your care plan. A tailor-made plan will be created to suit your needs as    discussed in the assessment.                     </p>
                </div>
                <div style={{ width: '20%' }} className='flex flex-col items-center p-1 border rounded-lg'>
                    <h1 className="text-4xl w-full">Step III</h1>
                    <p className="text-lg w-full">
                        Carer Chosen and Care Starts
                        <br />
                        We will go through our Carer database and match you with a Carer who shares your likes, dislikes and interest.  Once chosen, you will be introduced to the Carer.  Care starts.                    </p>
                </div>
                <div style={{ width: '20%' }} className='flex flex-col items-center p-1 border rounded-lg'>
                    <h1 className="text-4xl w-full">Step IV</h1>
                    <p className="text-lg w-full">
                        Monitoring and Evaluation
                        <br />
                        After you and your Carer have settled in, our Team will continuously check in regularly to make sure we are providing the best care for you.                    </p>
                </div>
            </div>

        </div>
    )
}

export default HomeCare