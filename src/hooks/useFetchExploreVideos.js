import { useEffect, useState } from 'react'
import {
  YOUTUBE_API_KEY,
  YOUTUBE_EXPLORE_API,
  YOUTUBE_TRENDING_VIDEOS_BY_CATEGORY_API,
} from '../common/config'
import { useSelector } from 'react-redux'

const useFetchExploreVideos = (query) => {
  const { buttonName } = useSelector((store) => store?.sidebar)
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos()
  }, [query])

  const getVideos = async () => {
    if (query === undefined) query = ''
    const data = await fetch(
      query === '' || undefined
        ? YOUTUBE_EXPLORE_API +
            buttonName +
            '&type=video&key=' +
            YOUTUBE_API_KEY
        : YOUTUBE_TRENDING_VIDEOS_BY_CATEGORY_API +
            query +
            '&key=' +
            YOUTUBE_API_KEY
    )
    const json = await data.json()
    // console.log(json)
    setVideos(json.items)
  }

  return videos
}

export default useFetchExploreVideos
