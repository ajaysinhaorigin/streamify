import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../features/appSlice'
import CommentsContainer from '../components/comments/CommentsContainer'
import LiveChatContainer from '../components/livechat/LiveChatContainer'

const WatchVideo = () => {
  const dispatch = useDispatch()

  const [search] = useSearchParams()
  const [query, setQuery] = useState(search.get('v'))

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <>
      <div className="flex w-full">
        <div className="">
          <iframe
            width="900"
            height="400"
            src={'https://www.youtube.com/embed/' + query}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <CommentsContainer />
        </div>
        <div className="w-full h-[400px]">
          <LiveChatContainer />
        </div>
      </div>
      {/* <iframe
        width="900"
        height="400"
        src="https://www.youtube.com/embed/3Kt0_JbNTm0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}
    </>
  )
}

export default WatchVideo
