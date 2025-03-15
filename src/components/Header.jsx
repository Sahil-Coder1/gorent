import React, { useState } from 'react';
import logo from "../assets/icon.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [carsDropdown, setCarsDropdown] = useState(false);

    return (
        <div className='w-full fixed flex justify-between items-center px-6 sm:px-10 lg:px-[115px] py-4 z-50 bg-[#f8f9fa]'>
            <div className='flex justify-between items-center w-full'>
                {/* Logo */}
                <Link to='/'>
                    <img src={logo} alt="Logo" className='h-12 sm:h-14' />
                </Link>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center'>
                    <ul className='flex gap-6 lg:gap-8 text-base font-bold'>
                        <Link to='/'><li className='hover:text-[#FF4C31] duration-500 cursor-pointer'>Home</li></Link>
                        <Link to='/about-us'><li className='hover:text-[#FF4C31] duration-500 cursor-pointer'>About</li></Link>
                        
                        {/* Cars Dropdown */}
                        <div className="relative group">
                            <li className='hover:text-[#FF4C31] duration-500 cursor-pointer flex items-center gap-1'>
                                Cars <FontAwesomeIcon icon={faChevronDown} className='text-sm' />
                            </li>
                            <ul className="absolute left-0 hidden bg-[#f8f9fa] shadow-2xl rounded-sm group-hover:block">
                                <Link to='/cars?type=sedan'><li className="px-4 py-2 hover:bg-gray-200 rounded-sm hover:text-[#FF4C31]">Sedan</li></Link>
                                <Link to='/cars?type=suv'><li className="px-4 py-2 hover:bg-gray-200 rounded-sm hover:text-[#FF4C31]">SUV</li></Link>
                                <Link to='/cars?type=hatchback'><li className="px-4 py-2 hover:bg-gray-200 rounded-sm hover:text-[#FF4C31]">Hatchback</li></Link>
                            </ul>
                        </div>

                        <Link to='/contact-us'><li className='hover:text-[#FF4C31] duration-500 cursor-pointer'>Contact Us</li></Link>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className='text-xl' />
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#f8f9fa] shadow-md flex flex-col text-center py-4 md:hidden">
                    <Link to='/' className="py-2 hover:text-[#FF4C31]" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to='/about-us' className="py-2 hover:text-[#FF4C31]" onClick={() => setMenuOpen(false)}>About</Link>
                    
                    {/* Mobile Cars Dropdown */}
                    <div>
                        <button className="py-2 hover:text-[#FF4C31] w-full flex items-center justify-center gap-1" onClick={() => setCarsDropdown(!carsDropdown)}>
                            Cars <FontAwesomeIcon icon={faChevronDown} className='text-sm' />
                        </button>
                        {carsDropdown && (
                            <div className="flex flex-col">
                                <Link to='/cars?type=sedan' className="block py-2 hover:text-[#FF4C31]" onClick={() => setMenuOpen(false)}>Sedan</Link>
                                <Link to='/cars?type=suv' className="block py-2 hover:text-[#FF4C31]" onClick={() => setMenuOpen(false)}>SUV</Link>
                                <Link to='/cars?type=hatchback' className="block py-2 hover:text-[#FF4C31]" onClick={() => setMenuOpen(false)}>Hatchback</Link>
                            </div>
                        )}
                    </div>
                    <Link to='/contact-us' className="py-2 hover:text-[#FF4C31]" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                </div>
            )}
        </div>
    );
};

export default Header;