import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../features/appSlice'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const ToggleMenu = () => {
    const dispatch = useDispatch()

    const handletoggle = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className='flex items-center px-2' >
            <div className='h-7' >
                {/* <FiMenu className='text-4xl text-white bg-zinc-700 rounded-full p-2 ' onClick={() => handletoggle()} /> */}
                <img className='cursor-pointer h-full mr-1 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYHp9G9qyC4v48TK0mk9mxaFgXxzLC-NIqxpbOpluKCeOtjdEJMgqGAw_Vz2LQg647O4&usqp=CAU" alt="img" loading='lazy' onClick={() => handletoggle()} />
            </div>
            <Link to='/' >
                <img className='h-12 ml-1' src="https://www.gstatic.com/youtube/img/promos/growth/8231823367cfef6500c80aa618198e4c44f4fcb0d18d38bf1dea512141c94bd9_122x56.webp" alt="logo" loading='lazy' />
            </Link>
        </div>
    )
}

export default ToggleMenu