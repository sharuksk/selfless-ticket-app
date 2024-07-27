import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddItems = () => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.API_BASE_URL;
  const [formData, setFormData] = useState({
    itemName: '',
    itemId: '',
    itemDescription: '',
    itemPrice: '',
    itemImage: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios
    .post(BASE_URL + "/items/addItem", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
    .then((res) => {
        navigate("/");
        return res;
    })
    .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-blue-100 flex flex-col items-center justify-center">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Item Name
        </label>
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Item ID
        </label>
        <input
          type="text"
          name="itemId"
          value={formData.itemId}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Item Description
        </label>
        <textarea
          name="itemDescription"
          value={formData.itemDescription}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Item Price
        </label>
        <input
          type="number"
          name="itemPrice"
          value={formData.itemPrice}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Item Image
        </label>
        <input
          type="file"
          name="itemImage"
          onChange={handleChange}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddItems;
