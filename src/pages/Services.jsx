import { Data } from "../utils/data"

const Services = () => {
  return (
    <div className='flex w-full  justify-center p-5 flex-col'>
    <h1 className='text-5xl ml-12 mb-10 text-pink-400'>Our Services</h1>
    <div className="flex gap-6 mb-12 flex-wrap w-full">
            {Data.map((item) => {
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

export default Services