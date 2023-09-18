import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOn = useSelector(store => store.app.isMenuOn)

    if (!isMenuOn) return null

    return (
        <ul className='fixed overflow-y-scroll max-h-[90%] px-4 py-3 bg-gray-50 mt-16' >
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'  >Home</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Shorts</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>History</li>
            <h1 className='pt-2 font-bold mb-2'>Explore</h1>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Trending</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Most liked</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Music</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Films</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Trending</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>liked</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Music</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Films</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Trending</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Most liked</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Music</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Films</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Most liked</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Music</li>
            <li className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-md px-3 pr-16 font-medium py-1'>Films</li>
        </ul>
    )
}

export default Sidebar