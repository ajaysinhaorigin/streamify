
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../features/appSlice'
import { Link } from 'react-router-dom'
import Search from './Search'
const Header = () => {
  const dispatch = useDispatch()

  const handletoggle = () => {
    dispatch(toggleMenu())
  }
  return <div className='flex py-4 px-3 shadow-lg justify-between' >
    <div className='flex' >
      <img className='h-8 cursor-pointer' src="https://static.thenounproject.com/png/677012-200.png" alt="img" onClick={() => handletoggle()} />

      <a href='/' >
        <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzs7d1nlxerknIa7Ajtp1dwrRknLGo-4oZ7A&usqp=CAU" alt="logo" />
      </a>

    </div>
    <Search />
    <div>
      <img className='h-8' src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="user" />
    </div>

  </div>
}

export default Header
