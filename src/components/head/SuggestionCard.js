import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useFetchSearchSuggestions from '../../hooks/useFetchSearchSuggestions'

const SuggestionCard = ({ suggestion, handleClick }) => {
  return (
    <li
      className="px-4 mt-2 py-1 cursor-pointer font-medium hover:bg-gray-50"
      onClick={() => handleClick(suggestion)}
    >
      {suggestion}
    </li>
  )
}

export default SuggestionCard
