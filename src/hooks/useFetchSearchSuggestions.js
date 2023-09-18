import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { YOUTUBE_SEARCH_SUGGECTIONS_API } from '../common/config'
import { cacheSuggestions } from '../features/suggestionSlice'

const useFetchSearchSuggestions = (searchQuery) => {
  const [suggestions, setSuggestions] = useState([])

  const cacheData = useSelector((store) => store.suggestions)
  const dispatch = useDispatch()

  useEffect(() => {
    let timer
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
    console.log(suggestions)

    dispatch(
      cacheSuggestions({
        [searchQuery]: json[1],
      })
    )
  }
  return suggestions
}

export default useFetchSearchSuggestions
