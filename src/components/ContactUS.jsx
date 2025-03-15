import React from 'react';
import Header from './Header';

const ContactUS = () => {
    return (
        <div>
            <Header />            
            <div className="bg-gray-100 min-h-screen pt-25 flex flex-col items-center">

                {/* Contact Header */}
                <div className="bg-[#FF4C31] text-white text-center py-4 px-6 rounded-xl shadow-md w-full max-w-4xl">
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                    <p className="mt-2 text-base">We're here to assist you. Reach out to us anytime!</p>
                </div>

                {/* Contact Details & Form Container */}
                <div className="mt-12 flex flex-col md:flex-row w-full max-w-6xl gap-8">
                    {/* Contact Form */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                        <h2 className="text-2xl font-semibold text-gray-800 text-center">Send a Message</h2>
                        <form className="mt-6 space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" required />
                            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" required />
                            <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg h-32" required></textarea>
                            <button type="submit" className="w-full bg-[#FF4C31] text-white py-3 rounded-lg shadow-md hover:bg-orange-600 transition">Send Message</button>
                        </form>
                    </div>
                    {/* Contact Information */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-semibold text-gray-800">Get In Touch</h2>
                        <p className="mt-2 text-gray-600">Have questions? Feel free to contact us through any of the following channels:</p>
                        <div className="mt-6 space-y-4">
                            <p className="text-gray-800 font-medium flex items-center gap-2">📍 <span>1234 Car Rental, Lucknow, Uttar Pradesh</span></p>
                            <p className="text-gray-800 font-medium flex items-center gap-2">📞 <span>+123 456 7890</span></p>
                            <p className="text-gray-800 font-medium flex items-center gap-2">📧 <span>support@gorent.com</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUS;