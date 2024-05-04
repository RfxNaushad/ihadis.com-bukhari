import { useState } from "react";

const ProgressBarSection = () => {
    const [progress1, setProgress1] = useState(30); // Initial progress values
    const [progress2, setProgress2] = useState(50);

    return (
        <div className="p-4">
            <div className="mb-4">
                <label className="block text-gray-700">এরাবিক ফন্ট সাইজ</label>
                <div className="flex ">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress1}
                        onChange={(e) => setProgress1(parseInt(e.target.value))}
                        className="mt-2 w-full"
                    />
                    <h2>{progress1}</h2>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">অনুবাদ ফন্ট সাইজ</label>
                <div className="flex">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress2}
                        onChange={(e) => setProgress2(parseInt(e.target.value))}
                        className="mt-2 w-full"
                    />
                    <h2>{progress2}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProgressBarSection;
