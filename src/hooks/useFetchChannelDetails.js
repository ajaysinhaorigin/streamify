import { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_DETAILS } from '../common/config'

const useFetchChannelDetails = (id) => {
  const [channelDetails, setChannelDetails] = useState({})

  useEffect(() => {
    getChannelDetails()
  }, [id])

  const getChannelDetails = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_DETAILS + id + '&key=' + YOUTUBE_API_KEY
    )
    const json = await data.json()
    if (json?.items) {
      console.log(json?.items[0])
      setChannelDetails(json?.items[0])
    }
  }

  return channelDetails
}

export default useFetchChannelDetails
