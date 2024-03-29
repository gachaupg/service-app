import { Call, Email, Facebook, WhatsApp } from "@mui/icons-material"
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mayrerne");
    if (state.succeeded) {
        return <p>Thanks for contacting topplancare !</p>;
    }

    return (
        <div className="flex w-full  items-center justify-center pt-4  flex-wrap pb-5 contact ">
            <div className="flex gap-7 pb-32 border p-2 abt1 w-full items-center justify-center  flex-wrap bg-slate-300">


                <div className=" abt1  mt-16 pt-4 ">
                    <div className=" flex  justify-evenly">
                        <Facebook className="text-pink-500  text-2xl" fontSize="20" />

                        <Email className="text-pink-500  text-4xl" />
                        <WhatsApp className="text-pink-500  text-4xl" />
                        <a href="tel:02037402749">
                            <Call className="text-pink-500  text-4xl" />
                        </a>
                    </div>
                    <div className='mt-6 flex justify-around items-center '><Call size={38} /> 02037402749 </div>
                    <div className=" flex flex-col gap-4 mt-8 ml-12 justify-evenly">
                        <h4 className="text-2xl">Londoneast tttt UK.</h4>
                        <p>Business and Technical park</p>
                        <p>Yew tree Avenue Rm 10 7FN</p>

                    </div>
                    <img className="h-96 ob" src="https://res.cloudinary.com/pitz/image/upload/v1707233859/WhatsApp_Image_2024-02-06_at_17.00.20-removebg-preview_rpte6g.png" alt="" />
                </div>
                <div className="w-96">
                    <form onSubmit={handleSubmit} className="flex flex-col abt1 mt-20 p-2 gap-5" action="submit">
                        <h1 className="text-3xl font-bold">Contact Us</h1>

                        <input className="h-10 w-full  border-none rounded-lg"
                            id="name"
                            type="name"
                            name="name"
                            placeholder="Name" />
                        <input className="h-10 w-full  border-none rounded-lg"
                            id="email"
                            type="email"
                            name="email" placeholder="Email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <input className="h-10 w-full  border-none rounded-lg" id="subject" type="text"
                            name="subject" placeholder="Subject" />
                        <textarea className=" w-full  border-none rounded-lg" id="message"
                            name="message" cols="20" rows="10" placeholder="Message"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />

                        <button className="bg-pink-300 text-white h-10 rounded-lg" type="submit">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact