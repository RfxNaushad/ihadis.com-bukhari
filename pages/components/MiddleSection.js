import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Hexagon from "./Hexagon";

const MiddleSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [seeMore, setSeeMore] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const data = {
    bukhari: [
      { serial: 1, title: "Title 1", range: "১ - ৭" },
      { serial: 2, title: "Title 2", range: "৮ - ১৪" },
      { serial: 3, title: "Title 3", range: "১৫ - ২১" },
      { serial: 1, title: "Title 1", range: "১ - ৭" },
      { serial: 2, title: "Title 2", range: "৮ - ১৪" },
      { serial: 3, title: "Title 3", range: "১৫ - ২১" },
      { serial: 1, title: "Title 1", range: "১ - ৭" },
      { serial: 2, title: "Title 2", range: "৮ - ১৪" },
      { serial: 3, title: "Title 3", range: "১৫ - ২১" },
      { serial: 1, title: "Title 1", range: "১ - ৭" },
      { serial: 2, title: "Title 2", range: "৮ - ১৪" },
      { serial: 3, title: "Title 3", range: "১৫ - ২১" },
      { serial: 1, title: "Title 1", range: "১ - ৭" },
      { serial: 2, title: "Title 2", range: "৮ - ১৪" },
      { serial: 3, title: "Title 3", range: "১৫ - ২১" },
      { serial: 1, title: "Title 1", range: "১ - ৭" },
      { serial: 2, title: "Title 2", range: "৮ - ১৪" },
      { serial: 3, title: "Title 3", range: "১৫ - ২১" },
    ],
  };

  return (
    <section
      className="bg-gray-100 h-[calc(100vh-191px)] lg-min:bg-white rounded-t-none rounded-b-xl w-full xss:mb-10 
    xss:rounded-xl xss:mt-4 xs:rounded-xl sm:rounded-xl 
    md:mt-1 md:rounded-xl lg:rounded-xl scroll-mt-20"
    >
      <div className="flex items-center p-4">
        {/* This section is visible from 1280px and hidden below */}
        <div className="hidden xl:flex items-center">
          {" "}
          {/* Use `xl:flex` to show only from 1280px onwards */}
          <Image
            src="/bread-crumb-book.svg"
            width={20}
            height={20}
            alt="Home Logo"
            className="block"
          />
          <span className="text-lg font-semibold">Bukhari</span>
        </div>

        {/* This section is hidden from 1280px and visible below */}
        <div className="flex xl:hidden items-center">
          {" "}
          {/* Use `xl:hidden` to hide from 1280px onwards */}
          <Image
            src="/bread-crumb-book.svg"
            width={20}
            height={20}
            alt="Home Logo"
            className="block"
          />
          <span className="text-lg font-semibold">555</span>
        </div>
      </div>

      <div className="w-full bg-white p-4 flex flex-col h-full">
        {" "}
        {/* Set full height */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div className="flex items-center">
            <span className="text-lg font-semibold">সহিহ বুখারী</span>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border p-2 pl-10 rounded"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <p className={`text-gray-700 ${!seeMore ? "line-clamp-3" : ""}`}>
            এখানে অনেক বিস্তারিত তথ্য থাকতে পারে যা প্রথমে দেখা যাবে না।
            বিস্তারিত দেখতে, "See More" ক্লিক করুন। আপনি এই অংশটি ছোট করতে "See
            Less" ক্লিক করতে পারেন। এটি প্রায় একটি নমুনা প্যারা যাতে আপনি "See
            More" এবং "See Less" এর প্রভাব দেখতে পারেন। এখানে অনেক বিস্তারিত
            তথ্য থাকতে পারে যা প্রথমে দেখা যাবে না। বিস্তারিত দেখতে, "See More"
            ক্লিক করুন। আপনি এই অংশটি ছোট করতে "See Less" ক্লিক করতে পারেন। এটি
            প্রায় একটি নমুনা প্যারা যাতে আপনি "See More" এবং "See Less" এর
            প্রভাব দেখতে পারেন।
          </p>
          <button
            className="text-blue-500"
            onClick={() => setSeeMore(!seeMore)}
          >
            {!seeMore ? "আরো দেখুন" : "লুকান"}
          </button>
        </div>
        {/* Scrollable Data Section */}
        <div className="overflow-y-auto flex-1 space-y-2">
          {data.bukhari.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white border p-6 rounded hover:bg-green-100"
              onMouseEnter={() => setHoveredItem(index)} 
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Hexagon with Hover-Dependent Color */}
              <div className="flex items-center space-x-4">
                <Hexagon
                  number={item.serial}
                  hoveredItem={hoveredItem}
                  index={index}
                />
                <strong>{item.title}</strong>
              </div>
              <div className="text-gray-500 ml-auto">{item.range}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
