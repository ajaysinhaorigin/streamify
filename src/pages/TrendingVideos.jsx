import { useState } from 'react'
import useFetchExploreVideos from '../hooks/useFetchExploreVideos'
// import ImageComponent from '../common/ImageComponent'
import { YOUTUBE_TRENDING_VIDEOS_API, YOUTUBE_TRENDING_VIDEOS_BY_CATEGORY_API } from '../common/config'
import { Link } from 'react-router-dom'
import SuggestionVideoCard from '../components/suggestionVideo/SuggestionVideoCard'
import ExploreHeader from '../common/ExploreHeader'
import ExplorePage from '../common/ExplorePage'

const TrendingVideos = () => {
    const [query, setQuery] = useState('')
    // const [selectedbutton, setSelectedButton] = useState('')

    // const handleButtonClick = (buttonName) => {
    //     setSelectedButton(buttonName)
    // }

    const videos = useFetchExploreVideos(YOUTUBE_TRENDING_VIDEOS_API, YOUTUBE_TRENDING_VIDEOS_BY_CATEGORY_API, query)
    console.log(videos)
    return (
        <>
            <ExplorePage>
                <ExploreHeader url='https:www.youtube.com/img/trending/avatar/trending.png' heading='Trending' />
                <nav className='mx-6 my-2 border-b-[1px] border-b-gray-300' >
                    <ul className='flex' >
                        <Link to='/feed/trending' >
                            <li className={query === '' ? 'mx-4 text-lg border-b-4 pb-2 border-gray-800 font-medium text-gray-700 cursor-pointer' : 'mx-4 text-lg font-medium text-gray-700 cursor-pointer'} onClick={() => setQuery('')} >Now</li>
                        </Link>
                        <Link to='/feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D' >
                            <li className={query === 10 ? 'mx-4 text-lg border-b-4 pb-2 border-gray-800  font-medium text-gray-700 cursor-pointer' : 'mx-4 text-lg font-medium text-gray-700 cursor-pointer'} onClick={() => setQuery(10)} >Music</li>
                        </Link>
                        <Link to='/feed/trending?bp=4gIcGhpnYW1pbmdfY29ycHVzX21vc3RfcG9wdWxhcg%3D%3D' >
                            <li className={query === 20 ? 'mx-4 text-lg border-b-4 pb-2 border-gray-800  font-medium text-gray-700 cursor-pointer' : 'mx-4 text-lg font-medium text-gray-700 cursor-pointer'} onClick={() => setQuery(20)} >Gaming</li>
                        </Link>
                        <Link to='/feed/trending?bp=4gIKGgh0cmFpbGVycw%3D%3D' >
                            <li className={query === 1 ? 'mx-4 text-lg border-b-4 pb-2 border-gray-800  font-medium text-gray-700 cursor-pointer' : 'mx-4 text-lg font-medium text-gray-700 cursor-pointer'} onClick={() => setQuery(1)} >Films</li>
                        </Link>
                    </ul>
                </nav>
                <div className='mx-8 my-4' >
                    {
                        videos?.map((video, i) => <Link to={'/watch?v=' + video?.id?.videoId} key={i} > <SuggestionVideoCard  {...video} /></Link>)
                    }
                </div>
            </ExplorePage>

        </>

    )
}

export default TrendingVideos