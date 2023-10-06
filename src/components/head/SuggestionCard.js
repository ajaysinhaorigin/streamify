import { BsSearch } from 'react-icons/bs'

const SuggestionCard = ({ suggestion, handleClick }) => {
  return (
    <li
      className="px-4 my-2 py-1 cursor-pointer hover:bg-zinc-700 font-medium"
      onClick={() => handleClick(suggestion)}
    >
      <BsSearch className="inline mr-3 text-white" />
      {suggestion}
    </li>
  )
}

export default SuggestionCard
