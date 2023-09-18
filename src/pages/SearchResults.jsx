import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import useFetchSuggestionsVideos from '../hooks/useFetchSuggestionsVideos'

const SearchResults = () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    // console.log(search)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const query = searchParams.get('search_query')
        setQuery(query)
    }, [searchParams])

    console.log(query)
    const suggestionVideos = useFetchSuggestionsVideos(query)
    console.log(suggestionVideos)
    return (
        <div>
            <div><img src={suggestionVideos[0]?.snippet?.thumbnails?.medium.url} alt="img" /></div>
            <p>{suggestionVideos[0]?.snippet?.title}</p>
        </div>
    )
}

export default SearchResults