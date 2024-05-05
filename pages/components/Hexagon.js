import { useState } from 'react';

// Hexagon component
const Hexagon = ({ number, hoveredItem, index }) => {
    return (
        <div
            className={`w-8 h-8 relative flex items-center justify-center font-bold transition-colors ${hoveredItem === index ? 'bg-green-500' : 'bg-gray-100'}`}
            style={{
                clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)', // Hexagon shape
                    borderRadius: '15px',
                    width: "35px",
                    height: "35px",
            }}
        >
            {number}
        </div>
    );
};

export default Hexagon;