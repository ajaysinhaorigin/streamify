import { useState, useEffect } from 'react'
import { YOUTUBE_SEARCH_SUGGECTIONS_API } from '../common/config'
import { useDispatch, useSelector } from 'react-redux'
import { cacheSuggestions } from '../features/suggestionSlice'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const cacheData = useSelector(store => store.suggestions)
    const dispatch = useDispatch()

    useEffect(() => {
        let timer;
        if (cacheData[searchQuery]) {
            setSuggestions(cacheData[searchQuery])
        } else {
            timer = setTimeout(() => getSearchSuggestions(), 200)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_SUGGECTIONS_API + searchQuery)
        const json = await data.json()
        setSuggestions(json[1])
        console.log({
            [searchQuery]: json[1]
        })
        dispatch(cacheSuggestions({
            [searchQuery]: json[1]
        }))
        console.log(json[1])
    }
    return (
        <>
            <div>
                <div className='flex' >
                    <input className='w-72 border-2 border-gray-200 rounded-l-full focus:outline-none px-3' type="text" value={searchQuery} onChange={(e => setSearchQuery(e.target.value))} />
                    <button className='border border-gray-200 rounded-r-full'>search</button>
                </div>
                <ul>
                    {
                        suggestions?.map((suggestion, i) =>
                            <li key={i}>{suggestion}</li>
                        )
                    }
                </ul>
            </div>

        </>

    )
}

export default Search