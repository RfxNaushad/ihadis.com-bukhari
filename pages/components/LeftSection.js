import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu ";

const LeftSection = ({ isSidebarOpen }) => {
  const [filterType, setFilterType] = useState("বই");
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen)
  // }

  // Sample data for books/chapters
  const data = {
    বই: [
      "মহিলা বুখারি",
      "মহিলা মুসলিম",
      "সুনান আবি-দাউদ",
      "সুনান আত তিরমিযি",
      "মহিলা বুখারি",
      "মহিলা মুসলিম",
      "সুনান আবি-দাউদ",
      "সুনান আত তিরমিযি",
      "মহিলা বুখারি",
      "মহিলা মুসলিম",
      "সুনান আবি-দাউদ",
      "সুনান আত তিরমিযি",
      "মহিলা বুখারি",
      "মহিলা মুসলিম",
      "সুনান আবি-দাউদ",
      "সুনান আত তিরমিযি",
      "মহিলা বুখারি",
      "মহিলা মুসলিম",
      "সুনান আবি-দাউদ",
      "সুনান আত তিরমিযি",
      "মহিলা বুখারি",
      "মহিলা মুসলিম",
      "সুনান আবি-দাউদ",
      "সুনান আত তিরমিযি",
    ],
    অধ্যায়: [
      "জামে' আত-তিরমিজি",
      "সর্বমোট হাদিস - ৩৯৫৬",
      "জামে' আত-তিরমিজি",
      "সর্বমোট হাদিস - ৩৯৫৬",
      "জামে' আত-তিরমিজি",
      "সর্বমোট হাদিস - ৩৯৫৬",
      "জামে' আত-তিরমিজি",
      "সর্বমোট হাদিস - ৩৯৫৬",
      "জামে' আত-তিরমিজি",
      "সর্বমোট হাদিস - ৩৯৫৬",
      "জামে' আত-তিরমিজি",
      "সর্বমোট হাদিস - ৩৯৫৬",
    ],
  };

  // Determine the displayed list based on the current filter
  const displayedData = filterType ? data[filterType] : [];

  return (
      <div className="hidden xl:block bg-gray-100 h-full">
      <div className="p-4">

        {/* Buttons with active state */}
        <div className="flex space-x-2 mb-4">
          <button
            className={`px-4 py-2 rounded flex-1 ${filterType === 'বই' ? 'bg-black text-white' : 'bg-green-500 text-white'}`}
            onClick={() => setFilterType('বই')}
          >
            বই
          </button>
          <button
            className={`px-4 py-2 rounded flex-1 ${filterType === 'অধ্যায়' ? 'bg-black text-white' : 'bg-green-500 text-white'}`}
            onClick={() => setFilterType('অধ্যায়')}
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

        {/* Scrollable list */}
        <div className="overflow-y-scroll pl-4 cat-scrl xl:h-[calc(100vh_-_200px)] xl:pb-10 xl:h-[calc(100vh_-_270px)] pr-1.5 mr-1.5 mt-4">
          <ul>
            {displayedData.map((item, index) => (
              <li
                key={index}
                className="bg-white mb-2 rounded p-2 shadow cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  );
};

export default LeftSection;
