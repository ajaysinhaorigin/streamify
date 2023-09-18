import ImageComponent from "../../common/ImageComponent"
import User from "../head/User"
const VideoCard = ({ snippet, statistics }) => {
    const { title, thumbnails, channelTitle } = snippet
    return (
        <div className='my-4' >
            <ImageComponent cdn={thumbnails.medium.url} />
            <div className="mt-2 flex" >
                <div className="min-w-fit mr-2 mt-1" >
                    <User />
                </div>
                <div className="mx-1">
                    <p className="font-bold text-gray-900" >{title.length > 62 ? title.slice(0, 62) + '...' : title}</p>
                    <div className="text-gray-700 text-sm font-medium" >
                        <p className="" >{channelTitle}</p>
                        <p>{statistics?.viewCount > 1000 ? Number(statistics.viewCount % 1000) + "k views" : statistics.viewCount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard