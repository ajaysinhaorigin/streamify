import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOn = useSelector(store => store.app.isMenuOn)

    if (!isMenuOn) return null

    return (
        <div className='py-2 px-6 bg-gray-100' >
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
                <li>watch later</li>
            </ul>
            <h1 className='pt-2 font-bold'>Subsciptions</h1>
            <ul>
                <li>sorts</li>
                <li>videos</li>
                <li>chat</li>
                <li>watch later</li>
            </ul>
            <h1 className='pt-2 font-bold'>Subsciptions</h1>
            <ul>
                <li>sorts</li>
                <li>videos</li>
                <li>chat</li>
                <li>watch later</li>
            </ul>
            <h1 className='pt-2 font-bold'>Subsciptions</h1>
            <ul>
                <li>sorts</li>
                <li>videos</li>
                <li>chat</li>
                <li>watch later</li>
            </ul>
        </div>
    )
}

export default Sidebar