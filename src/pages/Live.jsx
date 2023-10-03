import React from 'react'
import useFetchExploreVideos from '../hooks/useFetchExploreVideos'
import ExplorePage from '../common/ExplorePage'
import ExploreHeader from '../common/ExploreHeader'
import SuggestionVideoCard from '../components/suggestionVideo/SuggestionVideoCard'
import { Link } from 'react-router-dom'

const Live = () => {
    const videos = useFetchExploreVideos()
    // console.log(videos)

    if (videos.length === 0) return null
    return (
        <ExplorePage>
            <ExploreHeader
                url="https://yt3.googleusercontent.com/uL4xlF3_o_605wg887ENKIaMdEwJn5aP5t-r7HRpQshXL5gIn2AKfNfjZkRN15kTcgS3wK7c=s88-c-k-c0x00ffffff-no-rj-mo"
                heading="Live"
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

export default Live