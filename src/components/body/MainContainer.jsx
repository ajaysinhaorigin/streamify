import { useState } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import useFetchVideos from '../../hooks/useFetchVideos'
import ButtonList from './ButtonList'
import Shimmer from '../../common/Shimmer'

const MainContainer = () => {
    const [videoCategoryId, setVideoCategoryId] = useState("")
    const { videos, loading, error } = useFetchVideos(videoCategoryId)

    // if (loading) return <Shimmer />

    return (
        <>
            <div className='ml-52 pt-16 bg-white' >
                <ButtonList setVideoCategoryId={setVideoCategoryId} />
                <div className='grid grid-cols-1  lg:grid-cols-3 gap-10 mt-16 mx-10' >

                    {loading ? <Shimmer /> :
                        videos?.map((video) => <Link to={'/watch?v=' + video.id} key={video.id} > <VideoCard snippet={video?.snippet} statistics={video?.statistics} /></Link>)
                    }
                </div>
            </div>
        </>
    )
}

export default MainContainer

/**
 * margin to top
 * 
 */
