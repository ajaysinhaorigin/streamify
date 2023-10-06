import { useState } from 'react'
import useFetchExploreVideos from '../hooks/useFetchExploreVideos'
import { Link } from 'react-router-dom'
import SuggestionVideoCard from '../components/suggestionVideo/SuggestionVideoCard'
import ExploreHeader from '../common/ExploreHeader'
import ExplorePage from '../common/ExplorePage'

const TrendingVideos = () => {
    const [query, setQuery] = useState('')
    const videos = useFetchExploreVideos(query)
    return (
        <>
            <ExplorePage>
                <ExploreHeader url='https:www.youtube.com/img/trending/avatar/trending.png' heading='Trending' />
                <nav className='px-4 mx-2 my-2 border-b border-b-zinc-700' >
                    <ul className='flex' >
                        <Link to='/feed/trending' >
                            <li className={query === '' ? 'px-4 mx-2  border-b-4 pb-2 border-gray-100 font-medium cursor-pointer text-zinc-400 hover:text-zinc-300' : 'px-4 mx-2  font-medium cursor-pointer text-zinc-400 hover:text-zinc-300'} onClick={() => setQuery('')} >Now</li>
                        </Link>
                        <Link to='/feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D' >
                            <li className={query === 10 ? 'px-4 mx-2  border-b-4 pb-2 border-gray-100  font-medium cursor-pointer text-zinc-400 hover:text-zinc-300' : 'px-4 mx-2  font-medium cursor-pointer text-zinc-400 hover:text-zinc-300'} onClick={() => setQuery(10)} >Music</li>
                        </Link>
                        <Link to='/feed/trending?bp=4gIcGhpnYW1pbmdfY29ycHVzX21vc3RfcG9wdWxhcg%3D%3D' >
                            <li className={query === 20 ? 'px-4 mx-2  border-b-4 pb-2 border-gray-100  font-medium cursor-pointer text-zinc-400 hover:text-zinc-300' : 'px-4 mx-2  font-medium cursor-pointer text-zinc-400 hover:text-zinc-300'} onClick={() => setQuery(20)} >Gaming</li>
                        </Link>
                        <Link to='/feed/trending?bp=4gIKGgh0cmFpbGVycw%3D%3D' >
                            <li className={query === 1 ? 'px-4 mx-2  border-b-4 pb-2 border-gray-100  font-medium cursor-pointer text-zinc-400 hover:text-zinc-300' : 'px-4 mx-2  font-medium cursor-pointer text-zinc-400 hover:text-zinc-300'} onClick={() => setQuery(1)} >Films</li>
                        </Link>
                    </ul>
                </nav>
                <div className='mx-6 my-4' >
                    {
                        videos?.map((video, i) => <Link to={'/watch?v=' + video?.id?.videoId} key={i} > <SuggestionVideoCard  {...video} /></Link>)
                    }
                </div>
            </ExplorePage>

        </>

    )
}

export default TrendingVideos