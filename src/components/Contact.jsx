import { Call, Email, Facebook, WhatsApp } from "@mui/icons-material"

const Contact = () => {
  return (
    <div className="flex w-full gap-7 items-center justify-around  flex-wrap pb-5 contact ">
        <div className="w-96">
            <div className=" flex items-center justify-evenly">
                <Facebook className="text-pink-500  text-4xl" fontSize="20"/>
                
                <Email className="text-pink-500  text-4xl"/>
                <WhatsApp className="text-pink-500  text-4xl"/>
                <Call className="text-pink-500  text-4xl"/>
            </div>
            <img className="h-96 ob" src="https://res.cloudinary.com/pitz/image/upload/v1707233859/WhatsApp_Image_2024-02-06_at_17.00.20-removebg-preview_rpte6g.png" alt="" />
        </div>
        <div   className="w-96">
            <form className="flex flex-col gap-5" action="">
            <h1 className="text-3xl font-bold">Contact Us</h1>

                <input className="h-10 w-full  border-none rounded-lg" type="text" placeholder="Name" />
                <input className="h-10 w-full  border-none rounded-lg" type="text" placeholder="Email" />
                <input className="h-10 w-full  border-none rounded-lg" type="text" placeholder="Subject" />
                <textarea className=" w-full  border-none rounded-lg" name="" id="" cols="20" rows="10" placeholder="Message"></textarea>

                <button className="bg-pink-300 text-white h-10 rounded-lg" type="submit">Send</button>

            </form>
        </div>

    </div>
  )
}

export default Contact