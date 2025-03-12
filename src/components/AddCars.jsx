import { useState } from "react";
import axios from "axios";

const AddCars = () => {
    const [carData, setCarData] = useState({
        name: "",
        model: "",
        type: "Sedan",
        color: "",
        price: "",
        availability: "",
        display: "",
    });

    const handleChange = (e) => {
        const { name, type, value } = e.target;

        if (type === 'radio') {
            setCarData({
                ...carData,
                [name]: (value === 'on'),
            });
        } else {
            setCarData({
                ...carData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(carData);
        try {
            await axios.post("http://localhost:3000/addcar", carData);
            alert("Car added successfully!");
        } catch (error) {
            alert("Failed to add car");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Add Sedan Car</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <select name="type" onChange={handleChange}
                    className="w-full p-2 border rounded" id="type">
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Hatchback">Hatchback</option>
                </select>
                <input
                    className="w-full p-2 border rounded"
                    name="name"
                    placeholder="Car Name"
                    onChange={handleChange}
                    required
                />
                <input
                    className="w-full p-2 border rounded"
                    name="model"
                    placeholder="Model"
                    onChange={handleChange}
                    required
                />
                <input
                    className="w-full p-2 border rounded"
                    name="color"
                    placeholder="Color"
                    onChange={handleChange}
                    required
                />
                <input
                    className="w-full p-2 border rounded"
                    name="price"
                    placeholder="Price for Rent"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="availability">Availability</label>

                <input
                    type="radio"
                    className="p-2 mx-4 border rounded"
                    name="availability"
                    value="yes" // Value for "Yes"
                    onChange={handleChange}
                    id="yes"
                />
                <label htmlFor="yes">Yes</label>
                <input
                    type="radio"
                    className="p-2 mx-4 border rounded"
                    name="availability"
                    value="no" // Value for "No"
                    onChange={handleChange}
                    id="no"
                />
                <label htmlFor="no">No</label>

                <input
                    className="w-full p-2 border rounded"
                    name="display"
                    placeholder="Display Image"
                    onChange={handleChange}
                    required
                />
                <input
                    className="w-full p-2 border rounded"
                    name="img1"
                    placeholder="Image URL 1"
                    onChange={handleChange}
                    
                />
                <input
                    className="w-full p-2 border rounded"
                    name="img2"
                    placeholder="Image URL 2"
                    onChange={handleChange}
                    
                />
                <input
                    className="w-full p-2 border rounded"
                    name="img3"
                    placeholder="Image URL 3"
                    onChange={handleChange}
                    
                />
                <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Add Car
                </button>
            </form>
        </div>
    );
}

export default AddCars;
