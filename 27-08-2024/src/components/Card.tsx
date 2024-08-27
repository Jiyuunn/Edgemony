import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white max-w-xs">
      <div className="relative w-full" style={{ paddingTop: '150%' }}> {/* Ratio 2:3 for the aspect ratio */}
        <img
          src={imageUrl}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
