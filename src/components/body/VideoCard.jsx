import ImageComponent from "../../common/ImageComponent"
import useFetchChannelDetails from "../../hooks/useFetchChannelDetails"
import useVideoPublishTime from "../../hooks/useVideoPublishTime"
import useViewCounts from "../../hooks/useViewCounts"
import User from "../head/User"

const VideoCard = ({ snippet, statistics }) => {
    const { title, channelId, thumbnails, channelTitle } = snippet
    const views = useViewCounts(statistics?.viewCount)
    const time = useVideoPublishTime(snippet?.publishedAt)
    const channelDetails = useFetchChannelDetails(channelId)
    // console.log(time)
    return (
        <div className='my-4' >
            <ImageComponent cdn={thumbnails.medium.url} />
            <div className="mt-2 flex" >
                <User url={channelDetails?.snippet?.thumbnails?.medium?.url} />
                {/* {
                    Object.keys(channelDetails).length !== 0 && <div className="w-8 h-8 mr-2 mt-1" >
                        <img className="rounded-full" src={channelDetails?.snippet?.thumbnails?.medium?.url} alt="" />

                    </div>
                }
                {
                    Object.keys(channelDetails).length === 0 && <div className="min-h-fit mr-2 mt-1" >
                        <User />
                    </div>
                } */}
                <div className="mx-1">
                    <p className="font-medium text-gray-100" >{title.length > 62 ? title.slice(0, 62) + '...' : title}</p>
                    <div className="text-zinc-500 text-sm font-medium" >
                        <p className="" >{channelTitle}</p>
                        <p>{views} views <span className="text-xl font-bold" >.</span>    {time} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard