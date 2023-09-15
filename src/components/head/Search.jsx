import { useState } from 'react'
import SuggestionCard from './SuggestionCard'
import useFetchSuggestionsVideos from '../../hooks/useFetchSuggestionsVideos'
const Search = () => {
    const [search, setSearch] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const [showSuggestions, setShowSuggestions] = useState(false)
    useFetchSuggestionsVideos(searchQuery)
    return (
        <>
            <div className='lg:w-1/3' >
                <form className='flex' onSubmit={(e) => {
                    e.preventDefault()
                    setSearchQuery(search)
                    setShowSuggestions(false)

                }}>
                    <input className='border w-full border-gray-400 py-1 px-2 rounded-l-full focus:outline-blue-400 outline-1' type="text" value={search} onChange={(e => setSearch(e.target.value))} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} />
                    <button className='border border-gray-400 py-1 px-5 rounded-r-full'>
                        <img className='h-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="icon" />
                    </button>
                </form>
                {showSuggestions && <SuggestionCard search={search} setSearchQuery={setSearchQuery} setSearch={setSearch} setShowSuggestions={setShowSuggestions} />}
            </div>

        </>

    )
}

export default Search