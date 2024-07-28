import React, { useState, useEffect }  from 'react'
import ItemCard from '../components/items'
import { API_BASE_URL } from "../nodelink";
import axios from "axios";

const ListItems = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
          handleGetDevicesApi();
        } catch (err) {
          console.log(err);
        }
      }, []);

    const handleGetDevicesApi = async () => {
        try {
          await axios
            .post(`${API_BASE_URL}/items/getAll`)
            .then(  (res) => {
              setData(res.data);
              console.log(res.data);
              console.log("data", data.itemName)
            });
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <div className='flex gap-4 justify-center items-center'> 

    {data?.length &&
                  data.map((data) => {
                    return(

                        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
                        <img class="w-150 h-150 object-cover" src={data.itemImage} alt="Product Image"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{data.itemName}</div>
                            <p class="text-gray-700 text-base">
                            {data.itemDescription}
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">QAR {data.itemPrice}</span>
                            {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Buy Now
                            </button> */}
                        </div>
                        </div>
                        // <ItemCard 
                        // key={data.itemId}
                        // name={data.itemName}
                        // desc={data.itemDescription}
                        // price={data.itemPrice}
                        // image={data.itemImage}
                        // />
                    )
                        
                  })}

    {/* <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
    <img class="w-full" src="https://via.placeholder.com/150" alt="Product Image"/>
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Product Name</div>
        <p class="text-gray-700 text-base">
        This is a product card with an image, name, and description.
        </p>
    </div>
    <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">$19.99</span>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Buy Now
        </button>
    </div>
    </div> */}
    </div>
    
    

  )
}

export default ListItems