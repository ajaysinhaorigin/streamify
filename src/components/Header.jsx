
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../features/appSlice'
import { Link } from 'react-router-dom'
const Header = () => {
  const dispatch = useDispatch()

  const handletoggle = () => {
    dispatch(toggleMenu())
  }
  return <div className='flex py-4 px-3 shadow-lg justify-between' >
    <div className='flex' >
      <img className='h-8 cursor-pointer' src="https://static.thenounproject.com/png/677012-200.png" alt="img" onClick={() => handletoggle()} />
      {/* <Link> */}
      <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzs7d1nlxerknIa7Ajtp1dwrRknLGo-4oZ7A&usqp=CAU" alt="logo" />
      {/* </Link> */}

    </div>
    <div className='flex' >
      <input className='w-72 border-2 border-gray-200 rounded-l-full' type="text" />
      <button className='border border-gray-200 rounded-r-full'>search</button>
    </div>
    <div>
      <img className='h-8' src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="user" />
    </div>
  </div>
}

export default Header
