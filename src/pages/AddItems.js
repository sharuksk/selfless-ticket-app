import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../nodelink";
import FileBase64 from "react-file-base64";

const AddItems = () => {
  const [base, setBase] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    itemName: "",
    itemId: "",
    itemDescription: "",
    itemPrice: "",
    itemImage: null,
  });

  const convertoBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        itemImage: reader.result,
      }));
    };
    reader.onerror = (error) => {
      console.log("Error converting file to base644; ", error);
    };
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") convertoBase64(files[0]);
    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    const response = await axios
      .post(`${API_BASE_URL}/items/addItem`, formData)
      .then((res) => {
        navigate("/dashboard");
        return res;
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="space-y-6 bg-blue-100 flex flex-col items-center justify-center">
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
        {/* <FileBase64
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onDone={(e) => {
                        setBase(e.base64);
                    }}
                />*/}
      </div>

      <div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddItems;