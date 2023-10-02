import { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../common/config'

const useFetchExploreVideos = (url, video_category_url, query) => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos()
  }, [query])

  const getVideos = async () => {
    if (query === undefined) query = ''
    const data = await fetch(
      query === '' || undefined
        ? url + YOUTUBE_API_KEY
        : video_category_url + query + '&key=' + YOUTUBE_API_KEY
    )
    const json = await data.json()
    console.log(json)
    setVideos(json.items)
  }

  return videos
}

export default useFetchExploreVideos
