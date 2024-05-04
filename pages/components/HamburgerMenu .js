import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HamburgerMenu = ({ onClick }) => {
  return (
    <button
      className="xl:hidden" // Only visible on smaller screens
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faBars} size="lg" />
    </button>
  )
}

export default HamburgerMenu