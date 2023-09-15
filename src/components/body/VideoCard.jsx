const VideoCard = ({ snippet, statistics }) => {
    const { title, thumbnails, channelTitle } = snippet
    // const { likeCount, viewCount } = statistics
    return (
        <div className='p-2 m-4' >
            <img src={thumbnails.medium.url} alt="thumbnail" />
            {/* <p className='w-60' >{title}</p> */}
            <div className='flex justify-between' >
                <p>{channelTitle}</p>
                <p>{statistics?.likeCount}</p>
                <p>{statistics?.viewCount}</p>
            </div>
        </div>
    )
}

export default VideoCard