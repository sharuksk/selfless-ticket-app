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
        <div className='flex gap-4 justify-center items-center'>
            {data.length > 0 && data.map((item) => (
                <div key={item.itemId} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
                    <img className="w-150 h-150 object-cover" src={item.itemImage} alt="Product Image" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.itemName}</div>
                        <p className="text-gray-700 text-base">
                            {item.itemDescription}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                            QAR {item.itemPrice}
                        </span>
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleDelete(item)}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListItems;
