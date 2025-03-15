import React from 'react';
import car from '../assets/banner_car.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <div className='h-screen flex justify-between px-[115px] py-4 items-center pt-20'>
            <div>
                <p className='text-2xl font-bold'>Plan your trip now.</p><br />
                <p className='text-5xl font-extrabold leading-16'>Save <span className='text-[#FF4C31]' >big</span> with our car rental</p><br /><br />
                <p className='text-gray-500 text-sm pr-4'>To contribute to positive change and achieve our sustainability goals with many extraordinary</p><br />
                <div className='flex gap-4'>
                   <Link to='/cars'> <button
                        className='bg-[#FF4C31] hover:translate-x-2 transition-all duration-500 cursor-pointer text-white px-8 py-4 font-bold shadow-2xl shadow-[#FF4C31] hover:bg-gradient-to-r from-[#FF4C31] via-[#FF4C31] to-orange-400 rounded-sm'
                    >Book Ride &nbsp; &nbsp;<FontAwesomeIcon icon={faCircleCheck} /></button></Link>
                    {/* <button className='bg-black cursor-pointer text-white px-8 py-4 font-bold shadow-2xl shadow-black rounded-sm border-1 hover:bg-white hover:text-black hover:border-black'>Learn More &nbsp;&nbsp; <FontAwesomeIcon icon={faAngleRight} /></button> */}
                </div>
            </div>
            <div>
                <img src={car} alt="car" height="456" className='scale-125' />
            </div>
        </div>
    );
};

export default Hero;