
const Categories = () => {
    return (
        <div className='flex flex-col cat justify-center items-start bg-yellow-100 gap-7 w-full p-5'>
            <h1 className="text-2xl">Types of live care</h1>
            <p>Aside from companionship and general support  we typically see 4 different types of live care needs</p>
            <div className="flex  items-center justify-center flex-wrap gap-2">
                <div className="flex flex-col p-2 bg-slate-100 h-64  w-72 rounded-lg mt-2">
                    <h3 className="text-black text-2xl flex flex-col items-center p-3">
                        Dementia care
                    </h3>
                    <p className="p-3">
                        Live in care for those suffering from dementia is a specialty of ours. We have a team of carers who are trained to provide the best
                      .
                    </p>
                    <button className="rounded-lg ml-2  p-2 flex  bg-yellow-400 w-32">
                        Find out more
                    </button>
                </div>
                <div className="flex flex-col bg-slate-100 h-64 w-96 rounded-lg mt-2">
                    <h3 className="text-black text-2xl flex flex-col items-center p-3">
                        Respite care
                    </h3>
                    <p className="p-3">
                        Live in care for those suffering from dementia is a specialty of ours. We have a team of carers who are trained to provide the best
                        possible care for those suffering from dementia.
                    </p>
                    <button className="rounded-lg ml-2  p-2 flex  bg-yellow-400 w-32">
                        Find out more
                    </button>
                </div><div className="flex flex-col bg-slate-100 h-64 w-96 rounded-lg mt-2">
                    <h3 className="text-black text-2xl flex flex-col items-center p-3">
                        Palliative care
                    </h3>
                    <p className="p-3">
                        Live in care for those suffering from dementia is a speciality of ours. We have a team of carers who are trained to provide the best
                        possible care for those suffering from dementia.
                    </p>
                    <button className="rounded-lg ml-2  p-2 flex  bg-yellow-400 w-32">
                        Find out more
                    </button>
                </div><div className="flex flex-col bg-slate-100 h-64 w-96 rounded-lg mt-2">
                    <h3 className="text-black text-2xl flex flex-col items-center p-3">
                        Post Operative care
                    </h3>
                    <p className="p-3">
                        Live in care for those suffering from dementia is a speciality of ours. We have a team of carers who are trained to provide the best
                        possible care for those suffering from dementia.
                    </p>
                    <button className="rounded-lg ml-2  p-2 flex  bg-yellow-400 w-32">
                        Find out more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories