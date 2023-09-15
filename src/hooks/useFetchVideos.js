import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_VIDEOS_API } from '../common/config'
import { setVideos, setError } from '../features/videoSlice'
const useFetchVideos = () => {
  const { loading, videos, error } = useSelector((store) => store.video)
  const dispatch = useDispatch()
  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API)
      const json = await data.json()
      console.log(json)
      dispatch(setVideos(json?.items))
    } catch (error) {
      console.log(error)
      dispatch(setError('Something went wrong'))
    }
  }
  useEffect(() => {
    getVideos()
  }, [])

  return { loading, videos, error }
}

export default useFetchVideos
