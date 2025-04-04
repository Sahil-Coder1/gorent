import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../../config';


const UserDetails = ({ isShow, onClose, car }) => {
    const [details, setDetails] = useState({
        name: "",
        phone: "",
        location: "",
        car: car,
    });

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = () => {
        axios.post(`${BASE_URL}/request`, details)
            .then(() => {
                setShowSuccessModal(true);
                onClose();
            })
            .catch((error) => {
                console.error("Error submitting request:", error);
            });
    };

    return (
        <div>
            {isShow && (
                <div className="fixed top-0 left-0  w-full h-full bg-gray-200/90 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96 lg:m-0 mx-4">
                        <h2 className="text-lg font-semibold">Fill the Details</h2>

                        <div>
                            <label htmlFor="name" className="block mt-4">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                onChange={handleChange}
                                value={details.name}
                                className="w-full px-4 py-2 ring-1 rounded"
                            />
                            <label htmlFor="phone" className="block mt-4">Phone Number</label>
                            <input
                                type="text"
                                id="phone"
                                onChange={handleChange}
                                value={details.phone}
                                className="w-full px-4 py-2 ring-1 rounded"
                            />
                            <label htmlFor="location" className="block mt-4">Location</label>
                            <input
                                type="text"
                                id="location"
                                onChange={handleChange}
                                value={details.location}
                                className="w-full px-4 py-2 ring-1 rounded"
                            />
                            <label htmlFor="car" className="block mt-4">Selected Car</label>
                            <input
                                type="text"
                                id="car"
                                value={details.car}
                                disabled={true}
                                className="w-full px-4 mb-4 py-2 ring-1 bg-gray-100 rounded"
                            />
                        </div>

                        <div className='flex justify-between'>
                            <button
                                className="mt-4 ring-1 px-4 py-2 rounded cursor-pointer hover:bg-red-500 hover:text-white duration-300"
                                onClick={onClose}
                            >
                                Close
                            </button>
                            <button
                                className="mt-4 bg-blue-500 ring-1 cursor-pointer ring-blue-500 hover:bg-blue-200 hover:text-black duration-300 text-white px-4 py-2 rounded"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
                        <div className="text-green-500 text-6xl">✅</div>
                        <h2 className="text-2xl font-semibold mt-4">Request Sent Successfully!</h2>
                        <p className="text-gray-600 mt-2">Your request has been submitted. We'll contact you soon.</p>
                        <button
                            className="mt-6 bg-green-500 cursor-pointer hover:bg-green-600 text-white px-6 py-2 rounded text-lg"
                            onClick={() => setShowSuccessModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
