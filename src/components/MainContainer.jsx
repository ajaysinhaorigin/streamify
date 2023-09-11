import { useState, useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../common/config'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
const MainContainer = () => {
    const [videos, setVideos] = useState([])

    const getVideos = async () => {
        try {
            const data = await fetch(YOUTUBE_VIDEOS_API)
            const json = await data.json()
            console.log(json.items)
            setVideos(json.items)
        } catch (error) {
            console.log('something went wrong')
        }
    }
    useEffect(() => {
        getVideos()
    }, [])

    if (videos.length === 0) return null

    return (
        <div className='flex flex-wrap p-2 m-2' >
            {
                videos?.map((video) => <Link to={'/watch?v=' + video.id} key={video.id} > <VideoCard info={video} /></Link>)
            }

        </div>
    )
}

export default MainContainer