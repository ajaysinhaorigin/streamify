import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import useFetchVideos from '../../hooks/useFetchVideos'

const MainContainer = () => {
    const { videos, loading, error } = useFetchVideos()

    if (loading) return <h1 className='p-2 m-2 text-lg font-bold' >Loading...</h1>

    if (error.show) return <h1 className='p-2 m-2 text-lg font-bold' >{error?.msg}</h1>

    return (
        <div className='flex flex-wrap p-2 m-2' >
            {
                videos?.map((video) => <Link to={'/watch?v=' + video.id} key={video.id} > <VideoCard snippet={video?.snippet} statistics={video?.statistics} /></Link>)
            }

        </div>
    )
}

export default MainContainer