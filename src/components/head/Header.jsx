

import Search from './Search'
import ToggleMenu from './ToggleMenu'
import User from './User'
const Header = () => {

  return <div className='flex py-2 px-3 shadow-lg justify-between items-center' >
    <ToggleMenu />
    <Search />
    <User />
  </div>
}

export default Header
