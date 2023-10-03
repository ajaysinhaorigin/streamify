import React from 'react'
import ExplorePage from '../common/ExplorePage'
import ExploreHeader from '../common/ExploreHeader'
import useFetchExploreVideos from '../hooks/useFetchExploreVideos'
// import { YOUTUBE_EXPLORE_API } from '../common/config'
import { Link } from 'react-router-dom'
import SuggestionVideoCard from '../components/suggestionVideo/SuggestionVideoCard'
const FashionAndBeauty = () => {
    const videos = useFetchExploreVideos()
    // console.log(videos)

    if (videos.length === 0) return null
    return (
        <ExplorePage>
            <ExploreHeader
                url="https://yt3.googleusercontent.com/uuEgOraB12_CH7Jbth-M1-YojvZOQcd3qlYDXXy7EVouDO-Ftpm4QJlntzKTGyTXhfI_Q9Tr_g=s88-c-k-c0x00ffffff-no-rj-mo"
                heading="Fashion & beauty"
            />
            <div className="mx-8 pt-4 my-4">
                {videos?.map((video, i) => (
                    <Link to={'/watch?v=' + video?.id?.videoId} key={i}>
                        <SuggestionVideoCard {...video} />
                    </Link>
                ))}
            </div>
        </ExplorePage>)
}

export default FashionAndBeauty