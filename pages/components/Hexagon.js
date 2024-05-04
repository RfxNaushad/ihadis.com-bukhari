import { useState } from 'react';

// Hexagon component
const Hexagon = ({ number, hoveredItem, index }) => {
    return (
        <div
            className={`w-8 h-8 relative flex items-center justify-center font-bold transition-colors ${hoveredItem === index ? 'bg-green-500' : 'bg-gray-100'}`}
            style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', // Hexagon shape
            }}
        >
            {number}
        </div>
    );
};

export default Hexagon;