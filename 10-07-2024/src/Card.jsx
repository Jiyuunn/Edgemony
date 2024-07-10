// Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ image1, image2, title1, title2, children }) => {
    return (
        <div className="card">
            <img className="card-image" src={image1} alt="Card" />
            <div className="card-hover">
                <img className="card-image-hover" src={image2} alt="Card" />
                <div className="card-title-hover">{title2}</div>
            </div>
            <div className="card-title">{title1}</div>
            {children}
        </div>
    );
};

export default Card;
