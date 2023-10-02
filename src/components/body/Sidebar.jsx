import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [selectedbutton, setSelectedButton] = useState('Home')
    const isMenuOn = useSelector(store => store.app.isMenuOn)

    const handleClick = (buttonName) => {
        console.log(buttonName)
        setSelectedButton(buttonName)
    }

    if (!isMenuOn) return null

    return (
        <ul className='fixed z-10 overflow-y-scroll h-[90%] px-5 py-3 bg-gray-50 mt-16' >
            <Link to='/' >
                <li className={selectedbutton === 'Home' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-3 pr-16 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-3 pr-16 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >Home</li>
            </Link>
            {/* <Link to='shorts/:videoId' > */}
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Shorts</li>
            {/* </Link> */}
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>History</li>
            <h1 className='pt-2 font-bold mb-2'>Explore</h1>
            <Link to='/feed/trending?bp=6gQJRkVleHBsb3Jl' >
                <li className={selectedbutton === 'Trending' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-3 pr-16 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-3 pr-16 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >Trending</li>
            </Link>
            <Link to='channel/UCkYQyvc_i9hXEo4xic9Hh2g' >
                <li className={selectedbutton === 'Shopping' ? 'bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-md px-3 pr-16 font-medium py-1' : 'hover:bg-gray-100 hover:cursor-pointer rounded-md px-3 pr-16 font-medium py-1'} onClick={(e) => handleClick(e.target.innerHTML)} >Shopping</li>
            </Link>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Music</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Films</li>

        </ul>
    )
}

export default Sidebar