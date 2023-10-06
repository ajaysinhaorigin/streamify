import React from 'react'
import ExplorePage from '../common/ExplorePage'
import ExploreHeader from '../common/ExploreHeader'
import useFetchExploreVideos from '../hooks/useFetchExploreVideos'
// import { YOUTUBE_EXPLORE_API } from '../common/config'
import { Link } from 'react-router-dom'
import SuggestionVideoCard from '../components/suggestionVideo/SuggestionVideoCard'
const News = () => {
    const videos = useFetchExploreVideos()
    // console.log(videos)

    if (videos.length === 0) return null
    return (
        <ExplorePage>
            <div className='bg-zinc-800 py-2 flex justify-between' >
                <ExploreHeader
                    url="https://yt3.googleusercontent.com/qj80UVa3fFaLL9c0Cgd-BrEPuShbZnGBqrh2AArMRlfH2DZRAl4ilScrSqIRR3WIu01lSlJM=s88-c-k-c0x00ffffff-no-rj-mo"
                    heading="News"
                />
            </div>
            <div className="mx-8 pt-4 my-4">
                {videos?.map((video, i) => (
                    <Link to={'/watch?v=' + video?.id?.videoId} key={i}>
                        <SuggestionVideoCard {...video} />
                    </Link>
                ))}
            </div>
        </ExplorePage>)
}

export default News