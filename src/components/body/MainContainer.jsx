import { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import useFetchVideos from '../../hooks/useFetchVideos'
import ButtonList from './ButtonList'
import Shimmer from '../../common/Shimmer'
import { useDispatch } from 'react-redux'
import { openMenu } from '../../features/appSlice'

const MainContainer = () => {
    const [videoCategoryId, setVideoCategoryId] = useState("")
    const { videos, loading, error } = useFetchVideos(videoCategoryId)
    const dispatch = useDispatch()
    // console.log(videos)
    // if (loading) return <Shimmer />
    useEffect(() => {
        dispatch(openMenu())
    }, [])

    return (
        <>
            <div className='lg:ml-52 pt-16 bg-white' >
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
