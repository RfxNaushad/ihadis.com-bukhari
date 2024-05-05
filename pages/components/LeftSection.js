import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
    <div className="hidden xl:block rounded-2xl bg-white h-full">
      <div className="flex mb-4">
        <button
          className="rounded-tl-2xl text-xl px-4 py-3 flex-1 border-b border-gray divide-solid"
          style={{
            backgroundColor: filterType === "বই" ? "#2B9E76" : undefined,
            color: filterType === "বই" ? "white" : "black",
          }} // Apply custom color
          onClick={() => setFilterType("বই")}
        >
          বই
        </button>

        <button
          className="px-4 py-3 rounded-tr-xl text-xl flex-1 border-b border-gray divide-solid"
          style={{
            backgroundColor: filterType === "অধ্যায়" ? "#2B9E76" : undefined,
            color: filterType === "অধ্যায়" ? "white" : "black",
          }} // Apply custom color
          onClick={() => setFilterType("অধ্যায়")}
        >
          অধ্যায়
        </button>
      </div>

      <div className="relative p-4">
          <input
            type="text"
            placeholder="Search For Filter"
            className="w-full px-10 p-2.5 border rounded bg-gray-100 focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>

      <div className="pl-4">

        <div className="overflow-y-scroll xl:pb-10 pr-1.5 mr-1.5 mt-4 xl:h-[calc(100vh_-_300px)]">
          <ul className="flex-1 space-y-2">
            {displayedData.map((item, index) => (
              <li
                key={item.serial}
                className="flex items-center bg-white p-4 rounded-lg cursor-pointer hover:bg-green-100"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className={`w-12 h-12 relative flex items-center justify-center bg-gray-100 text-gray ${
                    hoveredItem === index ? "bg-green-500" : "bg-gray-100"
                  }`}
                  style={{
                    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)', // Hexagon shape
                    borderRadius: '15px',
                  }}
                >
                  {item.serial}
                </div>
                <div className="ml-4 space-y-2">
                  <h4 className="font-bold text-sm text-gray-800">{item.title}</h4>
                  <h5 className="text-xs text-gray-500">{item.description}</h5>
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
