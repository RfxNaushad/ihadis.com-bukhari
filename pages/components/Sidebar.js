import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faCog,
  faBell,
  faEnvelope,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div
      className="bg-gray-800 text-white p-4 
      flex fixed bottom-0 left-0 w-full justify-around 
      xl:flex-col xl:justify-center xl:items-center xl:w-24 xl:fixed xl:left-0 xl:top-24 
      xl:h-[calc(100vh-4rem)] xl:space-y-14"
    >
      <FontAwesomeIcon icon={faHome} className='size-7' />
      <FontAwesomeIcon icon={faUser} className='size-7' />
      <FontAwesomeIcon icon={faCog} className='size-7' />
      <FontAwesomeIcon icon={faBell} className='size-7' />
      <FontAwesomeIcon icon={faEnvelope} className='size-7' />
      <FontAwesomeIcon icon={faChartBar} className='size-7' />
    </div>
  )
}

export default Sidebar
