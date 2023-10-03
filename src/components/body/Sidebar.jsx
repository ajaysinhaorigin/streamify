import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setButtonName } from '../../features/sidebarSlice'

const Sidebar = () => {
    const { buttonName
    } = useSelector(store => store.sidebar)
    const isMenuOn = useSelector(store => store.app.isMenuOn)
    // console.log(buttonName)

    const dispatch = useDispatch()

    const handleClick = (buttonName) => {
        console.log(buttonName)
        dispatch(setButtonName(buttonName))
    }

    if (!isMenuOn) return null

    return (
        <ul className='fixed z-10 overflow-y-scroll h-[90%] px-3 py-3 bg-gray-50 mt-16' >
            <Link to='/' >
                <li className={buttonName === 'Home' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >Home</li>
            </Link>
            {/* <Link to='shorts/:videoId' > */}
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-4 pr-10 font-medium py-1'>Shorts</li>
            {/* </Link> */}
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-4 pr-10 font-medium py-1'>History</li>
            <h1 className='pt-2 font-bold mb-2'>Explore</h1>
            <Link to='/feed/trending?bp=6gQJRkVleHBsb3Jl' >
                <li className={buttonName === 'Trending' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >Trending</li>
            </Link>
            <Link to='channel/UCkYQyvc_i9hXEo4xic9Hh2g' >
                <li className={buttonName === 'Shopping' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >Shopping</li>
            </Link>
            <Link to='channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ' >
                <li className={buttonName === 'Music' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >Music</li>
            </Link>
            <Link to='feed/storefront?bp=ogUCKAI%3D' >
                <li className={buttonName === 'Films' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >Films</li>
            </Link>
            <Link to='channel/UC4R8DWoMoI7CAwX8_LjQHig' >
                <li className={buttonName === 'Live' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >Live</li>
            </Link>
            <Link to='gaming' >
                <li className={buttonName === 'Gaming' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >Gaming</li>
            </Link>
            <Link to='channel/UCYfdidRxbB8Qhf0Nx7ioOYw' >
                <li className={buttonName === 'News' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >News</li>
            </Link>
            <Link to='channel/UCEgdi0XIXXZ-qJOFPf4JSKw' >
                <li className={buttonName === 'Sport' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >Sport</li>
            </Link>
            <Link to='channel/UCtFRv9O2AHqOZjjynzrv-xg' >
                <li className={buttonName === 'Learning' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >Learning</li>
            </Link>
            <Link to='channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ' >
                <li className={buttonName === 'Fashion & beauty' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-4 pr-10 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >Fashion & beauty</li>
            </Link>

        </ul>
    )
}

export default Sidebar