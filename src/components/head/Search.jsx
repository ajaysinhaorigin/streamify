import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SuggestionCard from './SuggestionCard'
// import useFetchSuggestionsVideos from '../../hooks/useFetchSuggestionsVideos'
import useFetchSearchSuggestions from '../../hooks/useFetchSearchSuggestions'

const Search = () => {
    // const [searchParams, setSearchParams] = useSearchParams()

    const [search, setSearch] = useState('')
    // const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()
    // console.log(searchQuery)
    const [showSuggestions, setShowSuggestions] = useState(false)
    const suggestions = useFetchSearchSuggestions(search)

    // useFetchSuggestionsVideos(searchQuery)

    const handleClick = (suggestion) => {
        // setSearchQuery(suggestion)
        setSearch(suggestion)
        // setShowSuggestions(false)
        navigate('/results?search_query=' + suggestion)
    }
    const handleFocus = () => {
        setShowSuggestions(true)
    }

    useEffect(() => {
        const handleBlur = () => {
            setTimeout(() => {
                setShowSuggestions(false)
            }, 200)
        }
        const searchBar = document.getElementById('searchbar')
        searchBar.addEventListener('blur', handleBlur)

        return () => {
            searchBar.removeEventListener('blur', handleBlur)
        }

    }, [showSuggestions])

    return (
        <>
            <div className='lg:w-1/3' >
                <form className='flex' onSubmit={(e) => {
                    e.preventDefault()
                    // setSearchQuery(search)
                    if (search !== '') {
                        navigate('/results?search_query=' + search)
                    }
                    setShowSuggestions(false)
                }}>
                    <input id="searchbar" className='border w-full border-gray-400 py-1 px-2 rounded-l-full focus:outline-blue-400 outline-1' type="text" value={search} onChange={(e => {
                        setSearch(e.target.value)
                    })} onFocus={() => handleFocus()} />
                    <button className='border border-gray-400 py-1 px-5 rounded-r-full'>
                        <img className='h-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="icon" loading='lazy' />
                    </button>
                </form>
                <ul className="lg:w-1/3 w-3/5 absolute bg-white shadow-lg rounded-lg pb-2">
                    {showSuggestions && suggestions.length > 0 && suggestions?.map((suggestion, i) => <SuggestionCard suggestion={suggestion} handleClick={handleClick} key={i} />)}
                </ul>
            </div>

        </>

    )
}

export default Search