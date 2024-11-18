import { useEffect, useState } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_SINGLE_VIDEO_API } from "../common/config";

const useFetchSingleVideo = (id) => {
  const [singleVideo, setSingleVideo] = useState({});

  useEffect(() => {
    const getSingleVideo = async () => {
      const data = await fetch(
        YOUTUBE_SINGLE_VIDEO_API + id + "&key=" + YOUTUBE_API_KEY
      );
      const json = await data?.json();
      setSingleVideo(json?.items[0]);
    };

    getSingleVideo();
  }, [id]);

  return singleVideo;
};

export default useFetchSingleVideo;
