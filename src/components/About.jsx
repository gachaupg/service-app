
const About = () => {
    return (
        <div className='p-20 about w-full flex  justify-around    gap-5 '>

            <div className="flex items-center left flex-col gap-6 w-full">
                <h1 className='text-5xl text-pink-400'>About Us</h1>
                <p className='text-2xl'>We provide the best services in the UK</p>
                <div className="flex flex-col gap-4">
                    <h3 className='text-1xl text-slate-400'>Our Mission</h3>
                    <p>

                        At  our mission is to enhance the quality of life for our clients by offering personalized care solutions tailored to their unique needs.
                        We are committed to promoting independence, dignity
                        , and well-being while fostering a sense of community and belonging.
                    </p>
                    <h3> Services We Offer:</h3>
                    <ul>
                        <li>


                            Accommodation: Our comfortable and well-equipped facilities provide a safe and welcoming environment for individuals requiring temporary or long-term accommodation.
                            Care Services: Our team of trained professionals offers a range of care services, including personal care assistance, medication management, and specialized care for individuals with specific medical or mobility needs.
                            Support Services: We understand that every individual has unique requirements, which is why we offer personalized support services to assist with daily activities, transportation, meal preparation, and more.
                            Community Engagement: We believe in the power of community and offer various social and recreational activities to promote socialization, mental stimulation, and overall well-being.
                        </li>
                    </ul>
                </div>

            </div> <div className="flex right flex-col gap-4">
                <h3 className='text-1xl text-slate-400'>Our Directors</h3>
                <div className="flex flex-col.gap-6">
                    <ul>
                        <li>Joseph Wagura</li>
                        <li>Jacckie  Chombo</li>
                        <li>Immaculate Nderity</li>
                    </ul>
                </div>
                <p>Hospitality services play a profound role in palliative care. Hospitality services contribute to dignity, compassion and respect.
                    A service ecosystems lens is a useful means of organising knowledge.
                    Knowledge, emotions, amenities, social, and holistic are dominant theme
                    omnis sed doloremque harum modi quod ex, dolores voluptate commodi!</p>
            </div>
        </div>
    )
}

export default About