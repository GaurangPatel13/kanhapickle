import React from 'react';

const Card = ({ image, title, description, size }) => {
  return (
    <div className="bg-softWhite shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
      <img src={image} alt={title} className="w-full h-48 object-contain" />
      <div className="p-4">
        <h3 className="text-xl font-Helvatica font-semibold text-electricBlue">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <p className="mt-4 text-lg font-medium text-charcoalGrey">{size}</p>
      </div>
    </div>
  );
};

export default Card;
