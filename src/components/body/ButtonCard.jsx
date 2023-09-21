import { useState, useEffect } from 'react'
import useFetchVideos from "../../hooks/useFetchVideos"

const ButtonCard = ({ id, snippet, setVideoCategoryId }) => {
    const [results, setResults] = useState([])

    useEffect(() => {

    }, [id])

    // if (results.length === 0) return null

    return (
        <button className="" onClick={() => setVideoCategoryId(id)}  >
            <li className=' bg-gray-100 text-gray-800 font-medium hover:cursor-pointer rounded-md py-1 px-4 mr-2' >

                {snippet?.title}
            </li>
        </button>
    )
}

export default ButtonCard