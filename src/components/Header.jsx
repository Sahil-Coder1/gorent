import React from 'react';
import logo from "../assets/icon.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full fixed flex justify-between px-[115px] py-4 z-50 bg-[#f8f9fa]'>
            <div className='flex justify-between gap-x-20 w-full'>
                <div >
                    <img src={logo} alt="Logo" className='h-14' />
                </div>
                <div className='content-center'>
                    <ul type='none' className='flex gap-8 justify-end text-base font-bold'>
                        <Link to='/'> <li className='hover:text-[#FF4C31] duration-500 ease-in-out cursor-pointer'>Home</li></Link>
                        <Link to='/about-us'><li className='hover:text-[#FF4C31] duration-500 ease-in-out cursor-pointer'>About</li></Link>
                        <div className="relative group z-30">
                            <li className='hover:text-[#FF4C31] duration-500 ease-in-out cursor-pointer'>Cars</li>
                            <ul className="absolute left-0 hidden bg-[#f8f9fa] shadow-2xl rounded-sm group-hover:block cursor-pointer">
                                <Link to='/cars?type=sedan'> <li className="px-4 py-2 hover:bg-gray-200 rounded-sm hover:text-[#FF4C31]">Sedan</li></Link>
                                <Link to='/cars?type=suv'> <li className="px-4 py-2 hover:bg-gray-200 rounded-sm hover:text-[#FF4C31]">SUV</li></Link>
                                <Link to='/cars?type=hatchback'> <li className="px-4 py-2 hover:bg-gray-200 rounded-sm hover:text-[#FF4C31]">Hatchback</li></Link>
                            </ul>
                        </div>
                        {/* <li className='hover:text-[#FF4C31] duration-500 ease-in-out cursor-pointer'>Testimonials</li> */}
                        <Link to='/contact-us'><li className='hover:text-[#FF4C31] duration-500 ease-in-out cursor-pointer'>Contact Us</li></Link>

                    </ul>
                </div>
            </div>
            {/* <div className='content-center'>
                <button className='bg-[#FF4C31] text-white py-3 px-8 shadow-2xl border-1 border-[#FF4C31] cursor-pointer shadow-[#FF4C31] rounded-sm hover:bg-white hover:text-black'>Book Now</button>
            </div> */}
        </div>
    );
};

export default Header;