import { useState } from "react";
import { Switch } from "@headlessui/react";
import ProgressBarSection from "./ProgressBarSection ";

const RightSection = () => {
  const [nightMode, setNightMode] = useState(false);

  return (
    <section className="hidden 2xl:block xl:h-[calc(100vh_-_100px)] bg-white p-4 border-l overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">সেটিংস</h2>
      {/* Option Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">আরবি ফন্ট সিলেক্ট করুন</label>
        <select className="border p-2 w-full">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      {/* Progress Bars */}
      <div className="mb-4">
        <ProgressBarSection />
      </div>
      {/* Night Mode Switch */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700">নাইট মোড</span>
        <Switch
          checked={nightMode}
          onChange={() => setNightMode(!nightMode)}
          className={`${
            nightMode ? "bg-green-500" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-all`}
        >
          <span
            className={`${
              nightMode ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
      {/* Donation Box */}
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
        <p className="text-gray-700 mb-4">
          আপনিও সদাকায়ে জারিয়াতে অংশ নিন আপনার দান, সেটা ছোট হলেও, ইসলামের
          বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই
          গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ
          এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default RightSection;
