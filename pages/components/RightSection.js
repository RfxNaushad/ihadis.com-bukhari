import { useState } from "react";
import { Switch } from "@headlessui/react";
import ProgressBarSection from "./ProgressBarSection ";

const RightSection = () => {
  const [nightMode, setNightMode] = useState(false);

  return (
    <section className="hidden 2xl:block xl:h-[calc(100vh_-_100px)]  overflow-y-auto rounded-tl-2xl rounded-tr-2xl">
      <div className="mb-6 p-6 bg-white rounded-2xl">
        <h2 className="text-xl mb-4 text-center">সেটিংস</h2>
        {/* Option Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-4">
            আরবি ফন্ট সিলেক্ট করুন
          </label>
          <select className="border py-3 pl-3 outline-none w-full rounded-lg">
            <option className="p-8 text-sm">KFGQ</option>
            <option className="p-8 text-sm">Me Quran</option>
            <option className="p-8  text-sm">Al Mushaf</option>
            <option className="p-8 text-sm">Arial</option>
          </select>
        </div>

        {/* Progress Bars */}
        <div className="">
          <ProgressBarSection />
        </div>

        {/* Night Mode Switch */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-sm text-gray-700">নাইট মোড</span>
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
      </div>
      {/* Donation Box */}
      <div className="bg-green-600 px-6 py-5 rounded-lg" style={{backgroundColor: "#34AB82"}}>
        <h2 className="text-white text-xl mb-3">আপনিও সদাকায়ে জারিয়াতে অংশ নিন </h2>
        <p className="text-white text-sm mb-4">
          আপনার দান, সেটা ছোট হলেও, ইসলামের
          বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই
          গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ
          এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।
        </p>
        <div className="flex justify-center"> {/* This flex container centers the button */}
    <button className="px-8 py-3 rounded-lg bg-white" style={{ color: "#2b9e76" }}>
      সাপোর্ট করুন
    </button>
  </div>
      </div>
    </section>
  );
};

export default RightSection;
