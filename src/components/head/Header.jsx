import Search from './Search'
import ToggleMenu from './ToggleMenu'
import User from './User'
const Header = () => {

  return <div className='flex py-2 px-3 z-10  justify-between bg-white items-center w-full fixed' >
    <ToggleMenu />
    <Search />
    <User />
  </div>


}

export default Header
