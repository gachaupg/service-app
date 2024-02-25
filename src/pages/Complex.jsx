
const Complex = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-3xl text-red-600">Complex Care Service</h1>
            <img style={{ width: "75%" }} className="abt1 pb-2 rounded-xl" src="https://www.helpinghandshomecare.co.uk/wp-content/uploads/elderly-lady-sitting-up-in-bed-with-a-tray-of-food-orange-juice-hot-drink-female-carer-is-beside-bed-bedroom_3x2.jpg" alt="" />
            <p style={{ width: "75%" }} className='abt1 pb-2 text-lg text-black pt-4'>
                If you or your loved ones are living with a long-term, progressive illness such as spinal cord injury, acquired brain injury, respiratory care and tube feeding or conditions arising following a surgery that will require advanced care. You will benefit from
                <br />
                complex care or continuous care involving clinicians and nurses that specialise in these conditions.

                Topplancare Healthcare Services delivers specialist care services <br /> supporting you in the comfort of your homes to live well with your condition with dignity and independence. <br />

                We have highly trained teams with years of medical experience and expertise in all areas of complex care delivery. We provide live-in carer (24/7) one to one care service <br /> coupled with visiting service by specialist clinicians.

                If you or your loved one are considering care and support at home to help you manage the complex condition, our specialist care team are ready <br /> to give professional advice on the very best option to deliver the complex care you need.

                Take comfort in that our experienced complex care managers will visit you at home and go with you through the various complex care options hence <br /> establishing a comprehensive assessment of your care needs or be it of your loved one.

                Please feel free to give us a call or send a message. We will conduct a free no-obligation <br /> assessment of your care needs leading to you receiving the specialist care you deserve in the comfort of your home.
            </p>
            <div className="flex flex-wrap w-full justify-evenly gap-2 pt-5">
                <video style={{ width: "25%" }} className="abt1" width="640" height="360" controls>
                    <source src="https://youtu.be/2qUcIQvnBC0" type="video/mp4" />
                    <source src="your-video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <h1 style={{ width: "25%" }} className="text-4xl text-black abt1">
                    How we are working safely during the COVID-19 pandemic.
                </h1>
            </div>
        </div>
    )
}

export default Complex