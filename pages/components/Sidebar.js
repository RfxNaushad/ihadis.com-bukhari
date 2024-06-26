import React, { useState } from 'react';
import {
  HomeOutlined,
  LibraryBooksOutlined,
  BookmarkBorderOutlined,
  LocalLibraryOutlined,
  DashboardOutlined,
  SendOutlined,
} from '@mui/icons-material';

const iconData = [
  { id: 1, icon: <HomeOutlined />, label: 'Home' },
  { id: 2, icon: <LibraryBooksOutlined />, label: 'Library' },
  { id: 3, icon: <LocalLibraryOutlined />, label: 'Local Library' },
  { id: 4, icon: <BookmarkBorderOutlined />, label: 'Bookmarks' },
  { id: 5, icon: <DashboardOutlined />, label: 'Dashboard' },
  { id: 6, icon: <SendOutlined />, label: 'Send' },
];

const Sidebar = () => {
  const [hoveredIcon, setIconHover] = useState(null);

  return (
    <div
      className="bg-white p-4 flex fixed bottom-0 left-0 w-full justify-around 
      xl:flex-col xl:justify-center xl:items-center xl:w-24 xl:fixed xl:left-0 xl:top-20 
      xl:h-[calc(100vh - 4rem)] xl:space-y-5"
    >
      {iconData.map((item) => (
        <div
          key={item.id}
          className={`p-4 rounded transition-colors ${hoveredIcon === item.id ? 'bg-gray-200' : ''}`} // Background change on hover
          onMouseEnter={() => setIconHover(item.id)}
          onMouseLeave={() => setIconHover(null)}
        >
          {React.cloneElement(item.icon, {
            style: { fontSize: '35px' },
            className: `transition-colors ${hoveredIcon === item.id ? 'text-[#2B9E76]' : 'text-black'}`, // Change color based on hover
          })}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

