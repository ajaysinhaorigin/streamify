import React from 'react'
import useFetchExploreVideos from '../hooks/useFetchExploreVideos'
import { YOUTUBE_SHOPPING_API } from '../common/config'
import ExploreHeader from '../common/ExploreHeader'
import ExplorePage from '../common/ExplorePage'
import { Link } from 'react-router-dom'
import SuggestionVideoCard from '../components/suggestionVideo/SuggestionVideoCard'

const Shopping = () => {
  const videos = useFetchExploreVideos(YOUTUBE_SHOPPING_API,)
  console.log(videos)
  // if (videos.length === 0) return null

  return (
    // <div className='ml-52 pt-20' >
    //   Hello
    // </div>
    <ExplorePage>
      <ExploreHeader
        url="https://yt3.googleusercontent.com/4GiJyKFkqzoNzqSiNevXL8Q_yvba0TsD44t1qPGxPNc8Eic_GUa6diGWleJ2C7huhAW60MQYrA=s88-c-k-c0x00ffffff-no-rj-mo"
        heading="Shopping"
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

export default Shopping
