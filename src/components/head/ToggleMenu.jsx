import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../features/appSlice'
import { Link } from 'react-router-dom'
const ToggleMenu = () => {
    const dispatch = useDispatch()

    const handletoggle = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className='flex items-center px-1' >
            <img className='cursor-pointer h-8 mr-1' src="https://static.thenounproject.com/png/677012-200.png" alt="img" loading='lazy' onClick={() => handletoggle()} />
            <Link to='/' >
                <img className='h-12' src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg" alt="logo" loading='lazy' />
            </Link>
        </div>
    )
}

export default ToggleMenu