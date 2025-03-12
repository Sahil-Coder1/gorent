import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import UserDetails from "../Dialog/UserDetails";
import { BASE_URL } from "../../config";

const CarById = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/car/${id}`);
        if (response.data.length > 0) {
          setCar(response.data[0]); // Set first car object
          setMainImage(response.data[0].display);
        }
      } catch (error) {
        console.error("Error fetching car:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCar();
    }
  }, [id]);

  const handleshow = () => {
    setIsShow(!isShow);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!car) {
    return <div className="text-center text-gray-600 text-lg mt-10">Car not found</div>;
  }

  return (
    <div>
      <Header />
      <UserDetails isShow={isShow} onClose={handleshow} car={car.name} />
      <div className="h-20 mb-4"></div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden">
          {/* Left: Car Image */}
          <div className="relative flex items-center justify-center">
            <img
              src={mainImage}
              alt={car.name}
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>

          {/* Right: Car Details */}
          <div className="p-8 md:p-12">
            {/* Car Name and Pricing */}
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{car.name}</h1>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Price :</span>{" "}
              <span className="text-orange-600 font-bold">{car.price}</span>
            </p>

            {/* Details */}
            <ul className="space-y-4 text-gray-800 text-lg">
              <li>
                <span className="font-medium">🚗 Model :</span> {car.model}
              </li>
              <li>
                <span className="font-medium">🎨 Color :</span> {car.color}
              </li>
              <li>
                <span className="font-medium">🚘 Type :</span> {car.type}
              </li>
            </ul>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-4 mt-6">
              {[car.display, car.img1, car.img2, car.img3].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setMainImage(img)}
                  alt={`Thumbnail ${index}`}
                  className={`w-16 h-16 rounded-lg object-cover cursor-pointer transition transform hover:scale-110 border-2 ${
                    mainImage === img ? "border-orange-600" : "border-gray-200"
                  }`}
                />
              ))}
            </div>

            {/* CTA */}
            <button
              className={`w-full bg-orange-600 text-white text-lg cursor-pointer font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-700 mt-8 transition duration-300 ${
                !car.availability ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleshow}
              disabled={!car.availability}
            >
              {car.availability ? "Book Ride" : "Not Available"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarById;
