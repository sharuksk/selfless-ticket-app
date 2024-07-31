import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../nodelink";
const AddItems = () => {
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

    <>
      <div className="flex justify-center items-center w-[920px] h-[554px]">
        <div className="flex-1 flex items-center justify-center h-full bg-addRect backgroundOpacity-10 bg-no-repeat bg-left-top">
          
          <form className="flex space-y-6 flex-col items-center justify-center">
          <h1 className="text-white font-bold text-2xl">ADD PRODUCTS</h1>
            <div className="flex">
              <label className="block text-slate-200 flex-none w-44 text-sm font-medium text-gray-700">
                Product Name: 
              </label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                placeholder=" Product Name "
                className="flex-1 bg-transparent border border-slate-300 hover:border-slate-400 rounded-lg"
              />
            </div>

            <div className="flex">
              <label className="block text-slate-200 flex-none w-44 text-sm font-medium text-gray-700">
                Product ID:
              </label>
              <input
                type="text"
                name="itemId"
                value={formData.itemId}
                onChange={handleChange}
                placeholder=" Product ID "
                className="flex-1 bg-transparent border border-slate-300 hover:border-slate-400 rounded-lg"
              />
            </div>

            <div className="flex">
              <label className="block text-slate-200 flex-none w-44 text-sm font-medium text-gray-700">
                Product Description:
              </label>
              <textarea
                name="itemDescription"
                value={formData.itemDescription}
                onChange={handleChange}
                placeholder=" Product Description "
                className="flex-1 bg-transparent border border-slate-300 h-30 hover:border-slate-400 rounded-lg"
              />
            </div>

            <div className="flex">
              <label className="block text-slate-200 flex-none w-44 text-sm font-medium text-gray-700">
                Product Price:
              </label>
              <input
                type="number"
                name="itemPrice"
                value={formData.itemPrice}
                onChange={handleChange}
                placeholder=" Product Price "
                className="flex-1 bg-transparent border border-slate-300 h-30 hover:border-slate-400 rounded-lg"
              />
            </div>

            <div className="flex">
              <label className="block text-slate-200 flex-none w-44 text-sm font-medium text-gray-700">
                Product Image
              </label>
              <input
                type="file"
                name="itemImage"
                onChange={handleChange}
                placeholder=" Product Image "
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
              <button type="submit" className="bg-#2dd4bf" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex-none w-20 h-full">

        </div>
      </div>
    </>
  );
};

export default AddItems;