import React from 'react';
import './PusheenCard.css';

const PusheenCard = ({ title, description, imageUrl }) => {
  return (
    <div className="pusheen-card">
      <img src={imageUrl} alt="Pusheen" className="pusheen-card__image" />
      <h2 className="pusheen-card__title">{title}</h2>
      <p className="pusheen-card__description">{description}</p>
    </div>
  );
};

export default PusheenCard;
