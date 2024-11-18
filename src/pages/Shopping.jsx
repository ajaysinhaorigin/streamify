import React from "react";
import useFetchExploreVideos from "../hooks/useFetchExploreVideos";
// import { YOUTUBE_EXPLORE_API } from '../common/config'
import ExploreHeader from "../common/ExploreHeader";
import ExplorePage from "../common/ExplorePage";
import { Link } from "react-router-dom";
import SuggestionVideoCard from "../components/suggestionVideo/SuggestionVideoCard";
import SubscribeButton from "../common/SubscribeButton";

const Shopping = () => {
  const videos = useFetchExploreVideos();

  if (videos.length === 0) return null;

  return (
    <ExplorePage>
      <div className="bg-zinc-800 py-2 flex justify-between">
        <ExploreHeader
          url="https://yt3.googleusercontent.com/4GiJyKFkqzoNzqSiNevXL8Q_yvba0TsD44t1qPGxPNc8Eic_GUa6diGWleJ2C7huhAW60MQYrA=s88-c-k-c0x00ffffff-no-rj-mo"
          heading="Shopping"
        />
        <SubscribeButton />
      </div>
      <div className="mx-6 pt-4 my-4">
        {videos?.map((video, i) => (
          <Link to={"/watch?v=" + video?.id?.videoId} key={i}>
            <SuggestionVideoCard {...video} />
          </Link>
        ))}
      </div>
    </ExplorePage>
  );
};

export default Shopping;
