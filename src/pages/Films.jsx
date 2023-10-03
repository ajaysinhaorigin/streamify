import React from 'react'
import ExplorePage from '../common/ExplorePage'
import ExploreHeader from '../common/ExploreHeader'
import useFetchExploreVideos from '../hooks/useFetchExploreVideos'
import { Link } from 'react-router-dom'
import SuggestionVideoCard from '../components/suggestionVideo/SuggestionVideoCard'

const Films = () => {
    const videos = useFetchExploreVideos()
    return (
        <ExplorePage>
            <ExploreHeader
                url="https://www.gstatic.com/youtube/img/tvfilm/clapperboard_profile.png"
                heading="Films"
            />
            <div className="mx-8 pt-4 my-4">
                {videos?.map((video, i) => (
                    <Link to={'/watch?v=' + video?.id?.videoId} key={i}>
                        <SuggestionVideoCard {...video} />
                    </Link>
                ))}
            </div>
        </ExplorePage>
    )
}

export default Films