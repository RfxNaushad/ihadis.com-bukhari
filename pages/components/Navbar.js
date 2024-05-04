import { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCog, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import SearchModal from './SearchModal' // Search modal component for smaller screens

const Navbar = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false) // State to control the modal

  const openSearchModal = () => {
    setIsSearchModalOpen(true)
  }

  const closeSearchModal = () => {
    setIsSearchModalOpen(false)
  }

  return (
    <div className="flex items-center justify-between bg-gray-800 text-white p-4 h-24"> {/* Space between left and right sections */}
      <div className="flex items-center space-x-2"> {/* Left side: logo and text */}
        <Image
          src="/home-logo.png"
          width={45}
          height={45}
          alt="Home Logo"
          className="block" // Always visible
        />
        <h2 className="hidden md:block"> {/* Visible on larger screens */}
          সূচিপত্র
          <br /> 
          <span>হাদিস পড়ুন শিখুন এবং জানুন</span>
        </h2>
        <h2 className="block md:hidden">আল হাদিস</h2>

      </div>
      
      <div className="flex items-center space-x-2 relative"> {/* Right side: search bar, support button, and settings */}
        {/* Hide long search bar on smaller screens */}
        <div className='hidden md:block relative'> 
          <input
            type="text"
            placeholder="Search..."
            className="px-10 py-2 rounded bg-white text-black focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" // Position inside the input
          />
        </div>
        
        {/* Search icon for smaller screens */}
        <button className="block md:hidden" onClick={openSearchModal}>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>
        
        {/* Support button for larger screens */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center space-x-2 hidden md:block">
          <span>সাপোর্ট করুন</span>
          <FontAwesomeIcon icon={faHandHoldingHeart} />
        </button>
        
        {/* Settings icon for smaller screens */}
        <button className="block md:hidden">
          <FontAwesomeIcon icon={faCog} size="lg" />
        </button>
      </div>
      
      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
    </div>
  )
}

export default Navbar


