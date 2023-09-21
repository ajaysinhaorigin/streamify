import ImageComponent from "../../common/ImageComponent"
import User from '../head/User'
import useFetchSingleVideo from "../../hooks/useFetchSingleVideo"
import useVideoPublishTime from "../../hooks/useVideoPublishTime"
import useViewCounts from "../../hooks/useViewCounts"



const SuggestionVideoCard = ({ id }) => {
    const videoDetails = useFetchSingleVideo(id?.videoId)
    const { snippet, statistics } = videoDetails

    const views = useViewCounts(statistics?.viewCount)
    const time = useVideoPublishTime(snippet?.publishedAt)

    // console.log(time)
    if (Object.keys(videoDetails).length !== 0) {
        console.log(videoDetails)
    }

    if (Object.keys(videoDetails).length === 0) return null

    return (
        <div className="flex mb-5" >
            <ImageComponent cdn={snippet?.thumbnails?.medium?.url} />
            <div className="ml-4 py-2" >
                <h1 className="text-lg font-bold text-gray-900" >{snippet?.title.length > 75 ? snippet?.title.slice(0, 75) + '...' : snippet?.title}</h1>
                <div>
                    <p className="text-gray-700 text-sm font-medium" >
                        {views} . {time}</p>
                </div>
                <div className="flex mt-3 items-center" >
                    <User />
                    <p className="text-gray-700 text-sm font-medium ml-2"  >{snippet?.channelTitle
                    }</p>
                </div>
                <div className="text-gray-700 text-sm font-medium mt-3">
                    <p>{snippet?.description.length > 85 ? snippet?.description.slice(0, 100) + "..." : snippet?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default SuggestionVideoCard