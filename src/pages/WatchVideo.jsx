import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../features/appSlice";
import CommentsContainer from "../components/comments/CommentsContainer";
import LiveChatContainer from "../components/livechat/LiveChatContainer";
import useFetchSingleVideo from "../hooks/useFetchSingleVideo";
import useFetchChannelDetails from "../hooks/useFetchChannelDetails";
import useViewCounts from "../hooks/useViewCounts";
import { AiOutlineBell, AiOutlineLike, AiFillLike } from "react-icons/ai";
import {
  BiDislike,
  BiSolidDislike,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import useVideoPublishTime from "../hooks/useVideoPublishTime";
import LikeButton from "../common/LikeButton";

const WatchVideo = () => {
  const [search] = useSearchParams();
  const [query, setQuery] = useState(search.get("v"));
  const [clickEvent, setClickEvent] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const video = useFetchSingleVideo(query);
  const channelDetails = useFetchChannelDetails(video?.snippet?.channelId);
  const subscribers = useViewCounts(
    channelDetails?.statistics?.subscriberCount
  );
  const likeCount = useViewCounts(video?.statistics?.likeCount);
  const views = useViewCounts(video?.statistics?.viewCount);
  const comments = useViewCounts(video?.statistics?.commentCount);
  const time = useVideoPublishTime(video?.snippet?.publishedAt);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className="flex w-full pt-20 px-28 shadow-lg text-white bg-[#0f0f0f]">
        <div className="mr-3">
          <iframe
            width="730"
            height="400"
            src={"https://www.youtube.com/embed/" + query}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl"
          ></iframe>

          <div className="my-3 ">
            <h1 className="text-xl font-medium">{video?.snippet?.title}</h1>

            <div className="flex justify-between mt-2">
              <div className="flex items-center ">
                <div className="w-11 h-11 mr-2 mt-1">
                  <img
                    className="rounded-full"
                    src={channelDetails?.snippet?.thumbnails?.medium?.url}
                    alt=""
                  />
                </div>
                <div className="mx-1">
                  <p className="font-medium">
                    {channelDetails?.snippet?.title}
                  </p>
                  <p className="text-sm text-zinc-300 font-medium">
                    {subscribers} subscribers
                  </p>
                </div>
                <button
                  className=""
                  onClick={() =>
                    setClickEvent({
                      ...clickEvent,
                      subscribe: !clickEvent.subscribe,
                    })
                  }
                >
                  {clickEvent.subscribe === true ? (
                    <div className="flex py-[0.38rem] px-4 rounded-full bg-zinc-800 hover:bg-zinc-700 ml-4 text-gray-200 font-medium">
                      <AiOutlineBell className="text-2xl" />
                      Subscribed
                    </div>
                  ) : (
                    <div className="py-[0.38rem] px-4 rounded-full bg-gray-100 hover:bg-gray-300 ml-4 text-gray-900 font-medium">
                      Subscribe
                    </div>
                  )}
                </button>
              </div>

              <div className="flex items-center">
                <div className="flex bg-zinc-800 rounded-full">
                  <div className="flex hover:bg-zinc-700 gap-2 py-[0.38rem] px-4  rounded-l-full border-r pr-2 border-zinc-700 items-center">
                    <LikeButton like={true} />
                    <p className="">{likeCount}</p>
                  </div>
                  <div className=" hover:bg-zinc-700 py-[0.38rem] px-4  rounded-r-full flex items-center">
                    <LikeButton like={false} />
                  </div>
                </div>
                <div className="flex gap-2 bg-zinc-800 hover:bg-zinc-700 py-[0.38rem] px-4 rounded-full ml-4">
                  <PiShareFatLight className="text-2xl " />
                  <p className="text-white">Share</p>
                </div>
                <div className="py-[0.38rem] px-[0.38rem] bg-zinc-800 hover:bg-zinc-700 rounded-full ml-2">
                  <BiDotsHorizontalRounded className="text-2xl" />
                </div>
              </div>
            </div>
            <div
              className={
                showMore === true
                  ? "py-2 px-2 rounded-xl bg-zinc-800 mt-4"
                  : "py-2 px-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 mt-4"
              }
            >
              <p className="font-medium">
                {views} views <span className="text-xl font-bold ">.</span>{" "}
                {time}{" "}
              </p>
              {showMore === true ? (
                <div className="">
                  <p>{video?.snippet?.description}</p>
                  <button
                    className="mx-1 mt-8 font-medium 
                  "
                    onClick={() => setShowMore(false)}
                  >
                    Show less
                  </button>
                </div>
              ) : (
                <div className="">
                  <span>{video?.snippet?.description.slice(0, 150)}</span>
                  <button
                    className="mx-2 font-medium
                  "
                    onClick={() => setShowMore(true)}
                  >
                    ...more
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="my-5 text-lg font-medium">{comments} Comments</div>
          <CommentsContainer videoId={query} />
        </div>
        <div className="w-full">
          <LiveChatContainer />
        </div>
      </div>
    </>
  );
};

export default WatchVideo;
