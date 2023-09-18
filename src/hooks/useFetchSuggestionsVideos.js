import { useState, useEffect } from 'react'
import { YOUTUBE_API_KEY } from '../common/config'

const useFetchSuggestionsVideos = (suggestionQuery) => {
  const [suggestionVideos, setSuggestionVideos] = useState([])

  useEffect(() => {
    const getSuggestionVideos = async () => {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${suggestionQuery}&maxResults=25&key=` +
          YOUTUBE_API_KEY
      )
      const json = await data.json()
      console.log(json?.items)
      if (json?.items) {
        setSuggestionVideos(json?.items)
      }
      // dispatch(setVideos(json?.items))
    }
    getSuggestionVideos()
  }, [suggestionQuery])

  return suggestionVideos
}

export default useFetchSuggestionsVideos
