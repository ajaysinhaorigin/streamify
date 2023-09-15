import { useState } from 'react'
import useFetchSearchSuggestions from '../../hooks/useFetchSearchSuggestions'

const SuggestionCard = ({
  search,
  setSearchQuery,
  setSearch,
  setShowSuggestions,
}) => {
  const suggestions = useFetchSearchSuggestions(search)
  const handleClick = (e) => {
    setSearchQuery(e.target.innerText)
    setSearch(e.target.innerText)
    setShowSuggestions(false)
  }
  return (
    <ul className="lg:w-1/3 w-3/5 absolute bg-white shadow-lg rounded-lg pb-2">
      {suggestions?.map((suggestion, i) => (
        <li
          className="px-4 mt-2 py-1 cursor-pointer font-medium hover:bg-gray-50"
          onClick={(e) => handleClick(e)}
          key={i}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  )
}

export default SuggestionCard
