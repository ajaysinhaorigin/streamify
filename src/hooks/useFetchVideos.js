import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  YOUTUBE_VIDEOS_API,
  YOUTUBE_API_KEY,
  BUTTON_CATEGORY_VIDEOS_API,
} from '../common/config'
import { setVideos, setError, setLoading } from '../features/videoSlice'

const useFetchVideos = (videoCategoryId) => {
  const { loading, videos, error } = useSelector((store) => store.video)
  const dispatch = useDispatch()
  useEffect(() => {
    getVideos()
  }, [videoCategoryId])

  const getVideos = async () => {
    dispatch(setLoading())
    try {
      const data = await fetch(
        videoCategoryId === ''
          ? YOUTUBE_VIDEOS_API + YOUTUBE_API_KEY
          : BUTTON_CATEGORY_VIDEOS_API +
              videoCategoryId +
              '&key=' +
              YOUTUBE_API_KEY
      )
      const json = await data.json()
      if (json?.items) {
        dispatch(setVideos(json?.items))
        // console.log(json?.items)
      }
      if (json?.error) {
        dispatch(setError({ code: json.error?.code, msg: json.error?.message }))
        console.log(json.error)
      }
    } catch (error) {
      console.log(error)
      dispatch(setError('Something went wrong'))
    }
  }

  return { loading, videos, error }
}

export default useFetchVideos
