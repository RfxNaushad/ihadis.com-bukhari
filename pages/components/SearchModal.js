import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const SearchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null // Don't render if not open

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded">
        <div className="flex justify-between">
          <h2>Search</h2>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="mt-2 px-4 py-2 border rounded w-full"
        />
      </div>
    </div>
  )
}

export default SearchModal