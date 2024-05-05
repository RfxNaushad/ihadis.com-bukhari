import { useState } from "react";

const ProgressBarSection = () => {
    const [progress1, setProgress1] = useState(30); // Initial progress values
    const [progress2, setProgress2] = useState(50);

    return (
        <div className="mt-8">
            <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-3">এরাবিক ফন্ট সাইজ</label>
                <div className="flex space-x-2">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress1}
                        onChange={(e) => setProgress1(parseInt(e.target.value))}
                        className="w-full mt-2 custom-range"
                    />
                    <h2>{progress1}</h2>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-3">অনুবাদ ফন্ট সাইজ</label>
                <div className="flex space-x-2">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress2}
                        onChange={(e) => setProgress2(parseInt(e.target.value))}
                        className="w-full mt-2 custom-range" 
                    />
                    <h2>{progress2}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProgressBarSection;
