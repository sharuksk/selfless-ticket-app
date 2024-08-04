import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from "../nodelink";

const ListItems = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        handleGetDevicesApi();
    }, []);

    const handleGetDevicesApi = async () => {
        try {
            const res = await axios.post(`${API_BASE_URL}/items/getAll`);
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (item) => {
        try {
          console.log("print")
            await axios.post(`${API_BASE_URL}/items/delete`, { data: item });
            setData((prevData) => prevData.filter((i) => i !== item));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='flex gap-4 justify-center items-center bg-addRect border-2 rounded-2xl'>
            {data.length > 0 && data.map((item) => (
                <div key={item.itemId} className=" flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-addRect border-2 rounded-2xl p-6 m-4">
                    <img className="w-[150px] h-[150px] rounded-2xl flex self-center" src={item.itemImage} alt="Product Image" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.itemName}</div>
                        <p className="text-gray-700 text-base">
                            {item.itemDescription}
                        </p>
                        <p className='text-atlantis font-bold'>
                            {item.itemPrice} QAR
                        </p>
                    </div>
                    <div className="flex justify-around gap-2">
                        <button 
                                className="bg-atlantis rounded-full text-white px-10 py-2"
                                // onClick={() => handleDelete(item)}
                            >
                                Edit
                        </button>
                        <button 
                            className="bg-atlantis rounded-full text-white px-10 py-2"
                            onClick={() => handleDelete(item)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListItems;
