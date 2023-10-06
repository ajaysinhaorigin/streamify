import React from 'react'
import useFetchExploreVideos from '../hooks/useFetchExploreVideos'
import ExplorePage from '../common/ExplorePage'
import ExploreHeader from '../common/ExploreHeader'
import { Link } from 'react-router-dom'
import SuggestionVideoCard from '../components/suggestionVideo/SuggestionVideoCard'
import SubscribeButton from '../common/SubscribeButton'

const Gaming = () => {
    const videos = useFetchExploreVideos()
    // console.log(videos)

    if (videos.length === 0) return null
    return (
        <ExplorePage>
            <div className='bg-zinc-800 py-2 flex justify-between'  >
                <ExploreHeader
                    url="https://yt3.googleusercontent.com/pzvUHajbQDLDt63gKFYUX445k3VprUs8CeJFpNTxGQZlk0grOSkAqU8Th1_C97dyYM3nENgjbw=s88-c-k-c0x00ffffff-no-rj-mo"
                    heading="Gaming"
                />
                <SubscribeButton />
            </div>
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

export default Gaming