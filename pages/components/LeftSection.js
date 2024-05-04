import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu ";
import Hexagon from "./Hexagon";

const LeftSection = ({ isSidebarOpen }) => {
  const [filterType, setFilterType] = useState("বই");
  const [hoveredItem, setHoveredItem] = useState(null);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen)
  // }

  // Sample data for books/chapters
  const data = {
    বই: [
      {
        serial: "CW",
        title: "সহিহ বুখারী",
        description: "সর্বমোট হাদিস - ৭৫৬৩",
      },
      { serial: 2, title: "সহিহ মুসলিম", description: "সর্বমোট হাদিস - ৫৭৮৯" },
      {
        serial: 3,
        title: "সুনান আবু দাউদ",
        description: "সর্বমোট হাদিস - ৫২৬৪",
      },
      {
        serial: 4,
        title: "সুনান আত-তিরমিজি",
        description: "সর্বমোট হাদিস - ৪৫৮৯",
      },
      {
        serial: 5,
        title: "সুনান আন-নাসাই",
        description: "সর্বমোট হাদিস - ৫৬৩৭",
      },
      {
        serial: 6,
        title: "সুনান ইবনে মাজাহ",
        description: "সর্বমোট হাদিস - ৪৩৪২",
      },
      {
        serial: 7,
        title: "মুসনাদ আহমাদ",
        description: "সর্বমোট হাদিস - ২৭০৪৮",
      },
      { serial: 8, title: "মুত্তা মালিক", description: "সর্বমোট হাদিস - ১১৪৬" },
      {
        serial: 9,
        title: "সুনান আদ-দারিমি",
        description: "সর্বমোট হাদিস - ৩৫৮০",
      },
      {
        serial: 10,
        title: "মুসান্নাফ ইবনে আবি শাইবা",
        description: "সর্বমোট হাদিস - ৩৭৪৩১",
      },
      {
        serial: 11,
        title: "মুসান্নাফ আব্দুর রাযযাক",
        description: "সর্বমোট হাদিস - ১৯৮৩৬",
      },
      {
        serial: 12,
        title: "মুস্তাদরাক আল-হাকিম",
        description: "সর্বমোট হাদিস - ৮৪৭৯",
      },
      {
        serial: 13,
        title: "তাবারানি - আল-মু'জাম আল-কাবির",
        description: "সর্বমোট হাদিস - ২১০০০",
      },
      {
        serial: 14,
        title: "তাবারানি - আল-মু'জাম আল-আওসাত",
        description: "সর্বমোট হাদিস - ৯৯৪৩",
      },
      {
        serial: 15,
        title: "তাবারানি - আল-মু'জাম আস-সাগির",
        description: "সর্বমোট হাদিস - ৪৮৫০",
      },
    ],

    অধ্যায়: [
      { serial: 20, title: "সহিহ বুখারী", description: "সর্বমোট হাদিস - ৭৫৬৩" },
      { serial: 2, title: "সহিহ মুসলিম", description: "সর্বমোট হাদিস - ৫৭৮৯" },
      {
        serial: 3,
        title: "সুনান আবু দাউদ",
        description: "সর্বমোট হাদিস - ৫২৬৪",
      },
      {
        serial: 4,
        title: "সুনান আত-তিরমিজি",
        description: "সর্বমোট হাদিস - ৪৫৮৯",
      },
      {
        serial: 5,
        title: "সুনান আন-নাসাই",
        description: "সর্বমোট হাদিস - ৫৬৩৭",
      },
      {
        serial: 6,
        title: "সুনান ইবনে মাজাহ",
        description: "সর্বমোট হাদিস - ৪৩৪২",
      },
      {
        serial: 7,
        title: "মুসনাদ আহমাদ",
        description: "সর্বমোট হাদিস - ২৭০৪৮",
      },
      { serial: 8, title: "মুত্তা মালিক", description: "সর্বমোট হাদিস - ১১৪৬" },
      {
        serial: 9,
        title: "সুনান আদ-দারিমি",
        description: "সর্বমোট হাদিস - ৩৫৮০",
      },
      {
        serial: 10,
        title: "মুসান্নাফ ইবনে আবি শাইবা",
        description: "সর্বমোট হাদিস - ৩৭৪৩১",
      },
      {
        serial: 11,
        title: "মুসান্নাফ আব্দুর রাযযাক",
        description: "সর্বমোট হাদিস - ১৯৮৩৬",
      },
      {
        serial: 12,
        title: "মুস্তাদরাক আল-হাকিম",
        description: "সর্বমোট হাদিস - ৮৪৭৯",
      },
    ],
  };

  // Determine the displayed list based on the current filter
  const displayedData = filterType ? data[filterType] : [];

  return (
    <div className="hidden xl:block bg-white h-full">
      <div className="p-4">
        {/* Buttons with active state */}
        <div className="flex space-x-2 mb-4">
          <button
            className={`px-4 py-2 rounded flex-1 ${
              filterType === "বই"
                ? "bg-black text-white"
                : "bg-green-500 text-white"
            }`}
            onClick={() => setFilterType("বই")}
          >
            বই
          </button>
          <button
            className={`px-4 py-2 rounded flex-1 ${
              filterType === "অধ্যায়"
                ? "bg-black text-white"
                : "bg-green-500 text-white"
            }`}
            onClick={() => setFilterType("অধ্যায়")}
          >
            অধ্যায়
          </button>
        </div>

        {/* Search bar with a search icon */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search For Filter"
            className="w-full px-10 p-2 border rounded"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>

        <div className="overflow-y-scroll xl:h-[calc(100vh_-_200px)] xl:pb-10 xl:h-[calc(100vh_-_270px)] pr-1.5 mr-1.5 mt-4">
          <ul className="space-y-2">
            {displayedData.map((item, index) => (
              <li
                key={item.serial}
                className="flex items-center bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-green-100"
                onMouseEnter={() => setHoveredItem(index)} 
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className="w-12 h-12 relative flex items-center justify-center bg-gray-100 text-gray"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }} // Hexagon shape
                >
                  {item.serial}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                  <h5 className="text-gray-500">{item.description}</h5>
                </div>
              </li>
            ))}
          </ul>
        </div>

        
        
      </div>
    </div>
  );
};

export default LeftSection;
