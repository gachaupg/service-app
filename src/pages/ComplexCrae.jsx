
const ComplexCrae = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center pt-16 '>
            <div className='home-care1 p-10 w-full flex flex-wrap items-center justify-center'>
                <div style={{ width: '45%' }} className="flex flex-col gap-8 items- justify-center">
                    <h1 className='text-white w-full text-6xl'>Complex care</h1>
                    <ul className="text-white">
                        <li>Nursing-led specialist teams.</li>
                        <li>Dedicated clinical nurses.
                        </li>
                        <li>Years of medical experience and expertise.</li>
                    </ul>

                </div>
                <div style={{ width: '45%' }} className='text-white abt1 mt-2 text-xl'>
                <video className="w-full" controls>
                    <source src="https://usercontent.one/wp/www.top-notchhealthcareservices.com/wp-content/uploads/2021/11/Help-with-feedingV2.mp4" type="video/mp4" />
                    <source src="your-video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>               
                </div>
            </div>
            <div style={{width:'80%'}} className="abt1">
                <img src="https://res.cloudinary.com/pitz/image/upload/v1708858129/Capture_pc14gr.png" alt="" />
            </div>
            <div style={{width:'80%'}} className="abt1">
                <img src="https://res.cloudinary.com/pitz/image/upload/v1708858267/Capture_iys6yp.png" alt="" />
            </div>
        </div>
    )
}

export default ComplexCrae