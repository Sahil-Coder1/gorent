import React from 'react';
import Header from './Header';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <div className="bg-gray-100 min-h-screen items-center flex flex-col p-6 pt-25">
        {/* Hero Section */}
        <div className="bg-[#FF4C31] text-white text-center py-4 px-6 rounded-xl shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-2 text-base px-4">Your trusted car rental service for hassle-free journeys.</p>
      </div>
  
        {/* Mission & Vision Section */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600">At GoRent, we aim to provide affordable, reliable, and convenient car rentals for everyone. Whether it's a weekend getaway or a business trip, we ensure a smooth ride every time.</p>
        </div>
  
        {/* Why Choose Us Section */}
        <div className="mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#FF4C31]">Affordable Pricing</h3>
              <p className="mt-2 text-gray-600">We offer the best rates in the industry without compromising on quality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#FF4C31]">Wide Vehicle Selection</h3>
              <p className="mt-2 text-gray-600">From economy cars to luxury SUVs, we have a vehicle for every need.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#FF4C31]">24/7 Support</h3>
              <p className="mt-2 text-gray-600">Our dedicated team is always available to assist you.</p>
            </div>
          </div>
        </div>
  
        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Ready to Ride?</h2>
          <p className="mt-2 text-gray-600">Book your car today and experience the best rental service.</p>
          <button className="mt-4 px-6 py-3 bg-[#FF4C31] text-white rounded-lg shadow-md hover:bg-orange-600 transition">Book Now</button>
        </div>
      </div>
  

        </div>
    );
};

export default AboutUs;