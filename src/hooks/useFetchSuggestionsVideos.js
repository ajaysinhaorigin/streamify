import { useEffect } from 'react'

const useFetchSuggestionsVideos = (suggestionQuery) => {
  useEffect(() => {
    getSuggestionVideos()
  }, [suggestionQuery])

  const getSuggestionVideos = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${suggestionQuery}&maxResults=25&key=AIzaSyAkPP1w3hI-l5tP7cA-Vvw1_945eT-twew`
    )
    const json = await data.json()
    console.log(json?.items)
    // dispatch(setVideos(json?.items))
  }

  return {}
}

export default useFetchSuggestionsVideos
