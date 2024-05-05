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
    <div className="flex items-center justify-between bg-white text-black px-4 h-20"> {/* Space between left and right sections */}
      <div className="flex items-center space-x-6"> {/* Left side: logo and text */}
        <Image
          src="/home-logo.png"
          width={45}
          height={45}
          alt="Home Logo"
          className="block" // Always visible
        />
        <div>
        <h2 className="hidden md:block text-base font-bold text-black"> {/* Visible on larger screens */}
          সূচিপত্র
        </h2>
        <h4 className='text-xs'>হাদিস পড়ুন শিখুন এবং জানুন</h4>
        </div>
        <h2 className="block md:hidden">আল হাদিস</h2>

      </div>
      
      <div className="flex items-center space-x-16 relative h-10"> {/* Right side: search bar, support button, and settings */}
        {/* Hide long search bar on smaller screens */}
        <div className='hidden md:block relative border-2  rounded-lg'> 
          <input
            type="text"
            placeholder="Search Hadith"
            className="pl-10 pr-14 py-3 rounded bg-white text-black focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" // Position inside the input
          />
        </div>
        
        {/* Search icon for smaller screens */}
        <button className="block md:hidden" onClick={openSearchModal}>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>
        
        {/* Support button for larger screens */}
        <button className=" text-white px-4 py-3 rounded-lg flex items-center space-x-2 hidden md:block" style={{backgroundColor: "#2B9E76"}}>
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


