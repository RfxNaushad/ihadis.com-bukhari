import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faBell,
  faEnvelope,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const iconData = [
  { id: 1, icon: faHome, label: "Home" },
  { id: 2, icon: faUser, label: "Profile" },
  { id: 3, icon: faCog, label: "Settings" },
  { id: 4, icon: faBell, label: "Notifications" },
  { id: 5, icon: faEnvelope, label: "Messages" },
  { id: 6, icon: faChartBar, label: "Reports" },
];

const Sidebar = () => {
  const [hoveredIcon, setIconHover] = useState(null);

  return (
    <div
      className="bg-gray-800 text-white p-4 
      flex fixed bottom-0 left-0 w-full justify-around 
      xl:flex-col xl:justify-center xl:items-center xl:w-24 xl:fixed xl:left-0 xl:top-24 
      xl:h-[calc(100vh-4rem)] xl:space-y-6"
    >
            {iconData.map((item) => (
        <div
          key={item.id}
          className="p-4 hover:bg-gray-200 rounded transition-colors" onMouseEnter={() => setIconHover(item.id)}
          onMouseLeave={() => setIconHover(false)} 
        >
          <FontAwesomeIcon
            icon={item.icon}
            className={`size-7 transition-colors ${
              hoveredIcon === item.id ? 'text-green-500' : 'text-white' // Change color based on hover state
            }`}
          />
        </div>
      ))}
    </div>

  );
};

export default Sidebar;
