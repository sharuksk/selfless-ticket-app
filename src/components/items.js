// src/ItemCard.js
import React from 'react';
import '../SCSS/items.scss';

const ItemCard = ({ image, title, price, description }) => {
  return (
    <div className="item-card">
      <div className="item-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="item-card__details">
        <h3 className="item-card__title">{title}</h3>
        <p className='item-card-desc'>{description}</p>
        <p className="item-card__price">QAR {price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
