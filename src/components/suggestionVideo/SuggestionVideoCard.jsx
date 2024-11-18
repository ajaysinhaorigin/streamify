import ImageComponent from "../../common/ImageComponent";
import User from "../head/User";
import useFetchSingleVideo from "../../hooks/useFetchSingleVideo";
import useVideoPublishTime from "../../hooks/useVideoPublishTime";
import useViewCounts from "../../hooks/useViewCounts";
import useFetchChannelDetails from "../../hooks/useFetchChannelDetails";

const SuggestionVideoCard = ({ id, snippet }) => {
  const videoDetails = useFetchSingleVideo(id?.videoId);
  // const { snippet, statistics } = videoDetails
  const channelDetails = useFetchChannelDetails(snippet?.channelId);
  const views = useViewCounts(videoDetails?.statistics?.viewCount);
  const time = useVideoPublishTime(videoDetails?.snippet?.publishedAt);

  // console.log(time)
  if (videoDetails === null || undefined) return null;
  return (
    <div className="flex mb-5">
      <ImageComponent cdn={videoDetails?.snippet?.thumbnails?.medium?.url} />
      <div className="ml-4 py-2">
        <h1 className="text-lg font-bold text-white">
          {videoDetails?.snippet?.title.length > 75
            ? videoDetails?.snippet?.title.slice(0, 75) + "..."
            : videoDetails?.snippet?.title}
        </h1>
        <div>
          <p className="text-zinc-500 text-sm font-medium">
            {views} views . {time}
          </p>
        </div>
        <div className="flex mt-3 items-center">
          {Object.keys(channelDetails).length !== 0 && (
            <div className="w-8 h-8 mr-2 mt-1">
              <img
                className="rounded-full"
                src={channelDetails?.snippet?.thumbnails?.medium?.url}
                alt=""
              />
            </div>
          )}
          {Object.keys(channelDetails).length === 0 && (
            <div className="min-h-fit mr-2 mt-1">
              <User />
            </div>
          )}

          <p className="text-sm font-medium ml-2 text-white">
            {videoDetails?.snippet?.channelTitle}
          </p>
        </div>
        <div className="text-zinc-500 text-sm font-medium mt-3">
          <p>
            {videoDetails?.snippet?.description.length > 85
              ? videoDetails?.snippet?.description.slice(0, 100) + "..."
              : videoDetails?.snippet?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuggestionVideoCard;
