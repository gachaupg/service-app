import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Welcome = () => {
    const [isVerified, setIsVerified] = useState(false);

    const handleRecaptchaChange = (value) => {
        console.log('reCAPTCHA value:', value);
        // Set isVerified to true when reCAPTCHA is successfully solved
        setIsVerified(true);
    };

    const handleSubmit1 = () => {
        if (isVerified) {
            // Your form submission logic here
            console.log('Form submitted!');
        } else {
            // Show an error or prevent form submission if reCAPTCHA is not verified
            console.error('reCAPTCHA not verified');
        }
    };

    const [state, handleSubmit] = useForm("mayrerne");
    if (state.succeeded) {
        return <p>Thanks for contacting topplancare !</p>;
    }
    return (
        <div className='flex flex-col items-center justify-center pb-5 gap-3 w-full'>
            <h1 className="text-2xl text-red-600">WELCOME TO TOPPLANCARE</h1>
            <div className='flex flex-wrap items-center justify-center gap-3 w-full'>
                <div style={{ width: '45%' }} className="abt1">
                    <img className="abt1 w-48 object-contain  h-36" src="https://res.cloudinary.com/pitz/image/upload/v1707233859/WhatsApp_Image_2024-02-06_at_17.00.20-removebg-preview_rpte6g.png" alt="" />
                    <p className='text-black'>Topplan care Healthcare Services provides a wide range of outstanding Complex care & support services on a live-in, live-out, full-time, or part-time basis. You are welcome to watch our videos, search our site, and please do reach out!</p>
                </div>
                <div style={{ width: '45%' }} className="abt1 flex gap-2 flex-col">
                   
                    <form onSubmit={handleSubmit} className="flex abt1 flex-col gap-1 bg-pink-600 p-4  w-80" action="submit" >
                    <h2 className="text-2xl text-slate-900">GET A FREE CONSULTATION </h2>
                    <p>With Our Registered Manager</p>
                        <label htmlFor="">Name</label>
                        <input className="h-10 w-full  border rounded-lg"
                            id="name"
                            type="name"
                            name="name"
                            placeholder="Name" />
                        <label htmlFor="">Phone</label>
                        <input className="h-10 w-full  border rounded-lg"
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="phone" />
                        <label htmlFor="">email</label>

                        <input className="h-10 w-full  border rounded-lg"
                            id="email"
                            type="email"
                            name="email" placeholder="Email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label htmlFor="">Captcha</label>
                        {/* <div className='w-full h-20  bg-white'> */}
                            <ReCAPTCHA
                                sitekey="6LchFX8pAAAAAF7GryASdlkZ6OpdnavvW_vCOKmt"
                                onChange={handleRecaptchaChange}
                            />
                        {/* </div> */}

                        <button onClick={handleSubmit1} className="bg-slate-500 text-white h-10 rounded-lg" type="submit">Get a free consultaion</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Welcome