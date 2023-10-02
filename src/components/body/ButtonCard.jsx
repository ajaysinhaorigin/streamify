import { useState, useEffect } from 'react'
import useFetchVideos from "../../hooks/useFetchVideos"
import { BUTTON_CATEGORY_VIDEOS_API, YOUTUBE_API_KEY } from '../../common/config'

const ButtonCard = ({ id, snippet, handleButtonClick, selectedbutton }) => {
    const [results, setResults] = useState([])

    // useEffect(() => {
    //     getVideos()
    // }, [id])

    // const getVideos = async () => {
    //     try {
    //         const data = await fetch(BUTTON_CATEGORY_VIDEOS_API +
    //             id +
    //             '&key=' +
    //             YOUTUBE_API_KEY)
    //         const json = await data.json()
    //         console.log(json?.items)
    //         setResults(json?.items)

    //     } catch (error) {
    //         // console.log(error)
    //     }

    // }

    // if (!results) return null

    return (
        <button className="" onClick={() => handleButtonClick(id)}  >
            <li className={selectedbutton === id ? ' bg-gray-800 text-gray-100 font-medium hover:cursor-pointer rounded-md py-1 px-4 mr-2' : "font-medium hover:cursor-pointer rounded-md py-1 px-4 mr-2 bg-gray-100 text-gray-800"} >

                {snippet?.title}
            </li>
        </button>
    )
}

export default ButtonCard