// src/ItemCard.js
import React from 'react';

const ItemCard = ({ image, title, price, description }) => {
  return (
    <div className="flex gap-6">
      <div className="flex-0.4 rounded-2xl w-[100px] h-[100px]">
        <img src={image} alt={title} />
      </div>
      <div className="pl-4 flex flex-col">
        <div className="text-atlantis font-bold self-start">{title}</div>
        <div className='font-thin self-start'>{description}</div>
        <div className="font-bold self-start">QAR {price}</div>
      </div>
    </div>
  );
};

export default ItemCard;
