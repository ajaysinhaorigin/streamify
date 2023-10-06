import Search from './Search'
import ToggleMenu from './ToggleMenu'
import User from './User'
const Header = () => {

  return <div className='flex py-2 px-3  justify-between bg-[#0f0f0f] items-center w-full fixed  z-20' >
    <ToggleMenu />
    <Search />
    <User />
  </div>


}

export default Header
