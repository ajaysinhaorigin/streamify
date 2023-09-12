import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../features/appSlice'
import CommentsContainer from '../components/CommentsContainer'

const WatchVideo = () => {
  const dispatch = useDispatch()

  const [search] = useSearchParams()
  const [query, setQuery] = useState(search.get('v'))

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div className="">
      <iframe
        width="800"
        height="400"
        src={'https://www.youtube.com/embed/' + query}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentsContainer />
    </div>
  )
}

export default WatchVideo
