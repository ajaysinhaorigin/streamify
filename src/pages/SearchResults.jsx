import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetchSuggestionsVideos from '../hooks/useFetchSuggestionsVideos'
import Shimmer from '../common/Shimmer'
import SuggestionVideoCard from '../components/suggestionVideo/SuggestionVideoCard'

const SearchResults = () => {
    const [searchParams] = useSearchParams()
    const [query, setQuery] = useState('')

    useEffect(() => {
        const query = searchParams.get('search_query')
        setQuery(query)
    }, [searchParams])

    const suggestionVideos = useFetchSuggestionsVideos(query)
    console.log(suggestionVideos)

    if (!suggestionVideos) return null

    return suggestionVideos.length === 0 ? <Shimmer /> : (
        <div className='ml-60 pt-20'>
            {
                suggestionVideos.map((video) => <SuggestionVideoCard key={video?.id?.videoId} {...video} />)
            }
        </div>
    )
}

export default SearchResults