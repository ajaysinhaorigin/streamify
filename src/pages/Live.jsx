import React from "react";
import useFetchExploreVideos from "../hooks/useFetchExploreVideos";
import ExplorePage from "../common/ExplorePage";
import ExploreHeader from "../common/ExploreHeader";
import SuggestionVideoCard from "../components/suggestionVideo/SuggestionVideoCard";
import { Link } from "react-router-dom";
import SubscribeButton from "../common/SubscribeButton";

const Live = () => {
  const videos = useFetchExploreVideos();
  // console.log(videos)

  if (videos.length === 0) return null;
  return (
    <ExplorePage>
      <div className="bg-zinc-800 py-2 flex justify-between">
        <ExploreHeader
          url="https://yt3.googleusercontent.com/PPQfjdBaipgbil0y3-48IddOJ8_c6nsQWcbQ0Upc4SJhcbdR3_k3V_7eAy5G4_9Ouns6PzMmD-E=s72-c-c0x00ffffff-no-rwa"
          heading="Live"
        />
        <SubscribeButton />
      </div>
      <div className="mx-8 pt-4 my-4">
        {videos?.map((video, i) => (
          <Link to={"/watch?v=" + video?.id?.videoId} key={i}>
            <SuggestionVideoCard {...video} />
          </Link>
        ))}
      </div>
    </ExplorePage>
  );
};

export default Live;
