import { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY, YOUTUBE_COMMENTS_API } from '../common/config'

const useFetchVideoComments = (video_id) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getVideoComments()
  }, [video_id])
  const getVideoComments = async () => {
    const data = await fetch(
      YOUTUBE_COMMENTS_API + video_id + '&key=' + YOUTUBE_API_KEY
    )
    const json = await data.json()
    if (json?.items) {
      console.log(json?.items)
      setComments(json?.items)
    }
  }

  return comments
}

export default useFetchVideoComments
