import React from 'react';
import logo from "../assets/icon.png"

const Header = () => {
    return (
        <div className='absolute w-full flex justify-between px-[115px] py-4'>
            <div className='flex justify-between gap-x-20'>
                <div >
                    <img src={logo} alt="Logo" className='h-14' />
                </div>
                <div className='content-center'>
                    <ul type='none' className='flex gap-8 justify-center text-base font-bold'>
                        <li className='hover:text-[#FF4C31] duration-500 ease-in-out cursor-pointer'>Home</li>
                        <li className='hover:text-[#FF4C31] duration-500 ease-in-out cursor-pointer'>About</li>
                        <li className='hover:text-[#FF4C31] duration-500 ease-in-out cursor-pointer'>Vehicle Models</li>
                        <li className='hover:text-[#FF4C31] duration-500 ease-in-out cursor-pointer'>Testimonials</li>
                        <li className='hover:text-[#FF4C31] duration-500 ease-in-out cursor-pointer'>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='content-center'>
                <button className='bg-[#FF4C31] text-white py-3 px-8 shadow-2xl border-1 border-[#FF4C31] cursor-pointer shadow-[#FF4C31] rounded-sm hover:bg-white hover:text-black'>Book Now</button>
            </div>
        </div>
    );
};

export default Header;