import { Data } from "../utils/data"

const Services = () => {
    const truncateDescription = (text, limit) => {
        const words = text.split(' ');
        const truncated = words.slice(0, limit).join(' ');
        return truncated + (words.length > limit ? '...' : '');
    };
    return (
        <div className='flex w-full  justify-center  pt-16 flex-col'>
            <div className='home-care w-full flex flex-col items-center justify-center'>
                <h1 className='text-white text-2xl'>Our Services</h1>
                <p style={{ width: '45%' }} className='text-white abt1 mt-2 text-xl'>We are intentional in our service delivery  through a well trained and experienced team of carers who will provide care and support to suit your preferences, condition, and needs</p>
            </div>
            <div className="flex gap-12 mb-12 flex-wrap items-center justify-center w-full">
                {Data.map((item) => {
                    return (
                        <div key={item.id} className='flex w-96 border  mt-5 p-3 flex-col gap-4 items-center justify-center '>
                            <img style={{ width: '100%', height: '10rem' }} src={item.image} alt="" />
                            <h1 className='text-xl'>{item.title}</h1>
                            <p className='text-center'>{truncateDescription(item.description, 20)}</p>
                            {/* <h1 className='text-xl'>{item.price}</h1> */}
                        </div>
                    )

                }
                )}
            </div>
        </div>
    )
}

export default Services