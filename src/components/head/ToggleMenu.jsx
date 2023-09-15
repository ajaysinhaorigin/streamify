import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../features/appSlice'
const ToggleMenu = () => {
    const dispatch = useDispatch()

    const handletoggle = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className='flex items-center px-1' >
            <img className='cursor-pointer h-8 mr-1' src="https://static.thenounproject.com/png/677012-200.png" alt="img" onClick={() => handletoggle()} />
            <a href='/' >
                <img className='h-12' src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg" alt="logo" />
            </a>
        </div>
    )
}

export default ToggleMenu