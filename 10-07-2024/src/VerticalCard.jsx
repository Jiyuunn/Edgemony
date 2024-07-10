// VerticalCard.jsx
import React from 'react';

const VerticalCard = ({ image }) => {
    return (
        <div className="vertical-card">
            <img className="vertical-card-image" src={image} alt="Vertical Card" />
        </div>
    );
};

export default VerticalCard;
