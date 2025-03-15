import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [loading, setLoading] = useState(true); // Loading state

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const car = await axios.get(`${BASE_URL}/cars`);
                setCars(car.data);
                setFilteredCars(car.data);

                const queryParams = new URLSearchParams(location.search);
                const type = queryParams.get('type');

                if (type) {
                    const data = car.data.filter(car => car.type.toLowerCase() === type.toLowerCase());
                    setFilteredCars(data);
                    setSelectedFilter(type);
                }

            } catch (error) {
                console.error("Error fetching cars:", error);
            } finally {
                setLoading(false); // Stop loading after data is fetched
            }
        };
        fetchCars();
    }, [location.search]);

    const filter = (type) => {
        const data = cars.filter((car) => car.type.toLowerCase() === type.toLowerCase());
        setFilteredCars(data);
        setSelectedFilter(type);
        navigate(`?type=${type}`);
    };

    const showAll = () => {
        setFilteredCars(cars);
        setSelectedFilter('');
        navigate('');
    };

    return (
        <div>
            <Header />
            <div className="h-20 mb-4"></div>

            <div className="py-4">
                <div className="px-4 flex gap-5 py-5 justify-center flex-wrap">
                    {loading ? (
                        <div className="flex justify-center items-center h-64 w-full">
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent"></div>
                        </div>
                    ) : filteredCars.length > 0 ? (
                        filteredCars.map((car) => (
                            <Link to={`/cars/${car.slug}`} key={car.slug}>
                                <div key={car.slug} className="w-80 bg-white cursor-pointer shadow-xl rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                    <img src={car.display} alt={car.name} className="rounded-t-2xl h-56 w-full object-cover" />
                                    <div className="p-4">
                                        <p className="text-2xl font-semibold text-gray-800">{car.name}</p>
                                        <div className='flex justify-between'>
                                            <p className="text-sm text-gray-500 mt-1">{car.model}</p>
                                            <p className="text-sm bg-gray-200 w-fit px-2 rounded-full text-gray-500 mt-1">{car.type}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="flex pt-16 items-center">No Cars found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cars;
