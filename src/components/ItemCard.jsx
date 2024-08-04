import React from 'react'

const ItemCard = ({name, desc, price, image }) => {
  return (
    <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-addRect p-6 m-4">
    <img class="w-150 h-150" src={image} alt="Product Image"/>
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{name}</div>
        <p class="text-gray-700 text-base">
        {desc}
        </p>
    </div>
    <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">QAR {price}</span>
        {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Buy Now
        </button> */}
    </div>
    </div>
  )
}

export default ItemCard